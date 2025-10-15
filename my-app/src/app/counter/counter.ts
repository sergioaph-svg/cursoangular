import { Component } from '@angular/core';
import { counterSignal } from './counter.store';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter = counterSignal;

  increment() {
    this.counter.update(v => (v < 31 ? v + 1 : v));
  }

  decrement() {
    this.counter.update(v => (v > 1 ? v - 1 : v));
  }
}