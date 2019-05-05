<template>
  <div class="circle">
    <img src="example.png" />
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>
<style lang="scss" scoped>
.circle {
  background-color: #aaa;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.circle img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
