import { Component, OnInit, Injectable } from '@angular/core';
import { DbService } from './../db/db.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  template: `<table border="1" *ngIf="student !== null">
    <tr>    
      <th>Name</th>
      <th>StudentId</th>
      <th>Email</th>
      </tr>
    <tbody>
      <tr>
        <td>{{student.name}}</td>
        <td>{{student.stuID}}</td>
        <td>{{student.email}}</td>
      </tr>
    </tbody>
  </table>
  <h2 *ngIf="student === null">Invalid input!</h2>`
})

@Injectable()
export class ProfileComponent implements OnInit {
  id;
  student;
  constructor(private route: ActivatedRoute, private router: Router, private db: DbService) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.student = db.getDataById(this.id);
    if (!this.student) {
      this.router.navigate(['/guards'], { queryParams: { returnUrl: router.url } });
    }
  }

  ngOnInit() {
  }

}
