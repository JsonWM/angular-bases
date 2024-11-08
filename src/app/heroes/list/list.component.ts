import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {




  public listOfHeroes:string[]=["caperusita","sopa","wolverin",
    "xd"]

  public deletedHero?:string;


  deleteHero():void{
    this.deletedHero = this.listOfHeroes.pop();
  }

}
