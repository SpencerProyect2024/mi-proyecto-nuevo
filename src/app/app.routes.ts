import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component'; // <-- AÑADIR IMPORTACIÓN
import { RegistroComponent } from './registro/registro.component'; // <-- AÑADIR IMPORTACIÓN

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login', // <-- AÑADIR RUTA PARA LOGIN
    component: LoginComponent
  },
  {
    path: 'registro', // <-- AÑADIR RUTA PARA REGISTRO
    component: RegistroComponent
  },
  {
    path: '', // <-- Ruta por defecto (raíz)
    redirectTo: '/inicio', // Redirige a /inicio
    pathMatch: 'full' // Importante para la redirección raíz
  }
  // Aquí podrás añadir más rutas en el futuro...
];
