import { Component } from '@angular/core';
// import {RouterLink, RouterOutlet,RouterLinkActive} from '@angular/router';

@Component({
  // standalone: true,
  // imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PETSPA';
  slogan = '"Un día de spa para tu mejor amigo peludo"';
}
