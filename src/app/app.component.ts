import { Title } from "@angular/platform-browser";
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private socket?: WebSocket;

  public chatMessage: string = "";
  public chatLog: string = "";
  public chatLogLast: string = "";

  @ViewChild('textchatlog') textchatlog!: ElementRef;

  constructor(private titleService:Title) {
    this.titleService.setTitle(environment.applicationAuthor+" - "+environment.applicationTitle);
  }

  ngOnInit() {
    console.log(environment)
  }

  ngAfterViewInit() {
    this.websocketConnectionInit();
  }

  /**
   * Handle the server connections
   */
  websocketConnectionInit() {
    this.socket = new WebSocket(environment.websocketserver);
    
    this.socket.onopen = (event: Event) => {
      console.log('AppComponent: WebSocket connected');
    };

    this.socket.onmessage = (event: MessageEvent) => {
      let data = JSON.parse(event.data);
      console.log('AppComponent: log update...', data.message);
      this.chatLog = data.log;
      this.chatLogLast = data.last;

      this.chatlogUpdate();
    };

    this.socket.onclose = (event: Event) => {
      console.log('AppComponent: WebSocket connection closed', event);
    };

    this.socket.onerror = (error: Event) => {
      console.error('AppComponent: WebSocket connection ERROR:', error);
    };
  }

  /**
   * Send the mensagem to the server
   */
  sendChat() {
    console.log('AppComponent: Input:', this.chatMessage)
    this.socket?.send(this.chatMessage)
  }

  /**
   * Refresh the scroll position for log box
   */
  chatlogUpdate() {
    const element = this.textchatlog.nativeElement;
    
    // trick to keep the scroll down
    setTimeout(function(){
      element.scrollTop = element.scrollHeight;
    }, 150)
  }
  
}
