import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expense) => {
        props.onAddExpense({
            ...expense,
            id: Math.random().toString(),
        });
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
export default NewExpense;