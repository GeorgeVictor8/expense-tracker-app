import ExpensesForm from "./Components/ExpensesForm/ExpensesForm";
import Balance from "./Components/ExpensesForm/Balance";
import ExpensesLog from "./Components/History/ExpensesLog";

function App() {
  return (
    <>
      <ExpensesForm />
      <Balance />
      <ExpensesLog />
    </>
  );
}

export default App;
