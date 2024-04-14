import { Component, Input } from '@angular/core';
import { Cake } from '../Models/cakes';


@Component({
  selector: 'app-cake-cards',
  templateUrl: './cake-cards.component.html',
  styleUrls: ['./cake-cards.component.css']
})
export class CakeCardsComponent {
  @Input() cake: Cake | undefined;

  buttonClicked(id:number | undefined):void
  {
    if(id !==undefined)
    {
      console.log("retrieved id is: "+ id);
      
    }
    else
    {
      alert("Some technical error has occured due to which we are unable to redirect you to the order area!")
    }
  }

}
