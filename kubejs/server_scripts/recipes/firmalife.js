const registerFirmalifeRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    event.remove({id: 'firmalife:clay_knapping/oven_bottom'})
    event.remove({id: 'firmalife:clay_knapping/oven_chimney'})
    event.remove({id: 'firmalife:clay_knapping/oven_top'})
    event.remove({id: 'firmalife:crafting/pickled_egg'})
    event.remove({id: /firmalife:crafting\/wood\/.*_keg/})
    event.remove({id: /afc:crafting\/wood\/.*_keg/})
    event.remove({id: 'firmalife:crafting/bee_candle'})
    

    global.grainTypes.forEach(grain => {
        event.remove({id: `firmalife:crafting/${grain}_dough`})
    })

    tfc.damage_inputs_shapeless_crafting(
        event.shapeless('firmalife:cheesecloth', ['#tfc:knives', '#tfc:high_quality_cloth'])
    ).id('firmalife:crafting/cheesecloth')

    event.shapeless('4x firmalife:cheesecloth', ['#tfc:knives', '#tfc:high_quality_cloth'])

    event.shaped('firmalife:beekeeper_helmet', ['CWC', 'CAC'], {C: '#cfc:low_quality_cut_cloths', A: 'minecraft:leather_helmet', W: 'tfc:powder/wood_ash'}).id('firmalife:crafting/beekeepers_helmet')
    event.shaped('firmalife:beekeeper_chestplate', ['CWC', 'CAC'], {C: '#cfc:low_quality_cut_cloths', A: 'minecraft:leather_chestplate', W: 'tfc:powder/wood_ash'}).id('firmalife:crafting/beekeepers_chestplate')
    event.shaped('firmalife:beekeeper_leggings', ['CWC', 'CAC'], {C: '#cfc:low_quality_cut_cloths', A: 'minecraft:leather_leggings', W: 'tfc:powder/wood_ash'}).id('firmalife:crafting/beekeepers_leggings')
    event.shaped('firmalife:beekeeper_boots', ['CWC', 'CAC'], {C: '#cfc:low_quality_cut_cloths', A: 'minecraft:leather_boots', W: 'tfc:powder/wood_ash'}).id('firmalife:crafting/beekeepers_boots')
    event.shaped('firmalife:solar_drier', ['SGS', ' M ', 'WWW'], {M: 'firmalife:drying_mat', S: 'forge:rods/wrought_iron', W: 'firmalife:treated_lumber', G: 'minecraft:glass'}).id('firmalife:crafting/solar_drier')
}