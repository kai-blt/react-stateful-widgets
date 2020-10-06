import React, {useState} from 'react';

const cellNames = ['cell NW', 'cell N', 'cell NE', 'cell W', 'cell X', 'cell E', 'cell SW', 'cell S', 'cell SE'];
const cellMarked = [];

export default function TicTacToe(props) {
    //Keep track of who's turn it is
    const [player, setPlayer] = useState('player 1');
    //Keep track of which cells have been marked
    const [marked, setMarked] = useState(cellMarked);

    function checkSquare(e) {
        if (player === 'player 1') {
            e.target.textContent = 'X'
            setMarked([...marked, e.target.className]);
            setPlayer('computer');
        }
    }

    if (player === 'computer') {
        let computerChoice = Math.floor(Math.random() * cellNames.length - 1);
        let hasMoved = false;
        console.log(cellNames[computerChoice])
        
        while (!hasMoved) {
            if (cellNames[computerChoice] !== marked) {
                let computerCell = document.getElementsByClassName(`${cellNames[computerChoice]}`);
                computerCell[0].textContent = 'O';
                hasMoved = true;
                setMarked([...marked, cellNames[computerChoice]]);
                setPlayer('player 1')
            } 
        }
    }

    return (
    <div className='container'>
        <h2>TicTacToe</h2>
        <div>
            <h3>Player 1 is X | Computer is O</h3>
            <p>It is currently {player}'s turn</p>
        </div>
        <div className='board'>
            <div>
                <div className="cell NW" onClick={event => checkSquare(event)}>-</div><div className="cell N" onClick={event => checkSquare(event)}>-</div><div className="cell NE" onClick={event => checkSquare(event)}>-</div>
            </div>
            <div>
                <div className="cell W" onClick={event => checkSquare(event)}>-</div><div className="cell X" onClick={event => checkSquare(event)}>-</div><div className="cell E" onClick={event => checkSquare(event)}>-</div>
            </div>
            <div>
                <div className="cell SW" onClick={event => checkSquare(event)}>-</div><div className="cell S" onClick={event => checkSquare(event)}>-</div><div className="cell SE" onClick={event => checkSquare(event)}>-</div>
            </div>
        </div>
    </div>
    );
}