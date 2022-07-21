<template>
  <div class="search">
      <div class="searchArea">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="活动区域">
            <el-input style="display:inline-block" placeholder="请输入内容" v-model="formInline.input" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
      input: '',
      formInline: {
        input: '',
        region: ''
      }

    }
  },
  methods: {
    onSubmit () {
      const value = this.formInline.input.trim()
      if (!value) {
        return this.$message({
          message: '请输入有效信息',
          type: 'warning',
          duration: 1000
        })
      }
      this.$bus.$emit('sendMsg', {data: [], loading: true})
      axios.get(`https://api.github.com/search/users?q=${value}`).then(response => {
        console.log('请求成功')
        this.$bus.$emit('sendMsg', {data: response.data, loading: false})
        // this.$bus.$emit('sendMsg', response.data)
      },
      error => {
        console.log('请求失败', error.message)
      }
      )
    }
  }
}
</script>
<style lang="less">
.search{
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    .searchArea{
      form{
      margin-top: 22px;
      }
      background-color:rgb(241, 240, 237);
      box-shadow: 2px 2px 10px #909090;
      text-shadow: 3px 5px 5px #656B79;
    }
}
</style>
