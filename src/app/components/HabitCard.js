"use client";
import { useDispatch } from "react-redux";
import { fetchHabits, completeHabit, resetHabit } from "@/store/habitsSlice";
import axios from "axios";

export default function HabitCard({ habit }) {
  const dispatch = useDispatch();

  const handleComplete = async () => {
    await axios.put(`http://localhost:3000/habits/${habit._id}`, {
      progress: habit.progress + 1,
    });
    dispatch(fetchHabits());
  };

  const handleStreakDone = () => {
    dispatch(completeHabit(habit._id));
    dispatch(fetchHabits());
  };

  const handleReset = () => {
    dispatch(resetHabit(habit._id));
  };

  const progressPercentage = (habit.progress / 66) * 100;
  const progressColor =
    progressPercentage < 33 ? "bg-red-500" :
      progressPercentage < 66 ? "bg-yellow-500" :
        "bg-green-500";

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg w-full md:w-80 border border-gray-700">
      <h3 className="text-lg font-semibold">{habit.name}</h3>

      {/* Barra de Progreso */}
      <div className="w-full bg-gray-700 h-4 rounded-full mt-3">
        <div
          className={`${progressColor} h-4 rounded-full transition-all`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <p className="mt-3 text-sm text-gray-400">Progreso: {habit.progress} / 66 días</p>

      <button
        className={`mt-4 ${habit.progress >= 66 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          } text-white px-4 py-2 rounded-lg w-full transition-all`}
        onClick={handleComplete}
        disabled={habit.progress >= 66}
      >
        ✔ Marcar como Completado
      </button>


      <button
        className={`mt-2 px-4 py-2 rounded-lg w-full transition-all text-white ${habit.progress >= 66
            ? 'bg-green-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
          }`}
        onClick={handleStreakDone}
        disabled={habit.progress >= 66}
      >
        ✅ Done
      </button>


      <button
        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full transition-all"
        onClick={handleReset}
      >
        🔁 Reiniciar Hábito
      </button>
    </div>
  );
}
