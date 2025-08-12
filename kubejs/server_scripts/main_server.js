// priority: 0

ServerEvents.recipes(event => {
    registerAddonRecipes(event)
    registerCiderRecipes(event)
    registerFirmacivRecipes(event)
    registerFirmalifeRecipes(event)
    registerGeneralRecipes(event)
    registerTFCRecipes(event)
    registerVanillaRecipes(event)
    registerSupplementariesRecipes(event)
})

ServerEvents.tags('item', event => {
    registerCiderItemTags(event)

})

ServerEvents.tags('fluid', event => {
    registerCiderFluidTags(event)
})

ServerEvents.blockLootTables(event => {
    registerBlockLoot(event)
})

TFCEvents.data(event => {
    registerMetals(event)
    registerHeats(event)
    registerSizes(event)
    registerLampFuels(event)
    registerPanningData(event)
    registerSluiceData(event)
})