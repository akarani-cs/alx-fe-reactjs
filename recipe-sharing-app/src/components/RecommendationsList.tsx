import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from './RecipeCard';

const RecommendationsList: React.FC = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No recommendations available</p>
        <p className="text-gray-400 text-sm mt-2">Add some recipes to your favorites to get personalized recommendations</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} showActions={false} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;