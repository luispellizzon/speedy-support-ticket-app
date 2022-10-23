import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./noteService";

/* --  1- Note initial state -- */
const initialState = {
	notes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

/* --  2- Notes Slice with reducers -- */
const noteSlice = createSlice({
	name: "notes",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {},
});

export const { reset } = noteSlice.actions;

/* --  3- Notes reducer export -- */
export default noteSlice.reducer;
