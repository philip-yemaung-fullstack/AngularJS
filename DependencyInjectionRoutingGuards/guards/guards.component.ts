import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'guards-component',
  template: `Blank`
})
export class GuardsComponent {
  constructor(private router: Router) {}
}
