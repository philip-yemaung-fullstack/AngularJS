import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        Data Driven Form
        <data-driven></data-driven>
      </div>
    </div>
  </div>`
})
export class AppComponent {
  title = 'app works!';
}
