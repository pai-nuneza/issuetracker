import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/models/board.model';

@Component({
  selector: 'task-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  display: boolean = false;
  taskDetail: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  showDialog(display: boolean, item: any) {
    this.taskDetail = item
    this.display = display;
  }

  hideDialog(){
    this.display = false;
  }

  submitDialog(){
    alert('Submitted. This is under development yet.')
  }

}
