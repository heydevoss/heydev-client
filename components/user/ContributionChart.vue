<template>
  <vue-no-ssr>
    <div>
      <br />
      <chartjs-doughnut
        class="chart"
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="options"
      />
    </div>
  </vue-no-ssr>
</template>

<script>
export default {
  props: {
    openPrContributor: Number,
    closedPrContributor: Number,
    openIssuesContributor: Number,
    closedIssuesContributor: Number,
    commitsContributor: Number
  },
  data() {
    return {
      datasets: [
        {
          data: [
            this.openPrContributor,
            this.closedPrContributor,
            this.openIssuesContributor,
            this.closedIssuesContributor,
            this.commitsContributor
          ],
          backgroundColor: [
            '#F5CCE8',
            '#FC7478',
            '#2196f3',
            '#80d8ff',
            '#b388ff'
          ],
          hoverBackgroundColor: [
            '#F475CC',
            '#FC2F36',
            '#0000FF',
            '#00FFFF',
            '#673ab7'
          ]
        }
      ],
      labels: [
        'Pull Requests Open',
        'Pull Requests Closed',
        'Issues Open',
        'Issues Closed',
        'Commits'
      ],
      options: {
        legend: {
          position: 'right'
        }
      }
    }
  }
}
</script>
<style>
.title {
  text-align: center;
  padding: 10px;
  font-size: 25px;
  color: black;
}

.chart {
  width: 500px;
  height: 500px;
}

@media screen and (max-width: 820px) {
  .chart {
    width: 300px;
    height: 300px;
  }
}
</style>
