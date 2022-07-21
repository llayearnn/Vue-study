
<template>
  <div>
    <Search />
    <User></User>
  </div>
</template>

<script>
import Search from '@/components/AxiosDemo/Search'
import User from '@/components/AxiosDemo/User'
export default {
  name: 'GithubUserList',
  components: { Search, User }
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}
</style>
