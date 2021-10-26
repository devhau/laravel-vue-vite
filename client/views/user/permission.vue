<template>
  <vh-modal
    size='lg'
    :title="this.modelValue.name"
    :show="show"
    @hide="onCloseForm"
  >
    <vh-row>
      <vh-col>
        <vh-group-checkbox
          style="max-height:500px"
          v-model="roles"
          :source="sourceRole"
          :itemDisabled="(val,sub)=>sub !== undefined"
        />
      </vh-col>
      <vh-col>
        <h4>Permission</h4>
        <vh-group-checkbox
          style="max-height:500px"
          v-if="modules"
          v-model="permissions"
          :source="source"
          :itemDisabled="(val)=>this.modelValue.name==='supper-admin'"
        />
      </vh-col>

    </vh-row>
    <template #footer="{}">
      <vh-button
        size="sm"
        color="warning"
        :beforeIcon="'bi bi-x'"
        @click="onCloseForm"
      >{{$t('common.manager.button.cancel')}}</vh-button>
      <vh-button
        size="sm"
        :beforeIcon="'bi bi-pencil-square'"
        @click="onUpdateData()"
      >{{$t('common.manager.button.update')}}</vh-button>
    </template>
  </vh-modal>
</template>
<script>
import api from '@/api/user';
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    modelValue: {}
  },
  methods: {
    onCloseForm() {
      this.$emit('update:show', false);
    },
    onUpdateData() {
      api.putPermission(this.modelValue?.id, {
        permissions: this.permissions,
        roles: this.roles
      }).then(() => {
        this.onCloseForm();
      });
    }
  },
  computed: {
    sourceRole() {
      return [{
        text: 'All Role',
        sub: this.allroles.map((item) => {
          return {
            text: item.title,
            value: item.name,
          };
        })
      }]
    },
    source() {
      return Object.keys(this.modules).map((text) => {
        let sub = this.modules[text].map((item) => {
          return {
            text: item.title,
            value: item.name,
          }
        })
        return {
          text,
          sub
        };
      });
    }
  },
  data() {
    return {
      modules: null,
      permissions: [],
      roles: [],
      allroles: []
    };
  },
  mounted() {
    api.getPermission(this.modelValue?.id, 'web').then(({ data }) => {
      let { modules, permissions, roles, allroles } = data.data;
      this.modules = modules;
      this.permissions = permissions;
      this.roles = roles;
      this.allroles = allroles;
    })
  },
  setup() {

  },
}
</script>
