<template>
  <div class="home">
    <el-container>
    <el-aside width="200px" class="aside">
      <div class="logo">帝</div>
      <el-menu
      unique-opened="true"
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click ='home'>
        <i class="el-icon-menu"></i>
        <span slot="title">Hello</span>
      </el-menu-item>
      <el-menu-item index="2"  @click ='cangku'>
        <i class="el-icon-menu"></i>
        <span slot="title">仓库</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-container>
    <el-header>
        <div class="title">
          <h1>
            后台管理
            </h1>
            </div>
        <div  class="loginout">
          <a href="javascript:void(0)" @click.stop ='loginout'>
            退出
            </a>
        </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  methods: {
    loginout () {
      localStorage.removeItem('islogin')
      this.$router.push({ name: 'login' })
    },
    home () {
      this.$router.push({ path: '/home/hello' })
    },
    cangku () {
      this.$router.push({ path: '/home/data' })
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  .el-container{
    height: 100%;
    .aside{
      height: 100%;
      background-color: #545c64;
      .logo{
        background-color: #409EFF;
        height:60px;
        text-align: center;
        line-height: 60px;
        color: #303133;
        font-size: 50px;
        font-weight: 800;
      }
    }
    .el-header{
      background-color: #545c64;
      line-height: 60px;
      color: white;
      .title{
        font-size: 12px;
        float: left;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        h1{
          margin: 0;
          text-shadow: 1px 1px 10px #5BA6DF;
          background-image: -webkit-linear-gradient(left, #2EC7C9, #E6D205 25%, #2EC7C9 50%,         #E6D205 75%, #2EC7C9 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-background-size: 200% 100%;
          -webkit-animation: masked-animation 4s infinite linear;
        }
      }
      .loginout{
        float: right;
        a:hover{
          text-shadow: 1px 1px 10px #5BA6DF;
          background-image: -webkit-linear-gradient(left, #2EC7C9, #E6D205 25%, #2EC7C9 50%,         #E6D205 75%, #2EC7C9 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-background-size: 200% 100%;
          -webkit-animation: masked-animation 4s infinite linear;
        }
      }
    }
  }
}
</style>
