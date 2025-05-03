import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import MainLayout from "./modules/dashboard/layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.auth.map((ruta) => (
          <Route path={ruta.path} element={ruta.component} />
        ))}
        <Route path="/" element={<MainLayout />}>
          {routes.dashboard.map((ruta) => (
            <Route path={ruta.path} element={ruta.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
