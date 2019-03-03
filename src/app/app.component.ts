import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styles: [`
  .active   {
    color: rgb(12, 124, 135) !important;
    border-bottom: 1px solid rgb(12, 124, 135);
  }
`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ryan Barker';

  
  scrollWin() {
    window.scrollTo(0, 550);}
}
