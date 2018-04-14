import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
