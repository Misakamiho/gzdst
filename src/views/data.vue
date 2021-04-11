<template>
  <div>
    <div>
      <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" @click="addgoods">添加</el-button>
    </div>
    <!-- 数据内容 -->
    <div class="maindata">
      <el-table :data="goodslist" border style="width: 100%" show-summary>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.names }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="id" width="40" sortable type="index" :index="idnum">
        </el-table-column>
        <el-table-column prop="names" label="品项" width="360" sortable>
        </el-table-column>
        <el-table-column prop="numbers" label="数量" width="120" sortable>
        </el-table-column>
        <el-table-column prop="prices" label="价格" width="120" sortable>
        </el-table-column>
        <el-table-column prop="selects" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getdata } from '@/api/datas_api.js'
export default {
  data () {
    return {
      goodslist: [],
      search: ''
    }
  },
  mounted () {
    getdata().then((result) => {
      this.goodslist = result.data
    })
  },
  methods: {
    addgoods () {
      console.log('addgoos')
    },
    idnum (idsnum) {
      return idsnum++ + 1
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="less" scoped>
  .input-with-select {
    width: 250px;
    margin-right: 15px;
  }

  .maindata {
    margin-top: 30px;
  }
</style>
