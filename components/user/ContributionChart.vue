<template>
    <vue-no-ssr>
        <div>
            <h2>Doughnut</h2>

            <div class="card">
            <chartjs-doughnut
                v-bind:bind="true"
                v-bind:datasets="datasets"
                v-bind:labels="labels"
                v-bind:option="option"
            />
            </div>
        </div>
    </vue-no-ssr>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [10, 20, 40],
          backgroundColor: ["#b388ff", "#82b1ff", "#80d8ff"],
          hoverBackgroundColor: ["#673ab7", "#2196f3", "#03a9f4"]
        }
      ],
      labels: ["Foo", "Bar", "Baz"],
      option: {}
    };
  }
};
</script>
