const { createApp } = Vue

const defaultLocale = "en";

const initialPlayerId = 1;

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
            lastPlayerId: initialPlayerId,
            players: [
                getNewPlayerSettings(initialPlayerId)
            ],
            locales: ["en", "ru", "de"],
            selectedLocale: defaultLocale,
            messages: Localization.getLocaleMessages(defaultLocale)
        };
    },
    mounted() {
        if (localStorage.selectedLocale) {
            this.setLocale(localStorage.selectedLocale)
        } else {
            this.setLocale(defaultLocale)
        }
    },
    methods: {
        setLocale(locale) {
            this.selectedLocale = locale;
            this.messages = Localization.getLocaleMessages(this.selectedLocale);

            localStorage.selectedLocale = this.selectedLocale;
        },
        getLabel() {
            let label = arguments[0];
            for (let i = 1; i < arguments.length; i++) {
                label = label.replace("{" + i + "}", arguments[i]);
            }

            return label;
        },
        addPlayer() {
            if (this.lastPlayerId < 4) {
                this.lastPlayerId++;

                let player = getNewPlayerSettings(this.lastPlayerId);
                this.players.push(player);

                this.scoreTotal(player);
            }
        },
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
        scoreViziers() {
            this.players.forEach(currentPlayer => {
                let playersWithLessViziersThanCurrentPlayer = this.players.filter(p => parseInt(p.viziersCount) < parseInt(currentPlayer.viziersCount));
                let playersCount = playersWithLessViziersThanCurrentPlayer.length;
                let additionalViziersVictoryPoints = playersCount * Settings.PLAYER_HAS_MORE_VIZIERS_THAN_OTHER_PLAYER_VICTORY_POINTS;
                currentPlayer.viziersScore = currentPlayer.viziersCount * currentPlayer.vizierVPs + additionalViziersVictoryPoints;
            });
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
            this.scoreViziers();
            this.scoreElders(player);
            this.scoreDjinns(player);
            this.scorePalmTrees(player);
            this.scorePalaces(player);
            this.scorePlayerTiles(player);
            this.scoreMerchandiseCardSuits(player);

            this.players.forEach(p => {
                p.totalScore = parseInt(p.goldCoinsScore)
                    + parseInt(p.viziersScore)
                    + parseInt(p.eldersScore)
                    + parseInt(p.djinniesScore)
                    + parseInt(p.palmTreesScore)
                    + parseInt(p.palacesScore)
                    + parseInt(p.playerTilesScore)
                    + parseInt(p.merchandiseCardSuitsScore);
            });
        }
    }
})

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');