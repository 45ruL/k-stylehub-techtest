import { useLocation, useParams } from "react-router-dom";
import { useProducts } from "../api/useProducts";
import { ProductCard } from "../components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/utils";

export function ProductList() {
  const { state } = useLocation();
  const { brandId } = useParams();
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data, isLoading, isError } = useProducts(
    brandId as string,
    page,
    limit
  );

  const products = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);
  const paginationRange = getPaginationRange(page, totalPages);

  if (isError) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Something went wrong
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Products</h2>
        <p className="text-muted-foreground">
          Discover the latest collection from <b>{state?.name}</b>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden space-y-4"
              >
                <Skeleton className="w-full h-48" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              </div>
            ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {paginationRange.map((p, i) =>
              p === "..." ? (
                <PaginationItem key={i}>
                  <span className="px-3">...</span>
                </PaginationItem>
              ) : (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={page === p}
                    onClick={() => setPage(Number(p))}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
