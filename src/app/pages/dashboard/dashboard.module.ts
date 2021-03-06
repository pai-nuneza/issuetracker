import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardComponent } from './board/board.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailComponent } from './board/detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    DragDropModule,
  ],
  declarations: [
    BoardComponent,
    DetailComponent
  ],
  providers:[

  ]

})
export class DashboardModule { }
