import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="container">
      <h1>404: page Not Found!</h1>
      <p>The page you are looking for cannot be found or you do not have access to this page.
      <p>
    </div>
  `,
  styles: [`
    .container{
      text-align:center;
      margin:30px 0px;
    }
  `]
})
export class ErrorComponent {

}
