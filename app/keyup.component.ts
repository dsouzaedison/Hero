import {Component} from '@angular/core';

@Component({
    selector: 'keyup',
    template: `<input (keyup)="onKey($event)" type="text">
<p>{{values}}</p>
`
})

export class KeyUpComponent_v1 {
    values = '';
    onKey(event:any) {
        this.values += event.target.value + ' | ';
    }
}