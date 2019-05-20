<template>
  <div>
      <el-row>
        <el-col>
          <el-card class="card" :body-style="{ padding: '0px' }">
            <br /><img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 0px;">
              <span>mateusoliveira2</span>

              <div class="description">
                <br /><span
                  >aqui vai ter a descrição do user e tudo mais que der né</span
                ><br />
                <br />
              </div>
            </div>
            <footer class="box-footer">
              <table>
                <tr>
                  <td>5</td>
                  <td>10</td>
                  <td>7</td>
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
  name: 'ProfileCard',
  props: ['profile']
}
</script>

<style>
@import url('//unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css');

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
}

.description {
  text-align: left;
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
