import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringListComponent } from './string-list/string-list.component';
import { UpperComponent } from './upper/upper.component';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    StringListComponent,
    UpperComponent,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
