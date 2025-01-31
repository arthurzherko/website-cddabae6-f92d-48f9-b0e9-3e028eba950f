import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Index } from "./pages/";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Index />} />
  </RouterRoutes>
);

export default Routes;
