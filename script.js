const board = document.querySelector('.board');

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.row = row;
    square.dataset.col = col;

    const isWhite = (row + col) % 2 === 0;
    square.classList.add(isWhite ? 'white' : 'black');

    // Adiciona UMA peça (bolinha branca) na posição inicial (linha 6, coluna 4)
    if (row === 6 && col === 4) {
      const piece = document.createElement('div');
      piece.classList.add('piece');
      piece.style.backgroundColor = 'white';
      piece.dataset.piece = 'true';
      square.appendChild(piece);
    }

    board.appendChild(square);
  }
}

// Evento de clique para mover a peça
board.addEventListener('click', (e) => {
  const target = e.target;

  // Verifica se clicou numa peça
  if (target.classList.contains('piece')) {
    const currentSquare = target.parentElement;
    const currentRow = parseInt(currentSquare.dataset.row);
    const currentCol = parseInt(currentSquare.dataset.col);

    // Define nova posição (um quadrado acima)
    const newRow = currentRow - 1;
    const newCol = currentCol;

    // Encontra a nova casa
    const squares = document.querySelectorAll('.square');
    const destination = Array.from(squares).find(
      (sq) =>
        parseInt(sq.dataset.row) === newRow &&
        parseInt(sq.dataset.col) === newCol
    );

    // Move a peça para o novo quadrado se estiver vazio
    if (destination && destination.children.length === 0) {
      destination.appendChild(target);
    }
  }
});
