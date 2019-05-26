<template>
  <div>
    <div class="card">
        <chartjs-line class="chart"
          :backgroundcolor="bgColor"
          :beginzero="beginZero"
          :bind="true"
          :bordercolor="borderColor"
          :data="data[radio]"
          :datalabel="dataLabel"
          :labels="labels[radio]"
          :option="options"
        />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      bgColor: "#34F6F2",
      borderColor: "#34F6F2",
      data: {
        month: [1, 9, 0, 10, 28],
        quant: [4, 5, 10, 2, 18]
      },
      dataLabel: "Commits",
      labels: {
        month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        quant: [1, 5, 10, 15, 20]
      },
      options: {
          legend: {
            position: 'right'
          }
      },
      radio: "month"
    };
  }
};
</script>

<style scoped>
  .chart{
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 820px) {
    .chart{
      width: 300px;
      height: 300px;
    }
  }
</style>