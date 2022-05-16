const { createApp } = Vue

const defaultPalmTreeVPs = 3;
const haurvatatDjinnPalmTreeVPs = 5;

const defaultVizierVPs = 1;
const jafaarDjinnVizierVPs = 3;

const defaultElderVPs = 2;
const shamhatDjinnElderVPs = 4;

const defaultPalaceVPs = 5;

const defaultMerchandiseCardSuitSliderValue = 1;

const app = createApp({
    data() {
        return {
            goldCount: 0,
            viziersCount: 0,
            vizierVPs: defaultVizierVPs,
            viziersScore: 0,
            eldersCount: 0,
            elderVPs: defaultElderVPs,
            eldersScore: 0,
            djinniesScore: 0,
            palmTreesCount: 0,
            palmTreeVPs: defaultPalmTreeVPs,
            palmTreesScore: 0,
            palacesCount: 0,
            palaceVPs: defaultPalaceVPs,
            palacesScore: 0,
            availableTileVPs: [4, 5, 6, 8, 10, 12, 15],
            lastPlayerTileId: 0,
            playerTiles: [],
            playerTilesScore: 0,
            lastMerchandiseCardSuitId: 1,
            merchandiseCardSuitSliderValue: defaultMerchandiseCardSuitSliderValue,
            merchandiseCardSuits: [],
            merchandiseCardSuitsScore: 0,
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
                {title: "Haurvatat (8) [Each Palm Tree is worth 5 VPs instead of 3]", key: {name: "Haurvatat", value: 8}},
                {title: "Iblis (8)", key: {name: "Iblis", value: 8}},
                {title: "Jafaar (6) [Each Vizier is worth 3 VPs instead of 1]", key: {name: "Jafaar", value: 6}},
                {title: "Kandicha (6)", key: {name: "Kandicha", value: 6}},
                {title: "Kumarbi (6)", key: {name: "Kumarbi", value: 6}},
                {title: "Lamia (10)", key: {name: "Lamia", value: 10}},
                {title: "Leta (4)", key: {name: "Leta", value: 4}},
                {title: "Marid (6)", key: {name: "Marid", value: 6}},
                {title: "Monkir (6)", key: {name: "Monkir", value: 6}},
                {title: "Nekir (6)", key: {name: "Nekir", value: 6}},
                {title: "Shamhat (6) [Each Elder is worth 4 VPs instead of 2]", key: {name: "Shamhat", value: 6}},
                {title: "Sibitis (4)", key: {name: "Sibitis", value: 4}},
                {title: "Sloar (8)", key: {name: "Sloar", value: 8}},
                {title: "Utug (4)", key: {name: "Utug", value: 4}}
            ],
            selectedDjinns: []
        }
    },
    methods: {
        getMerchandiseCardSuitVPs(cardsCount) {
            let VPs = 0;
            switch (cardsCount) {
                case 1:
                    VPs = 1;
                    break;
                case 2:
                    VPs = 3;
                    break;
                case 3:
                    VPs = 7;
                    break;
                case 4:
                    VPs = 13;
                    break;
                case 5:
                    VPs = 21;
                    break;
                case 6:
                    VPs = 30;
                    break;
                case 7:
                    VPs = 40;
                    break;
                case 8:
                    VPs = 50;
                    break;
                case 9:
                    VPs = 60;
                    break;
            }

            return VPs;
        },
        addMerchandiseCardSuit(suitSize) {
            this.lastMerchandiseCardSuitId++;
            this.merchandiseCardSuits.push({
                id: this.lastMerchandiseCardSuitId,
                size: suitSize,
                victoryPoints: this.getMerchandiseCardSuitVPs(suitSize)
            });

            this.scoreTotal();
        },
        removeMerchandiseCardSuitById(id) {
            let index = this.merchandiseCardSuits.findIndex((item) => item.id === id);
            this.merchandiseCardSuits.splice(index, 1);

            this.scoreTotal();
        },
        addPlayerTile(tileVPs) {
            this.lastPlayerTileId++;
            this.playerTiles.push({
                id: this.lastPlayerTileId,
                tileVPs: tileVPs
            });

            this.scoreTotal();
        },
        removePlayerTileById(id) {
            let index = this.playerTiles.findIndex((item) => item.id === id);
            this.playerTiles.splice(index, 1);

            this.scoreTotal();
        },
        scoreMerchandiseCardSuits() {
            let score = 0;
            for(let suit in this.merchandiseCardSuits) {
                score += this.merchandiseCardSuits[suit].victoryPoints;
            }

            this.merchandiseCardSuitsScore = score;
        },
        scorePlayerTiles() {
            let score = 0;
            for(let tile in this.playerTiles) {
                score += this.playerTiles[tile].tileVPs;
            }

            this.playerTilesScore = score;
        },
        scorePalaces() {
            this.palacesScore = this.palacesCount * this.palaceVPs;
        },
        scoreElders() {
            this.eldersScore = this.eldersCount * this.elderVPs;
        },
        scorePalmTrees() {
            this.palmTreesScore = this.palmTreesCount * this.palmTreeVPs;
        },
        scoreViziers() {
            this.viziersScore = this.viziersCount * this.vizierVPs;
        },
        scoreDjinns() {
            this.palmTreeVPs = defaultPalmTreeVPs;
            this.vizierVPs = defaultVizierVPs;
            this.elderVPs = defaultElderVPs;

            var score = 0;
            for(var djinnKey in this.selectedDjinns) {
                const djinn = this.selectedDjinns[djinnKey];
                score += djinn.value;

                if (djinn.name === "Haurvatat") {
                    this.palmTreeVPs = haurvatatDjinnPalmTreeVPs;
                }

                if (djinn.name === "Jafaar") {
                    this.vizierVPs = jafaarDjinnVizierVPs;
                }

                if (djinn.name === "Shamhat") {
                    this.elderVPs = shamhatDjinnElderVPs;
                }
            }

            this.djinniesScore = score;
        },
        scoreTotal() {
            this.scoreDjinns();
            this.scorePalmTrees();
            this.scoreViziers();
            this.scoreElders();
            this.scorePalaces();
            this.scorePlayerTiles();
            this.scoreMerchandiseCardSuits();

            this.totalScore = parseInt(this.goldCount)
                + parseInt(this.viziersScore)
                + parseInt(this.eldersScore)
                + parseInt(this.djinniesScore)
                + parseInt(this.palmTreesScore)
                + parseInt(this.palacesScore)
                + parseInt(this.playerTilesScore)
                + parseInt(this.merchandiseCardSuitsScore);
        }
    }
})

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');