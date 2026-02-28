function toArray(ingredient, count) {
    if (count == 1) return ingredient
    let ingredientArray = []
    for (let i = 0; i < count; i++) {
        ingredientArray.push(ingredient)
    }
    return ingredientArray;
}
function toArrayEI(ingredient, count, extraIngredient) {
    let ingredientArray = toArray(ingredient, count)
    ingredientArray.push(extraIngredient)
    return ingredientArray;
}


// Logs all the items in the game
// console.log(Ingredient.all.itemIds)

// Logs all the recipe ids in the game
// ServerEvents.recipes(event => {
//     let allRecipeIds = []
//     event.forEachRecipe({}, recipe => {
//         allRecipeIds.push(recipe.getId().toString())
//     })

//     console.log(JSON.stringify(allRecipeIds))
// })