import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EnterPinDialogComponent } from './enter-pin-dialog/enter-pin-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'design-atm-assignment';
  constructor(public dialog: MatDialog) {}

  openEnterPinDialog(): void {
    const dialogRef = this.dialog.open(EnterPinDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '700px',
      autoFocus: false
    });
  }
}
