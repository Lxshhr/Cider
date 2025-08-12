const registerCiderRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc
    let firmalife = event.recipes.firmalife

    tfc.heating(notRotten('cfc:food/bush_meat'), 300)
        .resultItem('cfc:food/cooked_bush_meat')

    event.shapeless('cfc:plant_string', ['3x tfc:straw']).id('cider:crafting/plant_string')
    event.shapeless('cfc:leather_sheet', ['minecraft:leather', '#tfc:shears']).damageIngredient('#tfc:shears').id('cider:crafting/leather_sheet')
    event.shapeless('tfc:ceramic/unfired_brick', ['2x minecraft:clay', 'cfc:metal/brick_mold']).damageIngredient('cfc:metal/brick_mold').id('cider:crafting/brick')
    event.shapeless('2x cfc:thatch_canvas', ['tfc:thatch', '#tfc:knives']).damageIngredient('#tfc:knives')
    event.shapeless('16x cfc:ash_finish', ['minecraft:clay_ball', 'tfc:powder/wood_ash', 'minecraft:brick'])
    
    event.shaped('cfc:thatch_canvas', ['XX', 'XX'], {X: 'tfc:straw'})

    event.shapeless('2x cfc:cut_silk_cloth', ['tfc:silk_cloth', '#tfc:shears']).damageIngredient('#tfc:shears')
    event.shapeless('2x cfc:cut_wool_cloth', ['tfc:wool_cloth', '#tfc:shears']).damageIngredient('#tfc:shears')
    event.shapeless('2x cfc:cut_burlap_cloth', ['tfc:burlap_cloth', '#tfc:shears']).damageIngredient('#tfc:shears')
    event.shapeless('2x cfc:cut_linen_cloth', ['cfc:linen_cloth', '#tfc:shears']).damageIngredient('#tfc:shears')
    
    event.shaped('cfc:bound_leather', ['  N', 'SLS', 'S S'], {N: 'tfc:bone_needle', S: '#forge:string', L: 'minecraft:leather'})

    tfc.loom('cfc:linen_cloth', 'cfc:flax_fiber', 12, 'cfc:block/linen_cloth')

    for (let i = 1; i <= 5; i++) {
        tfc.pot(toArray('cfc:seed_paste', i), Fluid.of('minecraft:water', 200 * i), 2000, 300).fluidOutput(Fluid.of('cfc:seed_oil_water', 200 * i)).id(`cider:pot/seed_oil_water_${i}`)
        tfc.pot(toArray('cfc:animal_fat', i), Fluid.of('minecraft:water', 100), 600, 300).fluidOutput(Fluid.of('tfc:tallow', 200 * i)).id(`cider:pot/tallow_${i}`)
    }

    tfc.quern('cfc:seed_paste', '#forge:seeds').id('cider:quern/seed_paste')

    global.grainTypes.forEach(grain => {
        for (let i = 1; i < 5; i++) {
            firmalife.mixing_bowl()
                .outputItem(`tfc:food/${grain}_dough`)
                .itemIngredients(toArrayNotRotten(`tfc:food/${grain}_flour`, i))
                .fluidIngredient(Fluid.of('minecraft:water', 250 * i))
                .id(`cider:mixing_bowl/flat_bread_dough/${grain}_${i}`)

            firmalife.mixing_bowl()
                .outputItem(`firmalife:food/${grain}_dough`)
                .itemIngredients(toArrayExtraIngredient(`tfc:food/${grain}_flour`, i, '#tfc:sweetener'))
                .fluidIngredient(Fluid.of('firmalife:yeast_starter', 250 * i))
                .id(`cider:mixing_bowl/bread_dough/${grain}_${i}`)
        }
    })

    tfc.knapping('cfc:flint_axe_head', 'tfc:rock', [' X   ', 'XXXX ', 'XXXXX', 'XXXX ', ' X   '])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_axe_head')
    tfc.knapping('cfc:flint_shovel_head', 'tfc:rock', [' XXX ', ' XXX ', ' XXX ', ' XXX ', '  X  '])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_shovel_head')
    tfc.knapping('cfc:flint_hoe_head', 'tfc:rock', ['XXXXX', '   XX',])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_hoe_head')
    tfc.knapping('cfc:flint_hoe_head', 'tfc:rock', ['XXXXX', '   XX','     ', 'XXXXX', '   XX',])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_hoe_head_1')
    tfc.knapping('cfc:flint_hoe_head', 'tfc:rock', ['XXXXX', '   XX','     ', 'XXXXX', 'XX   ',])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_hoe_head_2')
    tfc.knapping('cfc:flint_knife_head', 'tfc:rock', [' X', 'XX', 'XX', 'XX', 'XX'])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_knife_head')
    tfc.knapping('cfc:flint_knife_head', 'tfc:rock', ['X  X ', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_knife_head_1')
    tfc.knapping('cfc:flint_knife_head', 'tfc:rock', ['X   X', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_knife_head_2')
    tfc.knapping('cfc:flint_knife_head', 'tfc:rock', [' X X ', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_knife_head_3')
    tfc.knapping('cfc:flint_hammer_head', 'tfc:rock', ['XXXXX', 'XXXXX','  X  '])
        .outsideSlotRequired(false)
        .ingredient('minecraft:flint')
        .id('cider:knapping/flint_hammer_head')

    tfc.knapping('cfc:leather_sheet', 'tfc:leather', ['XX XX', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .outsideSlotRequired(false)
        .id('cider:knapping/leather_sheet')

    tfc.knapping('cfc:ceramic/unfired_candle_mold', 'tfc:clay', ['XXXXX', 'XX XX', 'XX XX', 'XX XX', 'XXXXX'])
        .outsideSlotRequired(false)
        .id('cider:knapping/candle_mold')

    tfc.barrel_instant()
        .inputFluid(TFC.fluidStackIngredient('cfc:seed_oil_water', 250))
        .inputItem('tfc:jute_net')
        .outputFluid(Fluid.of('cfc:seed_oil', 50))
        .id('cider:barrel/seed_oil_jute_net')

    tfc.barrel_sealed(1000)
        .inputItem('cfc:dirty_cheese_cloth')
        .inputFluid(TFC.fluidStackIngredient('minecraft:water', 125))
        .outputItem('firmalife:cheesecloth')
        .id('cider:barrel/dirty_cheese_cloth_cleaning')
    
    tfc.barrel_sealed(8000)
        .inputItem('cfc:flax')
        .inputFluid(TFC.fluidStackIngredient('minecraft:water', 200))
        .outputItem('cfc:flax_fiber')
        .id('cider:barrel/flax_fiber')

    tfc.anvil('cfc:metal/unfinished_clock', '#forge:sheets/brass', anvilRuleHelper(['bend_any', 'draw_second_last', 'hit_third_last'])).id('cider:anvil/unfinished_clock')
    tfc.anvil('cfc:metal/unfinished_spyglass', '#forge:sheets/brass', anvilRuleHelper(['bend_any', 'punch_second_last', 'draw_third_last'])).id('cider:anvil/unfinished_spyglass')
    tfc.anvil('sns:pack_frame', '#forge:sheets/steel', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/steel_frame')
    tfc.anvil('cfc:metal/iron_frame', '#forge:double_sheets/wrought_iron', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/iron_frame')
    tfc.anvil('cfc:metal/aluminium_frame', '#forge:sheets/aluminium', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/aluminium_frame')
    
    for (let [metal, mPoint] of Object.entries(metalItems)) {
        tfc.casting(`cfc:metal/ingot/${metal}`, 'tfc:ceramic/ingot_mold', Fluid.of(`cfc:${metal}`, 100), 0.10).id(`cider:casting/${metal}_ingot`)
        tfc.casting(`cfc:metal/ingot/${metal}`, 'tfc:ceramic/fire_ingot_mold', Fluid.of(`cfc:${metal}`, 100), 0.01).id(`cider:casting/${metal}_fire_ingot`)
        tfc.welding(`cfc:metal/double_ingot/${metal}`, `cfc:metal/ingot/${metal}`, `cfc:metal/ingot/${metal}`, 2)
        tfc.welding(`cfc:metal/double_sheet/${metal}`, `cfc:metal/sheet/${metal}`, `cfc:metal/sheet/${metal}`, 2)
        tfc.anvil(`cfc:metal/sheet/${metal}`, `cfc:metal/double_ingot/${metal}`, ['hit_any', 'hit_any', 'hit_any']).tier(2)
        tfc.anvil(`2x cfc:metal/rod/${metal}`, `cfc:metal/ingot/${metal}`, ['hit_any', 'hit_any', 'hit_any']).tier(2)

        tfc.heating(`cfc:metal/ingot/${metal}`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 100)).id(`cider:heating/${metal}_ingot`)
        tfc.heating(`cfc:metal/double_ingot/${metal}`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 200)).id(`cider:heating/${metal}_double_ingot`)
        tfc.heating(`cfc:metal/sheet/${metal}`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 200)).id(`cider:heating/${metal}_sheet`)
        tfc.heating(`cfc:metal/double_ingot/${metal}`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 400)).id(`cider:heating/${metal}_double_sheet`)

        tfc.heating(`cfc:metal/block/${metal}`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 100)).id(`cider:heating/${metal}_block`)
        tfc.heating(`cfc:metal/block/${metal}_slab`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 50)).id(`cider:heating/${metal}_slab`)
        tfc.heating(`cfc:metal/block/${metal}_stairs`, mPoint).resultFluid(Fluid.of(`cfc:${metal}`, 100)).id(`cider:heating/${metal}_stairs`)

        event.shaped(`8x cfc:metal/block/${metal}`, [' S ', 'SWS', ' S '], {S: `cfc:metal/sheet/${metal}`, W: 'minecraft:planks'})
    }

    tfc.blast_furnace('cfc:aluminium', 'cfc:powder/cryolite', Fluid.of('cfc:alumina', 100))

    tfc.heating('cfc:metal/unfinished_clock', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))
        .id('cider:heating/metal/unfinished_clock')
    tfc.heating('cfc:metal/unfinished_spyglass', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))
        .id('cider:heating/metal/unfinished_spyglass')

    tfc.heating('cfc:powder/bauxite', 1535)
        .resultFluid('cfc:alumina')
        .id('cider:heating/metal/bauxite_powder')
    tfc.heating('cfc:ore/poor_bauxite', 1535)
        .resultFluid('cfc:alumina', 5)
        .id('cider:heating/metal/bauxite_small')

    for (let [type, amount] of Object.entries(oreData)) {
        tfc.heating(`cfc:ore/${type}_lead`, 327.5).resultFluid(Fluid.of('cfc:lead', amount)).id(`cider:heating/lead_${type}`)
    }
    
}