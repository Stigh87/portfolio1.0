//Tre på rad - Controller

function reset() {   
    model.data.games.board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    playerWon = false;
trePåRadView();
}

function setX(index) {
    if (board[index] === '') {
        board[index] = 'x';
        checkWinnings()
    }
    if (playerWon == false) {
        show(); 
    setO();               
    }
trePåRadView();
}

function setO() {
    let blankIndexes = Array.from(board.keys()).filter(i => board[i] === '');
    if (blankIndexes.length === 0) return;
    let random = Math.floor(Math.random() * blankIndexes.length);
    let blankIndex = blankIndexes[random];
    board[blankIndex] = 'o';
    checkWinnings()
trePåRadView();
}


function checkWinnings() {

    if (((board[0] == 'x') && (board[1] == 'x') && (board[2] == 'x')) ||
        ((board[3] == 'x') && (board[4] == 'x') && (board[5] == 'x')) ||
        ((board[6] == 'x') && (board[7] == 'x') && (board[8] == 'x')) ||

        ((board[0] == 'x') && (board[3] == 'x') && (board[6] == 'x')) ||
        ((board[1] == 'x') && (board[4] == 'x') && (board[7] == 'x')) ||
        ((board[2] == 'x') && (board[5] == 'x') && (board[8] == 'x')) ||

        ((board[0] == 'x') && (board[4] == 'x') && (board[8] == 'x')) ||
        ((board[2] == 'x') && (board[4] == 'x') && (board[6] == 'x'))) {
        winnerSum.push('x');
        who = "DU HAR VUNNET";
        playerWon = true;
        counterX += 1;
    }


    else if (((board[0] == 'o') && (board[1] == 'o') && (board[2] == 'o')) ||
        ((board[3] == 'o') && (board[4] == 'o') && (board[5] == 'o')) ||
        ((board[6] == 'o') && (board[7] == 'o') && (board[8] == 'o')) ||

        ((board[0] == 'o') && (board[3] == 'o') && (board[6] == 'o')) ||
        ((board[1] == 'o') && (board[4] == 'o') && (board[7] == 'o')) ||
        ((board[2] == 'o') && (board[5] == 'o') && (board[8] == 'o')) ||

        ((board[0] == 'o') && (board[4] == 'o') && (board[8] == 'o')) ||
        ((board[2] == 'o') && (board[4] == 'o') && (board[6] == 'o'))) {
        winnerSum.push('o');
        counterO += 1;
        who = "DU TAPTE";
        playerWon = true;
    }

    else if (((board[0] != '') && (board[1] != '') && (board[2] != '')) &&
        ((board[3] != '') && (board[4] != '') && (board[5] != '')) &&
        ((board[6] != '') && (board[7] != '') && (board[8] != ''))) {
        winnerSum.push('0');
        counter0 += 1;
        who = "UAVGJORT";
        playerWon = true;
    }

}