import { ActionsDialogComponent } from '../actions-dialog/actions-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-enter-pin-dialog',
  templateUrl: './enter-pin-dialog.component.html',
  styleUrls: ['./enter-pin-dialog.component.css']
})
export class EnterPinDialogComponent {
  constructor(public dialog: MatDialog) {}
  pin = '';
  inputValue = '';
  closeDialog(): void {
    this.dialog.closeAll();
  }

  updatePin(input: number) {
    if (this.pin && this.pin.length === 4) {
      return;
    }
    this.pin =
      this.pin && this.pin.length
        ? this.pin + input.toString()
        : input.toString();
    this.inputValue = '*';
  }
  deletePin() {
    this.pin = this.pin && this.pin.length ? this.pin.slice(0, -1) : null;
  }
  openActionsDialog(): void {
    if (this.pin && this.pin.length === 4) {
      this.dialog.closeAll();
      const dialogRef = this.dialog.open(ActionsDialogComponent, {
        backdropClass: 'c-backdrop',
        hasBackdrop: true,
        width: '800px',
        autoFocus: false
      });
    }
  }
}
