<template>
  <div class="vh-manager">
    <vh-modal
      :show="showFormUpdate"
      @hide="showFormUpdate=false"
    >
      <slot
        name="form_update"
        :data="dataUpdate"
        :isNew="isNew"
      />
    </vh-modal>
    <div class="vh-manager__header">
      <div class="vh-manager__header--left">
        <vh-button
          :beforeIcon="optionConfig?.icon?.new??''"
          @click="onShowFormUpdate({},true)"
        >{{$t(optionConfig?.button?.new)}}</vh-button>
      </div>
      <div class="vh-manager__header--center">
      </div>
      <div class="vh-manager__header--right">
        <vh-input
          placeholder="Search"
          style="width:150px"
        />
      </div>
    </div>
    <div class="vh-manager__body">
      <vh-table
        :source="source"
        :option="optionConfig"
        :sort="sort"
        :filter="filter"
        :start="row_from"
        @sort="(column,val)=>onSort(column,val)"
        @filter="(column,val)=>onFilter(column,val)"
      ></vh-table>
    </div>
    <div class="vh-manager__footer"></div>
  </div>
</template>
<script>
import { config as configDefault } from './config';
export default {
  props: {
    option: {},
  },
  data() {
    return {
      optionConfig: {},
      showFormUpdate: false,
      isNew: false,
      dataUpdate: {},
      source: [],
      search: "",
      sort: {},
      filter: {},
      current_page: 0,
      last_page: 0,
      per_page: 15,
      row_from: 0,
      row_to: 0,
      total: 0,
    };
  },
  methods: {
    onSort(column, val) {
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
        search: this.search
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
    onShowFormUpdate(data, isNew = false) {
      this.dataUpdate = data;
      this.showFormUpdate = true;
    }
  },
  created() {
    this.optionConfig = Object.assign(this.option, configDefault);
  },
  mounted() {
    this.optionConfig = Object.assign(this.option, configDefault);
    console.log(this.optionConfig);
    this.onSearch();
  },
  watch: {
    option: {
      handler: function (_optionConfig) {
        this.optionConfig = Object.assign(_optionConfig, configDefault);
      },
      deep: true,
      immediate: true
    }
  },
  setup() {
  },
}
</script>
