<template>
    <span v-if="user">{{ user.name }}</span>
</template>
<script>
export default {
    setup() {},
    data() {
        return {
            user: "",
        };
    },
    watch: {
        "$store.state.auth.user": {
            handler: function (_user) {
                this.user = _user;
            },
            deep: true,
            immediate: true,
        },
    },
};
</script>
