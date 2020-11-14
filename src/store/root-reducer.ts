import { combineReducers } from "@reduxjs/toolkit";
import gameSliceReducer from "./features/game-slice";

const rootReducer = combineReducers({
  game: gameSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
