<template>
  <img :src="avatarUrl || require('~/assets/avatar/default.png')" />
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatarUrl: String
  }
}
</script>
<style lang="scss" scoped>
img {
  background-color: #ddd;
  border-radius: 100%;
  height: 200px;
  object-fit: cover;
  width: 200px;
}
</style>
