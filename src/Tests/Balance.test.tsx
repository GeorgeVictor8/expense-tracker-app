import { render, screen } from "@testing-library/react";
import Balance from "../Components/ExpensesForm/Balance";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../Redux/Features/store";

test("renders the Balance component with correct styles and components", () => {
  render(
    <Provider store={store}>
      <Router>
        <Balance />
      </Router>
    </Provider>
  );

  const totalIncomeText = screen.getByText("Total Income: $100");
  expect(totalIncomeText).toBeInTheDocument();

  const totalExpensesText = screen.getByText("Total Expenses: $0");
  expect(totalExpensesText).toBeInTheDocument();

  const remainingBalanceText = screen.getByText("Remaining Balance: $100");
  expect(remainingBalanceText).toBeInTheDocument();
});

test("renders the Input balance button and simulates a click event", () => {
  render(
    <Provider store={store}>
      <Router>
        <Balance />
      </Router>
    </Provider>
  );

  const inputBalanceButton = screen.getByText("Input Balance");
  expect(inputBalanceButton).toBeInTheDocument();
});

test("renders the Balance component with correct remaining balance", () => {
  const mockState = {
    Balance: {
      allIncome: [{ Amount: 100 }, { Amount: 200 }],
    },
    Expenses: {
      allExpenses: [{ Cost: 50 }, { Cost: 75 }],
    },
  };

  const store = createStore(() => mockState);

  render(
    <Provider store={store}>
      <Router>
        <Balance />
      </Router>
    </Provider>
  );

  const totalIncomeElement = screen.getByText("Total Income: $300");
  expect(totalIncomeElement).toBeInTheDocument();

  const totalExpensesElement = screen.getByText("Total Expenses: $125");
  expect(totalExpensesElement).toBeInTheDocument();

  const remainingBalanceElement = screen.getByText("Remaining Balance: $175");
  expect(remainingBalanceElement).toBeInTheDocument();
});
