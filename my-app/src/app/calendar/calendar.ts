import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class Calendar {
  days = Array.from({ length: 31 }, (_, i) => i + 1);

  selectedDays: number[] = [];

  clickDay(day: number) {
    this.selectedDays.push(day);
  }
}
