<template>
  <vh-modal
    :title="this.modelValue.name"
    :show="show"
    @hide="onCloseForm"
  >
    <vh-group-checkbox
      style="max-height:500px"
      v-if="modules"
      v-model="permissions"
      :source="source"
      :itemDisabled="(val)=>this.modelValue.name==='supper-admin'"
    />
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
import api from '@/api/role';
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
        permissions: this.permissions
      }).then(() => {
        this.onCloseForm();
      });
    }
  },
  computed: {
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
      permissions: []
    };
  },
  mounted() {
    api.getPermission(this.modelValue?.id, 'web').then(({ data }) => {
      let { modules, permissions } = data.data;
      this.modules = modules;
      this.permissions = permissions;
    })
  },
  setup() {

  },
}
</script>
