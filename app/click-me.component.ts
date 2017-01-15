import {Component} from '@angular/core';

@Component({
    selector : 'click-me',
    template : `
        <button (click)="showMessage()">Click Me</button>
        {{message}}
        `
})

export class ClickMeComponent {
    message:string = '';

    showMessage(){
        this.message = 'You are my Hero';
    }
}