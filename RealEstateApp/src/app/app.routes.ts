import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AdministrationComponent } from './administration/administration.component';
import { RemoveComponent } from './remove/remove.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/:id', component: AdministrationComponent },
  { path: 'remove', component: RemoveComponent },
  { path: 'remove/:id', component: RemoveComponent },
  { path: '**', redirectTo: '' }
];
