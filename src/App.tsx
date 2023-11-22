import ExpensesForm from "./Components/ExpensesForm/ExpensesForm";
import Balance from "./Components/ExpensesForm/Balance";
import ExpensesLog from "./Components/History/ExpensesLog";
import { PieChart } from "./Components/PieChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="overlay">
                <ExpensesForm />
                <Balance />
                <ExpensesLog />
              </div>
            }
          ></Route>
          <Route
            path="/statistics"
            element={
              <div className="overlay">
                <PieChart />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
