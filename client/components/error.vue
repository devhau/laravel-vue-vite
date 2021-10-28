<template>
  <div
    v-if="errors"
    class="errors"
  >
    <ul>
      <li
        v-for="key in Object.keys(errors)"
        :key="key"
      >
        {{$t(key)}} :
        <ul>
          <li
            v-for="item in errors[key]"
            :key="item"
          >{{$t(item)}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    errors: {

    }
  },
  setup() {

  },
}
</script>
<style lang="scss">
.errors {
  color: red;
  ul {
    padding: 0px 5x;
  }
}
</style>
