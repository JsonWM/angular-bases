import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
;
  public name:string="chicorita";
  public age :number=21; 


  get tuputamare():string{
    return this.name.toUpperCase();
  }
  
  unMetodo():string{    
    return `${this.name} - ${this.age} `;
  }


  changeHero():void{
    this.name="El super spiderman";
  }

  changeAge(){
    this.age=22;
  }


  resetForm():void{
    this.name="carita feliz";
    this.age =18;
  }

}
