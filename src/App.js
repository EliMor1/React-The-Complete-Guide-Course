import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <ExpenseItem/>
    </Fragment>
  );
}

export default App;
