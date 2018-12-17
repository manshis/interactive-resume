import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollDown() {
    window.scroll({
      top: 720,
      left: 0,
      behavior: 'smooth'
    });
  }

  moveTo() {
    // To do
  }
}
