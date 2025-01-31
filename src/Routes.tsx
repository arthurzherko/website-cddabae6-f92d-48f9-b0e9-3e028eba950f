import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Fun } from "@/pages/Fun";
import { Wow } from "@/pages/Wow";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/fun" element={<Fun />} />
    <Route path="/wow" element={<Wow />} />
  </RouterRoutes>
);

export default Routes;