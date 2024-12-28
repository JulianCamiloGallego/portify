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
    const res = await axios.get(`${API_BASE_URL}/resume`);
    return res.data;
  }
);

export const addResume = createAsyncThunk(
  "resume/addResume",
  async (resume) => {
    const { title, sections, format } = resume;

    const content = JSON.stringify(sections);
    const data = { title, content, format };

    const res = await axios.post(`${API_BASE_URL}/resume`, data);
    return res.data;
  }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fethResumes
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
      })
      // addResume
      .addCase(addResume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addResume.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.resumes.push(action.payload);
      })
      .addCase(addResume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;
