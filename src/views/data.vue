<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .input-with-select {
    width: 250px;
  }
</style>
