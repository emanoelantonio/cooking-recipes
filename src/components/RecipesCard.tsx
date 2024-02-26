export interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: string;
  vegetarian: boolean;
  glutenFree: boolean;
  videoUrl: string | null;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipesCard = ({ recipe }: RecipeCardProps) => {
  const { 
    id,
    title,
    category,
    image,
    ingredients,
    instructions,
    prepTime,
    servings,
    vegetarian,
    glutenFree,
    videoUrl,
  } = recipe;

  return (
    <>
      <h1>Receitas</h1>
      <div className="card">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {category} | {prepTime} | {servings} porções
          </p>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient, id) => (
              <li key={id} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <h6 className="mt-3">Instruções:</h6>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}