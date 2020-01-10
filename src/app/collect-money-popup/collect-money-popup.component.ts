import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActionsDialogComponent } from '../actions-dialog/actions-dialog.component';

@Component({
  selector: 'app-collect-money-popup',
  templateUrl: './collect-money-popup.component.html',
  styleUrls: ['./collect-money-popup.component.css']
})
export class CollectMoneyPopupComponent {
  displayValue: string;

  constructor(
    publicdialogRef: MatDialogRef<CollectMoneyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) publicdata: boolean,
    public dialog: MatDialog
  ) {}

  previousPage(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ActionsDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }
}
