const registerAFCRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    event.remove({id: 'afc:crafting/1_birch_sugar'})
    event.remove({id: 'afc:crafting/1_maple_sugar'})
    event.remove({id: 'afc:vat/rubber'})

    global.afcWoodTypes.forEach(wood => {
        event.shaped(`afc:wood/chest/${wood}`, ['WWW', 'WNW', 'WWW'], {W: `afc:wood/lumber/${wood}`, N: 'cfc:nails_and_hinges'})

        tfc.chisel(`afc:wood/planks/${wood}_slab`, `afc:wood/planks/${wood}`, 'slab').extraDrop(`afc:wood/planks/${wood}_slab`)
        tfc.chisel(`afc:wood/planks/${wood}_stair`, `afc:wood/planks/${wood}`, 'stair')
    })

    tfc.anvil('afc:tree_tap', '#forge:ingots/copper', anvilRuleHelper(['hit_last', 'upset_second_last', 'upset_third_last']))

    tfc.heating('afc:tree_tap', 930)
        .resultFluid(Fluid.of('tfc:metal/copper', 100))
}