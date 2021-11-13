import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column, TaskItem } from 'src/app/models/column.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  providers: [],
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: Board = new Board('Board', [
    new Column('Issues', [
      { id: 'CAR-1651', description: 'Rxjs Subscription Error', status: 'Low' },
      { id: 'FBD-2322', description: 'Database performance', status: 'High' },
      { id: 'HGT-3202', description: 'MS Teams slow', status: 'Medium' },
      { id: 'MLD-2322', description: 'Datepicker not working', status: 'Medium' },
      { id: 'MLD-7892', description: 'Error during loading page', status: 'High' },
    ]),
    new Column('Todo', [
      { id: 'MLD-1140', description: 'Server Error on loading image', status: 'Low' },
      { id: 'MOP-0712', description: 'Investigate Create Page', status: 'Low' },
    ]),
    new Column('In Progress', [
      { id: 'CRI-7892', description: 'Duplicate Records', status: 'High' },

    ]),
    new Column('Done', [
      { id: 'HGF-1102', description: 'Slow page', status: 'Done' },
      { id: 'HJM-4331', description: 'Image not found', status: 'Done' },
      { id: 'CRI-5524', description: 'Forbidden', status: 'Done' },
    ]),
  ]);

  getSeverity(status:any){
    if(status == 'High')
      return 'danger'
    else if(status == 'Medium')
      return 'warning'
    else if(status == 'Done')
      return 'success'
    else
      return 'info'
  }

  ngOnInit() { }

  viewIssue(item: TaskItem) {
    alert(item.description)
  }

  drop(event: CdkDragDrop<TaskItem[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
