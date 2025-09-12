import AppLayout from "@/components/layout";
import BrandList from "@/features/brand/pages/BrandList";
import { ProductDetail } from "@/features/product/pages/ProductDetail";
import { ProductList } from "@/features/product/pages/ProductList";
import { createBrowserRouter } from "react-router-dom";

export default function GetRoutes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <BrandList />,
        },
        {
          path: ":brandId/products",
          element: <ProductList />,
        },
        {
          path: ":brandId/products/:productId",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
}
