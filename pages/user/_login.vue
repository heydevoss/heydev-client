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
    <br />
    <el-divider direction="horizontal" class="divider" />
    <span class="title">Overview</span>
    <div class="charts">
      <contribution-chart
        class="chart"
        :open-pr-contributor="
          this.organization.contributor.totalPullRequestsOpen
        "
        :closed-pr-contributor="
          this.organization.contributor.totalPullRequestsClosed
        "
        :open-issues-contributor="this.organization.contributor.totalIssuesOpen"
        :closed-issues-contributor="
          this.organization.contributor.totalIssuesClosed
        "
        :commits-contributor="this.organization.contributor.totalCommits"
      />

      <CompareChart
        class="chart"
        :pr-contributor="this.organization.contributor.totalPullRequests"
        :issues-contributor="this.organization.contributor.totalIssues"
        :commits-contributor="this.organization.contributor.totalCommits"
        :pr-organization="this.organization.totalPullRequests"
        :issues-organization="this.organization.totalIssues"
        :commits-organization="this.organization.totalCommits"
      />

      <ContributionTimeLineChart />
    </div>
  </div>
</template>
<script>
import UserInfo from '@/components/user/UserInfo'
import UserStats from '@/components/user/UserStats'
import ContributionChart from '@/components/user/ContributionChart'
import CompareChart from '@/components/user/CompareChart'
import ContributionTimeLineChart from '@/components/user/ContributionTimeLineChart'
import getContributor from '@/apollo/queries/getContributor.gql'

export default {
  name: 'User',
  components: {
    UserInfo,
    UserStats,
    ContributionChart,
    CompareChart,
    ContributionTimeLineChart
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
.chart {
  width: 500px;
  height: 500px;
}
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
.charts {
  display: flex;
  justify-content: space-between;
  width: 90vw;
}
.title {
  font-size: calc(1.5em + 1vw);
  margin-bottom: 20px;
  display: block;
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
  .charts {
    flex-direction: column;
  }
  .chart {
    width: 200px;
    height: 200px;
  }
}
</style>
