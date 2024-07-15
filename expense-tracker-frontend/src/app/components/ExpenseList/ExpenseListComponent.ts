// import { Component, OnInit } from '@angular/core';
// import { ExpenseService } from '../../services/ExpenseService';

// @Component({
//   selector: 'app-expense-list',
//   templateUrl: './ExpenseListComponent.html',
//   styleUrls: ['./ExpenseListComponent.css']
// })
// export class ExpenseListComponent implements OnInit {
//   expenses: any = [];

//   constructor(private expenseService: ExpenseService) { }

//   async ngOnInit() {
//     this.expenses = await this.expenseService.getExpenses();
//   }

//   async deleteExpense(id) {
//     await this.expenseService.deleteExpense(id);
//     this.expenses = this.expenses.filter(exp => exp._id !== id);
//   }
// }
