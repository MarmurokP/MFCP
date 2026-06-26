const ui = {
    renderBoard() {
        const pathElement = document.getElementById('path');
        if(!pathElement) return;

        pathElement.innerHTML = '';

        gameState.path.forEach(tile => {
            const tileDiv = document.createElement('div');
            tileDiv.className = 'tile ${tile.color}-${tile.shape}';
            tileDiv.innerText = '${tile.color} ${tile.shape}';
            pathElement.appendChild(tileDiv);
        });
    },

    updateHeader() {
        document.getElementById('wall-status').innerText = gameState.wallIntact ? "Good" : "Destroyed";
        document.getElementById('trols-left').innerText = gameState.trollsInForest;
        document.getElementById('defenders-left').innerText = gameState.defendersInBag;
    }
};