import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantsComponent } from './participants/participants.component';
import { RegistrationComponent } from './registration/registration.component';

const routes:Routes = [
  {path:'', redirectTo:'/reg', pathMatch:'full'},
  {path:'list', component:ParticipantsComponent},
  {path:'reg', component:RegistrationComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
