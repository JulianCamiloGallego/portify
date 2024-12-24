import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../redux/slices/resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
