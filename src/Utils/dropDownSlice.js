import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: {
    headerDropDown: false,
    languageDropDown: false,
  },
  reducers: {
    showHeaderDropDown: (state) => {
      state.headerDropDown = !state.headerDropDown;
    },

    showLanguageDropDown: (state) => {
      state.languageDropDown = !state.languageDropDown;
    },
  },
});

export const {showHeaderDropDown, showLanguageDropDown} = dropDownSlice.actions;
export default dropDownSlice.reducer;