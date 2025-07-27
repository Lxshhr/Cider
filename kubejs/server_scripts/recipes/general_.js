const registerGeneralRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    global.vanillaDiabled.forEach(item => {
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
}