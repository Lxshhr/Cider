ServerEvents.tags("item", event => {
    let tieredWeatheringMetals = ['wrought_iron', 'steel', 'copper', 'bronze'];

    event.add('cider:costs_five_clay', [
        'tfc:ceramic/unfired_pan', 
        'tfc:ceramic/unfired_spindle_head', 
        'tfc:ceramic/unfired_pot', 
        'tfc:ceramic/unfired_vessel', 
        'tfc:ceramic/unfired_large_vessel', 
        'tfc:ceramic/unfired_jug', 
        'tfc:ceramic/unfired_pickaxe_head_mold', 
        'tfc:ceramic/unfired_propick_head_mold', 
        'tfc:ceramic/unfired_axe_head_mold', 
        'tfc:ceramic/unfired_shovel_head_mold', 
        'tfc:ceramic/unfired_hoe_head_mold', 
        'tfc:ceramic/unfired_chisel_head_mold', 
        'tfc:ceramic/unfired_hammer_head_mold', 
        'tfc:ceramic/unfired_javelin_head_mold', 
        'tfc:ceramic/unfired_sword_blade_mold', 
        'tfc:ceramic/unfired_knife_blade_mold', 
        'tfc:ceramic/unfired_blowpipe', 
        'firmalife:clay_oven_bottom', 
        'firmalife:clay_oven_top', 
        'firmalife:clay_oven_chimney', 
    ]);

    event.add('cider:costs_one_clay', [
        'tfc:ceramic/unfired_bowl', 
        'tfc:ceramic/unfired_brick'
    ]);

    event.add('cider:costs_two_clay', [
        'tfc:ceramic/unfired_flower_pot', 
        'tfc:ceramic/unfired_ingot_mold'
    ]);

    event.add('cider:costs_five_fire_clay', [
        'tfc:ceramic/unfired_crucible', 
        'tfc:ceramic/unfired_mold_table'
    ]);

    event.add('cider:costs_one_fire_clay', [
        'tfc:ceramic/unfired_channel', 
        'tfc:ceramic/unfired_fire_brick'
    ]);

    event.add('cider:costs_two_fire_clay', [
        'tfc:ceramic/unfired_fire_ingot_mold'
    ]);

    // Metal 
    global.TIERED_TFC_METALS.forEach(([metal, i, temp]) => {
        event.add(`cider:${metal}/small_items`, [
            `tfc:metal/axe_head/${metal}`,  
            `tfc:metal/shovel_head/${metal}`,  
            `tfc:metal/hammer_head/${metal}`,  
            `tfc:metal/hoe_head/${metal}`,  
            `tfc:metal/pickaxe_head/${metal}`,  
            `tfc:metal/chisel_head/${metal}`,  
            `tfc:metal/javelin_head/${metal}`,  
            `tfc:metal/propick_head/${metal}`,  
            `tfc:metal/knife_blade/${metal}`, 
            `tfc:metal/scythe_blade/${metal}`,
            `tfc:metal/saw_blade/${metal}`
        ]);

        event.add(`cider:${metal}/small_items_d`, [
            `tfc:metal/axe/${metal}`,  
            `tfc:metal/shovel/${metal}`,  
            `tfc:metal/hammer/${metal}`,  
            `tfc:metal/hoe/${metal}`,  
            `tfc:metal/pickaxe/${metal}`,  
            `tfc:metal/chisel/${metal}`,  
            `tfc:metal/javelin/${metal}`,  
            `tfc:metal/propick/${metal}`,  
            `tfc:metal/knife/${metal}`, 
            `tfc:metal/scythe/${metal}`,
            `tfc:metal/saw/${metal}`
        ]);

        event.add(`cider:${metal}/medium_items`, [
            `tfc:metal/mace_head/${metal}`, 
            `tfc:metal/sword_blade/${metal}`,
            `tfc_hammer_time:metal/excavator_head/${metal}`, 
            `tfc_hammer_time:metal/sledgehammer_head/${metal}`, 
            `precisionprospecting:metal/prospector_hammer_head/${metal}`, 
            `precisionprospecting:metal/mineral_prospector_head/${metal}`
        ]);

        event.add(`cider:${metal}/medium_items_d`, [
            `tfc:metal/mace/${metal}`, 
            `tfc:metal/sword/${metal}`,
            `tfc_hammer_time:metal/excavator/${metal}`, 
            `tfc_hammer_time:metal/sledgehammer/${metal}`,
            `precisionprospecting:metal/prospector_hammer/${metal}`, 
            `precisionprospecting:metal/mineral_prospector/${metal}`
        ]);

        event.add(`cider:${metal}/large_items`, [
            `precisionprospecting:metal/prospector_drill_head/${metal}`
        ]);

        event.add(`cider:${metal}/large_items_d`, [
            `precisionprospecting:metal/prospector_drill/${metal}`
        ]);
    });

    global.WEATHERING_TFC_METALS.forEach(([metal, i, temp]) => {
        event.add(`tfc:blocks/${metal}`, [
            `tfc:metal/block/${metal}`,
            `tfc:metal/exposed_block/${metal}`,
            `tfc:metal/oxidized_block/${metal}`,
            `tfc:metal/weathered_block/${metal}`
        ]);
        
        event.add(`tfc:stairs/${metal}`, [
            `tfc:metal/block/${metal}_stairs`,
            `tfc:metal/exposed_block/${metal}_stairs`,
            `tfc:metal/oxidized_block/${metal}_stairs`,
            `tfc:metal/weathered_block/${metal}_stairs`
        ]);

        event.add(`tfc:slabs/${metal}`, [
            `tfc:metal/block/${metal}_slab`,
            `tfc:metal/exposed_block/${metal}_slab`,
            `tfc:metal/oxidized_block/${metal}_slab`,
            `tfc:metal/weathered_block/${metal}_slab`
        ]);

        if (tieredWeatheringMetals.includes(metal)) {
            event.add(`tfc:grates/${metal}`, [
                `tfc:metal/grate/${metal}`,
                `tfc:metal/exposed_grate/${metal}`,
                `tfc:metal/oxidized_grate/${metal}`,
                `tfc:metal/weathered_grate/${metal}`
            ]);
        }
    })
})