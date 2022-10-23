import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notesService from "./notesService";
const initialState = {};

/* --  Notes Slice with reducers -- */
const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: {},
});

export default notesSlice.reducer;
