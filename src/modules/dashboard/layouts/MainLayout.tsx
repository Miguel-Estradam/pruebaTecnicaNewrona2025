import React from "react";
import { Outlet, Link } from "react-router";
import { Route, routes } from "../../../routes/routes";
import LOGO from "../../../assets/favicon.webp";
const MainLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-24 bg-bg-primary">
      {/* Sidebar */}
      <aside className="col-span-1 bg-primary h-full flex flex-col gap-2.5 p-4">
        <div className="w-full flex justify-center">
          <img src={LOGO} alt="" />
        </div>
        {routes.dashboard.map((ruta, i) => (
          <>
            <LinkRoute key={i} ruta={ruta} />
          </>
        ))}
      </aside>

      {/* Contenido principal */}
      <div className="col-span-23 p-4 h-full min-h-screen flex flex-col justify-between">
        <header className="w-full mb-4">
          <h1 className="text-2xl font-bold">Mi Aplicación</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600 hover:underline">
              Inicio
            </Link>
            <Link to="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
            <Link to="/settings" className="text-blue-600 hover:underline">
              Configuración
            </Link>
          </nav>
        </header>

        {/* Contenido de la ruta anidada */}
        <main className="w-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="w-full mt-8 pt-4 border-t text-sm text-gray-500">
          <p>© 2025 Mi Aplicación</p>
        </footer>
      </div>
    </div>
  );
};

const LinkRoute: React.FC<{ ruta: Route }> = ({ ruta }) => {
  return (
    <div className="group w-full relative p-2 bg-red-400">
      <Link to={ruta.path}>{ruta.icon}</Link>
      <div className="absolute top-0 left-[100%] hidden group-hover:flex justify-center items-center px-4 py-2 rounded-gl ">
        {ruta.title}
      </div>
    </div>
  );
};
export default MainLayout;
