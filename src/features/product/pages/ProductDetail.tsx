import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDetailProduct } from "../api/useDetailProduct";
import ProductDetailSkeleton from "../components/productDetailSkeleton";

export function ProductDetail() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useDetailProduct(productId as string);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Something went wrong
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border border-border">
            <img
              src={product?.image || "/placeholder.svg"}
              alt={product?.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {product?.category}
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {product?.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="h-5 w-5 fill-accent text-accent mr-1" />
                <span className="text-lg font-semibold">{product?.rating}</span>
                <span className="text-muted-foreground ml-2">
                  (128 reviews)
                </span>
              </div>
            </div>
            <p className="text-4xl font-bold text-primary mb-6">
              {product?.price}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {product?.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              Buy Now
            </Button>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-foreground mb-4">
              Product Features
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {product?.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
