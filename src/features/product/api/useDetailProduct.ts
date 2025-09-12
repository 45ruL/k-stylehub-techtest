import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { IProducts } from "../types/product";

export const useDetailProduct = (productId: string) => {
  return useQuery({
    queryKey: ["detail-product", productId],
    queryFn: async (): Promise<IProducts> => {
      const res = await api.get(`/products/${productId}`);

      return res.data;
    },
  });
};
