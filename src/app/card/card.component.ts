import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from "../model/navigationItem";

@Component({
  selector: 'safe-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  navItem: NavigationItem;

  constructor() { }

  ngOnInit() {
  }

}
