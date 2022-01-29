import React from 'react';

function DetailsRecipeDrink() {
  return (
    <div>
      <img src="" alt="recipeDetails" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">DETALHES DA RECEITA ....</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="sfavorite-btn">Favoritar</button>
      <p data-testid="recipe-category">O texto categoria...</p>
      {/* Aqui fica os ingredientes - requisito 33 */}
      <p data-testid="instructions">Instruções</p>
      {/* Aqui fica o video do you tube requisito 33 */}
      {/* Aqui fica o card de receitas recomendandas requisito 33 */}
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default DetailsRecipeDrink;
