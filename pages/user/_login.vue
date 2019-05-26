<template>
  <div v-loading.fullscreen.lock="$apollo.queries.organization.loading">
    <div v-if="!$apollo.queries.organization.loading" class="content">
      <div class="header">
        <user-info
          :name="this.organization.contributor.name"
          :bio="this.organization.contributor.bio"
          :location="this.organization.contributor.location"
          :avatar-url="this.organization.contributor.avatarUrl"
          class="user-info"
        />
        <el-divider direction="vertical" class="divider" />
        <user-stats
          :total-pull-requests="this.organization.contributor.totalPullRequests"
          :total-commits="this.organization.contributor.totalCommits"
          :total-issues="this.organization.contributor.totalIssues"
          :first-contribution-date="
            this.organization.contributor.firstContributionDate
          "
          class="user-stats"
        />
      </div>
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
      variables() {
        return {
          login: this.userName
        }
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
