import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
//import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {
 
  }
  /*
  getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('https://ominous-space-trout-wrq554g7ggrjhg57v-3000.app.github.dev/pizzas')
  }
  */
  getAll(): Promise<Pizza[]> {
    return lastValueFrom(this.http.get<Pizza[]>('https://ominous-space-trout-wrq554g7ggrjhg57v-3000.app.github.dev/pizzas'))
  }
}