<template>
  <vh-accordion :source="accordion" />
</template>
<script>
export default {
  data() {
    return {
      accordion: [
        {
          title: 'accordion 1',
          content: 'accordion content 1'
        },
        {
          title: 'accordion 2',
          content: 'accordion content 2'
        },
        {
          title: 'accordion 3',
          content: 'accordion content 3'
        },
        {
          title: 'accordion 4',
          content: 'accordion content 4'
        },
        {
          title: 'accordion 5',
          content: 'accordion content 5'
        }
      ]
    };
  },
  setup() {

  },
}
</script>