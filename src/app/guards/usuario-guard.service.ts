import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

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
