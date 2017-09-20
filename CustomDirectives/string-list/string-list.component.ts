import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-list',
  template: `
    <ul>
      <li *ngFor="let item of stringItems;">{{item}}</li>
    </ul>
  `
})
export class StringListComponent implements OnInit {
  @Input() stringItems: string[] = ["1", "2", "3"];
  constructor() { }

  ngOnInit() {
  }  
}
