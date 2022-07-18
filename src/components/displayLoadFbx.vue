<template>
  <div v-loading="lodingFactory"
        element-loading-text="拼命加载中"
        element-loading-background="rgba(0,0,0,0.8)">
    <div id="handleWebgl"> </div>
    <div v-cloak id="contextmenu" :style="{left:cxtmenu.left+'px',top:cxtmenu.top+'px'}" v-if=""> </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>