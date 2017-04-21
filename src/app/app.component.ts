import { Component } from '@angular/core';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'my-app',
  template: "<router-outlet></router-outlet>",
})
export class AppComponent  {
    constructor(elm: ElementRef){
        console.log(elm.nativeElement.getAttribute('data-url'));
    }
}
