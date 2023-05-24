import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080'); // Exemplo de URL do servidor WebSocket

    this.socket.onopen = () => {
      console.log('Conexão WebSocket estabelecida');
    };

    this.socket.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    this.socket.onerror = (error) => {
      console.error('Erro na conexão WebSocket:', error);
    };
  }

  // Adicione métodos adicionais conforme necessário para enviar e receber dados pelo WebSocket
}