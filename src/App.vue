<template>
  <div id="app">
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered v-for="item in data" :key="item.id">
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-overline">{{ item.author }}</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
                    <div class="text-caption text-grey">{{ item.description }}</div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                    <q-img
                        class="rounded-borders"
                        :src="item.urlToImage"
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
