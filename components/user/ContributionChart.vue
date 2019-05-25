<template>
    <vue-no-ssr>
        <div>
            <h2>Doughnut</h2>

            <div class="card">
            <chartjs-doughnut
                v-bind:bind="true"
                v-bind:datasets="props"
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
      labels: ["totalPullRequests", "totalCommits", "totalIssues"],
      option: {}
    };
  },
  props: {
    totalPullRequests: Number,
    totalCommits: Number,
    totalIssues: Number
  },
};
</script>
