import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compband Issue Tracker';
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  _opened: boolean = false;
  _modeNum: number = 0;
  _positionNum: number = 0;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = false;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = 0;
  _autoCollapseWidth: number = 0;

  _toggleOpened(): void {
    this._opened = !this._opened;
  }
  _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? 0 : 500;
  }

  _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? 0 : 500;
  }

   _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

   _toggleAnimate(): void {
    this._animate = !this._animate;
  }

   _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

   _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

   _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

   _onOpenStart(): void {
    console.info('Sidebar opening');
  }

   _onOpened(): void {
    console.info('Sidebar opened');
  }

   _onCloseStart(): void {
    console.info('Sidebar closing');
  }

   _onClosed(): void {
    console.info('Sidebar closed');
  }

   _onTransitionEnd(): void {
    console.info('Transition ended');
  }

   _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }
}
