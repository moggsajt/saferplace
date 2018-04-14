import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'profile', component: MyprofileComponent },
  { path: '**', redirectTo : './' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routedComponents = [
  NavigationComponent,
  MyprofileComponent
];
