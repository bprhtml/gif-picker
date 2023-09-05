import React from "react";

let squares = [];
export function generateSquares(n) {
    squares = [];
    for (let r = 0; r < n; r++){
        const row = [];
        for (let c = 0; c < n; c++){
            row.push(0);
        }
        squares.push(row);
    }
    console.log(squares);
    return (
        <div className="board">
            {squares.map((row, rowIndex) => 
            row.map((square, columnIndex) => (
                <div key={`${rowIndex} - ${columnIndex}`} className="square"></div>
                    ))
                )}
        </div>
    )
}
