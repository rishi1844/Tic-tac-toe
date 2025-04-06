import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isTurn, setIsTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    };

    const winner = checkWinner();

    const handleClick = (index) => {
        if (state[index] || winner) return;

        const copyState = [...state];
        copyState[index] = isTurn ? "X" : "O";
        setState(copyState);
        setIsTurn(!isTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
        setIsTurn(true);
    };

    return (
        <div className="container">
            <div className={`turn-message ${winner ? 'fade-out' : 'fade-in'}`}>
                {!winner && <h4>Player {isTurn ? "X" : "O"}, please move</h4>}
            </div>
            
            <div className="row">
                <Square onClick={() => handleClick(0)} val={state[0]} />
                <Square onClick={() => handleClick(1)} val={state[1]} />
                <Square onClick={() => handleClick(2)} val={state[2]} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(3)} val={state[3]} />
                <Square onClick={() => handleClick(4)} val={state[4]} />
                <Square onClick={() => handleClick(5)} val={state[5]} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(6)} val={state[6]} />
                <Square onClick={() => handleClick(7)} val={state[7]} />
                <Square onClick={() => handleClick(8)} val={state[8]} />
            </div>
            
            {winner && (
                <div className="winner-message">
                    <h4>Player {winner} won the game!</h4>
                    <button onClick={handleReset}>Play again</button>
                </div>
            )}
            
            {!winner && <button onClick={handleReset}>Reset</button>}
        </div>
    );
};

export default Board;
