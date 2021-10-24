<template>
  <vh-page>
    <h3>Vai trò</h3>
    <manager :option="option">
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
  </vh-page>
</template>
<script>
import Manager from '@/components/manager/index.vue';
import api from '@/api/role';
export default {
  components: { Manager },

  data() {
    return {
      option: {
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
