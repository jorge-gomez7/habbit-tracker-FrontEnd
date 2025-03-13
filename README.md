# 🚀 Habit Tracker - Frontend

## 📌 Descripción
Este es el frontend de la aplicación **Habit Tracker**, una plataforma diseñada para ayudar a los usuarios a desarrollar hábitos mediante seguimiento diario y una barra de progreso.  
Este proyecto usa **Next.js, Redux Toolkit y Tailwind CSS** para una experiencia moderna y optimizada.

---

## 🛠️ Tecnologías Utilizadas

| Stack  | Tecnologías |
|--------|------------|
| **Frontend** | Next.js 15, Redux Toolkit, Tailwind CSS |
| **Estado Global** | Redux Toolkit |

---

## 📁 Estructura del Proyecto

```
habit-tracker/
├── frontend/ # Código del cliente (Next.js, Redux, Tailwind)
│   ├── src/
│   │   ├── app/ # Páginas y Layout principal
│   │   ├── components/ # Componentes reutilizables
│   │   ├── store/ # Redux Toolkit (Slices, Store)
│   │   ├── styles/ # Estilos globales y Tailwind CSS
│   │   ├── assets/ # Imágenes, íconos, etc.
│   │   ├── public/ # Archivos estáticos (favicon, imágenes, etc.)
│   ├── .gitignore # Archivos a ignorar en Git
│   ├── tailwind.config.js # Configuración de Tailwind CSS
│   ├── package.json # Dependencias del frontend
│   ├── README.md # Instrucciones del proyecto
```

---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/TU_USUARIO/habit-tracker.git
cd habit-tracker/frontend
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

---

## 🌐 Acceder a la Aplicación

- **Frontend:** [http://localhost:3001](http://localhost:3001)  
- **Backend API:** [http://localhost:3000/habits](http://localhost:3000/habits)

---

## 🖼️ Capturas de Pantalla  
Aquí puedes ver una vista previa de la aplicación:

![Interfaz de Habit Tracker](public/screenshot.png)

---

## 🎨 Estilos y Temas  
✨ **Tailwind CSS** se utiliza para el diseño moderno y responsivo.  
🌙 **Modo oscuro automático.**  
📱 **Diseño optimizado para desktop y mobile.**  

---

## 📦 Manejo de Estados (Redux)
- `store/store.js` → Configuración del store.
- `store/habitsSlice.js` → Slice para manejar el estado de los hábitos.

---

## 📜 Licencia
Este proyecto es de código abierto y está disponible bajo la **MIT License**.

---

## 🚀 Desarrollado por **Jorge Gómez**
**¡Haz crecer tus hábitos con código!** 💡

