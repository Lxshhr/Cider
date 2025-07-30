const registerGeneralRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    global.vanillaDisabled.forEach(item => {
        event.remove({output: item})
    })
    global.extraSupplementariesDisabled.forEach(item => {
        event.remove({output: item})
    })
    global.disabledItems.forEach(item => {
        event.remove({output: item})
    })
    global.disabledFluids.forEach(fluid => {
        event.remove({output: fluid})
    })

    event.shapeless('4x labels:label', ['minecraft:paper', '#tfc:knives']).damageIngredient('#tfc:knives').id('labels:label')
}