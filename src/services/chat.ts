import createConnection from "socket.io-client";

export enum CellType {
  Red = 'RED',
  Blue = 'BLUE',
  Bomb = 'BOMB',
  None = 'NONE',
}

export interface Cell {
  word: string;
  team: CellType;
  isRevealed: boolean;
}

export class ChatClient {
  private static socket: SocketIOClient.Socket;
  public static board: Cell[][] | null = null;

  static openConnection(): void {
    this.socket = createConnection("http://localhost:4000");
    this.socket.on("message", (payload: string) => {
      console.log("my personal payload =", payload);
    });
    this.socket.on("timer", (timeRemaining: number) => {
      console.log("Time remaining =", timeRemaining);
    });
    this.socket.on("createGame", (payload: string) => {
      const board = JSON.parse(payload) as Cell[][];
      console.log("Game board =", board);
      this.board = board;
    });
  }
  static startTimer(): void {
    this.socket.emit("startTimer");
  }
  static createGame(): void {
    this.socket.emit("createGame");
  }
}
