const Settings = {
    DEFAULT_PALM_TREE_VICTORY_POINTS: 3,
    DJINN_HAURVATAT_PALM_TREE_VICTORY_POINTS: 5,
    DEFAULT_VIZIER_VICTORY_POINTS: 1,
    DJINN_JAFAAR_VIZIER_VICTORY_POINTS: 3,
    DEFAULT_ELDER_VICTORY_POINTS: 2,
    DJINN_SHAMHAT_ELDER_VICTORY_POINTS: 4,
    DEFAULT_PALACE_VICTORY_POINTS: 5,
    TILE_VICTORY_POINTS_VALUES: [4, 5, 6, 8, 10, 12, 15],
    DJINN_TREE_DATA_FORMAT: { label: "title", value: "key" },
    DJINN_TREE_DATA: [
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
    },
}