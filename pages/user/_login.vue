<template>
  <div class="content">
    <div class="header">

      <user-info :name="this.organization.contributor.name"
                 :bio="this.organization.contributor.bio" 
                 :location="this.organization.contributor.location"
                 :avatarUrl="this.organization.contributor.avatarUrl"
                 class="user-info" />
      <el-divider direction="vertical" class="divider" />
      {{this.userName}}
      <user-stats :totalPullRequests="this.organization.contributor.totalPullRequests"
                  :totalCommits="this.organization.contributor.totalCommits"
                  :totalIssues="this.organization.contributor.totalIssues"
                  class="user-stats" />
    </div>
  </div>
</template>
<script>
import UserInfo from '@/components/user/UserInfo'
import UserStats from '@/components/user/UserStats'
import getContributor from '@/apollo/queries/getContributor.gql'

export default {
  name: 'User',
  components: {
    UserInfo,
    UserStats
  },

  data() {
    return {
      userName: this.$route.params.login,
      organization: {}
    }
  },
  
  apollo: {
    organization: {
      query: getContributor,
      variables: {
        login: "thayannevls" //this.userName ??
      }
    }
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
