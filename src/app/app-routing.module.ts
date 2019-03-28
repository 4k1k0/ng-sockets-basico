import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioGuard } from './guards/usuario-guard.service';

import { LoginComponent } from './paginas/login/login.component';
import { MensajesComponent } from './paginas/mensajes/mensajes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [ UsuarioGuard ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
