<template>
  <vh-page>
    <h3>Quyền hệ thống</h3>
    <manager :option="option">
      <template #header_left="{app}">
        <vh-button
          size="sm"
          beforeIcon="bi bi-bootstrap-reboot"
          @click="loadRouter(app)"
        >Load From Router</vh-button>
      </template>
      <template #form_update="{data,isNew}">
        <div class="mb-3">
          <label
            for="idName"
            class="form-label"
          >Mã quyền</label>
          <vh-input
            id="idName"
            :disabled="!isNew"
            v-model="data.name"
            placeholder="name"
          />
        </div>
        <div class="mb-3">
          <label
            for="idtitle"
            class="form-label"
          >Tên quyền</label>
          <vh-input
            id="idtitle"
            v-model="data.title"
            placeholder="title"
          />
        </div>
        <div class="mb-3">
          <label
            for="idmodule"
            class="form-label"
          >Tên module</label>
          <vh-input
            id="idmodule"
            v-model="data.module"
            placeholder="module"
          />
        </div>
        <div class="mb-3">
          <label
            for="idguard_name"
            class="form-label"
          >Tên guard</label>
          <vh-input
            id="idguard_name"
            v-model="data.guard_name"
            placeholder="guard_name"
          />
        </div>
      </template>
    </manager>
  </vh-page>
</template>
<script>
import Manager from '@/components/manager/index.vue';
import api from '@/api/permission';
import per from '@/common/permission';
export default {
  components: { Manager },

  data() {
    return {
      option: {
        api: {
          ...api
        },
        can: {
          new: per.PERMISSION.NEW,
          edit: per.PERMISSION.EDIT,
          remove: per.PERMISSION.REMOVE
        },
        columns: [
          {
            title: '#',
            isSort: false,
            isFilter: false,
            dataCell: (item, index, start) => index + start
          },
          {
            title: 'title',
            field: 'title'
          },
          {
            title: 'name',
            field: 'name'
          },
          {
            title: 'module',
            field: 'module'
          },
          {
            title: 'guard',
            field: 'guard_name'
          }
        ]
      },
    };
  },
  methods: {
    loadRouter(app) {
      api.updatePermisison().then(() => {
        app.onSearch();
      });
    }
  },
  setup() {

  },
}
</script>
