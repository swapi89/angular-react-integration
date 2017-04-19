import { NgModule }        from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ParticipantComponent }  from './components/participant.component';


const appRoutes: Routes = [
  { path: 'participant', component: ParticipantComponent },
  { path: '', component: ParticipantComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
