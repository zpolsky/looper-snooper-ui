import { Grid } from "@material-ui/core";
import React, { ReactElement, CSSProperties, useState } from "react";
import { ChatClient, Cell, CellType } from "../../services/chat";

const sampleBoard = [
  [
    { word: "NIGHT", team: CellType.None, isRevealed: false },
    { word: "OIL", team: CellType.Red, isRevealed: false },
    { word: "TOWER", team: CellType.Blue, isRevealed: false },
    { word: "GRASS", team: CellType.Red, isRevealed: false },
    { word: "BACK", team: CellType.Blue, isRevealed: false },
  ],
  [
    { word: "ROW", team: CellType.Red, isRevealed: false },
    { word: "AIR", team: CellType.Blue, isRevealed: false },
    { word: "NEW YORK", team: CellType.None, isRevealed: false },
    { word: "WORM", team: CellType.None, isRevealed: false },
    { word: "MARCH", team: CellType.Red, isRevealed: false },
  ],
  [
    { word: "BAND", team: CellType.Blue, isRevealed: false },
    { word: "LOG", team: CellType.None, isRevealed: false },
    { word: "UNDERTAKER", team: CellType.None, isRevealed: false },
    { word: "LAWYER", team: CellType.Red, isRevealed: false },
    { word: "AFRICA", team: CellType.Blue, isRevealed: false },
  ],
  [
    { word: "WAVE", team: CellType.Blue, isRevealed: false },
    { word: "GREEN", team: CellType.Red, isRevealed: false },
    { word: "HOLE", team: CellType.Bomb, isRevealed: false },
    { word: "LIMOUSINE", team: CellType.Red, isRevealed: false },
    { word: "KETCHUP", team: CellType.Blue, isRevealed: false },
  ],
];

const Board = (): ReactElement => {
  const [board, setBoard] = useState<Cell[][]>(sampleBoard);

  const handleClick = (row: number, col: number): void => {
    if (!board[row][col].isRevealed) {
      const boardCopy = [...board];
      boardCopy[row][col].isRevealed = true;
      setBoard(boardCopy);
    }
  };

  const cellStyle: CSSProperties = {
    width: "150px",
    padding: "50px 0",
    textAlign: "center",
  };

  const rows = board.map((row, r) => {
    return (
      <Grid container item lg={12} spacing={10}>
        {row.map((cell, c) => {
          let backgroundColor: string;
          if (!cell.isRevealed) {
            backgroundColor = "tan";
          } else {
            switch (cell.team) {
              case CellType.Red:
                backgroundColor = CellType.Red;
                break;
              case CellType.Blue:
                backgroundColor = CellType.Blue;
                break;
              case CellType.Bomb:
                backgroundColor = "yellow";
                break;
              default:
                backgroundColor = "gray";
                break;
            }
          }
          return (
            <Grid item lg={2}>
              <div
                style={{ ...cellStyle, backgroundColor }}
                onClick={() => handleClick(r, c)}
              >
                {cell.word}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
  });
  return (
    <Grid container spacing={1}>
      {rows}
    </Grid>
  );
};

export default Board;
