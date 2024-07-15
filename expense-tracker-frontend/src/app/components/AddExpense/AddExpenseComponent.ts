import { Component } from '@angular/core';
import { ExpenseService } from '../../services/ExpenseService';

@Component({
  selector: 'app-add-expense',
  templateUrl: './AddExpenseComponent.html',
  styleUrls: ['./AddExpenseComponent.css']
})
export class AddExpenseComponent {
  description: string;
  amount: number;

  constructor(private expenseService: ExpenseService) { }

  async addExpense() {
    await this.expenseService.addExpense({ description: this.description, amount: this.amount });
    this.description = '';
    this.amount = null;
  }
}
