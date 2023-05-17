const Cake = ({cake}) => {


  const newIngredient = cake.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>

  });

  return (
    <>
        <h2>{cake.cakeName}</h2>
        {/* <p>Ingredients: {cake.ingredients.join(", ")}</p> */}
        {/* <p>Price: {cake.price}</p> */}
        <p>Rating: {cake.rating}</p>
        <p>Ingredient List: </p>
        <ul>{newIngredient}</ul>


    </>
  )
}

export default Cake;