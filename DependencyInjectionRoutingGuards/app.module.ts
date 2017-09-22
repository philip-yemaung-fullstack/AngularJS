import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { GuardsComponent } from './guards/guards.component';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { DbService } from './db/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    GuardsComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [MyCanActivateGuard, MyCanDeactivateGuard, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
