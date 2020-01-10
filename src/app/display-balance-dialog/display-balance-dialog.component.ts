import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionsDialogComponent } from '../actions-dialog/actions-dialog.component';

@Component({
  selector: 'app-display-balance-dialog',
  templateUrl: './display-balance-dialog.component.html',
  styleUrls: ['./display-balance-dialog.component.css']
})
export class DisplayBalanceDialogComponent {
  constructor(public dialog: MatDialog) {}

  previousPage(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ActionsDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }
  onCancel(): void {
    this.dialog.closeAll();
  }
}
