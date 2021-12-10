<template>
    <vh-page class="vh-auth-page">
        <div class="vh-auth-box">
            <div class="vh-auth-header">
                <h3>Register</h3>
            </div>
            <div class="vh-auth-body">
                <errors :errors="errors" />
                <div class="mb-2">
                    <label for="email">Email</label>
                    <vh-input v-model="email" id="email" placeholder="Email" />
                </div>
                <div class="mb-2">
                    <label for="fullname">Full name</label>
                    <vh-input
                        v-model="name"
                        id="fullname"
                        placeholder="Full name"
                    />
                </div>
                <div class="mb-2">
                    <label for="password">Password</label>
                    <vh-input
                        v-model="pass"
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div class="vh-auth-bottom">
                <vh-row>
                    <vh-col>
                        <vh-button @click="$router.push({ name: 'Login' })">
                            Login
                        </vh-button>
                    </vh-col>
                    <vh-col>
                        <vh-button color="success" @click="doRegister">
                            Register
                        </vh-button>
                    </vh-col>
                </vh-row>
            </div>
        </div>
    </vh-page>
</template>
<script>
import auth from "@/api/auth";
import errors from "@/components/common/error.vue";
export default {
    components: { errors },
    data() {
        return {
            email: "",
            name: "",
            pass: "",
            errors: undefined,
        };
    },
    methods: {
        doRegister() {
            auth.register({
                email: this.email,
                name: this.name,
                password: this.pass,
            })
                .then((rs) => {
                    if (rs.data.OK == true) {
                        this.$router.push({ name: "Login" });
                    } else {
                        this.errors = rs.data.errors;
                    }
                })
                .catch(({ request }) => {
                    this.errors = JSON.parse(request.responseText).errors;
                });
        },
    },
    setup() {},
};
</script>
