const registerBlocks = (/** @type {Registry.Block} */ event) => {
    // Ground Cover
    event.create('cfc:coal_chunk', 'tfc:ground_cover')
        .groundCoverModelShape('cfc:block/ground_cover/coal_chunk')

    event.create('cfc:lignite_chunk', 'tfc:ground_cover')
        .groundCoverModelShape('cfc:block/ground_cover/lignite_chunk')

    // Parity
    global.afcWoodTypes.forEach(wood => {
        event.create(`cfc:wood/barrel/${wood}`, 'cardinal')
            .model(`cfc:block/wood/barrel/${wood}`)
            .woodSoundType()
            .tagBlock('minecraft:mineable/axe')
            .mapColor('brown')
            .blockEntity(bEntity => {
                bEntity.attach('tfc:inventory', {
                    width: 9, 
                    height: 2, 
                    size: size => size.isSmallerThan('large')
                })
                bEntity.rightClickOpensInventory()
            })
    })

    function createOreBlocks(oreName) {
        event.create(`cfc:ore/small_${oreName}`, 'tfc:ground_cover')
            .ore()
            .model(`cfc:block/ground_cover/small_${oreName}`)
            .hardness(0.05)
            .fullBlock(false)
            .opaque(false)
            .tagBlock('tfc:can_be_snow_piled')
            .tag('tfc:nuggets')
            .tag('tfc:small_ore_pieces')

        let oreValues = ['poor', 'normal', 'rich']
        global.tfcRockTypes.forEach(rockType => {
            oreValues.forEach(oreValue => {
                event.create(`cfc:ore/${oreValue}_${oreName}/${rockType}`)
                    .stoneSoundType()
                    .hardness(6.5)
                    .tagBlock('forge:ores')
                    .tagBlock(`forge:ores/${oreName}`)
                    .tagBlock('minecraft:mineable/pickaxe')
                    .tagBlock('minecraft:needs_copper_tool')
                    .tagBlock('tfc:can_collapse')
                    .tagBlock('tfc:can_start_collapse')
                    .tagBlock('tfc:can_trigger_collapse')
                    .tagBlock('tfc:monster_spawns_on')
                    .tagBlock('tfc:powderkeg_breaking_blocks')
                    .tagBlock('tfc:prospectable')
                    .tagBlock('tfc:rock/ores')
                    .tag(`tfc:ores/${oreName}/${oreValue}`)
                    .requiresTool(true)
            })
        })
    }
    createOreBlocks('bauxite')
    createOreBlocks('lead')

    function createMetalBlocks(material) {
        event.create(`cfc:metal/block/${material}`)
            .model(`cfc:block/metal/block/${material}`)
            .hardness(5)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .soundType('metal')
        let types = ['slab', 'stairs']
        types.forEach(type => {
            event.create(`cfc:metal/block/${material}_${type}`, type)
                .model(`cfc:block/metal/block/${material}_${type}`)
                .hardness(5)
                .requiresTool(true)
                .tagBlock('minecraft:mineable/pickaxe')
                .soundType('metal')
        })
    }
    createMetalBlocks('aluminium')
    createMetalBlocks('alumina')
    createMetalBlocks('lead')

    function createGemOreBlocks(gemType) {
        global.tfcRockTypes.forEach(rockType => {
            event.create(`cfc:ore/${gemType}/${rockType}`)
                .stoneSoundType()
                .hardness(6.5)
                .tagBlock('forge:ores')
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('minecraft:needs_copper_tool')
                .tagBlock('tfc:can_collapse')
                .tagBlock('tfc:can_start_collapse')
                .tagBlock('tfc:can_trigger_collapse')
                .tagBlock('tfc:monster_spawns_on')
                .tagBlock('tfc:powderkeg_breaking_blocks')
                .tagBlock('tfc:prospectable')
                .tagBlock('precisionprospecting:prospectable_mineral')
                .tagBlock('tfc:rock/ores')
                .requiresTool(true)
        })
    }
    createGemOreBlocks('quartz')
    createGemOreBlocks('clear_quartz')

    function createDoubleCrop(crop, nutrient, stage1, stage2, seed, product) {
        event.create(`cfc:${crop}`, 'tfc:double_crop')
            .soundType('crop')
            .nutrient(nutrient)
            .stages(stage1)
            .doubleStages(stage2)
            .hardness(0.6)
            .seedItem(seed)
            .productItem(product)
            .deadBlock(dead => {
                dead.hardness(0.2)
                dead.soundType('crop')
            })

        event.create(`cfc:wild_${crop}`, 'tfc:wild_crop')
            .type('double')
            .soundType('crop')
            .seeds(seed)
            .food(product)
            .hardness(0.5)
            .tagBoth('tfc:wild_crops')
            .tagItem('c:hidden_from_recipe_viewers')
    }
    createDoubleCrop('flax', 'nitrogen', 4, 2, 'cfc:seeds/flax', 'cfc:flax_fiber')
}