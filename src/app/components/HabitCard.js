"use client";
import { useDispatch } from "react-redux";
import { fetchHabits } from "@/store/habitsSlice";
import axios from "axios";

export default function HabitCard({ habit }) {
  const dispatch = useDispatch();

  const handleComplete = async () => {
    await axios.put(`http://localhost:3000/habits/${habit._id}`, {
      progress: habit.progress + 1,
    });
    dispatch(fetchHabits());
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
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition-all"
        onClick={handleComplete}
      >
        ✔ Marcar como Completado
      </button>
    </div>
  );
}
