import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import dropDownReducer from "./dropDownSlice";
import authReducer from "./authSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    dropDown: dropDownReducer,
    auth: authReducer
  },
});

export default appStore;
