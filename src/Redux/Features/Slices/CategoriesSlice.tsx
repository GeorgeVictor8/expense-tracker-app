import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  id: string;
  name: string;
}

export interface CategoriesState {
  Categories: Category[];
}

const initialState: CategoriesState = {
  Categories: [
    { id: "1", name: "Groceries" },
    { id: "2", name: "Transportation" },
    { id: "3", name: "Entertainment" },
    { id: "4", name: "Living Expenses" },
    { id: "5", name: "Fun" },
  ],
};
export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.Categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.Categories = state.Categories.filter(
        (Category) => Category.id !== action.payload
      );
    },
  },
});

export const { addCategory, removeCategory } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
