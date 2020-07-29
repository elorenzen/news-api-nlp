<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="item in data" :key="item.id">
        <h4>{{ item.title }}</h4>
        <small>{{ item.author }} - {{ item.publishedAt }}</small>
        <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
const apiKey = '290befad42ad4ee99ddf698aeea1f543'
const axios = require('axios')

export default {
  name: 'App',
  data () {
    return {
      data: null
    }
  },
  mounted () {
    const key = apiKey

    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`).then(response => this.data = response.data.articles)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
