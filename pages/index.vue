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
  name: 'Index',
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

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
}

.title-app {
  font-family: 'Roboto Mono', monospace;
  display: block;
  font-weight: 100;
  font-size: 10rem;
  color: #233141;
  letter-spacing: 0.5rem;
}
</style>
