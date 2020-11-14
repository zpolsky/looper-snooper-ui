export enum CellType {
  Red = "RED",
  Blue = "BLUE",
  Bomb = "BOMB",
  None = "NONE",
}

export interface Cell {
  word: string;
  team: CellType;
  isRevealed: boolean;
}

export type Board = Cell[][];