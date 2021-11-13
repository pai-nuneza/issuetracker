import { Component, OnInit, ViewChild } from '@angular/core';
import { Board, TaskItem } from 'src/app/models/board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  providers: [],
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  taskDetail: TaskItem;
  board: Board = {
    name: '',
    columns: []
  };

  @ViewChild(DetailComponent) detailComponent: DetailComponent;

  ngOnInit() {
    this.loadBoardData();
  }

  private loadBoardData() {
    this.boardService.getBoardData()
      .subscribe(item => {
        this.board = item
      })
  }

  viewIssue(item: TaskItem) {
    this.detailComponent.showDialog(true, item)
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

  getSeverity(status: any) {
    if (status == 'High')
      return 'danger'
    else if (status == 'Medium')
      return 'warning'
    else if (status == 'Done')
      return 'success'
    else
      return 'info'
  }

}
