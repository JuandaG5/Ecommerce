import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet,RouterLinkActive, RouterModule} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from '../register/register.component';





@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
