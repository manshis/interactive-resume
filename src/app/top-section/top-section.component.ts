import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollDown() {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: 'smooth'
    });
  }
}
