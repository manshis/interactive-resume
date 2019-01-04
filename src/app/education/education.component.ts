import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

 flipped1 = false;
 flipped2 = false;

  ngOnInit() {
  }

  onflip1() {
    this.flipped1 = !this.flipped1;
  }
  onflip2() {
    this.flipped2 = !this.flipped2;
  }
}
