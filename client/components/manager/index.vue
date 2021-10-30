<template>
  <div class="vh-manager">
    <vh-modal
      :show="showFormConfirmRemove"
      :title="$t('common.manager.title.remove')"
      @hide="onHideForm()"
    >
      <errors
        v-if="showErrors"
        :errors="errors"
      />
      <slot
        name="content_confirmDelete"
        :data="dataUpdate"
        :errors="errors"
        :app="this"
      ></slot>
      {{!$slots['content_confirmDelete']&&$t(optionConfig?.title?.confirmDelete)}}
      <template #footer="{}">
        <vh-button
          size="sm"
          color="warning"
          :beforeIcon="optionConfig?.icon?.cancel??''"
          @click="onHideForm()"
        >{{$t(optionConfig?.button?.cancel)}}</vh-button>
        <vh-button
          size="sm"
          color="danger"
          :beforeIcon="optionConfig?.icon?.remove??''"
          @click="onRemoveData()"
        >{{$t(optionConfig?.button?.remove)}}</vh-button>
      </template>
    </vh-modal>
    <vh-modal
      :size="optionConfig.formsize({isNew,data:dataUpdate},this.formsize)"
      :title="isNew?$t('common.manager.title.new'):$t('common.manager.title.edit')"
      :show="showFormUpdate"
      @hide="onHideForm()"
    >
      <errors
        v-if="showErrors"
        :errors="errors"
      />
      <slot
        name="form_update"
        :data="dataUpdate"
        :app="this"
        :errors="errors"
        :isNew="isNew"
      ></slot>
      <template #footer="{}">
        <vh-button
          size="sm"
          color="warning"
          :beforeIcon="optionConfig?.icon?.cancel??''"
          @click="onHideForm()"
        >{{$t(optionConfig?.button?.cancel)}}</vh-button>
        <vh-button
          size="sm"
          :beforeIcon="optionConfig?.icon?.update??''"
          @click="onUpdateData()"
        >{{$t(optionConfig?.button?.update)}}</vh-button>
      </template>
    </vh-modal>
    <div class="vh-manager__header">
      <div class="vh-manager__header--left">
        <vh-button
          size="sm"
          :beforeIcon="optionConfig?.icon?.new??''"
          v-can="optionConfig.can.new"
          @click="onShowFormUpdate({},true)"
        >{{$t(optionConfig?.button?.new)}}</vh-button>
        <slot
          name="header_left"
          :app="this"
        />
      </div>
      <div class="vh-manager__header--center">
        <slot name="header_center" />
      </div>
      <div class="vh-manager__header--right">
        <slot
          name="header_right"
          :app="this"
        />
        <vh-input
          placeholder="Search"
          style="width:150px"
          @keypress="onInputSearch"
          @blur="(e)=>e.target.value=this.search"
        />
      </div>
    </div>
    <div class="vh-manager__body">
      <vh-table
        :source="source"
        :option="optionConfigAction"
        :sort="sort"
        :filter="filter"
        :start="row_from"
        @sort="(column,val)=>onSort(column,val)"
        @filter="(column,val)=>onFilter(column,val)"
      >
        <template #field_button_action="{row,index,start}">
          <span class="vh-manager__body--action">
            <slot
              name="action_before"
              :row="row"
              :app="this"
              :index="index"
              :start="start"
            >
            </slot>
            <vh-button
              v-if="optionConfig.checkButtonDelete({row,index,start})"
              v-can="optionConfig.can.remove"
              size="sm"
              color="danger"
              @click="onShowConfirmRemove(row)"
              :beforeIcon="optionConfig?.icon?.remove??''"
            >{{$t(optionConfig?.button?.remove)}}</vh-button>
            <vh-button
              v-if="optionConfig.checkButtonUpdate({row,index,start})"
              v-can="optionConfig.can.edit"
              size="sm"
              :beforeIcon="optionConfig?.icon?.edit??''"
              @click="onShowFormUpdate(row)"
            >{{$t(optionConfig?.button?.edit)}}</vh-button>
            <slot
              name="action_after"
              :row="row"
              :app="this"
              :index="index"
              :start="start"
            >
            </slot>
          </span>
        </template>
      </vh-table>
    </div>
    <div class="vh-manager__footer">
      <vh-row>
        <vh-col
          class="col-none"
          style="width: 105px;flex:none;"
        >
          <vh-select
            v-model="size_page"
            class="vh-inline-block"
            :source="pages"
            @change="onChangePage(1)"
          />
        </vh-col>
        <vh-col>
          <vh-pagination
            v-if="this.last_page>0"
            :current="current_page"
            :start="page_start"
            :end="page_end"
            :last="last_page"
            @page="(_page)=>onChangePage(_page)"
            next=">>"
            previous="<<"
          />
        </vh-col>
      </vh-row>
    </div>
  </div>
</template>
<script>
import errors from '@/components/common/error.vue';
import { config as configDefault } from './config';
export default {
  components: { errors },
  props: {
    option: {},
    showAction: {
      default: true
    },
    showErrors: {
      default: true
    },
    formsize: {
      defalut: 'sm'
    }
  },
  computed: {
    page_start() {
      if (this.current_page - 3 > 0)
        return this.current_page - 3;
      return 1;
    },
    page_end() {
      if (this.current_page + 3 < this.last_page)
        return this.current_page + 3;
      return this.last_page;
    },
    optionConfigAction() {
      if (!this.showAction) {
        return this.optionConfig;
      }
      let { columns } = this.optionConfig;

      let title = this.$t('common.manager.title.action');

      columns = [...columns,
      {
        title,
        field: 'button_action',
        isSort: false,
        isFilter: false
      }
      ];
      return {
        ...this.optionConfig,
        columns: columns
      };
    }
  },
  data() {
    return {
      optionConfig: {},
      showFormUpdate: false,
      showFormConfirmRemove: false,
      isNew: false,
      dataUpdate: {},
      errors: undefined,
      pages: [10, 15, 25, 50, 100],
      source: [],
      search: "",
      sort: {},
      filter: {},
      current_page: 0,
      size_page: 15,
      from_page: 0,
      last_page: 0,
      per_page: 15,
      row_from: 0,
      row_to: 0,
      total: 0,
    };
  },

  methods: {
    onInputSearch(e) {
      if (e.keyCode == 13) {
        this.search = e.target.value;
        this.onSearch();
      }
    },
    onSort(column, val) {
      this.sort = {};
      this.sort[column.field] = val;
      this.$emit('sort', column, val);
      this.onSearch();
    },
    onFilter(column, val) {
      this.filter[column.field] = val;
      this.$emit('filter', column, val);
      this.onSearch();
    },
    onSearch() {
      let { api } = this.optionConfig;
      api.getAll({
        sort: this.sort,
        filter: this.filter,
        search: this.search,
        page: this.current_page,
        per_page: this.size_page
      }).then(({ data: rs }) => {
        if (rs && rs.OK) {
          let { data, current_page, from, to, last_page, total } = rs.data;
          this.source = data;
          this.current_page = current_page;
          this.row_from = from;
          this.row_to = to;
          this.last_page = last_page;
          this.total = total;
        }
      })
    },
    onChangePage(_page) {
      this.current_page = _page;
      this.onSearch();
    },
    onRemoveData() {
      let { api, validate, itemKey } = this.optionConfig;
      this.errors = undefined;
      api.remove(this.dataUpdate[itemKey]).then((rs) => {
        if (rs.data.OK == true) {
          this.onSearch();
          this.onHideForm();
        } else {
          this.errors = rs.data.errors;
        }
      });
    },
    onUpdateData() {
      let { api, validate, itemKey } = this.optionConfig;
      this.errors = undefined;
      if (!validate || validate({ data: this.dataUpdate, isNew: this.isNew })) {
        if (this.isNew) {
          api.add(this.dataUpdate).then((rs) => {
            if (rs.data.OK == true) {
              this.onSearch();
              this.onHideForm();
            } else {
              this.errors = rs.data.errors;
            }
          });
        } else {
          api.edit(this.dataUpdate[itemKey], this.dataUpdate).then((rs) => {
            if (rs.data.OK == true) {
              this.onSearch();
              this.onHideForm();
            } else {
              this.errors = rs.data.errors;
            }
          });
        }
      }
    },
    onShowConfirmRemove(data) {
      this.errors = undefined;
      this.dataUpdate = JSON.parse(JSON.stringify(data));
      this.showFormConfirmRemove = true;
    },
    onShowFormUpdate(data, isNew = false) {
      this.errors = undefined;
      this.isNew = isNew;
      this.dataUpdate = JSON.parse(JSON.stringify(data ?? {}));
      this.showFormUpdate = true;
    },
    onHideForm() {
      this.errors = undefined;
      this.showFormUpdate = false;
      this.showFormConfirmRemove = false;
    },
    setOptionConfig(option) {
      this.optionConfig = Object.assign(configDefault, option);
    },
    clearFilter() {
      if (this.optionConfig.query.sort)
        this.sort = this.optionConfig.query.sort({ option: this.optionConfig, app: this }) ?? {};
      if (this.optionConfig.query.filter)
        this.filter = this.optionConfig.query.filter({ option: this.optionConfig, app: this }) ?? {};
      this.onSearch();
    }
  },
  created() {
    this.setOptionConfig(this.option);
  },
  mounted() {
    this.setOptionConfig(this.option);
    this.clearFilter();
  },
  watch: {
    option: {
      handler: function (_optionConfig) {
        this.setOptionConfig(_optionConfig);
      },
      deep: true,
      immediate: true
    }
  },
  setup() {
  },
}
</script>
