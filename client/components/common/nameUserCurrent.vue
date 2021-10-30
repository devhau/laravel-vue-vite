<template>
    <span v-if="$store.state.auth.user">{{ $store.state.auth.user.name }}</span>
</template>
<script>
export default {
    setup() {},
};
</script>
