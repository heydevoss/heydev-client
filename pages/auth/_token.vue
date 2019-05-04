<template>
  <div />
</template>

<script>
export default {
  mounted() {
    const token = this.$route.params.token
    if (token) this.$apolloHelpers.onLogin(token)
    this.$router.replace('/')
  }
}
</script>
