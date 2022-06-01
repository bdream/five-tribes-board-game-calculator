const messages = {
    en: {
        title: 'Five Tribes: The Djinns Of Naqala',
        subtitle: 'Board Game Score Calculator',
        sourceCode: 'Source Code',
        player: {
            one: 'Player One',
            two: 'Player Two',
            three: 'Player Three',
            four: 'Player Four',
        },
        setPlayerResults: 'Set Player Results',
        goldCoinsScore: 'Gold Coins Score',
        goldCoinsAmount: 'Gold Coins Amount',
        viziersScore: 'Viziers Score',
        yellowMeeplesNumber: 'Number of yellow meeples',
        eldersScore: 'Elders Score',
        whiteMeeplesNumber:'Number of white meeples',
        djinniesScore:'Djinns Score',
        selectDjinnies:'Select Djinns',
        djinnName: {
            AlAmin:'Al-Amin (5)',
            AnunNak:'Anun-Nak (8)',
            Baal: "Ba'al (6)",
            Boaz: 'Boaz (6)',
            Boaraq: 'Boaraq (6)',
            Echidna: 'Echidna (4)',
            Enki: 'Enki (8)',
            Hagis: 'Hagis (10)',
            Haurvatat: 'Haurvatat (8) [Each Palm Tree is worth 5 VPs instead of 3]',
            Iblis: 'Iblis (8)',
            Jafaar: 'Jafaar (6) [Each Vizier is worth 3 VPs instead of 1]',
            Kandicha: 'Kandicha (6)',
            Kumarbi: 'Kumarbi (6)',
            Lamia: 'Lamia (10)',
            Leta: 'Leta (4)',
            Marid: 'Marid (6)',
            Monkir: 'Monkir (6)',
            Nekir: 'Nekir (6)',
            Shamhat: 'Shamhat (6) [Each Elder is worth 4 VPs instead of 2]',
            Sibitis: 'Sibitis (4)',
            Sloar: 'Sloar (8)',
            Utug: 'Utug (4)'
        },
        palmTreesScore: 'Palm Trees Score',
        palmTreesNumber: 'Number of palm trees',
        palacesScore: 'Palaces Score',
        palacesCount: 'Number of palaces',
        playerTilesScore: 'Player Tiles Score',
        selectPlayerTiles: 'Select Player Tiles',
        addVPsTile: 'Add {0} VPs tile',
        merchandiseScore: 'Merchandise Score',
        selectMerchandiseCardSuits: 'Select Merchandise Card Suits',
        addMerchandiseCardSuit: 'Add {0} card suit',
        addPlayer: 'Add player',
        totalScore: 'Total Score'
    },
    ru: {
        title: 'Пять племён: Джинны Накалы',
        subtitle: 'Счётчик очков настольной игры',
        sourceCode: 'Исходный код',
        player: {
            one: 'Первый игрок',
            two: 'Второй игрок',
            three: 'Третий игрок',
            four: 'Четвёртый игрок',
        },
        setPlayerResults: 'Заполнить результаты игрока',
        goldCoinsScore: 'ПО за золотые монеты',
        goldCoinsAmount: 'Количество золотых монет',
        viziersScore: 'ПО за визирей',
        yellowMeeplesNumber: 'Количество жёлтых миплов',
        eldersScore: 'ПО за старейшин',
        whiteMeeplesNumber:'Количество белых миплов',
        djinniesScore:'ПО за джиннов',
        selectDjinnies:'Выберите джиннов',
        djinnName: {
            AlAmin: 'Аль-Амин (5)',
            AnunNak: 'Ануннак (8)',
            Baal: 'Баал (6)',
            Boaz: 'Вооз (6)',
            Boaraq: 'Бурак (6)',
            Echidna: 'Ехидна (4)',
            Enki: 'Эа (8)',
            Hagis: 'Хегис (10)',
            Haurvatat: 'Аурват (8) [Каждая пальма приносит 5 ПО вместо 3]',
            Iblis: 'Иблис (8)',
            Jafaar: 'Джафар (6) [Каждый визирь приносит 3 ПО вместо 1]',
            Kandicha: 'Кандиша (6)',
            Kumarbi: 'Кумарби (6)',
            Lamia: 'Ламия (10)',
            Leta: 'Лета (4)',
            Marid: 'Марид (6)',
            Monkir: 'Мункар (6)',
            Nekir: 'Накир (6)',
            Shamhat: 'Шамхат (6) [Каждый старейшина приносит 4 ПО вместо 2]',
            Sibitis: 'Себитти (4)',
            Sloar: 'Слор (8)',
            Utug: 'Утуг (4)'
        },
        palmTreesScore: 'ПО за пальмы',
        palmTreesNumber: 'Количество пальм',
        palacesScore: 'ПО за дворцы',
        palacesCount: 'Количество дворцов',
        playerTilesScore: 'ПО за султанаты игрока',
        selectPlayerTiles: 'Выберите султанаты игрока',
        addVPsTile: 'Султанат за {0} ПО',
        merchandiseScore: 'ПО за товары',
        selectMerchandiseCardSuits: 'Выберите наборы карт товаров',
        addMerchandiseCardSuit: 'Сет из {0} товаров',
        addPlayer: 'Добавить игрока',
        totalScore: 'Итоговый счёт'
    }
}

function getLocaleMessages(locale) {
    return messages[locale];
}