BlockEvents.rightClicked('tfc:torch', event => {
    const {player} = event
    if (player.getMainHandItem().hasTag('forge:rods/wooden')) event.cancel()
    if (player.getMainHandItem() == 'tfc:dead_torch') {
        let stack = player.getMainHandItem().count
        player.setMainHandItem(Item.of('tfc:dead_torch').withCount(stack - 1))
        player.give('tfc:torch')
    }
})
function blockApplication(block, item, result) {
    BlockEvents.rightClicked(block, event => {
        const {block, player} = event
        if (player.getMainHandItem() != item) return
        if (player.getMainHandItem() == item ) {
            block.set(result)
        }
    })
}
blockApplication('minecraft:bricks', 'cfc:ash_finish', 'supplementaries:ash_bricks')
blockApplication('minecraft:brick_slab', 'cfc:ash_finish', 'supplementaries:ash_bricks_slab')
blockApplication('minecraft:brick_stairs', 'cfc:ash_finish', 'supplementaries:ash_bricks_stairs')
blockApplication('minecraft:brick_wall', 'cfc:ash_finish', 'supplementaries:ash_bricks_wall')