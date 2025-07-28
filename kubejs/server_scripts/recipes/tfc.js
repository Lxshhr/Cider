const registerTFCRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    let tMetalData = {
        'copper': 1080,
        'bismuth_bronze': 985, 
        'black_bronze': 1070, 
        'bronze': 950, 
        'wrought_iron' : 1535, 
        'steel': 1540, 
        'black_steel': 1540, 
        'red_steel': 1540,
        'blue_steel': 1485,
    }

    for (let [metal, heat] of Object.entries(tMetalData)) {
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#forge:ingots/${metal}`, anvilRuleHelper(['draw_not_last', 'bend_any', 'hit_any'])).id(`tfc:anvil/${metal}_fish_hook`)
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#forge:ingots/${metal}`, anvilRuleHelper(['hit_any', 'hit_any', 'draw_last'])).id(`tfc:anvil/${metal}_chain`)

        tfc.heating(`tfc:metal/fish_hook/${metal}`, heat).resultFluid(Fluid.of(`tfc:metal/${metal}`, 100)).id(`tfc:heating/metal/${metal}_fish_hook`)
        tfc.heating(`tfc:metal/chain/${metal}`, heat).resultFluid(Fluid.of(`tfc:metal/${metal}`, 10)).id(`tfc:heating/metal/${metal}_chain`)
    }
}