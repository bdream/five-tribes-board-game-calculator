const { createApp } = Vue

const app = createApp({
    data() {
        return {
            goldCount: 0,
            viziersCount: 0,
            eldersCount: 0,
            djinniesScore: 0,
            palmTreesCount: 0,
            palacesCount: 0,
            camelsScore: 0,
            resourceCardsScore: 0,
            totalScore: 0
        }
    },
    methods: {
        scoreTotal() {
            this.totalScore = parseInt(this.goldCount)
                + parseInt(this.viziersCount)
                + parseInt(this.eldersCount * 2)
                + parseInt(this.djinniesScore)
                + parseInt(this.palmTreesCount * 3)
                + parseInt(this.palacesCount * 5)
                + parseInt(this.camelsScore)
                + parseInt(this.resourceCardsScore);
        }
    }
})

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');