<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-once>{{ msg }}</h1>
    <h1>{{ msgReverse }}</h1>
    <h2>{{ time }}</h2>
    <p> {{ name }}</p>
    <h2 ref="title">Essential Links</h2>
    <button v-on:click="hello">Click</button>
    <h2 v-html="ht">{{ ht }}</h2>
    <input type="text" v-model.lazy="inp"/>
    <p>{{ inp }}</p>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Message',
      first: "James",
      last: "Miranda",
      ht: "<h1>James</h1>",
      inp: ""
    }
  },
  mounted() {
    console.log(this.time);
    console.log(this.$refs.title);
    setTimeout(() => this.name = "Halford Luiz", 2000);
    setTimeout(() => this.msg = "Halford Luiz", 3000);

  },
  computed: {
      msgReverse () {
        return this.msg.split('').reverse().join('')
      },
      time: {
        get () {
          return Date.now();
        }
      },
      name: {
        get() {
          return this.first + " " + this.last;
        },
        set(x) {
          const names = x.split(' ');
          this.first = names[0];
          this.last = names[1];
        }
      }
  },
  methods: {
    hello () {
      alert("Hello");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
