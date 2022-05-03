import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  settingmenu!: ElementRef;
  ngOnInit(): void {
  }
  OpenSettings : Boolean  = false;
  settingsMenuToggle(){
    this.OpenSettings = !this.OpenSettings ;
  }
}
