import {Component} from '@angular/core';
import {Hero} from './hero'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    My Favorite Hero is : <b>{{myHero.name}}</b>
    <p *ngIf="heroes.length>3">There are many Heroes.</p>
    <ul>
    <li *ngFor="let hero of heroes">{{hero.name}}</li>
    </ul>
`,
})
export class AppComponent {
    title:string = 'Tour of Heroes';
    heroes:Hero[] = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];
}
