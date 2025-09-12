import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Brand = {
  id: string;
  name: string;
  image: string;
};

export function BrandCard({ id, name, image }: Brand) {
  const nav = useNavigate();
  return (
    <Card
      key={id}
      onClick={() =>
        nav(`${id}/products`, {
          state: {
            name,
          },
        })
      }
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent group"
    >
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <img
            src={image || "/placeholder.svg"}
            alt={`${name} image`}
            className="w-20 h-20 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
      </CardContent>
    </Card>
  );
}
