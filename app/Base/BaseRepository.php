<?php

namespace App\Base;

use Illuminate\Container\Container as Application;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class BaseRepository
{
    public static $per_page = 15;
    protected function rules($id)
    {
        return [];
    }
    protected function messages($id)
    {
        return [];
    }
    /**
     * @param int $id
     * @param array $inputs
     * @return Validator
     */
    public function validator($inputs, $id)
    {
        $rules = $this->rules($id);
        $messages = $this->messages($id);
        return Validator::make($inputs, $rules, $messages);
    }
    /**
     * @var Model
     */
    protected $model;

    /**
     * @var Application
     */
    protected $app;

    /**
     * @param Application $app
     *
     * @throws \Exception
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->makeModel();
    }

    /**
     * Get searchable fields array
     *
     * @return array
     */
    abstract public function getFieldsSearchable();
    public function getFieldsSearchableByName()
    {
        return $this->getFieldsSearchable();
    }

    /**
     * Configure the Model
     *
     * @return string
     */
    abstract public function model();

    /**
     * Make Model instance
     *
     * @throws \Exception
     *
     * @return Model
     */
    public function makeModel()
    {
        $model = $this->app->make($this->model());

        if (!$model instanceof Model) {
            throw new \Exception("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");
        }

        return $this->model = $model;
    }

    /**
     * Paginate records for scaffold.
     *
     * @param int $perPage
     * @param array $columns
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($perPage, $columns = ['*'])
    {
        $query = $this->allQuery();

        return $query->paginate($perPage, $columns);
    }

    /**
     * Build a query for retrieving all records.
     *
     * @param array $search
     * @param int|null $skip
     * @param int|null $limit
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function allQuery($search = [], $skip = null, $limit = null)
    {
        $query = $this->model->newQuery();
        if (count($search)) {
            $arrField = $this->getFieldsSearchable();
            $count = count($arrField);
            foreach ($search as $key => $value) {
                if ($count == 0 || in_array($key, $arrField)) {
                    if (is_array($value)) {
                        if (isset($value['like'])) {
                            $query->where($key, 'like', '%' . $value['like'] . '%');
                        }
                        if (isset($value['to'])) {
                            $query->where($key, '<=', $value['to']);
                        }
                        if (isset($value['from'])) {
                            $query->where($key, '>=', $value['from']);
                        }
                        if (isset($value['equal'])) {
                            $query->where($key, $value['equal']);
                        }
                        if (isset($value['in'])) {
                            $query->whereIn($key, $value['in']);
                        }
                    } else {
                        $query->where($key, $value);
                    }
                }
            }
        }

        if (!is_null($skip)) {
            $query->skip($skip);
        }

        if (!is_null($limit)) {
            $query->limit($limit);
        }

        return $query;
    }

    /**
     * Retrieve all records with given filter criteria
     *
     * @param array $search
     * @param int|null $skip
     * @param int|null $limit
     * @param array $columns
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function all($search = [], $skip = null, $limit = null, $columns = ['*'])
    {
        $query = $this->allQuery($search, $skip, $limit);

        return $query->get($columns);
    }

    /**
     * Create model record
     *
     * @param array $input
     *
     * @return Model
     */
    public function create($input)
    {
        $model = $this->model->create($input);

        return $model;
    }

    /**
     * Find model record for given id
     *
     * @param int $id
     * @param array $columns
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|Model|null
     */
    public function find($id, $columns = ['*'])
    {
        $query = $this->model->newQuery();

        return $query->find($id, $columns);
    }

    /**
     * Update model record for given id
     *
     * @param array $input
     * @param int $id
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|Model
     */
    public function update($input, $id)
    {
        $query = $this->model->newQuery();

        $model = $query->findOrFail($id);

        $model->fill($input);

        $model->update();

        return $model;
    }

    /**
     * @param int $id
     *
     * @throws \Exception
     *
     * @return bool|mixed|null
     */
    public function delete($id)
    {
        $query = $this->model->newQuery();

        $model = $query->findOrFail($id);

        return $model->delete();
    }
    public function count()
    {
        $query = $this->model->newQuery();
        return $query->count();
    }
    private function fixJson($value)
    {
        if (is_string($value)) {
            if (Str::length($value) == 0)
                return [];
            return json_decode($value, true);
        }
        return $value ?? [];
    }
    public function search(Request $request)
    {
        $per_page = $request->input('per_page') ?? BaseRepository::$per_page;
        $filter = $this->fixJson($request->input('filter'));
        $sort = $this->fixJson($request->input('sort'));
        $search = $request->input('search');
        $query = $this->allQuery($filter);
        $searchFields = $this->getFieldsSearchableByName();
        if ($search && is_array($searchFields) && count($searchFields)) {
            $query->where(function ($queryWhere) use ($search, $searchFields) {
                foreach ($searchFields as $index => $item) {
                    if ($index == 0) {
                        $queryWhere->Where($item, 'like', '%' . $search . '%');
                    } else {
                        $queryWhere->orWhere($item, 'like', '%' . $search . '%');
                    }
                }
            });
        }

        if (is_array($sort) && count($sort)) {
            foreach ($sort as $key => $val) {
                if ($val == true) {
                    $query =  $query->orderBy($key);
                } else {
                    $query = $query->orderByDesc($key);
                }
            }
        }

        $this->searchBefore($request,$query);

        if ($request->get('is_all')) {
            return $query->get();
        }
        return $query->paginate($per_page);
    }
    
    /**
     * Search before a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $input
     * @return void
     */
    protected function searchBefore(Request $request, $query)
    {
    }
}
