import {
  Directive, ElementRef, Renderer, HostListener,
  HostBinding, Input, Output, EventEmitter
} from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  private colors: string[] = ['red', 'green', 'blue', 'cyan', 'magenta'];
  private i = 0;

  constructor(private e: ElementRef, private r: Renderer) {
    r.setElementStyle(e.nativeElement, 'font-size', '22px')
  }

  // To Listen to Events that are triggered by client
  @HostListener('click') foo() {    
    //this.e.nativeElement.style.color = 'red';
    this.myBG = this.colors[this.i];
    this.colorValueEmitter.emit(this.myBG);
    if(this.i < this.colors.length -1 ) {
      this.i++;
    } else {
      this.i = 0;
    }
  }

  // Bind a property (style.backgroundColor) on the host element 
  // TO a property in the directive class 
  @HostBinding('style.backgroundColor') myBG;
  ngOnInit() { // reached after all bound properties are initilized

  }

  @Output() colorValueEmitter = new EventEmitter();    
}
