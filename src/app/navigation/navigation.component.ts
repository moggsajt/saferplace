import { Component, OnInit } from '@angular/core';
import {NavigationItem} from "../model/navigationItem";

@Component({
  selector: 'safe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItemsEmergency: NavigationItem[] = [
    {iconclass: 'fa-bell emergency', title: 'Alarms', text: 'List of alarms', url: 'alarms', notify: false},
    {iconclass: 'fa-ambulance emergency', title: 'Aid and relief', text: 'Aid an relief', url: 'aid', notify: false},
    {iconclass: 'fa-bullseye emergency', title: 'POI', text: 'Points of interest', url: 'poi', notify: false},
    {iconclass: 'fa-map-marker emergency', title: 'Navigation', text: 'Navigate to places', url: 'navigate', notify: false}
  ]

  navItemsNormal: NavigationItem[] = [
    {iconclass: 'fa-question-circle normal', title: 'Quiz', text: 'Are you prepped?', url: 'quiz', notify: false},
    {iconclass: 'fa-trophy normal', title: 'Badges', text: 'List of trophies', url: 'badges', notify: false},
    {iconclass: 'fa-book normal', title: 'Be prepared', text: 'Learn how to be prepared', url: 'prepare', notify: false},
    {iconclass: 'fa-user normal', title: 'Profile', text: 'Edit yourr p', url: 'profile', notify: false}
  ]

  constructor() { }

  ngOnInit() {
  }

  triggerAlarm() {
    this.navItemsEmergency[0].notify= true;
  }

}
