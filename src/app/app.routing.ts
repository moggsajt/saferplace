import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {AlarmsComponent} from "./sections/alarms/alarms.component";
import {PoiComponent} from "./sections/poi/poi.component";
import {NavigateComponent} from "./sections/navigate/navigate.component";
import {QuizComponent} from "./sections/quiz/quiz.component";
import {BadgesComponent} from "./sections/badges/badges.component";
import {BePreparedComponent} from "./sections/be-prepared/be-prepared.component";

const routes: Routes = [
  {path: '', component: NavigationComponent},
  {path: 'alarms', component: AlarmsComponent},
  {path: 'profile', component: MyprofileComponent},
  {path: 'poi', component: PoiComponent},
  {path: 'navigate', component: NavigateComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'badges', component: BadgesComponent},
  {path: 'prepare', component: BePreparedComponent},
  {path: '**', redirectTo: './'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routedComponents = [
  NavigationComponent,
  MyprofileComponent,
  AlarmsComponent,
  PoiComponent,
  NavigateComponent,
  QuizComponent,
  BadgesComponent,
  BePreparedComponent,
];
