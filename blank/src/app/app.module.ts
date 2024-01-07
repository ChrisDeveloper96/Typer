import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page'; // Adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    HomePage // Make sure your home page is declared here
  ],
  // other module properties...
})
export class AppModule { }
