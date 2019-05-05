<template>
  <div class="container">
    <div>
      <!-- AvatarOrganization/ -->
      <h1>NeoLite</h1>
      <h2><a href="#">Site</a></h2>
      <GitHubButton />
    </div>
  </div>
</template>

<script>
import GitHubButton from '@/components/organization/GitHubButton'
// import AvatarOrganization from '@/components/commons/AvatarOrganization'

export default {
  components: {
    GitHubButton
    // AvatarOrganization
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
