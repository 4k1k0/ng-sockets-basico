import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public wsService: WebsocketService,
    public chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.getMessagesPrivate().subscribe( msj => {
      console.log(msj);
    });
  }

}
