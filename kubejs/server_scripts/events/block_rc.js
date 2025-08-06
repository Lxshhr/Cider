// priority: 1
BlockEvents.rightClicked(event => {
    const {block, player} = event
    const mainHandItem = player.getMainHandItem()
    
    if (block == 'tfc:wall_torch' || block == 'tfc:torch') {
        if (mainHandItem.hasTag('forge:rods/wooden')) event.cancel()
            if (mainHandItem == 'tfc:dead_torch') {
            let stack = mainHandItem.count
            player.setMainHandItem(Item.of('tfc:dead_torch').withCount(stack - 1))
            player.give('tfc:torch')
        }
    }
})

function blockApplication(block, item, result) {
    BlockEvents.rightClicked(block, event => {
        const {block, level, player} = event
        const mainHandItem = player.getMainHandItem()

        if (mainHandItem != item) return
            if (mainHandItem == item ) {
                block.set(result)
                level.runCommandSilent(`playsound minecraft:block.stone.place block @p ${player.x} ${player.y} ${player.z}`)
                if (!player.isCreative) {
                    stack = mainHandItem.count
                    player.setMainHandItem(item, stack - 1)
                }
            }
    })
}
blockApplication('minecraft:bricks', 'cfc:ash_finish', 'supplementaries:ash_bricks')
blockApplication('minecraft:brick_slab', 'cfc:ash_finish', 'supplementaries:ash_bricks_slab')
blockApplication('minecraft:brick_stairs', 'cfc:ash_finish', 'supplementaries:ash_bricks_stairs')
blockApplication('minecraft:brick_wall', 'cfc:ash_finish', 'supplementaries:ash_bricks_wall')