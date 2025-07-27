// priority: 1
EntityEvents.hurt(event => {
    const {entity, source, source: {actual}} = event
    const player = source.player

    if(!source.immediate?.player) return
    const mainHandItem = source.player.getMainHandItem().getId()
    const distance = entity.getDistance(player.x, player.y, player.z)
    if (mainHandItem == 'tfc:torch' && entity.isLiving()) {
        let randomInt = (Math.random() * 10) + 1 
        if(distance <= 3 && randomInt <= 2) {
            entity.setSecondsOnFire(6)
        }
    }
})