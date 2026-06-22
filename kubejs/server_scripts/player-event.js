PlayerEvents.tick(event => {
    const { player, level } = event 
    if (!player) return

    let fluidId = player.getEyeInFluidType().toString()
    if (fluidId === 'minecraft:air') return

    const mainHandItem = player.getMainHandItem()
    const offHandItem = player.getOffHandItem()

    if (mainHandItem != 'tfc:torch' && offHandItem != 'tfc:torch') return

    let isFullySubmerged = fluidId.includes('minecraft:water') || fluidId.includes('tfc:salt_water') || fluidId.includes('tfc:spring_water')

    if (isFullySubmerged && mainHandItem == 'tfc:torch') {
        let stack = mainHandItem.count
        player.setMainHandItem(Item.of('tfc:dead_torch').withCount(stack))
        level.playSound(player, player.x, player.y, player.z, 'tfc:item.cool', 'master', 20, 2)
    }
    if (isFullySubmerged && offHandItem == 'tfc:torch') {
        let stack = offHandItem.count
        player.setOffHandItem(Item.of('tfc:dead_torch').withCount(stack))
        level.playSound(player, player.x, player.y, player.z, 'tfc:item.cool', 'master', 20, 2)
    }
})


EntityEvents.afterHurt(event => {
    const {entity, source, source: {actual}} = event
    const player = source.player

    if(!source.immediate?.player) return
    const mainHandItem = source.player.getMainHandItem().getId()
    const distance = entity.getDistance(player.x, player.y, player.z)
    if (mainHandItem == 'tfc:torch' && entity.isLiving()) {
        let randomInt = (Math.random() * 10) + 1 
        if(distance <= 3 && randomInt <= 2) {
            entity.setRemainingFireTicks(120)
        }
    }
})
