const { createApp } = Vue

const app = createApp({
    data() {
        return {
            settings: Settings,
            goldCoinsCount: 0,
            goldCoinsScore: 0,
            viziersCount: 0,
            vizierVPs: Settings.DEFAULT_VIZIER_VICTORY_POINTS,
            viziersScore: 0,
            eldersCount: 0,
            elderVPs: Settings.DEFAULT_ELDER_VICTORY_POINTS,
            eldersScore: 0,
            selectedDjinns: [],
            djinniesScore: 0,
            palmTreesCount: 0,
            palmTreeVPs: Settings.DEFAULT_PALM_TREE_VICTORY_POINTS,
            palmTreesScore: 0,
            palacesCount: 0,
            palaceVPs: Settings.DEFAULT_PALACE_VICTORY_POINTS,
            palacesScore: 0,
            lastPlayerTileId: 0,
            playerTiles: [],
            playerTilesScore: 0,
            lastMerchandiseCardSuitId: 1,
            merchandiseCardSuits: [],
            merchandiseCardSuitsScore: 0,
            totalScore: 0,
        }
    },
    methods: {
        addMerchandiseCardSuit(cardsCount) {
            this.lastMerchandiseCardSuitId++;

            const suit = {
                id: this.lastMerchandiseCardSuitId,
                size: cardsCount,
                victoryPoints: Settings.getMerchandiseCardSuitVictoryPoints(cardsCount)
            };

            this.merchandiseCardSuits.push(suit);

            this.scoreTotal();
        },
        removeMerchandiseCardSuitById(id) {
            let index = this.merchandiseCardSuits.findIndex((item) => item.id === id);
            this.merchandiseCardSuits.splice(index, 1);

            this.scoreTotal();
        },
        addPlayerTile(tileVPs) {
            this.lastPlayerTileId++;

            const playerTile = {
                id: this.lastPlayerTileId,
                tileVPs: tileVPs,
                tileClass: Settings.getRandomAnimalClass()
            };

            this.playerTiles.push(playerTile);

            this.scoreTotal();
        },
        removePlayerTileById(id) {
            let index = this.playerTiles.findIndex((item) => item.id === id);
            this.playerTiles.splice(index, 1);

            this.scoreTotal();
        },
        scoreGoldCoins() {
            this.goldCoinsScore = this.goldCoinsCount * 1;
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
            this.palmTreeVPs = Settings.DEFAULT_PALM_TREE_VICTORY_POINTS;
            this.vizierVPs = Settings.DEFAULT_VIZIER_VICTORY_POINTS;
            this.elderVPs = Settings.DEFAULT_ELDER_VICTORY_POINTS;

            var score = 0;
            for(var djinnKey in this.selectedDjinns) {
                const djinn = this.selectedDjinns[djinnKey];
                score += djinn.value;

                if (djinn.name === Settings.DJINN_HAURVATAT_NAME) {
                    this.palmTreeVPs = Settings.DJINN_HAURVATAT_PALM_TREE_VICTORY_POINTS;
                }

                    if (djinn.name === Settings.DJINN_JAFAAR_NAME) {
                    this.vizierVPs = Settings.DJINN_JAFAAR_VIZIER_VICTORY_POINTS;
                }

                if (djinn.name === Settings.DJINN_SHAMHAT_NAME) {
                    this.elderVPs = Settings.DJINN_SHAMHAT_ELDER_VICTORY_POINTS;
                }
            }

            this.djinniesScore = score;
        },
        scoreTotal() {
            this.scoreGoldCoins();
            this.scoreDjinns();
            this.scorePalmTrees();
            this.scoreViziers();
            this.scoreElders();
            this.scorePalaces();
            this.scorePlayerTiles();
            this.scoreMerchandiseCardSuits();

            this.totalScore = parseInt(this.goldCoinsScore)
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