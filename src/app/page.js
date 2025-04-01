'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = tab === 'login' ? 'login' : 'register';
      const res = await axios.post(`http://localhost:3000/auth/${endpoint}`, form);

      if (tab === 'login') {
        localStorage.setItem('userId', res.data.userId);
        router.push('/habits'); // Redirige a la pantalla de hábitos
      } else {
        alert('Registro exitoso. Ahora inicia sesión.');
        setTab('login');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error al procesar la solicitud');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 ${tab === 'login' ? 'bg-blue-600' : 'bg-gray-600'} rounded-l`}
            onClick={() => setTab('login')}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-4 py-2 ${tab === 'register' ? 'bg-blue-600' : 'bg-gray-600'} rounded-r`}
            onClick={() => setTab('register')}
          >
            Registrarse
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className="p-2 rounded bg-gray-700 focus:outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="p-2 rounded bg-gray-700 focus:outline-none"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white"
          >
            {tab === 'login' ? 'Entrar' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  );
}
