import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todayDay',
  standalone: true,
})
export class TodayDayPipe implements PipeTransform {
  transform(): number {
    return new Date().getDate();
  }
}