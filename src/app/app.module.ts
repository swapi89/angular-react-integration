import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Headers, HttpModule }    from '@angular/http';
import { RouterModule , Routes }  from '@angular/router';
import {React} from 'react';


import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routingModule';

// COMPONENTS
import { ParticipantComponent }  from './components/participant.component';


//SERVICES
 import { ParticipantService }   from './services/participant.service';


@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule ,  AppRoutingModule ],
  declarations: [ AppComponent , ParticipantComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ParticipantService]
})
export class AppModule { }
