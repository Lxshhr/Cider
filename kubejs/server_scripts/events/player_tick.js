// priority: 1
PlayerEvents.tick(event => {
    const {player} = event
    if (!player) return

    let fluidId = player.eyeInFluidType.toString()
    if (fluidId == 'minecraft:air') return

    const mainHandItem = player.getMainHandItem()
    const offHandItem = player.getOffHandItem()
    if (mainHandItem != 'tfc:torch' && offHandItem != 'tfc:torch') return

    let isFullySubmerged = fluidId.includes('minecraft:water') || fluidId.includes('tfc:salt_water') || fluidId.includes('tfc:spring_water')

    if (isFullySubmerged && mainHandItem == 'tfc:torch') {
        const stack = mainHandItem.count
        player.setMainHandItem(Item.of('tfc:dead_torch').withCount(stack))
        player.level.playSound(null, player.x, player.y, player.z, 'tfc:item.cool', 'master', 20, 2)
    }
    if (isFullySubmerged && offHandItem == 'tfc:torch') {
        const stack = offHandItem.count
        player.setOffHandItem(Item.of('tfc:dead_torch').withCount(stack))
        player.level.playSound(null, player.x, player.y, player.z, 'tfc:item.cool', 'master', 20, 2)
    }
})