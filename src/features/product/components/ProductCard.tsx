import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { IProducts } from "../types/product";

export function ProductCard({ product }: { product: IProducts }) {
  const nav = useNavigate();
  return (
    <Card
      key={product.id}
      onClick={() => nav(`${product.id}`)}
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent group overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name} Shoes
          </h3>
          <Button variant="ghost" size="sm" className="p-1 h-auto">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-amber-400 mr-1 " />
            <span className="text-sm text-muted-foreground">
              {product.rating}
            </span>
          </div>
          <Badge variant="outline" className="ml-auto text-xs">
            {product.category} Sport
          </Badge>
        </div>
        <p className="text-xl font-bold text-primary">Rp{product.price}</p>
      </CardContent>
    </Card>
  );
}
