import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "./features/user-slice";
import gameSliceReducer from "./features/game-slice";

const rootReducer = combineReducers({
  user: userSliceReducer,
  game: gameSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
