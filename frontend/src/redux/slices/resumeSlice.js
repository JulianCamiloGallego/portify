import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_BASE_URL from "../../config/apiConfig";
import axios from "axios";

const initialState = {
  resumes: [],
  loading: null,
  error: null,
};

export const fetchResumes = createAsyncThunk(
  "resume/fetchResumes",
  async () => {
    console.log("hit");
    const res = await axios.get(`${API_BASE_URL}/resume`);
    console.log(res);
    return res.data;
  }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume: (state, action) => {
      state.resumes = [...state.resumes, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.resumes = action.payload;
      })
      .addCase(fetchResumes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addResume } = resumeSlice.actions;

export default resumeSlice.reducer;
