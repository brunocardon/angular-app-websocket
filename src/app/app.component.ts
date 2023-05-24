import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angular-app-websocket';

  constructor(private websocketService: WebsocketService) {}
  
  ngOnInit() {
    console.log("environment", environment)
    console.log("AppComponent-_-teste")
  }

}
