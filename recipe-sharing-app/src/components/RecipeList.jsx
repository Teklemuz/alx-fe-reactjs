import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, favorites, addFavorite, removeFavorite, generateRecommendations, recommendations } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    generateRecommendations: state.generateRecommendations,
    recommendations: state.recommendations
  }));

  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  useEffect(() => {
    setSearchTerm('');
    generateRecommendations();
  }, [recipes, setSearchTerm, generateRecommendations]);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
            {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}

      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecipeList;
