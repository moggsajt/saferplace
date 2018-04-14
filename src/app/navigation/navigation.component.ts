import { Component, OnInit } from '@angular/core';
import {NavigationItem} from "../model/navigationItem";

@Component({
  selector: 'safe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItemsEmergency: NavigationItem[] = [
    {iconclass: 'fa-bell emergency', title: 'Alarms', text: 'List of alarms', url: ''},
    {iconclass: 'fa-wheelchair emergency', title: 'Stjärt', text: 'Stjärt', url: ''},
    {iconclass: 'fa-bullseye emergency', title: 'POI', text: 'Points of interest', url: ''},
    {iconclass: 'fa-bullhorn emergency', title: 'Navigation', text: 'Navigate to places', url: ''}
  ]

  navItemsNormal: NavigationItem[] = [
    {iconclass: 'fa-question-circle normal', title: 'Quiz', text: 'Are you prepped?', url: ''},
    {iconclass: 'fa-trophy normal', title: 'Badges', text: 'List of trophies', url: ''},
    {iconclass: 'fa-book normal', title: 'Be prepared', text: 'Learn how to be prepared', url: ''},
    {iconclass: 'fa-user normal', title: 'Profile', text: 'Edit yourr p', url: 'profile'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
