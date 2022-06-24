
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import './App.css';

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : 94.12,
      date : new Date(2020 , 7 ,14),
    },
    {
      id : 'e2',
      title : 'New TV',
      amount : 94.12,
      date : new Date(2022 , 7 ,14),
    },
    {
      id : 'e3',
      title : 'Car Insurance',
      amount : 294.12,
      date : new Date(2020 , 7 ,24),
    },
    {
      id : 'e4',
      title : 'New Desk (Wooden)',
      amount : 94.12,
      date : new Date(2020 , 7 ,14),
    },

  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
