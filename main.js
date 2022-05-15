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
            totalScore: 0,
            djinnDataFormat: { label: "title", value: "key" },
            djinnsTreeData: [
                {title: "Al-Amin (5)", key: {name: "Al-Amin", value: 5}},
                {title: "Anun-Nak (8)", key: {name: "Anun-Nak", value: 8}},
                {title: "Ba'al (6)", key: {name: "Baal", value: 6}},
                {title: "Boaz (6)", key: {name: "Boaz", value: 6}},
                {title: "Boaraq (6)", key: {name: "Boaraq", value: 6}},
                {title: "Echidna (4)", key: {name: "Echidna", value: 4}},
                {title: "Enki (8)", key: {name: "Enki", value: 8}},
                {title: "Hagis (10)", key: {name: "Hagis", value: 10}},
                {title: "Haurvatat (8)", key: {name: "Haurvatat", value: 8}},
                {title: "Iblis (8)", key: {name: "Iblis", value: 8}},
                {title: "Jafaar (6)", key: {name: "Jafaar", value: 6}},
                {title: "Kandicha (6)", key: {name: "Kandicha", value: 6}},
                {title: "Kumarbi (6)", key: {name: "Kumarbi", value: 6}},
                {title: "Lamia (10)", key: {name: "Lamia", value: 10}},
                {title: "Leta (4)", key: {name: "Leta", value: 4}},
                {title: "Marid (6)", key: {name: "Marid", value: 6}},
                {title: "Monkir (6)", key: {name: "Monkir", value: 6}},
                {title: "Nekir (6)", key: {name: "Nekir", value: 6}},
                {title: "Shamhat (6)", key: {name: "Shamhat", value: 6}},
                {title: "Sibitis (4)", key: {name: "Sibitis", value: 4}},
                {title: "Sloar (8)", key: {name: "Sloar", value: 8}},
                {title: "Utug (4)", key: {name: "Utug", value: 4}}
            ],
            selectedDjinns: []
        }
    },
    methods: {
        scoreDjinns() {
            var score = 0;
            for(var djinnKey in this.selectedDjinns) {
                score += this.selectedDjinns[djinnKey].value;
            }

            this.djinniesScore = score;
        },
        scoreTotal() {
            this.scoreDjinns();

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