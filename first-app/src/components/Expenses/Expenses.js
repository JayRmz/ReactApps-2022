import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const { items } = props;
  return (
    <Card className="expenses">
      {items.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={index}
        />
      ))}
    </Card>
  );
}
