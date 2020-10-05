import React, {useState} from 'react';



export default function TicTacToe(props) {
    const [player, setPlayer] = useState('player 1');

    return (
    <div className='container'>
        <h2>TicTacToe</h2>
        <div className='board'>
            <div>
                <div className="cell NW">NW</div><div className="cell N">N</div><div className="cell NE">NE</div>
            </div>
            <div>
                <div className="cell W">W</div><div className="cell X">X</div><div className="cell E">E</div>
            </div>
            <div>
                <div className="cell SW">SW</div><div className="cell S">S</div><div className="cell SE">SE</div>
            </div>
        </div>
    </div>
    );
}