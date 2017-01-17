import {Component} from '@angular/core';

@Component({
    selector: 'keyup',
    template: `<input #newHero (keyup.enter)="addHero(newHero.value); newHero.value = ''" (blur)="addHero(newHero.value); newHero.value = ''" type="text">
<button (click)="addHero(newHero.value)">Add</button>
<ul>
  <li *ngFor="let hero of heroes">{{hero}}</li>
</ul>
`
})

export class KeyUpComponent_v1 {
    heroes:string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(val:string) {
      if(val) {
        this.heroes.push(val);
      }
    }
}
