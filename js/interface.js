document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position))
    {
        setTimeout (()=> {
            alert("o Jogo acabou! Vencedor foi o jogador " + (playerTime + 1) )
        }, 20);
    };
    updateSquare(position)
}

// Função nova e mais objetiva que atualiza somente o quadrado clicado

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

// Parte antiga do codigo que atualizava todos os quadrados do tabuleiro

/* function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }

})
} */

function reset(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        
        square.innerHTML = ''
        gameOver = false;
        playerTime = 0;
        board = ['', '', '', '', '', '', '', '', ''];
        let vez = document.getElementById("vez");
        vez.innerHTML = "É a vez do O (jogador 1)"
    })
}