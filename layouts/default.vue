<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      background-color="#2EC4B6"
      text-color="#fff"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span class="menu-icon">Home</span>
      </el-menu-item>
      <account-section class="navbar--account-section" />
    </el-menu>
    <nuxt />
  </div>
</template>
<script>
import AccountSection from '@/components/navbar/AccountSection'

export default {
  components: {
    AccountSection
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === '1') this.$router.replace('/')
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.menu-icon {
  font-size: 20px;
}

.navbar {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.navbar--account-section {
  margin-left: auto;
}
</style>
