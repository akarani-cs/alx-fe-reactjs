import { create } from 'zustand';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image?: string;
  createdAt: Date;
}

interface RecipeStore {
  recipes: Recipe[];
  favorites: number[];
  searchTerm: string;
  filteredRecipes: Recipe[];
  recommendations: Recipe[];
  
  // Recipe CRUD operations
  addRecipe: (recipe: Omit<Recipe, 'id' | 'createdAt'>) => void;
  updateRecipe: (id: number, updates: Partial<Recipe>) => void;
  deleteRecipe: (id: number) => void;
  
  // Search and filtering
  setSearchTerm: (term: string) => void;
  filterRecipes: () => void;
  
  // Favorites management
  addFavorite: (recipeId: number) => void;
  removeFavorite: (recipeId: number) => void;
  
  // Recommendations
  generateRecommendations: () => void;
  
  // Initialize with sample data
  initializeSampleData: () => void;
}

export const useRecipeStore = create<RecipeStore>((set, get) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],
  recommendations: [],

  addRecipe: (recipe) => set((state) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: Date.now(),
      createdAt: new Date(),
    };
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      filteredRecipes: state.searchTerm ? 
        updatedRecipes.filter(r => 
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          r.ingredients.some(ing => ing.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ) : updatedRecipes
    };
  }),

  updateRecipe: (id, updates) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updates } : recipe
    );
    return { 
      recipes: updatedRecipes,
      filteredRecipes: state.searchTerm ? 
        updatedRecipes.filter(r => 
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          r.ingredients.some(ing => ing.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ) : updatedRecipes
    };
  }),

  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const updatedFavorites = state.favorites.filter(favId => favId !== id);
    return { 
      recipes: updatedRecipes,
      favorites: updatedFavorites,
      filteredRecipes: state.searchTerm ? 
        updatedRecipes.filter(r => 
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          r.ingredients.some(ing => ing.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ) : updatedRecipes
    };
  }),

  setSearchTerm: (term) => set(() => ({ searchTerm: term })),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.searchTerm
      ? state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(state.searchTerm.toLowerCase()))
        )
      : state.recipes
  })),

  addFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.includes(recipeId) 
      ? state.favorites 
      : [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set((state) => {
    // Simple recommendation algorithm based on favorites and difficulty
    const favoriteRecipes = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id)
    );
    
    if (favoriteRecipes.length === 0) {
      // If no favorites, recommend easy recipes
      const recommended = state.recipes
        .filter(recipe => recipe.difficulty === 'Easy')
        .slice(0, 3);
      return { recommendations: recommended };
    }
    
    // Recommend recipes with similar difficulty or ingredients
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id))
      .filter(recipe => 
        favoriteRecipes.some(fav => 
          fav.difficulty === recipe.difficulty ||
          fav.ingredients.some(ing => recipe.ingredients.includes(ing))
        )
      )
      .slice(0, 3);
      
    return { recommendations: recommended };
  }),

  initializeSampleData: () => set(() => ({
    recipes: [
      {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        description: "A traditional Italian pasta dish with eggs, cheese, and pancetta.",
        ingredients: ["spaghetti", "eggs", "parmesan cheese", "pancetta", "black pepper"],
        prepTime: 20,
        difficulty: "Medium" as const,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Fresh Avocado Toast",
        description: "Simple and healthy breakfast with fresh avocado and tomatoes.",
        ingredients: ["bread", "avocado", "tomatoes", "salt", "lime juice"],
        prepTime: 10,
        difficulty: "Easy" as const,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
        createdAt: new Date(),
      },
      {
        id: 3,
        title: "Beef Wellington",
        description: "An elegant dish featuring beef tenderloin wrapped in puff pastry.",
        ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "egg wash"],
        prepTime: 120,
        difficulty: "Hard" as const,
        image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
        createdAt: new Date(),
      },
      {
        id: 4,
        title: "Greek Salad",
        description: "Fresh Mediterranean salad with feta cheese and olives.",
        ingredients: ["tomatoes", "cucumber", "feta cheese", "olives", "olive oil", "oregano"],
        prepTime: 15,
        difficulty: "Easy" as const,
        image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
        createdAt: new Date(),
      },
    ],
    filteredRecipes: [],
  })),
}));