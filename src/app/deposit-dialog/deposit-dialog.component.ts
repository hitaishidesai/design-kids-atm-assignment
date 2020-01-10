import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionsDialogComponent } from '../actions-dialog/actions-dialog.component';
import { Button } from 'protractor';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.css']
})
export class DepositDialogComponent {
  constructor(public dialog: MatDialog) {}
  divClass = true;
  inputValue = 0.0;
  previousPage(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ActionsDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }
  openConfirmationMessage(): void {
    if (this.inputValue !== 0) {
      this.divClass = false;
    }
  }
  onCancel(): void {
    this.dialog.closeAll();
  }
  addValue(value): void {
    console.log(typeof value);

    this.inputValue = this.inputValue * 10 + value;
    console.log(this.inputValue);
  }
  removeValue(): void {
    let a: number;
    a = this.inputValue % 10;
    this.inputValue = (this.inputValue - a) / 10;
  }
}
