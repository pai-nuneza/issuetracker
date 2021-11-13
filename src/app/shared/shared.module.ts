import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { TreeModule } from 'primeng/tree';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';


let PrimeNG = [
  MenubarModule,
  MegaMenuModule,
  InputTextModule,
  ButtonModule,
  TableModule,
  ToastModule,
  CalendarModule,
  SliderModule,
  PanelModule,
  TabMenuModule,
  MenuModule,
  TreeModule,
  CommonModule,
  ChipModule,
  TagModule,
  DialogModule
];

@NgModule({
  imports: [PrimeNG],
  exports: [PrimeNG],
  declarations: [],
})
export class SharedModule { }
