<template>
  <vh-page>
    <h3>Thông tin nhân viên</h3>
    <manager :option="option">
      Xin chào
    </manager>
  </vh-page>
</template>
<script>
import Manager from '@/components/manager/index.vue';
import user from '@/api/user';
export default {
  components: { Manager },

  data() {
    return {
      option: {
        api: {
          ...user
        },
        columns: [
          {
            title: '#',
            isSort: false,
            isFilter: false,
            dataCell: (item, index, start) => index + start
          },
          {
            title: 'Họ tên',
            field: 'name'
          },
          {
            title: 'Email',
            field: 'email'
          }
        ]
      },
    };

  },
  setup() {

  },
}
</script>
