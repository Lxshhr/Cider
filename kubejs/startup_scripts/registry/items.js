const registerItems = (/** @type {Registry.Item} */ event) => {
    event.createCustom('cfc:flint_and_pyrite', () => new $FlintAndSteelItem(new $ItemProperties().defaultDurability(48).durability(48)))
        .tag('tfc:starts_fires_with_durability')
        .tag('tfc:usable_on_tool_rack')

    event.create('cfc:food/bush_meat')
    event.create('cfc:food/cooked_bush_meat')

    event.create('cfc:animal_fat')
    event.create('cfc:seed_paste') 
    event.create('cfc:plant_string')
    event.create('cfc:dirty_cheese_cloth')
    event.create('cfc:thatch_canvas')
    event.create('cfc:ash_finish')

    event.create('cfc:cut_silk_cloth')
    event.create('cfc:cut_wool_cloth')
    event.create('cfc:cut_burlap_cloth')
    event.create('cfc:cut_linen_cloth')
    event.create('cfc:bound_leather')
    event.create('cfc:leather_sheet')
    
    event.create('cfc:linen_cloth')
    event.create('cfc:flax_fiber')
    event.create('cfc:flax').maxStackSize(32)

    event.create('cfc:nails_and_hinges')
    event.create('cfc:metal/iron_frame')
    event.create('cfc:metal/aluminium_frame')
    event.create('cfc:metal/unfinished_clock')
    event.create('cfc:metal/unfinished_spyglass')
    event.create('cfc:metal/brick_mold')
        .maxDamage(320)

    event.create('cfc:ceramic/unfired_candle_mold')
    event.create('cfc:ceramic/candle_mold')
    
    function createTool(toolName, toolType, toolTag, durability, tier) {
        event.create(`cfc:${toolName}`, toolType)
            .tag('tfc:usable_on_tool_rack')
            .tag(toolTag)
            .tag('cfc:flint_tools')
            .maxDamage(durability)
            .tier(tier)
        event.create(`cfc:${toolName}_head`)
    }
    createTool('flint_hoe', 'tfc:hoe', 'tfc:hoes', 48, 'wood')
    createTool('flint_axe', 'axe', 'tfc:axes', 48, 'wood')
    createTool('flint_shovel', 'shovel', 'tfc:shovels', 48, 'wood')
    createTool('flint_hammer', 'tfc:hammer', 'tfc:hammers', 48, 'wood')
    createTool('flint_knife', 'tfc:hoe', 'tfc:knives', 48, 'wood')
    createTool('flint_javelin', 'tfc:javelin', 'tfc:javelins', 48, 'wood')

    event.create('cfc:small_measuring_cup', 'tfc:fluid_container')
        .capacity(50)
        .fluidTagAccept('cfc:usable_in_wooden_bucket')
        .tag('tfc:usable_on_tool_rack')

    event.create('cfc:large_measuring_cup', 'tfc:fluid_container')
        .capacity(250)
        .fluidTagAccept('cfc:usable_in_wooden_bucket')
        .tag('tfc:usable_on_tool_rack')
    
    event.create('cfc:ceramic/unfired_rod_mold')
        .tag('tfc:unfired_molds')
    event.create('cfc:ceramic/rod_mold', 'tfc:mold')
        .capacity(50)
        .fluidTagAccept('tfc:usable_in_ingot_mold')
        .tag('tfc:fired_molds')
    event.create('cfc:ceramic/unfired_fire_rod_mold')
        .tag('tfc:unfire_molds')
    event.create('cfc:ceramic/fire_rod_mold', 'tfc:mold')
        .capacity(50)
        .fluidTagAccept('tfc:usable_in_ingot_mold')
        .tag('tfc:fired_molds')
    event.create('cfc:ceramic/unfired_spindle_head_mold')
        .tag('tfc:unfired_molds')
    event.create('cfc:ceramic/spindle_head_mold', 'tfc:mold')
        .capacity(100)
        .fluidTagAccept('tfc:spindle_head_usable')
        .tag('tfc:fired_molds')

    event.create(`cfc:metal/spindle_head/brass`)
    event.create(`cfc:metal/spindle/brass`)
        .maxDamage(920)
        .tag('forge:spindles')
        .tag('tfc:usable_on_tool_rack')

    function createOreItems(oreType) {
        event.create(`cfc:powder/${oreType}`)
            .tag('tfc:powders')
        let oreValues = ['poor', 'normal', 'rich']
        oreValues.forEach(ore => {
            event.create(`cfc:ore/${ore}_${oreType}`)
                .maxStackSize(16)
                .tag('tfc:ore_pieces')
                .tag('sns:allowed_in_ore_sack')
        })
    }
    createOreItems('bauxite')
    createOreItems('lead')

    event.create('cfc:powder/borax')
        .tag('forge:dusts')
    event.create('cfc:powder/chromite')
        .tag('forge:dusts')
        .tag('tfc:gem_powders')
    event.create('cfc:powder/cryolite')
        .tag('forge:dusts')
    event.create('cfc:powder/cinnabar')
        .tag('tfc:gem_powders')
        .tag('tfc:glassworking_powders')
        .tag('forge:dusts')
    event.create('cfc:gem/cinnabar')
        .tag('forge:gems')

    function createMetalItems(material) {
        let types = ['ingot', 'double_ingot', 'sheet', 'double_sheet', 'rod']
        types.forEach(type => {
            let item = event.create(`cfc:metal/${type}/${material}`)
                .tag(`forge:${type}s/${material}`)
                .tag(`forge:${type}s`)
                .tag(`tfc:metal_item/${material}`)

            switch (type) {
                case 'ingot':
                    item.tag('tfc:pileable_ingots')
                    break;
                case 'double_ingot':
                    item.tag('tfc:pileable_double_ingots')
                    break;
                case 'sheet':
                    item.tag('tfc:pileable_sheets')
                    break;
            }
        })
    }
    createMetalItems('aluminium')
    createMetalItems('alumina')
    createMetalItems('lead')

    function createNewGemItems(material) {
        event.create(`cfc:ore/${material}`)
        event.create(`cfc:gem/${material}`)
            .tag('forge:gems')

        event.create(`cfc:powder/${material}`)
            .tag('tfc:gem_powders')
            .tag('tfc:powders')
    }
    createNewGemItems('quartz')
    createNewGemItems('clear_quartz')
}