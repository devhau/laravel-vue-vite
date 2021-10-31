<template>
    <vh-page class="vh-auth-page">
        <div class="vh-auth-box">
            <div class="vh-auth-header">
                <h3>Login</h3>
            </div>
            <div class="vh-auth-body">
                <errors :errors="errors" />
                <div class="mb-2">
                    <label for="account">Account</label>
                    <vh-input
                        v-model="account"
                        id="account"
                        placeholder="Account"
                    />
                </div>
                <div class="mb-2">
                    <label for="password">Password</label>
                    <vh-input
                        v-model="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div class="mb-2">
                    <vh-checkbox label="Remember me" />
                </div>
            </div>
            <div class="vh-auth-bottom">
                <vh-row>
                    <vh-col>
                        <vh-button
                            color="success"
                            @click="$router.push({ name: 'Register' })"
                        >
                            Register
                        </vh-button>
                    </vh-col>
                    <vh-col>
                        <vh-button @click="doLogin"> Login </vh-button>
                    </vh-col>
                </vh-row>
            </div>
        </div>
    </vh-page>
</template>
<script>
import auth from "@/api/auth";
import { AUTH_REQUEST } from "@/common/action";

import errors from "@/components/common/error.vue";
export default {
    components: { errors },
    data() {
        return {
            password: "",
            account: "",
            errors: undefined,
        };
    },
    methods: {
        doLogin() {
            auth.login({
                email: this.account,
                device_name: "web",
                password: this.password,
            }).then((rs) => {
                if (rs.data.OK == true) {
                    auth.setToken(rs.data.data.token);
                    this.$nextTick(() => {
                        if (location && location.reload) location.reload();
                        this.$store.dispatch(AUTH_REQUEST, this);
                        this.$router.push({ name: "Home" });
                    });
                } else {
                    this.errors = rs.data.errors;
                }
            });
        },
    },
    setup() {},
};
</script>
