<template>
  <div class="content">
    <div v-for="(stat, index) in stats" class="stat">
      <span class="count">
        {{stat.count}}
      </span>
      <span class="label">
        {{stat.label}}
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'UserStats',
  components: {
  },
  data() {
    return {
      stats: [
        {label: 'Pull Requests', count: 2},
        {label: 'Issues', count: 20},
        {label: 'Commits', count: 10}
      ]
    }
  }
    
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-evenly;
}
.label {
  
}
.count {
  color: orange;
  text-align: center;
  font-size: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
}
</style>
