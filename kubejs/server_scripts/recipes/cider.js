const registerCiderRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc
    let firmalife = event.recipes.firmalife
    
    tfc.heating(notRotten('cfc:food/bush_meat'), 300)
        .resultItem('cfc:food/cooked_bush_meat')

    event.shapeless('cfc:plant_string', ['3x tfc:straw']).id('cider:crafting/plant_string')

    event.shapeless('cfc:leather_sheet', ['minecraft:leather', '#tfc:shears']).damageIngredient('#tfc:shears')
    event.shapeless('tfc:ceramic/unfired_brick', ['minecraft:clay', 'cfc:metal/brick_mold']).damageIngredient('cfc:metal/brick_mold')

    tfc.heating('cfc:metal/unfinished_clock', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))
    tfc.heating('cfc:metal/unfinished_spyglass', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))

    for (let i = 1; i <= 5; i++) {
        tfc.pot(`${i}x cfc:seed_paste`, Fluid.of('minecraft:water', 200 * i), 2000, 300).fluidOutput(Fluid.of('cfc:seed_oil_water', 200 * i))
        tfc.pot(`${i}x cfc:animal_fat`, Fluid.of('minecraft:water', 100), 600, 300).fluidOutput(Fluid.of('tfc:tallow', 200 * i))
    }

    tfc.quern('cfc:seed_paste', '#forge:seeds')

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
    
    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX',])
        .outsideSlotRequired(false)
        .ingredient('tfc:rock/loose/chalk')

    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX',])
        .outsideSlotRequired(false)
        .ingredient('tfc:rock/mossy_loose/chalk')

    tfc.knapping('cfc:leather_sheet', 'tfc:leather', ['XX XX', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .outsideSlotRequired(false)
        .ingredient('minecraft:leather')

    tfc.barrel_instant()
        .inputFluid(TFC.fluidStackIngredient('cfc:seed_oil_water', 250))
        .inputItem('tfc:jute_net')
        .outputFluid(Fluid.of('cfc:seed_oil', 50))

    tfc.anvil('cfc:metal/unfinished_clock', '#forge:sheets/brass', anvilRuleHelper(['bend_any', 'draw_second_last', 'hit_third_last'])).id('cider:anvil/unfinished_clock')
    tfc.anvil('cfc:metal/unfinished_spyglass', '#forge:sheets/brass', anvilRuleHelper(['bend_any', 'punch_second_last', 'draw_third_last'])).id('cider:anvil/unfinished_spyglass')
    tfc.anvil('sns:pack_frame', '#forge:sheets/steel', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/steel_frame')
    tfc.anvil('cfc:metal/iron_frame', '#forge:double_sheets/wrought_iron', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/iron_frame')
    tfc.anvil('cfc:metal/aluminium_frame', '#forge:sheets/aluminium', anvilRuleHelper(['hit_last', 'hit_second_last', 'punch_third_last'])).id('cider:anvil/aluminium_frame')
    
    tfc.casting('cfc:metal/ingot/alumina', 'tfc:ceramic/ingot_mold', Fluid.of('cfc:alumina', 100), 0.10).id('cider:casting/alumina_ingot')
    tfc.casting('cfc:metal/ingot/aluminium', 'tfc:ceramic/ingot_mold', Fluid.of('cfc:aluminium', 100), 0.10).id('cider:casting/aluminium_ingot')
    tfc.casting('cfc:metal/ingot/alumina', "tfc:ceramic/fire_ingot_mold", Fluid.of('cfc:alumina', 100), 0.01).id('cider:casting/alumina_fire_ingot')
    tfc.casting('cfc:metal/ingot/aluminium', 'tfc:ceramic/fire_ingot_mold', Fluid.of('cfc:aluminium', 100), 0.01).id('cider:casting/aluminium_fire_ingot')
}