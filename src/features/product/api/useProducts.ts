import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { IProducts } from "../types/product";

export const useProducts = (brandId: string, page: number, limit = 6) => {
  return useQuery({
    queryKey: ["products", brandId, page, limit],
    queryFn: async (): Promise<{ data: IProducts[]; total: number }> => {
      const res = await api.get(`/products`, {
        params: { brandId, page, limit },
      });

      const data = res.data;

      let total = 0;
      if (!total) {
        const allRes = await api.get(`/products`, {
          params: { brandId },
        });
        total = allRes.data.length;
      }

      return { data, total };
    },
  });
};
