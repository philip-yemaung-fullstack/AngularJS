import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class DbService {

  constructor(private http: Http) { }
  getUserData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1')
      .map((res: Response) => res.json());
  }

  getPostData() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1')
      .map((res: Response) => res.json());
  }
}
