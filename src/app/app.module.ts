import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterPinDialogComponent } from './enter-pin-dialog/enter-pin-dialog.component';
import { ActionsDialogComponent } from './actions-dialog/actions-dialog.component';
import { DepositDialogComponent } from './deposit-dialog/deposit-dialog.component';
import { DisplayBalanceDialogComponent } from './display-balance-dialog/display-balance-dialog.component';
import { WithdrawDialogComponent } from './withdraw-dialog/withdraw-dialog.component';
import { CollectMoneyPopupComponent } from './collect-money-popup/collect-money-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterPinDialogComponent,
    ActionsDialogComponent,
    DepositDialogComponent,
    DisplayBalanceDialogComponent,
    WithdrawDialogComponent,
    CollectMoneyPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],

  entryComponents: [
    EnterPinDialogComponent,
    WithdrawDialogComponent,
    ActionsDialogComponent,
    DepositDialogComponent,
    DisplayBalanceDialogComponent,
    CollectMoneyPopupComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
