import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/habits`;

// Obtener hábitos
export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});

// Marcar como hecho (✅ Done)
export const completeHabit = createAsyncThunk("habits/completeHabit", async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.patch(`${API_URL}/${id}/complete`,{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return { id, ...response.data };
});

// Reiniciar hábito (🔁 Reset)
export const resetHabit = createAsyncThunk("habits/resetHabit", async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.patch(`${API_URL}/${id}/reset`,{}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return { id };
});

export const addHabit = createAsyncThunk("habits/addHabit", async (habitData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, habitData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
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
            })

            .addCase(addHabit.fulfilled, (state, action) => {
                state.items.push(action.payload); // agrega el nuevo hábito al estado
            });
            
            
    }
});

export default habitsSlice.reducer;
