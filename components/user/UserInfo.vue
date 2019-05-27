<template>
  <div class="content">
    <avatar :avatar-url="avatarUrl" class="user--avatar" />
    <div class="user--info">
      <span class="user--name">{{ name }}</span>
      <span>{{ bio }}</span>
      <span class="user--location">
        <i class="el-icon-location" /> {{ location }}
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
  },
  props: {
    name: { type: String, default: '' },
    bio: { type: String, default: '' },
    location: { type: String, default: '' },
    avatarUrl: { type: String, default: '' }
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
