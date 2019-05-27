<template>
  <div v-loading.fullscreen.lock="$apollo.queries.organization.loading">
    <div v-if="!$apollo.queries.organization.loading" class="content">
      <div class="header">
        <user-info
          :name="organization.contributor.name"
          :bio="organization.contributor.bio"
          :location="organization.contributor.location"
          :avatar-url="organization.contributor.avatarUrl"
          class="user-info"
        />
        <el-divider direction="vertical" class="divider" />
        <user-stats
          :total-pull-requests="organization.contributor.totalPullRequests"
          :total-commits="organization.contributor.totalCommits"
          :total-issues="organization.contributor.totalIssues"
          :first-contribution-date="
            organization.contributor.firstContributionDate
          "
          class="user-stats"
        />
      </div>

      <el-divider direction="horizontal" class="divider" />
      <span class="title">Overview</span>
      <div class="charts">
        <contribution-chart
          class="chart"
          :open-pr-contributor="organization.contributor.totalPullRequestsOpen"
          :closed-pr-contributor="
            organization.contributor.totalPullRequestsClosed
          "
          :open-issues-contributor="organization.contributor.totalIssuesOpen"
          :closed-issues-contributor="
            organization.contributor.totalIssuesClosed
          "
          :commits-contributor="organization.contributor.totalCommits"
        />

        <CompareChart
          class="chart"
          :pr-contributor="organization.contributor.totalPullRequests"
          :issues-contributor="organization.contributor.totalIssues"
          :commits-contributor="organization.contributor.totalCommits"
          :pr-organization="organization.totalPullRequests"
          :issues-organization="organization.totalIssues"
          :commits-organization="organization.totalCommits"
        />
        <ContributionTimeLineChart />
      </div>
      <contributor-activity />
    </div>
    <contributor-timeline />
  </div>
</template>
<script>
import UserInfo from '@/components/user/UserInfo'
import UserStats from '@/components/user/UserStats'
import ContributionChart from '@/components/user/ContributionChart'
import CompareChart from '@/components/user/CompareChart'
import ContributionTimeLineChart from '@/components/user/ContributionTimeLineChart'
import getContributor from '@/apollo/queries/getContributor.gql'
import ContributorActivity from '@/components/user/ContributorActivity'

export default {
  name: 'User',
  components: {
    UserInfo,
    UserStats,
    ContributionChart,
    CompareChart,
    ContributionTimeLineChart,
    ContributorActivity
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
  width: 450px;
  height: 400px;
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
