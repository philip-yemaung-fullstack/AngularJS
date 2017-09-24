import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { Http, Response } from '@angular/http';
import { DbService } from "./../db.service";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [`
    div.invalid {
      color: red;
    }`
  ]
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public db: DbService, public http: Http) {

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': ['User', [Validators.required]],
        'email': ['user@gmail.com', [Validators.required]],
        'post': ['1234567890', [Validators.required, this.postValidator]]
      })
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onGetData() {
    let userData = <FormGroup>this.myForm.controls['userData'];
    this.db.getPostData().subscribe(data => {
      userData.controls['post'].setValue(
        data.map(item => item.title + "\n").join(''));
    });
    this.db.getUserData().subscribe(data => {
      userData.controls['name'].setValue(data.name);
      userData.controls['email'].setValue(data.email);
    });
  }

  onSubmit() {
    console.log(this.myForm.value.userData);
  }

  postValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.length < 10) {
      return { example: true };
    }
    return null;
  }
}
