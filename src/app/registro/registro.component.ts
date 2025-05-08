
import { Component } from '@angular/core';
// Clases necesarias para Reactive Forms y para usar directivas como *ngIf
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true, // Asumo que tu componente es standalone
  imports: [
    CommonModule,         // <-- Añadir esta línea
    ReactiveFormsModule   // <-- Añadir esta línea
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // o styleUrl
})
// Aquí empieza la clase...
export class RegistroComponent {
  // 1. Declara la propiedad donde guardaremos la definición del formulario
  registroForm: FormGroup;

  // 2. Inyecta el servicio 'FormBuilder' (fb) en el constructor.
  //    FormBuilder nos ayuda a crear formularios fácilmente.
  constructor(private fb: FormBuilder) {
    // 3. Dentro del constructor, crea el formulario usando FormBuilder.group
    this.registroForm = this.fb.group({
      // Por cada campo del HTML, creamos un 'FormControl'.
      // El primer valor es el inicial (ej: ''), el segundo son las reglas (Validators).
      identificacion: ['', Validators.required], // Campo obligatorio
      confirmaIdentificacion: ['', Validators.required], // Más adelante validaremos que coincida con el anterior
      contrasena: ['', [Validators.required, Validators.minLength(6)]], // Obligatorio y mínimo 6 caracteres
      confirmaContrasena: ['', Validators.required], // Más adelante validaremos que coincida
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required], // Podríamos añadir validación de números aquí
      correo: ['', [Validators.required, Validators.email]], // Obligatorio y formato email
      terminos: [false, Validators.requiredTrue] // Obligatorio que esté marcado (true)
    });
  }

  // 4. Define la función que se llamará cuando el formulario se envíe
  onSubmit() {
    // Primero, verifica si el formulario cumple todas las validaciones
    if (this.registroForm.valid) {
      // Si es válido, muestra los datos en la consola (por ahora)
      console.log('REGISTRO - Formulario Válido:', this.registroForm.value);
      // ¡IMPORTANTE! Aquí es donde más adelante llamaremos a Firebase
      // para crear el usuario con this.registroForm.value.correo y this.registroForm.value.contrasena
    } else {
      // Si NO es válido, muestra un mensaje y marca todos los campos
      // como 'tocados' para que se muestren los errores visualmente (si los configuramos en el HTML)
      console.log('REGISTRO - Formulario Inválido');
      this.registroForm.markAllAsTouched();
    }
  }

} // Fin de la clase RegistroComponent
