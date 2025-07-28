// priority: 0

ServerEvents.recipes(event => {
    registerGeneralRecipes(event)
    registerCiderRecipes(event)
    registerTFCRecipes(event)
})

ServerEvents.tags('item', event => {
    registerGeneralItemTags(event)
})

ServerEvents.tags('fluid', event => {
    registerGeneralFluidTags(event)
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