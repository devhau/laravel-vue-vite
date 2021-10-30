<template>
    <div class="vh-profile-box">
        <div class="vh-profile-box__avatar">
            <img class="vh-profile-box__avatar--image" />
            <h4 style="color: #fff">{{ $store.state.auth.user.name }}</h4>
        </div>
        <div class="vh-profile-box__item">
            <vh-row>
                <vh-col style="text-align: start; padding-left: 15px">
                    <vh-button
                        beforeIcon="bi bi-person"
                        size="sm"
                        :text="$t('profile.button.profile')"
                    />
                </vh-col>
                <vh-col style="text-align: end; padding-right: 15px">
                    <vh-button
                        beforeIcon="bi bi-power"
                        size="sm"
                        :text="$t('profile.button.logout')"
                        @click="logout"
                    />
                </vh-col>
            </vh-row>
        </div>
    </div>
</template>
<script>
import { AUTH_LOGOUT } from "@/common/action";
export default {
    setup() {},
    methods: {
        logout() {
            this.$store.dispatch(AUTH_LOGOUT);
            this.$router.push({
                name: "Login",
            });
        },
    },
};
</script>
