<template>
  <div id="app">
      <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="item in data" :key="item.id">
        <h4>{{ item.title }}</h4>
        <small>{{ item.author }} - {{ item.publishedAt }}</small>
        <p>{{ item.description }}</p>
    </div>
    -->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-overline">Overline</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                    <div class="text-caption text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                    <q-img
                        class="rounded-borders"
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />
                </q-card-section>
            </q-card-section>
        </q-card>
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
