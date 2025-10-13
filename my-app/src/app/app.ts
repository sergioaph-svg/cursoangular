import { Component } from '@angular/core';
import { Calendar } from './calendar/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Calendar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  name = 'Peter Parker, Spider-Man';
  data: number[] = [];

  getuser() {
    return undefined;
  }

  handlerClick(ev: Event) {
    ev.stopPropagation();
    this.data.push(this.data.length + 1);
  }
}
