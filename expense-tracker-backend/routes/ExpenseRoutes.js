const express = require('express');
const router = express.Router();
const Expense = require('../models/ExpenseModel');

// Get all expenses
router.get('/', async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// Add new expense
router.post('/', async (req, res) => {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.json(newExpense);
});

// Delete an expense
router.delete('/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
});

module.exports = router;
