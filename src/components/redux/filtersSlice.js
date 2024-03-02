import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },

  reducers: {
    setFilterValue(state, action) {
      state.name = action.payload;
    },
  },
});
//  експортуємо генератори екшенів та редюсер
export const { setFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
