<template>
    <div>
        {{ selectedSource }}
    </div>
</template>

<script>
const apiKey = '290befad42ad4ee99ddf698aeea1f543'
const axios = require('axios')

export default {
    data () {
        return {
            selectedSource: null,
            sources: null
        }
    },
    mounted () {
        console.log(this.$route)
        let param = this.$route.params.id

        const key = apiKey

        axios.get(`https://newsapi.org/v2/sources?language=en&country=us&apiKey=${key}`).then(response => {
            this.sources = response.data.sources
            console.log('response.data.sources: ', response.data.sources)
            console.log('abc-news: ', this.sources[0])
            console.log('param: ', param)

            this.sources.forEach(source => {
                if (param === source.id) {
                    this.selectedSource = source
                }
            })

            console.log(this.selectedSource)
        })

    }
}
</script>

<style>

</style>