<template>
  <div>
    <LoginButton v-if="!isAuthenticated"/>
    <LogoutButton v-else/>
  </div>
</template>
<script>
import LoginButton from '@/components/commons/LoginButton'
import LogoutButton from '@/components/commons/LogoutButton'

export default {
  name: 'AccountSection',
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
