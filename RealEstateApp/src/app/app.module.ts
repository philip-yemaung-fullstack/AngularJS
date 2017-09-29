import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Response } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { DbService } from "./../../db.service";
import { MyPipePipe } from './my-pipe.pipe';
import { AdministrationComponent } from './administration/administration.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MyPipePipe,
    AdministrationComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [AuthService, DbService],
  bootstrap: [AppComponent]
})

export class AppModule { }
