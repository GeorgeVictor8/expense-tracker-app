import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Expenses {
  id: string;
  Purchases: string;
  Cost: number;
  Categories: string;
  Date: string;
  Notes: string;
}

export interface Balance {
  Amount: number;
  Description: string;
}

export interface AllExpensesState {
  allExpenses: Expenses[];
  allIncome: Balance[];
}

const initialState: AllExpensesState = {
  allExpenses: [],
  allIncome: [],
  //   Categories: [
  //     {
  //       Category: "Groceries",
  //     },
  //     {
  //       Category: "Transportation",
  //     },
  //     {
  //       Category: "Entertainment",
  //     },
  //     {
  //       Category: "Living Expenses",
  //     },
  //     {
  //       Category: "Fun",
  //     },
  //   ],
};

export const ExpensesSlice = createSlice({
  name: "Expenses",
  initialState,
  reducers: {
    updatingExpenses: (
      state: AllExpensesState,
      action: PayloadAction<Expenses>
    ) => {
      state.allExpenses.push(action.payload);
    },

    deletingExpense: (
      state: AllExpensesState,
      action: PayloadAction<Expenses>
    ) => {
      state.allExpenses = state.allExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const { updatingExpenses, deletingExpense } = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
