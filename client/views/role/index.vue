<template>
  <vh-page>
    <h3>{{$t('module.role.title')}}</h3>
    <manager :option="option">
      <template #action_after="{row}">
        <vh-button
          v-if=" row['name'] != 'supper-admin'"
          beforeIcon="bi bi-shield"
          color="warning"
          size="sm"
          @click="SetPermission(row)"
        >{{$t('module.role.button.permission')}}</vh-button>
      </template>
      <template #form_update="{data,isNew}">
        <div class="mb-3">
          <label
            for="idName"
            class="form-label"
          >Mã vai trò</label>
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
    <Permission
      v-if="showModalPermission"
      v-model:show="showModalPermission"
      v-model="DataRow"
    />

  </vh-page>
</template>
<script>
import Manager from '@/components/manager/index.vue';
import api from '@/api/role';
import Permission from './permission.vue';
export default {
  components: { Manager, Permission },
  methods: {
    SetPermission(data) {
      this.DataRow = data;
      this.showModalPermission = true;
    }
  },
  data() {
    return {
      showModalPermission: false,
      DataRow: {},
      option: {
        checkButtonDelete: ({ row, index, start }) => row['name'] != 'supper-admin',
        checkButtonUpdate: ({ row, index, start }) => row['name'] != 'supper-admin',
        api: {
          ...api
        },
        columns: [
          {
            title: '#',
            isSort: false,
            isFilter: false,
            dataCell: (item, index, start) => index + start
          },
          {
            title: 'name',
            field: 'name'
          },
          {
            title: 'title',
            field: 'title'
          },
          {
            title: 'guard',
            field: 'guard_name'
          }
        ]
      },
    };

  },
  setup() {

  },
}
</script>
