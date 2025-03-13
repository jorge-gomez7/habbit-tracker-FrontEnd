import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/habits"; 

// Acción asíncrona para obtener los hábitos
export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

const habitsSlice = createSlice({
    name: "habits",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHabits.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchHabits.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchHabits.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default habitsSlice.reducer;
