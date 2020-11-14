import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../../models/board.model";

interface CurrentGame {
  board: Board;
}

let initialState: CurrentGame = {
  board: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBoard(state, action: PayloadAction<CurrentGame>) {
      const { board } = action.payload;
      state.board = board;
    },
    revealSpace(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      state.board![row][col].isRevealed = true;
    },
  },
});

export const {
  setBoard,
  revealSpace,
} = gameSlice.actions;

export default gameSlice.reducer;
