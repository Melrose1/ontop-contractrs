import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ButtonComponent } from './button/button.component';
import { TableCardComponent } from './table-card/table-card.component';
import { RowCardComponent } from './row-card/row-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContractsComponent, ButtonComponent, TableCardComponent, RowCardComponent, EditCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
