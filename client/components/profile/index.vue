<template>
  <div class="vh-profile-box">
    <div class="vh-profile-box__item">
    </div>
    <div class="vh-profile-box__item">
    </div>
    <div class="vh-profile-box__item">
    </div>
    <div class="vh-profile-box__item">
    </div>
    <div class="vh-profile-box__item">
      <vh-row>
        <vh-col>
          <vh-button
            size="sm"
            :text="$t('profile.button.logout')"
          />
        </vh-col>
        <vh-col>
          <vh-button
            size="sm"
            :text="$t('profile.button.logout')"
          />
        </vh-col>
      </vh-row>
    </div>
  </div>
</template>
<script>
export default {
  setup() {

  },
}
</script>
