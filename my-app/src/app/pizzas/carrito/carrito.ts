import { Component, computed, signal } from '@angular/core';
import { CommunicationService } from '../../core/communicationservice';
import { Pizza } from '../pizza';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  pizzas = signal<Pizza[]>([])

  total = computed(() => this.pizzas()
    .map(p => p.price)
    .reduce((acumulado, price) => acumulado + price,0))

  constructor(private communicationService: CommunicationService<Pizza>) {
    //suscribe
    this.communicationService.observable$
    .pipe(takeUntilDestroyed())
    .subscribe(pizza => {
      if (pizza) {
        this.pizzas.update(pizzas => [...pizzas, pizza])
      }
    })
  }
}