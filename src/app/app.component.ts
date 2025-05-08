import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';  // 👈 Importa el HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true, // Correcto
  imports: [
      HeaderComponent, // El que ya tenías
      RouterOutlet     // <-- ¡Añadido!
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpencerApp';
}
