const CARD_TYPES = {
    GREEN_CIRCLE: {color: 'green', shape: 'circle', lable:'Green circle'},
    GREEN_SQUARE: {color: 'green', shape: 'square', lable:'Green square'},
    GREEN_TRIANGLE: {color: 'green', shape: 'triangle', lable:'Green triangle'},

    RED_CIRCLE: {color: 'red', shape: 'circle', lable:'Red circle'},
    RED_SQUARE: {color: 'red', shape: 'square', lable:'Red square'},
    RED_TRIANGLE: {color: 'red', shape: 'triangle', lable:'Red triangle'},

    BLUE_CIRCLE: {color: 'blue', shape: 'circle', lable:'Blue circle'},
    BLUE_SQUARE: {color: 'blue', shape: 'square', lable:'Blue square'},
    BLUE_TRIANGLE: {color: 'blue', shape: 'triangle', lable:'Blue triangle'},

    ANY_GREEN: {color: 'green', shape: 'any', lable:'Any green'},
    ANY_RED: {color: 'red', shape: 'any', lable:'Any red'},
    ANY_BLUE: {color: 'blue', shape: 'any', lable:'Any blue'},

    ANY_CIRCLE: {color: 'any', shape: 'circle', lable:'Any circle'},
    ANY_SQUARE: {color: 'any', shape: 'square', lable:'Any square'},
    ANY_TRIANGLE: {color: 'any', shape: 'triangle', lable:'Any triangle'},

    SLIGHTSHOT: {color: 'special', shape: 'slightshot', lable:'Slightshot'},
    REBUILD: {color: 'special', shape: 'rebuild', lable:'Rebuild the wall'}
};

const TROLLS_TYPES = {
    REGULAR: {name: 'Troll', type: 'regular', emoji: '👹'},
    REGULAR: {name: 'Runner', type: 'runner', emoji: '🏃‍♂️'},
    REGULAR: {name: 'Heavy', type: 'heavy', emoji: '🦍'},
    REGULAR: {name: 'Chief', type: 'chief', emoji: '👑'}
};

const gameState = {
    wallIntact: true,
    castleDestroyed: false,

    defendersInBag: [],
    trollsInForst: [],
    activeTrolls: [],
    playerHand: [],

    path: [
        {id: 0, color: 'red', shape: 'triangle', troll: null},
        {id: 1, color: 'green', shape: 'circle', troll: null},
        {id: 2, color: 'blue', shape: 'square', troll: null},

        {id: 3, color: 'green', shape: 'triangle', troll: null},
        {id: 4, color: 'blue', shape: 'circle', troll: null},
        {id: 5, color: 'red', shape: 'square', troll: null},

        {id: 6, color: 'blue', shape: 'triangle', troll: null},
        {id: 7, color: 'red', shape: 'circle', troll: null},
        {id: 8, color: 'green', shape: 'square', troll: null},
    ],
   
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createDeck() {
    const deck = [];
    let idCounter = 0;

    const addCard = (type, count, imgName) => {
        for (let i = 0; i < count; i++) {
            deck.push({
                id: 'card_${idCounter}',
                color: type.color,
                shape: type.shape,
                lable: type.lable,
                image: 'assets/images/cards/${imgName}.png'
            });
        }
    };

    addCard(CARD_TYPES.GREEN_CIRCLE, 2, 'green_circle');
    addCard(CARD_TYPES.GREEN_SQUARE, 2, 'green_square');
    addCard(CARD_TYPES.GREEN_TRIANGLE, 2, 'green_triangle');

    addCard(CARD_TYPES.RED_CIRCLE, 2, 'red_circle');
    addCard(CARD_TYPES.RED_SQUARE, 2, 'red_square');
    addCard(CARD_TYPES.RED_TRIANGLE, 2, 'red_triangle');

    addCard(CARD_TYPES.BLUE_CIRCLE, 2, 'blue_circle');
    addCard(CARD_TYPES.BLUE_SQUARE, 2, 'blue_square');
    addCard(CARD_TYPES.BLUE_TRIANGLE, 2, 'blue_triangle');

    addCard(CARD_TYPES.ANY_GREEN, 1, 'any_green');
    addCard(CARD_TYPES.ANY_RED, 1, 'any_red');
    addCard(CARD_TYPES.ANY_BLUE, 1, 'any_blue');
    addCard(CARD_TYPES.ANY_CIRCLE, 1, 'any_circle');
    addCard(CARD_TYPES.ANY_SQUARE, 1, 'any_square');
    addCard(CARD_TYPES.ANY_TRIANGLE, 1, 'any_triangle');

    addCard(CARD_TYPES.SLIGHTSHOT, 1, 'slightshot');
    addCard(CARD_TYPES.REBUILD, 1, 'rebuild');

    gameState.deck = shuffle(deck);
}

function checkMatch(card, trollTile) {
    return card.color === trollTile.color && card.shape === trollTile.shape;
}