const registerTFCRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    event.remove({id: 'tfc:leather_knapping/boots'})
    event.remove({id: 'tfc:leather_knapping/chestplate'})
    event.remove({id: 'tfc:leather_knapping/helmet'})
    event.remove({id: 'tfc:leather_knapping/leggings'})
    event.remove({id: 'tfc:leather_knapping/leather_horse_armor'})
    event.remove({id: /^tfc:crafting\/wood\/.*_stairs/})
    event.remove({id: /^tfc:crafting\/wood\/.*_slabs/})
    event.remove({id: 'tfc:heating/torch_from_stick'})
    event.remove({id: 'tfc:heating/torch_from_stick_bunch'})

    event.remove({id: /tfc:crafting\/dough\/.*/})
    event.remove({id: /tfc:crafting\/vanilla\/color.*_bed/})

    event.remove({id: 'tfc:fire_clay_knapping/brick'})

    event.shaped('tfc:dead_torch', [' S ', ' T '], {S: 'tfc:straw', T:'minecraft:stick'}).id('cider:crafting/dead_torch')
    event.shapeless('tfc:thatch', ['9x tfc:straw']).id('tfc:crafting/thatch').id('cider:crafting/thatch')
    event.shaped('tfc:bloomery', ['XYX', 'Y Y', 'XYX'], {X: '#forge:sheets/any_bronze', Y: '#forge:double_sheets/any_bronze'}).id('tfc:crafting/bloomery')
    event.shaped('minecraft:clock', [' L ', 'MCM'], {L: 'tfc:lens', M: 'tfc:brass_mechanisms', C: 'cfc:unfinished_clock'}).id('tfc:crafting/vanilla/clock')
    event.shaped('minecraft:white_bed', ['CCC', 'LLL', 'L L'], {C: '#tfc:high_quality_cloth', L: '#tfc:lumber'}).id('cider:crafting/white_bed')

    hides.forEach(([size, amount, output]) => {
        tfc.barrel_sealed(14000 * output)
            .inputs(`tfc:${size}_raw_hide`, TFC.fluidStackIngredient('tfc:limewater', amount))
            .outputItem(`tfc:${size}_soaked_hide`)
            .id(`tfc:barrel/${size}_soaked_hide`)
        tfc.barrel_sealed(10000 * output)
            .inputs(`tfc:${size}_scraped_hide`, TFC.fluidStackIngredient('minecraft:water', amount))
            .outputItem(`tfc:${size}_prepared_hide`)
            .id(`tfc:barrel/${size}_prepared_hide`)
        tfc.barrel_sealed(16000 * output)
            .inputs(`tfc:${size}_prepared_hide`, TFC.fluidStackIngredient('tfc:tannin', amount))
            .outputItem(`${output}x minecraft:leather`)
            .id(`tfc:barrel/${size}_leather`)
    })

    tfc.heating('tfc:dead_torch', 60)
        .resultItem('tfc:torch')
        .id('cider:heating/torch')

    for (let [metal, heat] of Object.entries(tMetalData)) {
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#forge:ingots/${metal}`, anvilRuleHelper(['draw_not_last', 'bend_any', 'hit_any'])).id(`tfc:anvil/${metal}_fish_hook`)
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#forge:ingots/${metal}`, anvilRuleHelper(['hit_any', 'hit_any', 'draw_last'])).id(`tfc:anvil/${metal}_chain`)

        tfc.heating(`tfc:metal/fish_hook/${metal}`, heat).resultFluid(Fluid.of(`tfc:metal/${metal}`, 100)).id(`tfc:heating/metal/${metal}_fish_hook`)
        tfc.heating(`tfc:metal/chain/${metal}`, heat).resultFluid(Fluid.of(`tfc:metal/${metal}`, 10)).id(`tfc:heating/metal/${metal}_chain`)
    }

    tfc.bloomery(
        'tfc:raw_iron_bloom', 
        '2x tfc:ore/bituminous_coal',
        Fluid.of('tfc:metal/cast_iron', 100), 
        15000
    ).id('cider:bloomery/iron_bloom_from_coal')
}