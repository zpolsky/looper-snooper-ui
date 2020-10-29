import createConnection from "socket.io-client";

export class ChatClient {
  private static socket: SocketIOClient.Socket;

  static openConnection(): void {
    this.socket = createConnection("http://localhost:4000");
    this.socket.on("timer", (timeRemaining: number) => {
      console.log("Time remaining =", timeRemaining);
    });
    this.socket.on('message', (payload: string) => {
      console.log('my personal payload =', payload);
    })
  }
  static startTimer(): void {
    this.socket.emit('startTimer');
  }
}
