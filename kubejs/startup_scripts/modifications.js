BlockEvents.modification(event => {
    event.modify([
        'minecraft:glowstone', 
        'minecraft:redstone_lamp'
    ], block => {
        block.lightEmission = 7
    })
})

ItemEvents.modification(event => {
    event.modify([
        'minecraft:white_bed', 
        'minecraft:orange_bed', 
        'minecraft:magenta_bed',
        'minecraft:light_blue_bed',
        'minecraft:yellow_bed',
        'minecraft:lime_bed',
        'minecraft:pink_bed',
        'minecraft:gray_bed',
        'minecraft:light_gray_bed',
        'minecraft:cyan_bed', 
        'minecraft:purple_bed',
        'minecraft:blue_bed',
        'minecraft:brown_bed',
        'minecraft:green_bed',
        'minecraft:red_bed', 
        'minecraft:black_bed',
        
        'minecraft:minecart',
    ], item => {
        item.maxStackSize = 4
    })
})
