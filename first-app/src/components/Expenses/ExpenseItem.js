import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const { title, amount, date } = props;
  const [itemTitle, setItemTitle] = useState(title);

  const clickedHandler = () => {
    setItemTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button onClick={clickedHandler}> Change Title </button> */}
    </Card>
  );
}
