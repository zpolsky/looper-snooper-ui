import createConnection from "socket.io-client";
import { Board } from "../models/board.model";
import store from "../store";
import { setIsConnected } from "../store/features/user-slice";
import { setBoard } from "../store/features/game-slice";

export class ChatClient {
  private static socket: SocketIOClient.Socket;

  static openConnection(): void {
    this.socket = createConnection("http://localhost:4000");
    this.socket.on("connect", () => {
      store.dispatch(setIsConnected(true))
    });
    this.socket.on("message", (payload: string) => {
      console.log("my personal payload =", payload);
    });
    this.socket.on("timer", (timeRemaining: number) => {
      console.log("Time remaining =", timeRemaining);
    });
    this.socket.on("createGame", (payload: { board: Board }) => {
      const { board } = payload;
      console.log("Game board =", board);
      store.dispatch(setBoard({ board }));
    });
  }
  static startTimer(): void {
    this.socket.emit("startTimer");
  }
  static createGame(): void {
    this.socket.emit("createGame");
  }
}
