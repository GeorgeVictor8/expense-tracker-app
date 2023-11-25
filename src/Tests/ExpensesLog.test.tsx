import { render, screen } from "@testing-library/react";
import ExpensesLog from "../Components/History/ExpensesLog";
import { Provider } from "react-redux";
import { store } from "../Redux/Features/store";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

test("renders ExpensesLog component", () => {
  render(
    <Provider store={store}>
      <Router>
        <ExpensesLog />
      </Router>
    </Provider>
  );
  const ExpensesComponent = screen.getByText(
    /Your Saved Expenses are Logged in This table/i
  );
  expect(ExpensesComponent).toBeInTheDocument();
});

test("renders the expenses table based on the Redux state", () => {
  const mockState = {
    Expenses: {
      allExpenses: [
        {
          id: 1,
          Purchases: "Veggies",
          Cost: 100,
          Categories: "Grocery",
          Date: "2023-11-25",
          Notes: "Food",
        },
        {
          id: 2,
          Purchases: "PC",
          Cost: 200,
          Categories: "Fun",
          Date: "2023-11-27",
          Notes: "Electronics",
        },
      ],
    },
  };

  const store = createStore(() => mockState);

  render(
    <Provider store={store}>
      <Router>
        <ExpensesLog />
      </Router>
    </Provider>
  );

  const firstExpenseName = screen.getByText("Veggies");
  expect(firstExpenseName).toBeInTheDocument();
  const firstExpenseCost = screen.getByText("100");
  expect(firstExpenseCost).toBeInTheDocument();
  const firstExpenseCategory = screen.getByText("Grocery");
  expect(firstExpenseCategory).toBeInTheDocument();
  const firstExpenseDate = screen.getByText("2023-11-25");
  expect(firstExpenseDate).toBeInTheDocument();
  const firstExpenseNotes = screen.getByText("Food");
  expect(firstExpenseNotes).toBeInTheDocument();

  const secondExpenseName = screen.getByText("PC");
  expect(secondExpenseName).toBeInTheDocument();
  const secondExpenseCost = screen.getByText("200");
  expect(secondExpenseCost).toBeInTheDocument();
  const secondExpenseCategory = screen.getByText("Fun");
  expect(secondExpenseCategory).toBeInTheDocument();
  const secondExpenseDate = screen.getByText("2023-11-27");
  expect(secondExpenseDate).toBeInTheDocument();
  const secondExpenseNotes = screen.getByText("Electronics");
  expect(secondExpenseNotes).toBeInTheDocument();
});

test('does not render the "Check Statistics" button when there is no data inside the table', () => {
  jest.mock("react-redux", () => ({
    useSelector: jest.fn().mockReturnValue({
      Expenses: {
        allExpenses: [],
      },
    }),
  }));

  render(
    <Provider store={store}>
      <Router>
        <ExpensesLog />
      </Router>
    </Provider>
  );

  const buttonElement = screen.queryByText("Check Statistics");
  expect(buttonElement).toBeNull();
});
