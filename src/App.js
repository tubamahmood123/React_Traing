
import Expenses from './Components/Expenses/Expenses';
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

  ]
  return (
    <div>
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
