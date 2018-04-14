import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'safe-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  heading: string;

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
