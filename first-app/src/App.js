import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'new TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'Xbox Controller',
      amount: 350.5,
      date: new Date(2022, 8, 31)
    }
  ]
  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is also visible!</p>
      {
        expenses.map((expense, index) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index} />
        ))
      }

    </div>
  );
}

export default App;
