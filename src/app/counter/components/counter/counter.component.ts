import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  incrementCounter(value: number): void{
    this.counter += value;
  }
  decrementCounter(value: number): void{
    this.counter -= value;
  }
  resetCounter(){
    this.counter = 10;
  }
}
