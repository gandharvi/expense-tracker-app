import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseURL = 'http://localhost:3000/api/expenses';

  async getExpenses() {
    const response = await axios.get(this.baseURL);
    return response.data;
  }

  async addExpense(expense) {
    const response = await axios.post(this.baseURL, expense);
    return response.data;
  }

  async deleteExpense(id) {
    await axios.delete(`${this.baseURL}/${id}`);
  }
}
