import React,{useState,useEffect} from 'react'


function Gamecard() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);
  
    const handleClick = (index) => {
      if (board[index] || winner) return;
  
      const newBoard = board.slice();
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    };





  
    const renderSquare= (index) => (
      <button   onClick={() => handleClick(index)}>
      <div className={`segment s-${index+1}`}>{board[index]}</div>
      </button>
    );




  
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
    };
  
    return (
      <div className="game-card">
        <h1>Tic Tac Toe</h1>
        <div className="status">
          {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
        </div>
        <div className="cube">
        
         {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
         {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}
         {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
            
        </div>
        <br/>
        <button id="value-setting-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    );
  };
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };



export default Gamecard;
