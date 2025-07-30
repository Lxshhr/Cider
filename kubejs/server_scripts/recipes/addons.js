const registerAddonRecipes = (/** @type {Internal.RecipesEventJS} */event) => {
    let tfc = event.recipes.tfc

    // Sacks
    event.remove({id: 'sns:leather_knapping/quiver'})
    event.remove({id: 'sns:crafting/pack_frame'})

    event.shapeless('sns:bound_leather_strip', ['sns:leather_strip', '2x #forge:string', 'tfc:bone_needle']).damageIngredient('tfc:bone_needle').id('sns:crafting/bound_leather_strip')
    event.shaped('sns:quiver', [' ST', 'L T', 'NSY'], {S: 'cfc:leather_sheet', T: 'sns:leather_strip', L: 'minecraft:leather', Y: '#forge:string', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/quiver')
    event.shaped('sns:reinforced_fiber', ['STS'], {S: '#forge:string', T: '#forge:fiber'}).id('sns:crafting/reinforced_fiber')


    // Hot or nor
    event.remove({id: 'tfchotornot:heating/wood_tongs_torch'})


    //Chalk 
    event.remove({mod: 'chalk'})
    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX',])
        .outsideSlotRequired(false)
        .ingredient('tfc:rock/loose/chalk')
        .id('cider:knapping/chalk_from_loose_chalk')

    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX',])
        .outsideSlotRequired(false)
        .ingredient('tfc:rock/mossy_loose/chalk')
        .id('cider:knapping/chalk_from_loose_moosy_chalk')

    
    // Comforts
    event.remove({mod: 'comforts'})
    // Universal Dye Recipes
    global.dyes.forEach(color => {
        if(color != 'white') {
            tfc.barrel_sealed(1000)
                .inputItem('chalk:white_chalk')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`chalk:${color}_chalk`)
                .id(`cider:barrel/dye/${color}_chalk`)

            tfc.barrel_sealed(1000)
                .inputItem('comforts:sleeping_bag_white')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`comforts:sleeping_bag_${color}`)
                .id(`cider:barrel/dye/${color}_sleeping_bag`)
            
            tfc.barrel_sealed(1000)
                .inputItem('comforts:hammock_white')
                .inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
                .outputItem(`comforts:hammock_${color}`)
                .id(`cider:barrel/dye/${color}_hammock`)
        }
    })

    tfc.barrel_sealed(1000)
        .inputItem('#forge:colored_chalk')
        .inputFluid(TFC.fluidStackIngredient('tfc:lye', 25))
        .outputItem('chalk:white_chalk')
        .id('cider:barrel/bleach/white_chalk')

    tfc.barrel_sealed(1000)
        .inputItem('#forge:colored_sleeping_bags')
        .inputFluid(TFC.fluidStackIngredient('tfc:lye', 25))
        .outputItem('comforts:sleeping_bag_white')
        .id('cider:barrel/bleach/white_sleeping_bag')

    tfc.barrel_sealed(1000)
        .inputItem('#forge:colored_hammock')
        .inputFluid(TFC.fluidStackIngredient('tfc:lye', 25))
        .outputItem('comforts:hammock_white')
        .id('cider:barrel/bleach/white_hammock')
    
}