import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() toggleChange = new EventEmitter<boolean>();

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
      label: 'Issues',
      items: [
        { label: 'View All', routerLink: 'dashboard/board' },
        { label: 'Create New'},
      ]
    },
    {
      label: 'Charts',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-repeat' }
      ]
    }];
  }

  toggleSidebar() {
    this.toggleChange.emit()
  }

}
