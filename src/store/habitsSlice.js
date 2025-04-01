import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/habits";

// Obtener hábitos
export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

// Marcar como hecho (✅ Done)
export const completeHabit = createAsyncThunk("habits/completeHabit", async (id) => {
    const response = await axios.patch(`${API_URL}/${id}/complete`);
    return { id, ...response.data };
});

// Reiniciar hábito (🔁 Reset)
export const resetHabit = createAsyncThunk("habits/resetHabit", async (id) => {
    const response = await axios.patch(`${API_URL}/${id}/reset`);
    return { id };
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
            // Carga de hábitos
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
            })

            // Hábito completado (✅ Done)
            .addCase(completeHabit.fulfilled, (state, action) => {
                const { id, streak, lastCompleted, progress } = action.payload;
                const habit = state.items.find(h => h._id === id);
                if (habit) {
                    habit.streak = streak;
                    habit.lastCompleted = lastCompleted;
                    habit.progress = progress;
                }
            })

            // Hábito reiniciado (🔁 Reset)
            .addCase(resetHabit.fulfilled, (state, action) => {
                const habit = state.items.find(h => h._id === action.payload.id);
                if (habit) {
                    habit.streak = 0;
                    habit.lastCompleted = null;
                    habit.progress = 0;
                }
            });
    }
});

export default habitsSlice.reducer;
