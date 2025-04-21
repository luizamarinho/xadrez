let board = document.querySelector('.board'); // acessa o tabuleiro a partir da classe board

// loop para percorrer cada linha e cada coluna, adicionando uma div e a classe square em cada uma
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let square = document.createElement('div');
    square.classList.add('square'); // responsável pelo tamanho de cada casa do tabuleiro

    //percorre as casas do tabuleiro preenchendo com as cores branco e preto
    if ((row + col) % 2 === 0) {
      square.classList.add('white');
      console.log('chegou');
    } else {
      square.classList.add('black');
      console.log('chegou');
    }

    board.appendChild(square); //adiciona a div square dentro da div do tabuleiro
  }
}
