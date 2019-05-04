<template>
  <div class="container">
    <div>
      <h1 class="title-app">
        NeoLite
      </h1>
      <LoginButton v-if="!isAuthenticated" />
      <LogoutButton v-else />
    </div>
  </div>
</template>

<script>
import LoginButton from '@/components/commons/LoginButton'
import LogoutButton from '@/components/commons/LogoutButton'

export default {
  components: {
    LoginButton,
    LogoutButton
  },
  computed: {
    isAuthenticated() {
      return !!this.$apolloHelpers.getToken()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
}

.title-app {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #233141;
  letter-spacing: 1px;
}
</style>
