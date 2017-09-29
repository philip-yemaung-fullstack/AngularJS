import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { DbService } from "./../../../db.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('email') email;
  public items: Object[];
  constructor(public auth: AuthService, public db: DbService, public http: Http) {
    this.db.getRealEstateData().subscribe(data => {
      this.items = data;
    });
  }

  ngAfterViewInit() {
    /* if (this.email) {
      let txt = this.email;
      setTimeout(function () {
        txt.nativeElement.textContent = localStorage.getItem('email');
      }, 2000);
    } */
  }

  ngOnInit() {

  }

}
