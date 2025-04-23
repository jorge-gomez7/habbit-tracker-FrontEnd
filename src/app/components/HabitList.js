"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchHabits } from "@/store/habitsSlice";
import HabitCard from "./HabitCard";
import AddHabitForm from "./AddHabitForm";

export default function HabitList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, status, error } = useSelector((state) => state.habits);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    } else {
      dispatch(fetchHabits());
    }
  }, [dispatch, router]);

  if (status === "loading") return <p className="text-white text-center">⏳ Cargando hábitos...</p>;
  if (status === "failed") return <p className="text-red-500 text-center">⚠ Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">📌 Lista de Hábitos</h1>
      <AddHabitForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.map((habit) => <HabitCard key={habit._id} habit={habit} />)
        ) : (
          <p className="text-gray-400">No hay hábitos registrados.</p>
        )}
      </div>
    </div>
  );
}
