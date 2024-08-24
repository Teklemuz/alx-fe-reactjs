import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId),
    recommendations: state.generateRecommendations() 
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    recommendations: state.generateRecommendations()
  })),

  setRecipes: (recipes) => set(state => ({
    recipes,
    recommendations: state.generateRecommendations() 
  })),

  setSearchTerm: (term) => set(state => {
    const newSearchTerm = term.toLowerCase();
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(newSearchTerm)
    );
    return {
      searchTerm: newSearchTerm,
      filteredRecipes
    };
  })
}));

export { useRecipeStore };
