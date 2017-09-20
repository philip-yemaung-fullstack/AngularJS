import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upper',
  template: `<ng-content></ng-content>`
})
export class UpperComponent implements OnInit {

  constructor(private ele:ElementRef) {
  }

  ngOnInit() {    
  }

  ngAfterViewInit() {        
    for(let node of this.ele.nativeElement.childNodes) {
      if(node.innerText) {
        node.innerText = node.innerText.toUpperCase();
      } else if (node.value) {
        node.value = node.value.toUpperCase();
      }
    }
  }
}
