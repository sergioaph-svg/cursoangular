import { signal } from '@angular/core';
import { TodayDayPipe } from '../pipes/today-day.pipe';

//export const counterSignal = signal<number>(1);
//export const counterSignal = signal<number>(new Date().getDate());

const todayPipe = new TodayDayPipe();
export const counterSignal = signal<number>(todayPipe.transform());