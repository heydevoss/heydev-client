<template>
  <div class="content">
    <avatar class="user--avatar" />
    <div class="user--info">
      <span class="user--name">MyName</span>
      <span>A little about me...</span>
      <span class="user--location">
        <i class="el-icon-location" /> Location, LO.
      </span>
    </div>
  </div>
</template>
<script>
import Avatar from '@/components/commons/Avatar'

export default {
  name: 'UserInfo',
  components: {
    Avatar
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
}
.user--info {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user--name {
  font-size: 2rem;
  margin-bottom: 5%;
}
.user--location {
  margin-top: 40px;
}
.user--avatar {
  width: 150px;
  height: 150px;
}

@media screen and (max-width: 820px) {
  .user--avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
