
let board = ['','','','','','','','',''];
//Vez do jogador, primeiro = 0, segundo = 1.
let playerTime = 0;
let symbols =['o','x'];
let gameOver = false;
let winStates = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if(board[position] == '')    {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {

            playerTime = (playerTime == 0) ? 1 : 0;

            // Mesma coisa do trecho de codigo acima com o "?" e o ":"

        /* if (playerTime == 0) {
            playerTime =1 ;
        } else {
            playerTime = 0;
        } */

        turn (playerTime);}
    }

    return gameOver;
}

function turn(playerTime)
{
    let vez = document.getElementById("vez");

if(playerTime == 0) {

    vez.innerHTML = "É a vez do O (jogador 1)"
} else { vez.innerHTML = "É a vez do X (jogador 2)" }}

function isWin () {

     for (let i = 0; i < winStates.length; i++) {
         let seq = winStates[i]

         let pos1 = seq[0];
         let pos2 = seq[1];
         let pos3 = seq[2];

         if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
                return true
            }
     }

     return false
}
