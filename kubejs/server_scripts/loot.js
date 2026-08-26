LootJS.lootTables((event) => {
    global.TFC_WOOD_TYPES.forEach((wood) => {
        event.getBlockTable(`tfc:wood/leaves/${wood}`)
            .firstPool()
            .removeItem("minecraft:stick");

        event.modifyBlockTables(`tfc:wood/leaves/${wood}`)
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.alternative(
                        LootEntry.of(`tfc:wood/twig/${wood}`, [1, 2]).when(c => c.randomChance(0.2)),
                        LootEntry.of(`tfc:wood/twig/${wood}`, [1, 3]).when(c => c.randomChance(0.05))
                    )
                );
            });
    });

    global.AFC_WOOD_TYPES.forEach((wood) => {
        event.getBlockTable(`afc:wood/leaves/${wood}`)
            .firstPool()
            .removeItem("minecraft:stick");

        event.modifyBlockTables(`afc:wood/leaves/${wood}`)
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.alternative(
                        LootEntry.of(`afc:wood/twig/${wood}`, [1, 2]).when(c => c.randomChance(0.2)),
                        LootEntry.of(`afc:wood/twig/${wood}`, [1, 3]).when(c => c.randomChance(0.05))
                    )
                );
            });
    });

    for (const [variant, wood] of Object.entries(AFCToTFCTreeMap)) {
        event.getBlockTable(`afc:wood/leaves/${variant}`)
            .firstPool()
            .removeItem("minecraft:stick");

        event.modifyBlockTables(`afc:wood/leaves/${variant}`)
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.alternative(
                        LootEntry.of(`tfc:wood/twig/${wood}`, [1, 2]).when(c => c.randomChance(0.2)),
                        LootEntry.of(`tfc:wood/twig/${wood}`, [1, 3]).when(c => c.randomChance(0.05))
                    )
                );
            });
    }

    for (const [variant, wood] of Object.entries(AFCToAFCTreeMap)) {
        event.getBlockTable(`afc:wood/leaves/${variant}`)
            .firstPool()
            .removeItem("minecraft:stick");
            
        event.modifyBlockTables(`afc:wood/leaves/${variant}`)
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.alternative(
                        LootEntry.of(`afc:wood/twig/${wood}`, [1, 2]).when(c => c.randomChance(0.2)),
                        LootEntry.of(`afc:wood/twig/${wood}`, [1, 3]).when(c => c.randomChance(0.05))
                    )
                );
            });
    }
});
