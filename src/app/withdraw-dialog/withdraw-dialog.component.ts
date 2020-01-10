import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionsDialogComponent } from '../actions-dialog/actions-dialog.component';
import { CollectMoneyPopupComponent } from '../collect-money-popup/collect-money-popup.component';

@Component({
  selector: 'app-withdraw-dialog',
  templateUrl: './withdraw-dialog.component.html',
  styleUrls: ['./withdraw-dialog.component.css']
})
export class WithdrawDialogComponent {
  constructor(public dialog: MatDialog) {}

  inputDisabled = true;
  inputValue = '$ 0.00';
  displayValue = '';
  previousPage(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ActionsDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }

  // onCancel(): void {
  //   this.dialog.closeAll();
  // }
  openConfirmationDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(CollectMoneyPopupComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
    dialogRef.componentInstance.displayValue = this.inputValue;
  }

  enableInput(): void {
    this.inputDisabled = false;
    this.inputValue = '$ 0.00';
  }
  onclick1(): void {
    this.inputValue = '$ 1.0';
  }
  onclick5(): void {
    this.inputValue = '$ 5.0';
  }
  onclick10(): void {
    this.inputValue = '$ 10.0';
  }
  onclick15(): void {
    this.inputValue = '$ 15.0';
  }
}
