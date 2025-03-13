export default function Footer() {
    return (
      <footer className="relative w-full bg-gray-900 text-white text-center py-6 shadow-lg shadow-gray-800">
        <div className="text-lg font-bold text-gray-300 hover:text-white transition-all duration-300">
          Desarrollado por{" "}
          <span className="text-blue-400 text-2xl font-extrabold drop-shadow-md">
            Jorge Gómez
          </span>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50"></div>
      </footer>
    );
  }
  