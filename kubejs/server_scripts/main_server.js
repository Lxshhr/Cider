// priority: 0

ServerEvents.recipes(event => {
    registerAddonRecipes(event)
    registerCiderRecipes(event)
    registerFirmacivRecipes(event)
    registerFirmalifeRecipes(event)
    registerGeneralRecipes(event)
    registerTFCRecipes(event)
    registerVanillaRecipes(event)
    registerColdsweatRecipes(event)
    registerSupplementariesRecipes(event)
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