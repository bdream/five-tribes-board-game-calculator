const { createApp } = Vue

function getNewPlayerSettings(playerId) {
    let player = {
        id: playerId,
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
    };

    return player;
};

const app = createApp({
    data() {
        return {
            settings: Settings,
            lastPlayerId: 0,
            players: [
                getNewPlayerSettings(1),
                getNewPlayerSettings(2)
            ]
        }
    },
    methods: {
        addMerchandiseCardSuit(player, cardsCount) {
            player.lastMerchandiseCardSuitId++;

            const suit = {
                id: player.lastMerchandiseCardSuitId,
                size: cardsCount,
                victoryPoints: Settings.getMerchandiseCardSuitVictoryPoints(cardsCount)
            };

            player.merchandiseCardSuits.push(suit);

            this.scoreTotal(player);
        },
        removeMerchandiseCardSuitById(player, id) {
            let index = player.merchandiseCardSuits.findIndex((item) => item.id === id);
            player.merchandiseCardSuits.splice(index, 1);

            this.scoreTotal(player);
        },
        addPlayerTile(player, tileVPs) {
            player.lastPlayerTileId++;

            const playerTile = {
                id: this.lastPlayerTileId,
                tileVPs: tileVPs,
                tileClass: Settings.getRandomAnimalClass()
            };

            player.playerTiles.push(playerTile);

            this.scoreTotal(player);
        },
        removePlayerTileById(player, id) {
            let index = player.playerTiles.findIndex((item) => item.id === id);
            player.playerTiles.splice(index, 1);

            this.scoreTotal(player);
        },
        scoreGoldCoins(player) {
            player.goldCoinsScore = player.goldCoinsCount * 1;
        },
        scoreMerchandiseCardSuits(player) {
            let score = 0;
            for(let suit in player.merchandiseCardSuits) {
                score += player.merchandiseCardSuits[suit].victoryPoints;
            }

            player.merchandiseCardSuitsScore = score;
        },
        scorePlayerTiles(player) {
            let score = 0;
            for(let tile in player.playerTiles) {
                score += player.playerTiles[tile].tileVPs;
            }

            player.playerTilesScore = score;
        },
        scorePalaces(player) {
            player.palacesScore = player.palacesCount * player.palaceVPs;
        },
        scoreElders(player) {
            player.eldersScore = player.eldersCount * player.elderVPs;
        },
        scorePalmTrees(player) {
            player.palmTreesScore = player.palmTreesCount * player.palmTreeVPs;
        },
        scoreViziers(player) {
            player.viziersScore = player.viziersCount * player.vizierVPs;
        },
        scoreDjinns(player) {
            player.palmTreeVPs = Settings.DEFAULT_PALM_TREE_VICTORY_POINTS;
            player.vizierVPs = Settings.DEFAULT_VIZIER_VICTORY_POINTS;
            player.elderVPs = Settings.DEFAULT_ELDER_VICTORY_POINTS;

            var score = 0;
            for(var djinnKey in player.selectedDjinns) {
                const djinn = player.selectedDjinns[djinnKey];
                score += djinn.value;

                if (djinn.name === Settings.DJINN_HAURVATAT_NAME) {
                    player.palmTreeVPs = Settings.DJINN_HAURVATAT_PALM_TREE_VICTORY_POINTS;
                }

                if (djinn.name === Settings.DJINN_JAFAAR_NAME) {
                    player.vizierVPs = Settings.DJINN_JAFAAR_VIZIER_VICTORY_POINTS;
                }

                if (djinn.name === Settings.DJINN_SHAMHAT_NAME) {
                    player.elderVPs = Settings.DJINN_SHAMHAT_ELDER_VICTORY_POINTS;
                }
            }

            player.djinniesScore = score;
        },
        scoreTotal(player) {
            this.scoreGoldCoins(player);
            this.scoreDjinns(player);
            this.scorePalmTrees(player);
            this.scoreViziers(player);
            this.scoreElders(player);
            this.scorePalaces(player);
            this.scorePlayerTiles(player);
            this.scoreMerchandiseCardSuits(player);

            player.totalScore = parseInt(player.goldCoinsScore)
                + parseInt(player.viziersScore)
                + parseInt(player.eldersScore)
                + parseInt(player.djinniesScore)
                + parseInt(player.palmTreesScore)
                + parseInt(player.palacesScore)
                + parseInt(player.playerTilesScore)
                + parseInt(player.merchandiseCardSuitsScore);
        }
    }
})

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');