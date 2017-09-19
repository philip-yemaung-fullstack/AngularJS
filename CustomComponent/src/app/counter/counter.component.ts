import {
  Component,
  ViewChild,
  ContentChild,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click) ="dec()"> - </button> {{counterValue}} 
    <button (click) ="inc()"> + </button> 
    <input [(ngModel)]="counter" value={{counter}} />
  `,
  styles: []
})
export class CounterComponent {
  private counterValue = 0;
  private _counter: number = 0;
  @Output() counterValueEmitter = new EventEmitter();

  dec() {
    this.counterValue--;
    this.counterValueEmitter.emit(this.counterValue);
  }

  inc() {
    this.counterValue++;
    this.counterValueEmitter.emit(this.counterValue);
  }
  
  get counter(): number {
      return this._counter;
  }
  set counter(value: number) {
      this.counterValue = value;
      this._counter = value;
      this.counterValueEmitter.emit(this.counterValue);
  }
}
