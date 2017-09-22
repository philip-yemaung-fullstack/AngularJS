import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" #input (keyup)= "0" value="eu" >
    <div *ngFor="let post of posts; let num = index">
      <label *ngIf="post.title | myPipe: input.value">
      {{num+1}}: {{post.title}}
      </label>
    </div>
  `
})
export class AppComponent {
  title = 'app';
  posts;
  constructor(public http: Http) {
    this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').subscribe(res => {
      this.posts = res.json();
    });
  }
}
