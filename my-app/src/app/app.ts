import { Component } from '@angular/core';
import { Calendar } from './calendar/calendar';
import { Counter } from './counter/counter';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Calendar, Counter, Clock],
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
