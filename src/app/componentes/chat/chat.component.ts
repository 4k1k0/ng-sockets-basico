import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription: Subscription;
  mensajes: any[] = [];

  elemento: HTMLElement;

  constructor( private chatService: ChatService ) { }

  ngOnInit() {
    this.elemento = document.getElementById('mensajes');
    this.mensajesSubscription = this.chatService.getMessage().subscribe( msg => {
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
