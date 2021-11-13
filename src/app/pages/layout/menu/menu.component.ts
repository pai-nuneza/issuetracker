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
        { label: 'List', routerLink: 'dashboard/board' },
        { label: 'Create' },
      ]
    },
    {
      label: 'Users',
      items: [
        { label: 'List', routerLink: 'admin/users' },
        { label: 'Create' }
      ]
    },
    {
      label: 'Teams',
      items: [
        { label: 'List', routerLink: 'admin/teams' },
        { label: 'Create' }
      ]
    }];
  }

  toggleSidebar() {
    this.toggleChange.emit()
  }

}
