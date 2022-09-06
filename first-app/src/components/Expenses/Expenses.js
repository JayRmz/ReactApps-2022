import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

export default function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
