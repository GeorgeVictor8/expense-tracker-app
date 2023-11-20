import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Balance {
  Amount: number;
  Description: string | undefined;
}

export interface AllBalanceState {
  allIncome: Balance[];
}

const initialState: AllBalanceState = {
  allIncome: [
    {
      Amount: 100,
      Description: "initial Balance",
    },
  ],
};

export const BalanceSlice = createSlice({
  name: "Balance",
  initialState,
  reducers: {
    updatingBalance: (
      state: AllBalanceState,
      action: PayloadAction<Balance>
    ) => {
      state.allIncome.push(action.payload);
    },
  },
});

export const { updatingBalance } = BalanceSlice.actions;
export default BalanceSlice.reducer;
