import { RouterProvider } from "react-router-dom";
import GetRoutes from "./getRoutes";

export function AppRouter() {
  const router = GetRoutes();
  return <RouterProvider router={router} />;
}
