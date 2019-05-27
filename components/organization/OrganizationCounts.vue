<template>
  <div class="organization-counts">
    <div v-for="count in counts" :key="count.label" class="org-count">
      <div class="org-count--item">
        <span class="value">
          {{ count.value }}
        </span>
        <span class="label">
          {{ count.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationCounts',
  props: {
    totalPullRequests: { default: 0, type: Number },
    totalCommits: { default: 0, type: Number },
    totalIssues: { default: 0, type: Number }
  },
  data() {
    return {
      counts: [
        { label: 'Issues', value: this.totalIssues || 0 },
        { label: 'Pull Requests', value: this.totalPullRequests || 0 },
        { label: 'Commits', value: this.totalCommits || 0 }
      ]
    }
  }
}
</script>

<style lang="scss">
.organization-counts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.org-count {
  display: flex;
  flex-direction: column;
}
.org-count--item {
  display: flex;
  flex-direction: column;
}

.value {
  font-size: calc(2em + 1vw);
  color: #ffa600;
}

.label {
  margin-top: 4px;
  font-size: calc(0.2em + 1vw);
}

@media screen and (max-width: 820px) {
  .organization-counts {
    flex-direction: column;
    justify-content: space-between;
  }
  .label {
    font-size: calc(1em + 1vw);
  }
}
</style>
