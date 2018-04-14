import { Component, OnInit } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ProfileItem} from "../model/profileItem";

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

  navItemsProfiles: ProfileItem;
  navItemsRoles: RoleName[];

  ngOnInit() {
    this.navItemsProfiles;

    var xThis = this;

    this.httpGet("http://hack4sweden.vwc.se/rest/roles", function(event) {
      if (event.readyState == XMLHttpRequest.DONE || event.status == 200) {
        var result = JSON.parse(event.responseText);

        for (var key in result) {
            var role = result[key];
            xThis.navItemsRoles.push(role);
          }
    });

    this.httpGet("http://hack4sweden.vwc.se/rest/person/1", function(event) {
      if (event.readyState == XMLHttpRequest.DONE || event.status == 200) {
        var result = JSON.parse(event.responseText);

        for (var key in result) {
          var profile = result[key];
          xThis.navItemsProfiles = profile;
        }
      }
    });

  }

  httpGet(url, callback) {
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.onload = function() {
      callback(x);
    };
    x.send();
  }

}
