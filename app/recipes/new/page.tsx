"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export default function NewRecipePage() {
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Create New Recipe</h1>

      <form className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Recipe Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter recipe title"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                Recipe Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="prepTime" className="text-sm font-medium">
                Preparation Time (minutes)
              </label>
              <input
                id="prepTime"
                type="number"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter preparation time"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="servings" className="text-sm font-medium">
                Number of Servings
              </label>
              <input
                id="servings"
                type="number"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter number of servings"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              placeholder="Enter recipe description"
              rows={3}
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addIngredient}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Ingredient
            </Button>
          </div>
          <div className="space-y-2">
            {ingredients.map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2"
                  placeholder={`Ingredient ${index + 1}`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Instructions</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addInstruction}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Step
            </Button>
          </div>
          <div className="space-y-2">
            {instructions.map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </span>
                <textarea
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2"
                  placeholder={`Step ${index + 1}`}
                  rows={2}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeInstruction(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Create Recipe</Button>
        </div>
      </form>
    </div>
  );
}
