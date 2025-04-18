import Link from "next/link";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Share Your Culinary Creations
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Join our community of food enthusiasts. Share your favorite recipes,
            discover new dishes, and connect with fellow food lovers.
          </p>
          <div className="flex gap-4">
            <Link
              href="/recipes/new"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Share a Recipe
            </Link>
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Featured Recipes
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground">
            Discover some of our most popular recipes from the community
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder recipe cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-muted">
                {/* Placeholder for recipe image */}
                <div className="h-full w-full bg-muted" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Recipe Title {i}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A delicious recipe description that makes your mouth water...
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">30 min</span>
                  <span className="text-sm text-muted-foreground">
                    4 servings
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
