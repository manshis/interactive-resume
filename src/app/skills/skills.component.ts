import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills = [
    {name: 'Perl', rating: 5},
    {name: 'PHP', rating: 4},
    {name: 'Microsoft SQL Server', rating: 3},
    {name: 'Oracle DB', rating: 3},
    {name: 'Maria DB', rating: 5},
    {name: 'Javascript', rating: 4},
    {name: 'CSS', rating: 4},
    {name: 'HTML', rating: 5},
    {name: 'Bootstrap', rating: 5},
    {name: 'Angular', rating: 5},
  ]
  ngOnInit() {
  }

}
