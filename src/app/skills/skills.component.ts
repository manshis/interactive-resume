import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills = [
    {name: 'Angular',  rating: [1, 1, 1, 1, 1]},
    {name: 'Bootstrap',  rating: [1, 1, 1, 1, 1]},
    {name: 'HTML',  rating: [1, 1, 1, 1, 1]},
    {name: 'CSS', rating: [1, 1, 1, 1, 0]},
    {name: 'Javascript', rating: [1, 1, 1, 1, 0]},
    {name: 'Perl', rating: [1, 1, 1, 1, 1]},
    {name: 'PHP', rating: [1, 1, 1, 1, 0]},
    {name: 'Microsoft SQL Server', rating: [1, 1, 1, 0, 0]},
    {name: 'Oracle DB', rating: [1, 1, 1, 0, 0]},
    {name: 'Maria DB', rating: [1, 1, 1, 1, 1]},
  ];

  ngOnInit() {
  }

}
