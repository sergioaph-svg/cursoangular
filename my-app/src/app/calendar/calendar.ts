import { Component } from '@angular/core';
import { counterSignal } from '../counter/counter.store';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  selectedDay = counterSignal; // la señal del contador
  clickDay(day: number) {
    counterSignal.set(day);
  }
}
