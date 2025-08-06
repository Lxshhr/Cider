const registerSupplementariesRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    event.remove({mod: 'supplementaries'})

    // slidy-block?
    let tfc = event.recipes.tfc;

    event.remove({id: 'supplementaries:ash_brick_slab'})
    event.remove({id: 'supplementaries:ash_brick_stairs'})
    event.remove({id: 'supplementaries:ash_brick_wall'})
    event.remove({id: 'supplementaries:ash_bricks'})
    event.remove({id: 'supplementaries:bed_from_feather_block'})

    event.remove({id: /supplementaries:flags.*/})
    event.remove({id: /supplementaries:present.*/})

    tfc.anvil('supplementaries:iron_gate', '#forge:sheets/wrought_iron', anvilRuleHelper(['upset_last', 'punch_second_last', 'punch_any']))

    event.shaped('supplementaries:checker_block', ['AB', 'BA'], {A: 'tfc:alabaster/bricks/white', B: 'tfc:alabaster/bricks/black'})
    event.shaped('supplementaries:present', ['PPG', 'PPK'], {P: 'minecraft:paper', G: 'tfc:glue', K: 'tfc:knives'}).damageIngredient('#tfc:knives')

    event.shaped('supplementaries:rope', ['XJ', ' J', ' J'], {X: '#tfc:spindles', J: '#forge:fibers'})

    global.dyes.forEach(color => {
        if(color != 'white') {
            tfc.barrel_sealed(1000)
                .inputItem('supplementaries:flag_white')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`supplementaries:flag_${color}`)
                .id(`cider:barrel/dye/flag_${color}`)

        }
        tfc.barrel_sealed(1000)
                .inputItem('supplementaries:present')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`supplementaries:present_${color}`)
                .id(`cider:barrel/dye/present_${color}`)

        tfc.barrel_sealed(1000)
                .inputItem('supplementaries:awning')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`supplementaries:awning_${color}`)
                .id(`cider:barrel/dye/awning_${color}`)

        
    })
}