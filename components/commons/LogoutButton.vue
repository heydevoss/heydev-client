<template>
  <div>
    <el-button type="text" @click="onLogout">Logout</el-button>
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
