<template>
    <div>
        <div v-if="loginType === 'username' ">
            <label>Username</label>
            <input placeholder="Enter your username" value="username" key="username-input">
        </div>
        <div v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" value="email" key="email-input">
        </div>
        <button @click="handleChange">切换LoginType</button>
        <ul id='example-1'>
            <li v-for='item in items' :key='item.message'>
                {{item.message}}
            </li>
        </ul>
        <div>
            单项数据绑定：<input id='simpleInput' type="text" :value="nameBind">
            <!-- 双向数据绑定：<input type="text" v-model="nameModel"> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    // object.keys();会返回一个由一个给定对象的自身 可枚举属性 组成的数组
    const person = {
      name: '张三',
      sex: '男'
    }
    Object.defineProperty(person, 'age', {
      value: 19
    //   enumerable: true, // 控制属性是否可以枚举 默认是false
    //   writable: true, // 控制属性是否可以被修改
    //   configurable: true // 控制属性是否可以被删除

    })
    console.log(person)
    // 数据代理  通过一个对象代理对另一个对象中的属性的操作 （读/写）
    /**
     * 1.Vue中的数据代理
     *      通过vm对象来代理data对象中属性的操作
     * 2.Vue中数据代理的好处
     *      更加方便操作data中的数据
     * 3.基本原理
     *      通过Object.defineProperty()把data对象中所有属性添加到vm上
     *      为每一个添加到vm的属性上，都指定一个getter/setter方法，再通
     *      过getter/setter 内部去操作（读/写）data中对性的属性
     *       const vm = new Vue({
     *         data:{
     *            name:'jack'
     *            age:18
     *          }
     *        })
     */
    let obj = {
      x: 100
    }
    let obj2 = {
      y: 200
    }
    Object.defineProperty(obj2, 'x', {
      get () {
        return obj.x
      },
      set (value) {
        obj.x = value
      }
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginType: 'username',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      nameBind: '单向数据绑定',
      nameModel: '双向数据绑定'
    }
  },
  methods: {
    handleChange () {
      this.loginType = this.loginType === 'username' ? 'Email' : 'username'
      console.log(this.loginType)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
