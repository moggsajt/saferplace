import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppRoutingModule, routedComponents} from "./app.routing";
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AlarmsComponent } from './sections/alarms/alarms.component';
import { PoiComponent } from './sections/poi/poi.component';
import { NavigateComponent } from './sections/navigate/navigate.component';
import { QuizComponent } from './sections/quiz/quiz.component';
import { BadgesComponent } from './sections/badges/badges.component';
import { BePreparedComponent } from './sections/be-prepared/be-prepared.component';
import { AidComponent } from './sections/aid/aid.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    MyprofileComponent,
    CardComponent,
    NavigationComponent,
    routedComponents,
    AlarmsComponent,
    PoiComponent,
    NavigateComponent,
    QuizComponent,
    BadgesComponent,
    BePreparedComponent,
    AidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
