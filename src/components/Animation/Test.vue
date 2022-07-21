/* eslint-disable vue/valid-v-else */
/* eslint-disable vue/valid-v-else */
<template>
    <div>
      <el-button  type="" @click="show=!show">{{show?'隐藏':'显示'}}</el-button>
      <!-- <el-button v-if="show" type="" @click="show=!show">隐藏</el-button> -->
      <transition name="hello" appear>
        <h2 v-show="show">你好</h2>
      </transition>

  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      show: false
    }
  }

}
</script>
<style scoped>
    h2{
        background-color: orange;
        /* 控制动画的播放和暂停 paused running */
        animation-play-state:paused
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    }
    /* .v-enter-active{ */
      .hello-enter-active{
        animation: myStyle 1s ease;
        /* background-color: greenyellow; */
        /* background-color: green; */
    }
    /* .v-leave-active{ */
      .hello-leave-active{
        animation: myStyle 1s reverse;
        background-color: red;
    }
    @keyframes myStyle {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>
