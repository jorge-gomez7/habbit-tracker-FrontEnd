import HabitList from "../components/HabitList";

export default function HabitPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Gestión de Hábitos</h1>
        <HabitList />
      </div>
    </div>
  );
}
