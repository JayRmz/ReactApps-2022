import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const { onSubmit } = props;
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
}
