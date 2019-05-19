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
      window.location = 'http://localhost:5000/auth/login'
    }
  }
}
</script>
