<template>
  <div>
    <el-button type="primary" @click="login()">Login</el-button>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  methods: {
    login() {
      this.$router.replace('/auth/login')
    }
  }
}
</script>
