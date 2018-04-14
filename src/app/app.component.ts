import {Component} from '@angular/core';
import {NavigationItem} from "./model/navigationItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navItemsEmergency: NavigationItem[] = [
    {iconclass: 'fa-bell emergency', title: 'Alarms', text: 'List of alarms'},
    {iconclass: 'fa-wheelchair emergency', title: 'My Profile', text: 'My Profile'},
    {iconclass: 'fa-bullseye emergency', title: 'POI', text: 'Points of interest'},
    {iconclass: 'fa-bullhorn emergency', title: 'Navigation', text: 'Navigate to places'}
  ]

  navItemsNormal: NavigationItem[] = [
    {iconclass: 'fa-question-circle normal', title: 'Quiz', text: 'Are you prepped?'},
    {iconclass: 'fa-trophy normal', title: 'Badges', text: 'List of trophies'},
    {iconclass: 'fa-book normal', title: 'Be prepared', text: 'Learn how to be prepared'},
    {iconclass: 'fa-user normal', title: 'Profile', text: 'Edit yourr p'}
  ]

}
