<template>
    <div>
        {{ selectedSource }}
        <q-card class="my-card q-my-sm" flat bordered v-for="item in sourceArticles" :key="item.id" style="max-width: 60%">
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
            </q-card>
    </div>
</template>

<script>
const apiKey = '290befad42ad4ee99ddf698aeea1f543'
const axios = require('axios')

export default {
    data () {
        return {
            selectedSource: null,
            sources: null,
            sourceArticles: null
        }
    },
    methods: {
        renderArticles () {
            let domainParam = this.selectedSource.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
            console.log(domainParam)
            axios.get(`https://newsapi.org/v2/everything?domains=${domainParam}&apiKey=${apiKey}`).then(response => {
                this.sourceArticles = response.data.articles
            })
            console.log('article response: ', this.sourceArticles)
        }
    },
    mounted () {
        let param = this.$route.params.id

        const key = apiKey

        axios.get(`https://newsapi.org/v2/sources?language=en&country=us&apiKey=${key}`).then(response => {
            this.sources = response.data.sources

            this.sources.forEach(source => {
                if (param === source.id) {
                    this.selectedSource = source
                    this.renderArticles()
                }
            })
        })
    }
}
</script>

<style>

</style>