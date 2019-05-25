<template>
    <vue-no-ssr>
        <div class="chart">
            
            <span class="title"> Contributions </span> 

            <br><chartjs-doughnut
                v-bind:bind="true"
                v-bind:datasets="datasets"
                v-bind:labels="labels"
                v-bind:option="options"
            />
        </div>
    </vue-no-ssr>
</template>

<script>
export default {
    data() {
        return {
            datasets: [
                {
                data: [ this.totalPullRequests, this.totalCommits, this.totalIssues],
                backgroundColor: ["#b388ff", "#2196f3", "#80d8ff"],
                hoverBackgroundColor: ["#673ab7", "#0000FF", "#00FFFF"]
                }
            ],
            labels: ["Pull Requests", "Commits", "Issues"],
            options: {
                legend: {
                    position: 'right'
                }
            }
        }
    },
    props: {
        totalPullRequests: Number,
        totalCommits: Number,
        totalIssues: Number
    }
};
</script>
<style>
.title{
    text-align: center;
    padding: 10px;
    font-size: 25px;
    color: black;
}

.chart{
    display: flex;
    flex-direction: column;
    align-items:baseline; 
    width: 500px;
    height: 500px;

}
</style>

