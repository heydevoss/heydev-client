<template>
  <div>
    <a :href="url" class="button--grey">GitHub</a>
  </div>
</template>

<script>
export default {
  name: 'GitHubButton',
  props: ['url']
}
</script>
<style lang="scss" scoped></style>
