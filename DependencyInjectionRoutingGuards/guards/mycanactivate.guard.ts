import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, 
  ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';

@Injectable() 
export class MyCanActivateGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {   
    if(confirm(`Invalid url: ${route.queryParams['returnUrl']}.
Do you want to navigate to listing view?`)) {
      this.router.navigateByUrl("students");
      return true;
    } else {
      return false;
    }
  }
}
