import { configureStore } from "@reduxjs/toolkit";
import { ExpensesSlice } from "./Slices/ExpensesFormSlice";
import { CategoriesSlice } from "./Slices/CategoriesSlice"
import { BalanceSlice } from "./Slices/BalanceSlice";

export const store = configureStore({
  reducer: {
    Expenses: ExpensesSlice.reducer,
    Categories: CategoriesSlice.reducer,
    Balance: BalanceSlice.reducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
