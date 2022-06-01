const Settings = {
    DEFAULT_VIZIER_VICTORY_POINTS: 1,
    DEFAULT_ELDER_VICTORY_POINTS: 2,
    DEFAULT_PALM_TREE_VICTORY_POINTS: 3,
    DEFAULT_PALACE_VICTORY_POINTS: 5,
    PLAYER_HAS_MORE_VIZIERS_THAN_OTHER_PLAYER_VICTORY_POINTS: 10,
    DJINN_HAURVATAT_NAME: "Haurvatat",
    DJINN_JAFAAR_NAME: "Jafaar",
    DJINN_SHAMHAT_NAME: "Shamhat",
    DJINN_HAURVATAT_PALM_TREE_VICTORY_POINTS: 5,
    DJINN_JAFAAR_VIZIER_VICTORY_POINTS: 3,
    DJINN_SHAMHAT_ELDER_VICTORY_POINTS: 4,
    TILE_VICTORY_POINTS_VALUES: [4, 5, 6, 8, 10, 12, 15],
    DJINN_TREE_DATA_FORMAT: { label: "title", value: "key" },
    DJINN_TREE_DATA: [
        {title: "", key: {name: "AlAmin", value: 5}},
        {title: "", key: {name: "AnunNak", value: 8}},
        {title: "", key: {name: "Baal", value: 6}},
        {title: "", key: {name: "Boaz", value: 6}},
        {title: "", key: {name: "Boaraq", value: 6}},
        {title: "", key: {name: "Echidna", value: 4}},
        {title: "", key: {name: "Enki", value: 8}},
        {title: "", key: {name: "Hagis", value: 10}},
        {title: "", key: {name: "Haurvatat", value: 8}},
        {title: "", key: {name: "Iblis", value: 8}},
        {title: "", key: {name: "Jafaar", value: 6}},
        {title: "", key: {name: "Kandicha", value: 6}},
        {title: "", key: {name: "Kumarbi", value: 6}},
        {title: "", key: {name: "Lamia", value: 10}},
        {title: "", key: {name: "Leta", value: 4}},
        {title: "", key: {name: "Marid", value: 6}},
        {title: "", key: {name: "Monkir", value: 6}},
        {title: "", key: {name: "Nekir", value: 6}},
        {title: "", key: {name: "Shamhat", value: 6}},
        {title: "", key: {name: "Sibitis", value: 4}},
        {title: "", key: {name: "Sloar", value: 8}},
        {title: "", key: {name: "Utug", value: 4}}
    ],
    getRandomAnimalClass() {
        const animalClasses = [
            "fa-dog",
            "fa-bugs",
            "fa-cow",
            "fa-spider",
            "fa-fish",
            "fa-horse",
            "fa-hippo",
            "fa-crow",
            "fa-dove",
            "fa-dragon",
            "fa-fish-fins",
            "fa-otter",
            "fa-frog",
            "fa-mosquito",
            "fa-locust",
            "fa-worm",
            "fa-cat"
        ];

        const randomAnimalIndex = Math.floor(Math.random() * animalClasses.length);
        return animalClasses[randomAnimalIndex];
    },
    getMerchandiseCardSuitVictoryPoints(cardsCount) {
        const merchandiseCardSuitVictoryPoints = {
            "1": 1,
            "2": 3,
            "3": 7,
            "4": 13,
            "5": 21,
            "6": 30,
            "7": 40,
            "8": 50,
            "9": 60
        };

        return merchandiseCardSuitVictoryPoints[cardsCount];
    }
}