import { notFound } from "next/navigation";
import { Clock, Users, Utensils } from "lucide-react";

interface RecipePageProps {
  params: {
    id: string;
  };
}

// This would typically fetch from a database
const getRecipe = async (id: string) => {
  // Temporary mock data
  return {
    id,
    title: "Classic Spaghetti Bolognese",
    description: "A hearty Italian pasta dish with rich meat sauce",
    imageUrl: "/images/spaghetti.jpg",
    prepTime: 45,
    servings: 4,
    ingredients: [
      "500g ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "400g canned tomatoes",
      "2 tbsp tomato paste",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "400g spaghetti",
    ],
    instructions: [
      "Heat oil in a large pan and cook the onion until soft",
      "Add garlic and cook for 1 minute",
      "Add ground beef and cook until browned",
      "Stir in tomatoes, tomato paste, and oregano",
      "Simmer for 20 minutes",
      "Meanwhile, cook spaghetti according to package instructions",
      "Serve sauce over cooked spaghetti",
    ],
  };
};

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <p className="text-muted-foreground">{recipe.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime} minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
