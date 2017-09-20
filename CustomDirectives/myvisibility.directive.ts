import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})

export class MyvisibilityDirective {

  constructor(private e: ElementRef, private r: Renderer) {
    r.setElementStyle(e.nativeElement, 'font-size', '21px');
  }

  @Input('show') show = "true";
  ngOnChanges() {
    this.r.setElementStyle(this.e.nativeElement,
      'visibility', this.show == "false" ? 'hidden' : 'visible');
  }

  ngAfterViewInit() {
    /* this.r.setElementStyle(this.e.nativeElement,
      'visibility', this.show == "false" ? 'hidden' : 'visible'); */
  }
}
