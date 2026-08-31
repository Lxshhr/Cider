ServerEvents.tags('item', event => {
    event.add('c:tools/spindles', [
        'tfc:spindle'
    ]);
    event.add('minecraft:bamboo_logs', [
        'minecraft:bamboo_block',
        'tfc:golden_bamboo_block'
    ]);
    event.add('tfc:stone_tool_handles', [
        'c:rods/wooden', 
        'minecraft:bone'
    ])

    event.add('tfc:usable_on_tool_rack', [
        'c:tools/spindles'
    ]);

    event.add('tfc:can_be_lit_on_torch', [
        'tfc:dead_torch'
    ]);

    event.add('tfc:rock/loose_chalk', [
        'tfc:rock/loose/chalk', 
        'tfc:rock/moosy_loose/chalk'
    ]);
    event.add('tfc:produces_tallow', [
        'tfc:blubber', 
    ]);
    event.add('tfc:sticky_stuff', [
        'tfc:glue'
    ]);
    
    event.add('tfc:magnetite_pieces', [
        'tfc:ore/small_magnetite',
        'tfc:ore/poor_magnetite',
        'tfc:ore/normal_magnetite',
        'tfc:ore/rich_magnetite'
    ]);
    event.add('tfc:mechanism', [
        'tfc:brass_mechanisms'
    ]);

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
    ]);
    event.add('tfc:chiseled_bricks', [
        'minecraf:brick', 
        'tfc:brick/granite',
        'tfc:brick/diorite',
        'tfc:brick/andesite',
        'tfc:brick/dacite',
        'tfc:brick/chert',
        'tfc:brick/chalk',
        'tfc:brick/marble',
        'tfc:brick/tuff',
        'tfc:brick/basalt',
        'tfc:brick/gabbro',
        'tfc:brick/shale',
        'tfc:brick/claystone',
        'tfc:brick/limestone',
        'tfc:brick/conglomerate',
        'tfc:brick/dolomite',
        'tfc:brick/rhyolite',
        'tfc:brick/quartzite',
        'tfc:brick/slate',
        'tfc:brick/phyllite',
        'tfc:brick/schist',
        'tfc:brick/gneiss'
    ]);
    event.add('c:sheets/all_bronze', [
        'tfc:metal/sheet/bronze', 
        'tfc:metal/sheet/bismuth_bronze', 
        'tfc:metal/sheet/black_bronze'
    ]);
    event.add('c:double_sheets/all_bronze', [
        'tfc:metal/double_sheet/bronze', 
        'tfc:metal/double_sheet/bismuth_bronze', 
        'tfc:metal/double_sheet/black_bronze'
    ]);

    event.add('c:cloths', [
        'tfc:burlap_cloth', 
        'tfc:silk_cloth',
        'tfc:wool_cloth'
    ]);

    event.add('c:tools/needles', [
        'tfc:bone_needle'
    ]);

    event.add('c:inks', 
        'minecraft:ink_sac'
    );

    global.COLORS.forEach(color => {
        if (color != 'white') {
            event.add('chalk:colored_chalks', `chalk:${color}_chalk`)
        }
        event.add(`minecraft:colored_terracotta`, `minecraft:${color}_terracotta`)
    });

    event.add('c:compasses', [
        'minecraft:compass'
    ]);
    
    event.remove('tfc:can_be_lit_on_torch', [
        '#tfc:twigs'
    ]);
})

ServerEvents.tags('fluid', event => {
    event.add('tfc:oils', [
        'tfc:olive_oil',
        'tfc:canola_oil',
    ]);
})