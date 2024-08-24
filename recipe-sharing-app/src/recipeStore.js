import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],

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

  setRecipes: (recipes) => set(state => ({
    recipes,
    recommendations: state.generateRecommendations() 
  })),

  searchTerm: '',
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
