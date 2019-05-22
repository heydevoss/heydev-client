<template>
  <div class="content">
    <div class="header">
      <user-info class="user-info"/>
      <el-divider direction="vertical" class="divider"/>
      <user-stats class="user-stats"/>
    </div>
  </div>
</template>
<script>
import UserInfo from '@/components/user/UserInfo'
import UserStats from '@/components/user/UserStats'

export default {
  name: 'User',
  components: {
    UserInfo,
    UserStats
  }
}

</script>

<style lang="scss" scoped>
.content {
  padding: 40px 60px;
}
.header {
  display: flex;
}
.user-info {
  margin-right: auto;
}
.el-divider--vertical {
  height: 10em;
}
@media screen and (max-width: 820px) {
  .header {
    flex-direction: column;
  }
  .content {
    padding: 10px 10px;
  }
  .el-divider--vertical {
    visibility: hidden;
    height: 0em;
  }
}

</style>
