const Settings = {
    DEFAULT_PALM_TREE_VICTORY_POINTS: 3,
    DJINN_HAURVATAT_PALM_TREE_VICTORY_POINTS: 5,
    DEFAULT_VIZIER_VICTORY_POINTS: 1,
    DJINN_JAFAAR_VIZIER_VICTORY_POINTS: 3,
    DEFAULT_ELDER_VICTORY_POINTS: 2,
    DJINN_SHAMHAT_ELDER_VICTORY_POINTS: 4,
    DEFAULT_PALACE_VICTORY_POINTS: 5,
    TILE_VICTORY_POINTS_VALUES: [4, 5, 6, 8, 10, 12, 15],
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
    }
}