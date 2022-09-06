import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addNewExpense(data) {
    setExpenses((prevState) => {
      return [...prevState, data];
    });
  }

  return (
    <div>
      <NewExpense onSubmit={addNewExpense} />
      {expenses.length === 0 ? (
        <p>No Expenses added</p>
      ) : (
        <Expenses items={expenses} />
      )}
    </div>
  );
}

export default App;
