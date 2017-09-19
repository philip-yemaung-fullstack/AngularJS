import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public counterChange;
  public ComponentCounterValue;

  showCounterChange(data) {
    this.counterChange = data;
    this.ComponentCounterValue = this.counterChange;
  }
}
