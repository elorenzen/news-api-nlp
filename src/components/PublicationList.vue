<template>
    <div>
        <h4>Publications</h4>

        <q-card class="my-card q-my-sm" flat bordered v-for="source in data" :key="source.id" style="max-width: 60%">
            <q-card-section>
                <q-btn
                fab
                color="primary"
                icon="score"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        <a :href="source.url" target="_blank" class="text-primary link" style="text-decoration: none">{{ source.name }}</a>
                    </div>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                    {{ source.description }}
                </div>
                <div class="text-caption text-grey">
                    {{ source.category.toUpperCase() }}
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn :to="`/publication/${source.id}`" label="View Profile" />
            </q-card-actions>

                <!--
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
                -->
        </q-card>
    </div>
</template>

<script>
const apiKey = '290befad42ad4ee99ddf698aeea1f543'
const axios = require('axios')
const Sentiment = require('sentiment')
const sentiment = new Sentiment()

export default {
  name: 'Landing',
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
    /*
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
    */
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

    axios.get(`https://newsapi.org/v2/sources?language=en&country=us&apiKey=${key}`).then(response => {
        this.data = response.data.sources
        console.log(response.data.sources)
    })
  }
}
</script>

<style>

</style>