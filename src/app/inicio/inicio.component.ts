import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- 1. AÑADE ESTA IMPORTACIÓN

@Component({
  selector: 'app-inicio',
  // imports: [], // Esta línea no es necesaria si no usas Standalone Components aquí
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] // o styleUrl
})
export class InicioComponent { // <-- Llave de inicio

  // <-- 2. AÑADE ESTE CONSTRUCTOR PARA INYECTAR EL ROUTER
  constructor(private router: Router) {}

  public irAIniciarSesion(): void {
    console.log('Botón Iniciar Sesión presionado');
    this.router.navigate(['/login']); // <-- 3. AÑADE ESTA LÍNEA PARA NAVEGAR
  }

  public irARegistrarse(): void {
    console.log('Botón Registrarse presionado');
    this.router.navigate(['/registro']); // <-- 3. AÑADE ESTA LÍNEA PARA NAVEGAR
  }

} // <-- Llave de fin
