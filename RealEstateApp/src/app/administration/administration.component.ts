import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from "./../../../db.service";
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  id: string;
  address: string = "Sample address";
  bathRooms: Number = 1;
  type: string = "Double Family Home";
  built: Number = 2010;
  latitude;
  longitude;
  otherDescription: string = "Sample description";
  message:string;
  @ViewChild('fileInput') fileInput;
  fileContent;
  constructor(public route: ActivatedRoute, public db: DbService,
    public auth: AuthService, public router: Router) {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        if (!id) {
          return;
        }
        this.id = id;
        db.findRealEstateData(id).subscribe(data => {
          if (data.length > 0) {
            this.address = data[0].address;
            this.bathRooms = data[0].bathRooms;
            this.type = data[0].type;
            this.built = data[0].built;
            this.otherDescription = data[0].otherDescription;
            if(data[0].map) {
              this.longitude = data[0].map.longitude;
              this.latitude = data[0].map.latitude;  
            }
            console.log(data[0]);
            //map:{latitude:Number,longitude:Number}
          }
        });
      });
  }

  setFile(event) {
    let _files = event.srcElement.files;
    //console.log(this._files);
    let reader = new FileReader();
    reader.onload = () => {
        // this 'text' is the content of the file
        let text = reader.result;
        this.fileContent = text;
    }
    if(_files.length > 0) {
      reader.readAsDataURL(_files[0]);
    }        
  }

  ngOnInit() {
  }

  updateRealEstate() {
    let body = {
      id: this.id, address: this.address,
      type: this.type, built: this.built, bathRooms: this.bathRooms,
      map: { latitude: this.latitude, longitude: this.longitude },
      img: this.fileContent,
      otherDescription: this.otherDescription
    };
    if(!this.id) {      
      this.db.insertRealEstateData(body).subscribe(data => {
        this.message = data.message;
      });
    } else {
      this.db.updateRealEstateData(body).subscribe(data => {
        this.message = data.message;
      });
    }
    //this.router.navigate([' ']);
  }
}
