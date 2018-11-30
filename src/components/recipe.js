import IngredientsList from './ingredientslist';
import Instructions from './ingredients';

const Recipe = ({ name, ingredients, steps}) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1></h1>
    <IngredientsList list={ingredients} />
    <Instructions title='Cooking Instructions'
      steps={steps} />
  </section>

Recipe.displayName = 'Recipe'

export default Recipe;
