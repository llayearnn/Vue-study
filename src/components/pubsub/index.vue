<template>
    <div class="hello">
        <School />
        <Student />
  </div>
</template>

<script>
import School from './School.vue'
import Student from './Student.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {School, Student}
}
</script>

<style>

</style>
