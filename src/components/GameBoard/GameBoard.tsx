import { Button, Grid } from "@material-ui/core";
import React, { ReactElement, CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CellType } from "../../models/board.model";
import { ChatClient } from "../../services/chat";
import { revealSpace } from "../../store/features/game-slice";
import { RootState } from "../../store/root-reducer";

const GameBoard = (): ReactElement => {
  const dispatch = useDispatch();
  const { board } = useSelector((state: RootState) => state.game);

  const handleClick = (row: number, col: number): void => {
    if (!board[row][col].isRevealed) {
      dispatch(revealSpace({ row, col }));
    }
  };

  const handleCreateGame = (): void => {
    ChatClient.createGame();
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
            backgroundColor = "#ede2cc";
          } else {
            switch (cell.team) {
              case CellType.Red:
                backgroundColor = "#d13030";
                break;
              case CellType.Blue:
                backgroundColor = "#4183cc";
                break;
              case CellType.Bomb:
                backgroundColor = "#999";
                break;
              default:
                backgroundColor = "#e8e8e8";
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
    <div>
      <Button onClick={handleCreateGame}>Create</Button>
      <Grid container spacing={1}>
        {rows}
      </Grid>
    </div>
  );
};

export default GameBoard;
