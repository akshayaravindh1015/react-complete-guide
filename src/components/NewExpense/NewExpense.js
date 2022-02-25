import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setShowFormHandler(false);
    props.onAddExpense(expenseData);
  };
  const setShowFormHandler = (flag = true) => { setShowForm(flag) };

  return (
    <div className='new-expense'>
      {
        showForm ?
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={setShowFormHandler} />
          : <button onClick={setShowFormHandler}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
