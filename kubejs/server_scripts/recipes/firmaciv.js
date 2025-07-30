const registerFirmacivRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    event.remove({mod: 'alekiships'})

    event.remove({id: 'firmaciv:quern/amethyst'})
    event.remove({id: 'firmaciv:quern/diamond'})
    event.remove({id: 'firmaciv:quern/emerald'})
    event.remove({id: 'firmaciv:quern/lapis_lazuli'})
    event.remove({id: 'firmaciv:quern/opal'})
    event.remove({id: 'firmaciv:quern/pyrite'})
    event.remove({id: 'firmaciv:quern/ruby'})
    event.remove({id: 'firmaciv:quern/sapphire'})
    event.remove({id: 'firmaciv:quern/topaz'})

    event.shaped('firmaciv:large_waterproof_hide', [' BH', 'BPB', ' B '], {B: 'firmalife:bees_wax', H: '#tfc:hammers', P: 'tfc:large_prepared_hide'})   
        .damageIngredient('#tfc:hammers')
        .id('firmaciv:crafting/large_waterproof_hide')
    
    event.shaped('firmaciv:rope_coil', [' J ', ' J ', ' J '], {J: 'tfc:jute_fiber'})
        .id('firmaciv:crafting/rope_coil')

    tfc.anvil('alekiships:anchor','#forge:double_ingots/wrought_iron', ['hit_last', 'punch_second_last', 'bend_third_last']).tier(3).id('firmaciv:anvil/anchor')
    tfc.anvil('alekiships:cleat','#forge:double_ingots/wrought_iron', ['bend_last', 'bend_second_last', 'bend_third_last']).tier(3).id('firmaciv:anvil/cleat')
    tfc.anvil('alekiships:oarlock','#forge:ingot/wrought_iron', ['bend_last', 'hit_second_last', 'hit_third_last']).tier(3).id('firmaciv:anvil/oarlock')

    tfc.heating('alekiships:anchor', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 200)).id('firmaciv:heating/anchor')
    tfc.heating('alekiships:cleat', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 200)).id('firmaciv:heating/cleat')
    tfc.heating('alekiships:oarlock', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 100)).id('firmaciv:heating/oarlock')
}