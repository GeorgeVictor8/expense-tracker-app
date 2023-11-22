import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Expense {
  Categories: string;
  Cost: number;
}

export interface Balance {
  Description: string;
  Amount: number;
}

export interface ExpensesState {
  Expenses: Expense[];
}

export interface BalanceState {
  Income: Balance[];
}

const initialExpensesState: ExpensesState = {
  Expenses: [],
};

export const SpendingSlice = createSlice({
  name: "expenses",
  initialState: initialExpensesState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.Expenses.push(action.payload);
    },
  },
});

export const { addExpense } = SpendingSlice.actions;
export default SpendingSlice.reducer;

export const calculateSpendingPerCategory = (
  expenses: Expense[]
): any=> {
  const spendingPerCategory = new Map();

  expenses.forEach((expense) => {
    const { Categories, Cost } = expense;
    if (!spendingPerCategory.has(Categories)) {
      spendingPerCategory.set(Categories, Cost);
    } else {
      spendingPerCategory.set(
        Categories,
        spendingPerCategory.get(Categories) + Cost
      );
    }
  });
  return spendingPerCategory;
};
