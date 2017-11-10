import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
  <h1>Hello {{name}}</h1>
  </div>
  <h1>Sagar</h1>
  `,
})
export class AppComponent  { name = 'Angular'; }