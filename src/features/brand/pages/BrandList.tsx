import { useState } from "react";
import { useBrands } from "../api/useBrands";
import { BrandCard } from "../components/BrandCard";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/utils";

export default function BrandList() {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data, isLoading, isError } = useBrands(page, limit);
  const brands = data?.data ?? [];
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Discover Premium Brands
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of world-class brands offering the
          finest products across multiple categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: limit }).map((_, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-8 text-center space-y-4"
              >
                <Skeleton className="w-20 h-20 mx-auto rounded-md" />
                <Skeleton className="h-6 w-32 mx-auto" />
              </div>
            ))
          : brands?.map((brand) => (
              <BrandCard
                key={brand.id}
                image={brand.image}
                name={brand.name}
                id={brand.id}
              />
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
