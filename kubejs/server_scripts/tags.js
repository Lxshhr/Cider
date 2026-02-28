ServerEvents.tags('item', event => {
    event.add('c:tools/spindles', ['tfc:spindle', 'kubejs:brass_spindle'])

    event.add('tfc:usable_on_tool_rack', [
        
    ])

    event.add('tfc:can_be_lit_on_torch', [
        'tfc:dead_torch'
    ])

    event.add('tfc:rock/loose_chalk', [
        'tfc:rock/loose/chalk', 
        'tfc:rock/moosy_loose/chalk'
    ])
    event.add('tfc:produces_tallow', [
        'tfc:blubber', 
        'kubejs:animal_fat']
    )
    event.add('tfc:is_five_clay', [
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
        'tfc:ceramic/unfired_sword_head_mold', 
        'tfc:ceramic/unfired_knife_head_mold', 
        'tfc:ceramic/unfired_blowpipe', 
        'firmalife:clay_oven_bottom', 
        'firmalife:clay_oven_top', 
        'firmalife:clay_oven_chimney', 
    ])
    event.add('tfc:magnetite_pieces', [
        'tfc:ore/small_magnetite',
        'tfc:ore/poor_magnetite',
        'tfc:ore/normal_magnetite',
        'tfc:ore/rich_magnetite'
    ])
    event.add('tfc:mechanisms', [
        'kubejs:steel_mechanisms', 
        'tfc:brass_mechanisms'
    ])

    event.add('minecraft:chiseled_bricks', [
        'tfc:rock/chiseled/granite',
        'tfc:rock/chiseled/diorite',
        'tfc:rock/chiseled/andesite',
        'tfc:rock/chiseled/dacite',
        'tfc:rock/chiseled/chert',
        'tfc:rock/chiseled/chalk',
        'tfc:rock/chiseled/marble',
        'tfc:rock/chiseled/tuff',
        'tfc:rock/chiseled/basalt',
        'tfc:rock/chiseled/gabbro',
        'tfc:rock/chiseled/shale',
        'tfc:rock/chiseled/claystone',
        'tfc:rock/chiseled/limestone',
        'tfc:rock/chiseled/conglomerate',
        'tfc:rock/chiseled/dolomite',
        'tfc:rock/chiseled/rhyolite',
        'tfc:rock/chiseled/quartzite',
        'tfc:rock/chiseled/slate',
        'tfc:rock/chiseled/phyllite',
        'tfc:rock/chiseled/schist',
        'tfc:rock/chiseled/gneiss'
    ])
    event.add('c:foils/all_bronze', [
        'kubejs:bronze_foil', 
        'kubejs:black_bronze_foil', 
        'kubejs:bismuth_bronze_foil', 
    ])
    event.add('c:sheets/all_bronze', [
        "tfc:metal/sheet/bronze", 
        "tfc:metal/sheet/bismuth_bronze", 
        "tfc:metal/sheet/black_bronze"
    ])
    event.add('c:double_sheets/all_bronze', [
        "tfc:metal/double_sheet/bronze", 
        "tfc:metal/double_sheet/bismuth_bronze", 
        "tfc:metal/double_sheet/black_bronze"
    ])

    event.remove('firmalife:foods/washable', [
        'firmalife:food/stinky_soup'
    ])

    event.remove('tfc:can_be_lit_on_torch', [
        '#tfc:twigs'
    ])
})

ServerEvents.tags('fluid', event => {
    event.add('tfc:oils', [
        "tfc:olive_oil",
        "tfc:canola_oil",
        "kubejs:seed_oil",
    ])
})