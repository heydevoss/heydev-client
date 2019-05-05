<template>
  <div>
    <button class="button--grey" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    async onLogout() {
      await this.$apolloHelpers.onLogout()
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped></style>
