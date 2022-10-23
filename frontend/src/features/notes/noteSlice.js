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

/* Functions */
export const getNotes = createAsyncThunk("notes/getAll", async (ticketId, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await noteService.getNotes(ticketId, token);
	} catch (error) {
		const message = error?.response?.data?.message || error?.message.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

export const createNote = createAsyncThunk(
	"note/created",
	async ({ noteText, ticketId }, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await noteService.createNote(noteText, ticketId, token);
		} catch (error) {
			const message = error?.response?.data?.message || error?.message.toString();

			return thunkAPI.rejectWithValue(message);
		}
	},
);

/* --  2- Notes Slice with reducers -- */
const noteSlice = createSlice({
	name: "notes",
	initialState,
	reducer: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNotes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.notes = action.payload;
			})
			.addCase(getNotes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(createNote.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createNote.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.notes.push(action.payload);
			})
			.addCase(createNote.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = noteSlice.actions;

/* --  3- Notes reducer export -- */
export default noteSlice.reducer;
