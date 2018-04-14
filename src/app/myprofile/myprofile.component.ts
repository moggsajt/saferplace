import { Component, OnInit } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'safe-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    MyprofileComponent,
  ],
  bootstrap: [ MyprofileComponent ]
})

export class MyprofileComponent implements OnInit {

  constructor() { }

  navItemsProfiles: ProfileItem[] ;

  ngOnInit() {
    this.navItemsProfiles = [];

    var x = new XMLHttpRequest();
    x.open("GET", "http://hack4sweden.vwc.se/rest/list", true);

    var xThis = this;
    x.onload = function(event) {
      if (x.readyState == XMLHttpRequest.DONE || x.status == 200) {
        var result = JSON.parse(x.responseText);

        for (var key in result) {
          var profile = result[key];
          xThis.navItemsProfiles.push(profile);
        }
      }
    };

    x.send();
  }

}
