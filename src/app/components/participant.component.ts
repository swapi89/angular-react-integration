import { Component } from '@angular/core';
import {Router } from '@angular/router';
import {ElementRef} from '@angular/core';
import {Participant} from './participant';

@Component({
  selector: 'participant',
  templateUrl: 'app/views/participant.tpl'
})

export class ParticipantComponent {


  constructor(elm: ElementRef){
      //console.log(elm.nativeElement.parentElement);
  }
    
  onInit(){
      Participant.initialize();
  }

  // private ngOnInit() {
  // this.router = this.route.params.subscribe(params => {
  //   this.username = params['username'];
  // });
//}

// private ngOnDestroy() {
//   this.router.unsubscribe();
// }
}
