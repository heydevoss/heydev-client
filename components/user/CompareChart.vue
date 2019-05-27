<template>
  <vue-no-ssr>
    <div>
      <div>
        <chartjs-bar
          class="chart"
          :beginzero="true"
          :datasets="datasets"
          :labels="labels"
          :option="options"
        />
      </div>
    </div>
  </vue-no-ssr>
</template>

<script>
export default {
  props: {
    prContributor: { type: Number, default: 0 },
    issuesContributor: { type: Number, default: 0 },
    commitsContributor: { type: Number, default: 0 },
    prOrganization: { type: Number, default: 0 },
    issuesOrganization: { type: Number, default: 0 },
    commitsOrganization: { type: Number, default: 0 }
  },
  data() {
    return {
      beginZero: true,
      labels: ['Pull Requests', 'Issues', 'Commits'],
      datasets: [
        {
          backgroundColor: '#4ECDC4',
          data: [
            this.prContributor,
            this.issuesContributor,
            this.commitsContributor
          ],
          label: 'Contributor'
        },
        {
          backgroundColor: '#FF6B6B',
          data: [
            this.prOrganization,
            this.issuesOrganization,
            this.commitsOrganization
          ],
          label: 'Organization'
        }
      ],
      options: {
        maintainAspectRatio: true,
        legend: {
          position: 'right'
        }
      }
    }
  }
}
</script>

<style scoped>
.chart {
  width: 450px;
  height: 400px;
}

@media screen and (max-width: 820px) {
  .chart {
    width: 300px;
    height: 300px;
  }
}
</style>
