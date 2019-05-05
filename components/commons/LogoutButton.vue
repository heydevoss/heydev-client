<template>
  <div>
    <button class="button--green" @click="onLogout">Logout</button>
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
