<template>
    <div id="app">
        <div class="col q-pa-md q-mx-xl" align="center">
            <q-input
                class="col"
                v-model="search"
                debounce="1000"
                filled
                placeholder="Search keyword"
                @input="searchKeyword"
            >
                <template v-slot:append>
                    <q-icon name="fas fa-search" />
                </template>
            </q-input>

            <q-card class="my-card q-my-sm" flat bordered v-for="item in data" :key="item.id" style="max-width: 60%">
                <q-card-section horizontal>
                    <q-card-section class="col-5 flex flex-center" v-if="typeof item.urlToImage === 'string'">
                        <q-img
                            class="rounded-borders"
                            :src="item.urlToImage"
                            height="200px"
                            width="250px"
                        />
                    </q-card-section>

                    <q-card-section class="q-pt-xs">
                        <div class="text-overline">{{ item.author }}</div>
                            <div class="text-h6 q-mt-sm q-mb-xs">
                                <a :href="item.url" target="_blank" class="text-primary link" style="text-decoration: none">{{ item.title }}</a>
                            </div>
                        <div class="text-caption text-grey">{{ item.description }}</div>
                    </q-card-section>
                </q-card-section>

                <q-card-section horizontal class="q-pa-xl">
                    <q-card class="bg-grey-3 rounded-borders">
                        <q-card-section horizontal>
                            <q-card-section class="q-pt-xs">
                                Sentiment analysis: 
                            </q-card-section>

                            <q-card-section class="q-pt-xs col-4">
                                <q-knob
                                    show-value
                                    class="text-light-blue q-ma-md"
                                    :value="sentimentAbsVal(item)"
                                    size="60px"
                                    :color="sentimentColor(item)"
                                >
                                    {{ calculateSentiment(item) }}
                                </q-knob>
                            </q-card-section>
                        </q-card-section>
                    </q-card>                 
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
const apiKey = '290befad42ad4ee99ddf698aeea1f543'
const axios = require('axios')
const Sentiment = require('sentiment')
const sentiment = new Sentiment()

export default {
  name: 'App',
  data () {
    return {
      data: null,
      search: '',
      value: 55
    }
  },
  methods: {
    searchKeyword () {
      const key = apiKey
      let search = this.search

      axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`).then(response => this.data = response.data.articles) 
    },
    calculateSentiment (item) {
      if (item.content !== null) {
        let score = (sentiment.analyze(item.content).comparative).toFixed(2) * 100
        if (score === 0) {
            return 'Neutral'
        } else {
            return score + '%'
        }
      } else if (item.content === undefined) {
          return 'N/A'
      }
    },
    sentimentAbsVal (item) {
        if (item.content !== null) {
            return Math.abs((sentiment.analyze(item.content).comparative).toFixed(2) * 100)
        } else if (item.content === undefined) {
            return 'N/A'
        }
    },
    sentimentColor (item) {
        if (item.content !== null) {
            let sign = Math.sign((sentiment.analyze(item.content).comparative).toFixed(2) * 100)
            if (sign === 1) {
                return 'light-blue'
            } else if (sign === 0) {
                return 'grey-8'
            } else if (sign === -1) {
                return 'red-8'
            }
        }
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

.link:hover {
  color: red
}
</style>
