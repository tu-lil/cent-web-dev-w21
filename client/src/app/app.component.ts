// notice app-root
// take a look at indexedDB.html in src folder and find   <app-root></app-root>
// also check the app.module.ts and see how this file is imported there
// that's how these pieces are connected


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
}
