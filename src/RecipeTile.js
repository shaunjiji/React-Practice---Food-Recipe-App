import React from "react";

export default function RecipeTile({ recipe }) {
  return (
    <div className="recipeTile">
      <img className="recipeTile__img" src={recipe.recipe.image} />
      <p>{recipe.recipe.label}</p>
    </div>
  );
}
