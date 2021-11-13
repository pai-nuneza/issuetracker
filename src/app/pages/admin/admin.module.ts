import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  exports: [],
  declarations: [
    UsersComponent,
    TeamsComponent
  ],
})
export class AdminModule { }
