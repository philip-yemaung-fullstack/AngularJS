import { Component, OnInit } from '@angular/core';
import {DbService} from './../db/db.service';

@Component({
  selector: 'app-students',
  template: `  <ul>
      <li *ngFor="let s of students;"><a routerLink="/students/profile/{{s.id}}">{{s.name}}</a></li>
    </ul>
  `
})
export class StudentsComponent implements OnInit {
  students: Object[];
  constructor(private db: DbService) { 
    this.students = db.getData();
  }

  ngOnInit() {
  }

}
