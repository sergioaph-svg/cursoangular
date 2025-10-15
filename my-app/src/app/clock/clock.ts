import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})

export class Clock implements OnInit, OnDestroy {
  private tick = signal(0); // señal que cambia cada segundo
  private intervalId: any;

  time = computed(() => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    // dependemos de tick para que se recalule cada segundo
    this.tick(); 
    return `${h}:${m}:${s}`;
  });

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.tick.update(v => v + 1); // dispara el computed
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}