import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-primary">ModernShop</h1>
          {location?.pathname !== "/" && (
            <Button variant="ghost" onClick={() => nav(-1)}>
              ← Back
            </Button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Button size="sm" className="bg-red-500 hover:bg-red-500/90">
            <Heart className="h-4 w-4" />
            <p className="hidden md:inline">Wishlist</p>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingBag className="h-4 w-4" />
            <p className="hidden md:inline">Cart</p>
          </Button>
        </div>
      </div>
    </header>
  );
}
