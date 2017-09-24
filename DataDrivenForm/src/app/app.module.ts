import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { DbService } from "./db.service";

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
  ],
  // to use Forms we must have FormsModule OR ReactiveFormsModule Here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
