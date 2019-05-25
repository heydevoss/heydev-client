<template>
  <div @click="redirectToUserPage">
    <el-row>
      <el-col>
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px' }">
          <br /><img :src="contributor.avatarUrl" class="image" />
          <div style="padding: 0px;">
            <span>{{ contributor.login }}</span>

            <div class="description">
              <br /><span>{{ contributor.bio }}</span
              ><br />
              <br />
            </div>
          </div>
          <footer class="box-footer">
            <table>
              <tr>
                <td>{{ contributor.totalIssues }}</td>
                <td>{{ contributor.totalPullRequests }}</td>
                <td>{{ contributor.totalCommits }}</td>
              </tr>
              <tr>
                <td>Issues</td>
                <td>Pull Requests</td>
                <td>Commit</td>
              </tr>
            </table>
          </footer>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ContributorCard',
  props: {
    contributor: Object
  },
  methods: {
    redirectToUserPage() {
      this.$router.replace(`/user/${this.contributor.login}`)
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 13px;
  margin: 0 0 0 0;
}
.box-footer {
  position: absolute;
  align-self: center;
  bottom: 0;
}
.card {
  width: 250px;
  height: 350px;
  background-color: #47525e;
  color: white;
  cursor: pointer;
}

.description {
  text-align: center;
  font-size: 0.8rem;
  justify-content: center;
  margin: 3px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: relative;
  position: center;
}
</style>
