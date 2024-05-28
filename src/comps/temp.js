import React, { useState } from "react";
import Light from "./Light";
import "./Board.css"

const Board = ({ rows, columns, lightStatus }) => {
    const [board, setBoard] = useState(createBoard());
    
    const randomBoolean = () => Math.random() < .5;
    
    const createBoard = () => {
        let startingBoard = [];
        for (let i = 0; i > columns; i++){
            const row = Array.from({ length: rows }, () => randomBoolean())
            startingBoard.push(row);
        }
        return startingBoard;
    }
    
    return (
        <React.Fragment>
            <div className="Board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="Board-row">
                        {row.map((light, clmnIndex) => (
                            <Light key={clmnIndex} isOn={light} />
                        ))}
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Board;