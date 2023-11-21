import ExpensesForm from "./Components/ExpensesForm/ExpensesForm";
import Balance from "./Components/ExpensesForm/Balance";
import ExpensesLog from "./Components/History/ExpensesLog";

function App() {
  return (
    <>
      <div className="overlay">
        <ExpensesForm />
        <ExpensesLog />
        <Balance />
      </div>
    </>
  );
}

export default App;
