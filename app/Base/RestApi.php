<?php

namespace App\Base;

use Illuminate\Container\Container as Application;
use Illuminate\Http\Request;

trait RestApi
{
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
    }
    public function callAction($method, $parameters)
    {
        $this->makeRepository();
        $this->init();
        return parent::callAction($method, $parameters);
    }
    protected function init()
    {
    }
    /**
     * @var BaseRepository
     */
    protected $modelRepository;
    public abstract function repository();
    protected function getMakeRepository($repos)
    {
        $modelRepository = $this->app->make($repos);
        if (!$modelRepository instanceof BaseRepository) {
            throw new \Exception("Class {$this->repository()} must be an instance of App\Repositories\BaseRepository");
        }
        return  $modelRepository;
    }
    protected function makeRepository()
    {
        return $this->modelRepository = $this->getMakeRepository($this->repository());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $this->JsonOK($this->modelRepository->search($request));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = [];
        foreach ($request->input() as $key => $value) {
            $input[$key] = $value;
        }
        //@var Illuminate\Support\Facades\Validator;
        $validator = $this->modelRepository->validator($input, null);
        if ($validator->fails())
            return $this->JsonErrors($validator->messages());
        $this->storeBefore($request, $input);
        $rs = $this->modelRepository->create($input);
        $this->storeAfter($request, $input, $rs);
        return $this->JsonOK($rs);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->JsonOK($this->modelRepository->find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = [];
        foreach ($request->input() as $key => $value) {
            $input[$key] = $value;
        }

        //@var Illuminate\Support\Facades\Validator;
        $validator = $this->modelRepository->validator($input, $id);
        if ($validator->fails())
            return $this->JsonErrors($validator->messages());
        $this->updateBefore($request, $id, $input);
        $rs = $this->modelRepository->update($input, $id);
        $this->updateAfter($request, $id, $input, $rs);
        return $this->JsonOK($rs);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $this->destroyBefore($request, $id);
        $model = $this->modelRepository->find($id);
        if ($model) {
            $rs = $model->delete();
            $this->destroyAfter($request, $id, $model);
            return $this->JsonOK($rs);
        }
        return $this->notFound($request);
    }

    protected function notFound(Request $request)
    {
        return $this->jsonError('system.not_found', 404);
    }
    /**
     * Store before a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $input
     * @return void
     */
    protected function storeBefore(Request $request, &$input)
    {
    }
    /**
     * Store after a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $input
     * @param  object  $model
     * @return void
     */
    protected function storeAfter(Request $request, $input, $model)
    {
    }
    /**
     * Update before the specifiedd resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  array  $input
     * @return void
     */
    public function updateBefore(Request $request, $id, &$input)
    {
    }
    /**
     * Update after the specifiedd resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  array  $input
     * @param  object  $model
     * @return void
     */
    protected function updateAfter(Request $request, $id, $input, $model)
    {
    }

    /**
     * Remove before the specifiedd resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return void
     */
    protected function destroyBefore(Request $request, $id)
    {
    }
    /**
     * Remove after the specifiedd resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  object  $model
     * @return void
     */
    protected function destroyAfter(Request $request, $id, $model)
    {
    }
}
