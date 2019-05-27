<template>
  <div class="block">
    <br /><el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'ContributorActivity',
  data() {
    return {
      activities: [
        {
          content: 'New Pull Request on Tamburetei',
          timestamp: '2019-06-12 20:46',
          size: 'large',
          type: 'primary',
          color: 'grey',
          icon: 'el-icon-s-promotion'
        },
        {
          content: 'Commented on IssueAi #48 issue',
          timestamp: '2019-06-12 16:05',
          color: 'grey',
          icon: 'el-icon-more',
          size: 'large'
        },
        {
          content: 'Star in Roadmap',
          timestamp: '2019-06-11 13:56',
          size: 'large',
          icon: 'el-icon-star-on',
          color: 'grey'
        },
        {
          content: 'Commit on IssueAi',
          timestamp: '2019-06-10 19:36',
          icon: 'el-icon-circle-plus-outline',
          color: 'grey',
          size: 'large'
        }
      ]
    }
  }
}
</script>
