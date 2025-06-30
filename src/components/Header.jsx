import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  



  return (
    <header className="bg-black h-28 w-full flex items-center sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl text-violet-500 font-bold">
          <a href="/">David Asto</a>
        </div>

        {/* Menú Desktop */}
        <ul className="space-x-7 text-gray-200 text-lg hidden md:flex">
          <li><a href="/">Home</a></li>
          <li><a href="/sobreMi">Sobre Mi</a></li>
          <li><a href="/projects">Proyectos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>

        {/* Hamburguesa */}
        <button
          type="button"
          className={`flex flex-col gap-1 md:hidden cursor-pointer z-51 transition-all duration-200 ${menuOpen ? "scale-140": ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`h-0.5  w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5 bg-black " : "bg-violet-500"}`}></span>
          <span className={`h-0.5 w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-violet-500"}`}></span>
          <span className={`h-0.5 w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5 bg-black " : "bg-violet-500"}`}></span>
        </button>
      </nav>

      {/* Sidebar Menú Lateral */}
      <div className={` fixed top-0 left-0 h-dvh w-full bg-indigo-500 text-gray-200 transform transition-transform 
        duration-300 z-50 flex flex-col gap-y-7 justify-center items-center text-3xl md:hidden ${menuOpen ? "translate-x-0 " : "translate-x-full "}`}>
        <a href="/">Home</a>
        <a href="/sobreMi">Sobre Mi</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </div>

      {/* Fondo oscuro al abrir */}
      
    </header>
  );
}
  


export default Header
