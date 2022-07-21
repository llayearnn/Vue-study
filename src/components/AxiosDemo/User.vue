<template>
  <div class="myUser">
    <div class="person" v-show="userList.length" v-for="user in userList" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" />
      </a>
      <p>  {{user.login}}  </p>
    </div>
    <div>
      <el-empty v-if="ifData" :image-size="200"></el-empty>
      <h1 v-if='loading'>数据加载中</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userList: [],
      loading: false,
      ifData: true

    }
  },
  mounted () {
    let that = this
    this.$bus.$on('sendMsg', (value) => {
      console.log(value)

      that.userList = value.data.items
      that.loading = value.loading
      that.ifData = false
    })
  }

}
</script>

<style lang="less" scoped>
.myUser{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  // justify-content: space-between;
  .person{
    border: 1px solid #c4c2c2;
    // width: 100px;
    height: 300px;
    margin: 20px;
    width: 20%;
    img{
      width:100%;
      height:90%
    }
    p{
      color: rgb(11, 167, 240);
      font-size: 14px;
      cursor: pointer;
    }

  }
 .person{
    box-shadow: 2px 2px 10px #909090;
  }
    .person a:hover>img{
    box-shadow: 2px 2px 10px #909090;
    font-weight: 200;
    // transform: scale(1.1)

  }

}

</style>>
