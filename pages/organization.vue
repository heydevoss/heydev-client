<template>
  <div class="container">
    <div>
      <!-- Avatar/ -->
      <h1>NeoLite</h1>
      <h2><a href="#">Site</a></h2>
      <GitHubButton />
    </div>
  </div>
</template>

<script>
import GitHubButton from '@/components/organization/GitHubButton'
// import Avatar from '@/components/commons/Avatar'

export default {
  components: {
    GitHubButton
    // Avatar
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

a {
  text-decoration: none;
}
</style>
