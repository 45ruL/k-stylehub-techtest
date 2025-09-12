import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { IBrand } from "../types/brand";

export const useBrands = (page: number, limit = 6) => {
  return useQuery({
    queryKey: ["brands", page, limit],
    queryFn: async (): Promise<{ data: IBrand[]; total: number }> => {
      const res = await api.get(`/brands`, { params: { page, limit } });
      const data = res.data;
      const allRes = await api.get(`/brands`);
      const total = allRes.data.length;

      return { data, total };
    },
  });
};
