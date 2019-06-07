<template>
  <div />
</template>

<script>
import getUserInfo from '@/apollo/queries/getUserInfo.gql'

export default {
  mounted() {
    const token = this.$route.params.token
    if (token) this.$apolloHelpers.onLogin(token)
    this.$router.replace(`/user/${this.me.login}`)
  },
  apollo: {
    me: {
      query: getUserInfo
    }
  }
}
</script>
