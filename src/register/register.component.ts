import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    nombre = '';
    apellido = '';
    edad = 0;
    email = '';
  }