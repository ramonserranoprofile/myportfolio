import { Component } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myportfolio';
}




$(document).ready(main);
function main(): void {
  $('.toggle').click(function () {
    $('nav').toggle();

  });
};