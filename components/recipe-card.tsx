import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  servings: number;
}

export function RecipeCard({
  id,
  title,
  description,
  imageUrl,
  prepTime,
  servings,
}: RecipeCardProps) {
  return (
    <Link href={`/recipes/${id}`}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
        <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-muted">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{prepTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{servings} servings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
