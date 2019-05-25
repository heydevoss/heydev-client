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
  border-radius: 100%;
  height: 300px;
  object-fit: cover;
  width: 300px;
}
</style>
