//Tre på rad - View

function trePåRadView() {
    console.log("kjører");
    activeGameView = '<h1>Tre På Rad</h1>';
    if (model.data.trepårad.playerWon) {
        boardDiv.innerHTML = `<h1>${who}</h1>`;
    } else {
        for (let i = 0; i < 9; i++) {
            let first = i % 3 == 0 ? 'first' : '';
            activeGameView += `
        <div onclick="setX(${i})" class="cell color${model.data.trepårad.board[i]} ${first}">${model.data.trepårad.board[i]}
            </div>`;
        }
        
    }
gameView();
}