import { Component } from '@angular/core';
import { DepositDialogComponent } from '../deposit-dialog/deposit-dialog.component';
import { DisplayBalanceDialogComponent } from '../display-balance-dialog/display-balance-dialog.component';
import { MatDialog } from '@angular/material';
import { WithdrawDialogComponent } from '../withdraw-dialog/withdraw-dialog.component';
import { EnterPinDialogComponent } from '../enter-pin-dialog/enter-pin-dialog.component';

@Component({
  selector: 'app-actions-dialog',
  templateUrl: './actions-dialog.component.html',
  styleUrls: ['./actions-dialog.component.css']
})
export class ActionsDialogComponent {
  constructor(public dialog: MatDialog) {}

  previousPage(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EnterPinDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }

  openWithdrawDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(WithdrawDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }
  openDepositDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DepositDialogComponent, {
      backdropClass: 'c-backdrop',
      hasBackdrop: true,
      width: '800px',
      autoFocus: false
    });
  }
  openDisplayBalanceDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DisplayBalanceDialogComponent, {
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
