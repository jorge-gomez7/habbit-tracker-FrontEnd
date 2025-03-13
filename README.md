🏆 Habit Tracker - Frontend
🚀 Descripción
Este es el frontend de la aplicación Habit Tracker, una plataforma diseñada para ayudar a los usuarios a desarrollar hábitos mediante seguimiento diario y una barra de progreso.
Este proyecto usa Next.js, Redux Toolkit y Tailwind CSS para una experiencia moderna y optimizada.

🛠️ Tecnologías Utilizadas
Stack	Tecnologías
Framework	Next.js 15
Estado Global	Redux Toolkit
Estilos	Tailwind CSS
📂 Estructura del Proyecto
php
Copy
Edit
frontend/
│── src/
│   ├── app/          # Páginas y Layout principal
│   ├── components/   # Componentes reutilizables
│   ├── store/        # Redux Toolkit (Slices, Store)
│   ├── styles/       # Estilos globales y Tailwind CSS
│   ├── assets/       # Imágenes, íconos, etc. (si aplica)
│── public/           # Archivos estáticos (favicon, imágenes, etc.)
│── .gitignore        # Archivos a ignorar en Git
│── tailwind.config.js # Configuración de Tailwind CSS
│── package.json      # Dependencias del frontend
│── README.md         # Instrucciones del proyecto
🏗️ Instalación y Configuración
🔹 1. Clonar el Repositorio
bash
Copy
Edit
git clone https://github.com/TU_USUARIO/habit-tracker.git
cd habit-tracker/frontend
🔹 2. Instalar Dependencias
bash
Copy
Edit
npm install
🔹 3. Iniciar el Servidor de Desarrollo
bash
Copy
Edit
npm run dev
📌 Acceder a la aplicación:

Frontend: http://localhost:3001
Backend API: http://localhost:3000/habits
🎨 Capturas de Pantalla
📷 Vista de la Aplicación



🎨 Estilos y Temas
Tailwind CSS se utiliza para el diseño moderno y responsivo.
Se soporta modo oscuro automáticamente.
Diseño optimizado para desktop y mobile.
🔧 Estado Global (Redux)
Redux Toolkit se usa para manejar los hábitos de los usuarios:

store/store.js → Configuración del store.
store/habitsSlice.js → Slice para manejar el estado de los hábitos.
📜 Licencia
Este proyecto es de código abierto y está disponible bajo la MIT License.

💡 Desarrollado por Jorge Gómez 🚀 ¡Haz crecer tus hábitos con código!











