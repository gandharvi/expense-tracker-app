import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './AppComponent';
import { ExpenseListComponent } from './components/ExpenseList/ExpenseListComponent';
import { AddExpenseComponent } from './components/AddExpense/AddExpenseComponent';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
