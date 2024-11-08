import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    
    <h2>{{puta}}</h2>
    <hr>

    <button (click)="increase(1)">incrementar +1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increase(-1)">descrementar-1</button>
    
     
    `
})

export class CounterComponent{
    
    public title:string = 'Conchetumare';
    public puta:number = 10;
  
    increase(value:number):void{
      this.puta+=value;
    }
  
    resetCounter(){
      this.puta=10;
    }

}