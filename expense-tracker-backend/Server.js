const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/expensetracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

const expenseRoutes = require('./routes/ExpenseRoutes');

app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
