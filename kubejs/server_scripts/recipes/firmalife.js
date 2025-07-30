const registerFirmalifeRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    global.grainTypes.forEach(grain => {
        event.remove({id: `firmalife:crafting/${grain}_dough`})
    })

    tfc.damage_inputs_shapeless_crafting(
        event.shapeless('firmalife:cheesecloth', ['#tfc:knives', '#tfc:high_quality_cloth'])
    ).id('firmalife:crafting/cheesecloth')

    event.shapeless('firmalife:cheesecloth', ['#tfc:knives', '#tfc:high_quality_cloth'])
}