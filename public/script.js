const socket = io.connect('http://localhost:3000');
const boardElement = document.getElementById('board');

// Initialize an 8x8 board
const board = Array(8).fill(null).map(() => Array(8).fill(null));

// Render the board
function renderBoard() {
    boardElement.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', () => handleCellClick(i, j));
            if (board[i][j] === 'white') {
                const disc = document.createElement('div');
                disc.classList.add('white');
                cellElement.appendChild(disc);
            } else if (board[i][j] === 'black') {
                const disc = document.createElement('div');
                disc.classList.add('black');
                cellElement.appendChild(disc);
            }
            boardElement.appendChild(cellElement);
        }
    }
}

function handleCellClick(i, j) {
    // Handle cell click logic here
    // For now, just toggle between white and black for demonstration
    if (!board[i][j]) {
        board[i][j] = 'white';
    } else if (board[i][j] === 'white') {
        board[i][j] = 'black';
    } else {
        board[i][j] = null;
    }
    renderBoard();
}

renderBoard();
