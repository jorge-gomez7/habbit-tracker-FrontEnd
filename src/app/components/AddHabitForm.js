"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "@/store/habitsSlice";

export default function AddHabitForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(addHabit({ name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del hábito"
        className="p-2 rounded bg-gray-700 focus:outline-none text-white"
        required
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        ➕ Agregar
      </button>
    </form>
  );
}
