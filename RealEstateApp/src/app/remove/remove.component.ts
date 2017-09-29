import { Component, OnInit } from '@angular/core';
import { DbService } from "./../../../db.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  message: string;
  constructor(public route: ActivatedRoute, public db: DbService) {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        if (!id) {
          return;
        }
        db.deleteRealEstateData(id).subscribe(data => {
          this.message = data.message;
        });
      });
  }

  ngOnInit() {
  }

}
