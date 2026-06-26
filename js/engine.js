const gameState = {
    wallIntact: true,
    defendersInBag: 26,
    trollsInForst: 13,
    path: [
        {id: 0, color: 'green', shape: 'circle', troll: null},
        {id: 1, color: 'red', shape: 'square', troll: null},
        {id: 2, color: 'blue', shape: 'triangle', troll: null},
    ],
    playerHand: []
};

function checkMatch(card, trollTile) {
    return card.color === trollTile.color && card.shape === trollTile.shape;
}