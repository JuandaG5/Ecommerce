import { Component } from '@angular/core';
import {RouterLink, RouterOutlet,RouterLinkActive} from '@angular/router';
import { AppComponent } from '../app/app.component';

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