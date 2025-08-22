import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Import the appSlice reducer

const appStore = configureStore({
  reducer: {
    app : appSlice
  },
});

export default appStore;
