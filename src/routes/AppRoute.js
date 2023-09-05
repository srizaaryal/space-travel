import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Spacecraft" element={<Spacecraft />} />
      <Route path="/Spacecraft/:id" element={<Spacecraft />} />
      <Route path="/SpacecraftBuild" element={<SpacecraftBuild />} />
      <Route path="/Spacecrafts" element={<Spacecrafts />} />
      <Route path="/Planets" element={<Planets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoute;
