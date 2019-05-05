<template>
  <div >
    <img :src="avatarUrl" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['avatarUrl']
}
</script>
<style lang="scss" scoped>

img{
  background-color: #ddd;
  border-radius: 100%;
  height: 200px;
  object-fit: cover;
  width: 200px;  
}

.circle img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
