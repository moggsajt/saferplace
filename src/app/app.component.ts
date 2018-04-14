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
    {iconclass: '', title: 'Alarms', text: 'List of alarms'},
    {iconclass: '', title: 'Stjärt', text: 'Stjärt'},
    {iconclass: '', title: 'POI', text: 'Points of interest'},
    {iconclass: '', title: 'Navigation', text: 'Navigate to places'}
  ]

  navItemsNormal: NavigationItem[] = [
    {iconclass: '', title: 'Quiz', text: 'Are you prepped?'},
    {iconclass: '', title: 'Badges', text: 'List of trophies'},
    {iconclass: '', title: 'Be prepared', text: 'Learn how to be prepared'},
    {iconclass: '', title: 'Profile', text: 'Edit yourr p'}
  ]

}
