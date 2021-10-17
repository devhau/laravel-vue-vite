<template>
  <vh-page class="vh-auth-page">
    <div class="vh-auth-box">
      <div class="vh-auth-header">
        <h3>Register</h3>
      </div>
      <div class="vh-auth-body">
        <div class="mb-2">
          <label for="email">Email</label>
          <vh-input
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-2">
          <label for="fullname">Full name</label>
          <vh-input
            id="fullname"
            placeholder="Full name"
          />
        </div>
        <div class="mb-2">
          <label for="password">Password</label>
          <vh-input
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="vh-auth-bottom">
        <vh-row>
          <vh-col>
            <vh-button @click="$router.push({name:'Login'})">
              Login
            </vh-button>
          </vh-col>
          <vh-col>
            <vh-button color="success">
              Register
            </vh-button>
          </vh-col>
        </vh-row>
      </div>
    </div>
  </vh-page>
</template>
<script>
export default {
  setup() {

  },
}
</script>
