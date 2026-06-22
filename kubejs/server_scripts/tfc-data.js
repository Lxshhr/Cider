TFCEvents.data(event => {
    event.knappingType({
        inputItem: Ingredient.of('minecraft:flint', 2),
        amountToConsume: 1,
        clickSound: 'tfc:item.knapping.stone',
        icon: 'minecraft:flint',
        spawnsParticles: true, 
        consumeAfterComplete: true
    }, 'kubejs:flint')

    event.fuel({ingredient: 'kubejs:peat_kindling', duration: 625, temperature: 600}, 'kubejs:peat')
    
    event.heat({ingredient: 'kubejs:unfinished_clock', heatCapacity: 5.714})
    event.heat({ingredient: 'kubejs:unfinished_spyglass', heatCapacity: 5.714})
    event.heat({ingredient: 'kubejs:brass_spindle_head', heatCapacity: 2.857})
    event.heat({ingredient: 'kubejs:brass_spindle', heatCapacity: 2.857})
})
