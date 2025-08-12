const registerBlockLoot = (/** @type {Internal.BlockLootEventJS} */ event) => {
    let oreTypes = ['bauxite', 'lead']
    let gemTypes = ['quartz', 'clear_quartz']
    global.tfcRockTypes.forEach(rock => {
        let oreValues = ['poor', 'normal', 'rich']
        oreValues.forEach(value => { 
            event.addBlock(`cfc:ore/${value}_bauxite/${rock}`, loot => {
                loot.clearPools()
                loot.addPool(pool => {
                    pool.addItem(`cfc:ore/${value}_bauxite`)
                })
            })
            event.addBlock(`cfc:ore/${value}_lead/${rock}`, loot => {
                loot.clearPools()
                loot.addPool(pool => {
                    pool.addItem(`cfc:ore/${value}_lead`)
                })
            })
        })

        event.addBlock(`cfc:ore/quartz/${rock}`, loot => {
            loot.clearPools()
            loot.addPool(pool => {
                pool.addItem(`cfc:ore/quartz`)
            })
        })
        event.addBlock(`cfc:ore/clear_quartz/${rock}`, loot => {
            loot.clearPools()
            loot.addPool(pool => {
                pool.addItem(`cfc:ore/clear_quartz`)
            })
        })
    })
}