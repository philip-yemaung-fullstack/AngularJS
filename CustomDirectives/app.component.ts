import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public colorChange;
  public listOfStrings: string[] = ["ABC", "DEF", "GHI", "JKL", "MNO"];
  public visibility: boolean = true;
  showColorChange(data) {
    this.colorChange = data;
  }
}
