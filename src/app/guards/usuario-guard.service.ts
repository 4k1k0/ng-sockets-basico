import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard {

  constructor(
    public wsService: WebsocketService,
    private router: Router
  ) { }

  canActivate() {
    if ( this.wsService.getUsuario() ) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }

}
