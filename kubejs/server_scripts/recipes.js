ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc;

    event.shapeless('minecraft:crafting_table', ['#tfc:workbenches', '#c:tools/saw']).damageIngredient('#c:tools/saw');
    event.shapeless('2x tfc:fire_clay', ['minecraft:clay_ball', '4x tfc:powder/kaolinite', '4x tfc:powder/graphite']);
    event.shapeless('tfc:dead_torch', ['tfc:straw', 'minecraft:stick']);
    event.shapeless('2x minecraft:stick', ['#tfc:twigs']);
    event.shapeless('minecraft:book', ['#c:leathers', '3x minecraft:paper', '#c:strings', '#c:tools/needles']).damageIngredient('#c:tools/needles');
    event.shapeless('minecraft:writable_book', ['minecraft:book', '#c:inks', 'minecraft:feather']);
    event.shapeless('minecraft:lever', ['#tfc:chiseled_bricks', 'minecraft:stick']);
    event.shapeless('9x tfc:straw', ['tfc:thatch']);
    event.shapeless('2x tfc:soot', ['tfc:powder/charcoal', 'tfc:powder/wood_ash', '#tfc:sticky_stuff']);
    event.shapeless('minecraft:stripped_bamboo_block', ['#minecraft:bamboo_logs', '#minecraft:axes']).damageIngredient('#minecraft:axes');
    event.shapeless('tfc:spindle', ['tfc:ceramic/spindle_head', 'minecraft:stick']);
    event.shapeless('tfc:sandpaper', ['minecraft:paper', 'tfc:powder/flux', '#tfc:sticky_stuff', '#minecraft:sand', '#tfc:gem_powders']);
    event.shapeless('2x minecraft:fire_charge', ['tfc:powder/sulfur', 'tfc:powder/graphite', 'tfc:powder/charcoal']);
    event.shapeless('2x minecraft:stick', ['tfc:groundcover/driftwood']);
    event.shapeless('minecraft:heavy_weighted_pressure_plate', ['#minecraft:wooden_pressure_plates', '#c:ingots/brass']);
    event.shapeless('minecraft:light_weighted_pressure_plate', ['#minecraft:wooden_pressure_plates', '#c:ingots/copper']);
    event.shapeless('8x tfc:wattle', ['2x #minecraft:logs', '#minecraft:axes']).damageIngredient('#minecraft:axes');

    event.shaped('2x minecraft:scaffolding', ['SCS', 'S S', 'S S'], {S: 'minecraft:stick', C: '#c:strings'});
    event.shaped('minecraft:white_bed', ['CCC', 'LLL', 'L L'], {C: '#tfc:high_quality_cloth', L: '#tfc:lumber'});
    event.shaped('4x minecraft:item_frame', [' S ', 'SLS', ' S '], {S: '#tfc:lumber', L: 'minecraft:leather'});
    event.shaped('minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: 'minecraft:paper'});
    event.shaped('2x minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: '#tfc:high_quality_cloth'});
    event.shaped('minecraft:name_tag', [' S', 'P '], {S: '#c:strings', P: 'minecraft:paper'});
    event.shaped('minecraft:tripwire_hook', ['C', 'R', 'L'], {C: '#c:rods/copper', R: '#tfc:lumber', L: 'minecraft:redstone'});
    event.shaped('tfc:stove', ['BCB', 'C C', ' C '], {C: 'tfc:metal/sheet/cast_iron', B: 'tfc:metal/rod/brass'});
    event.shaped('tfc:steel_pump', ['PWM', ' P '], {P: 'tfc:steel_pipe', W: 'tfc:metal/rod/brass', M: '#tfc:mechanism'});
    event.shaped('tfc:crankshaft', ['AMB', ' SR'], {A: '#tfc:axles', M: '#tfc:mechainsms', B: 'tfc:metal/rod/brass', S: '#c:sheets/brass', R: 'tfc:metal/rod/steel'});
    event.shaped('minecraft:minecart', ['C C', 'BCB'], {C: '#c:sheets/wrought_iron', B: '#c:rods/brass'});
    event.shaped('minecraft:minecart', ['C C', 'BCB'], {C: '#c:sheets/steel', B: '#c:rods/brass'});
    event.shaped('minecraft:brush', ['F', 'R', 'S'], {F: 'minecraft:feather', R: 'tfc:metal/rod/copper', S: '#c:rods/wooden'});
    event.shaped('minecraft:hopper', ['SCS', ' S '], {S: 'tfc:metal/sheet/brass', C: '#c:chests'});
    event.shaped('minecraft:recovery_compass', ['RBR', 'BCB', 'RBR'], {R: 'minecraft:redstone', B: 'tfc:metal/rod/brass', C: '#c:compasses'});
    event.shaped('minecraft:compass', ['S', 'R', 'V'], {S: 'tfc:lens', R: 'minecraft:redstone', V: '#c:bowls'});
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/wrought_iron', V: '#c:double_sheets/wrought_iron', C: 'tfc:crucible'});
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/steel', V: '#c:double_sheets/steel', C: 'tfc:crucible'});
    event.shaped('16x minecraft:ladder', ['X X', 'XXX', 'X X'], {X: '#tfc:lumber'});
    event.shaped(`tfc:firebox`, ['XVX', 'V V', 'XVX'], {X: '#c:sheets/cast_iron', V: '#tfc:double_sheets/any_bronze'});
    event.shaped('3x tfc:fire_brick_shelf', ['LLL', 'C C'], {L: 'tfc:fire_bricks', C: '#c:rods/cast_iron'});
    event.shaped('tfc:rustic_windmill_blade', ['B B', 'BWB'], {B: 'tfc:burlap_cloth', W: 'tfc:windmill_blade/white'});
    event.shaped('chalk:chalk_box', ['XVX', ' X '], {X: 'minecraft:paper', V: '#tfc:sticky_stuff'});
    event.shaped('tfc:steel_rope_anchor', ['SH', 'SG'], {S: '#c:rods/steel', H: '#c:tools/hammer', G: '#c:rods/brass'}).damageIngredient('#c:tools/hammer');
    event.shaped('16x minecraft:powered_rail', ['X X', 'XSX', 'XRX'], {X: '#c:rods/brass', S: 'minecraft:stick', R: 'minecraft:redstone'});
    event.shaped('minecraft:piston', ['XXX', 'SRS', 'SMS'], {X: '#tfc:lumber', S: '#c:bricks', R: 'minecraft:redstone', M: '#tfc:mechanism'});
    event.shaped('3x minecraft:lead', [' SS', ' SS', 'S  '], {S: '#c:strings'});
    event.shaped('minecraft:clock', ['HL ', 'MBM', ' R '], {L: 'tfc:lens', H: '#c:tools/hammer', M: '#tfc:mechanism', B: '#c:sheets/brass', R: 'minecraft:redstone'}).damageIngredient('#c:tools/hammer');
    event.shaped('minecraft:spyglass', [' L ', 'MSM', ' L '], {L: 'tfc:lens', M: '#tfc:mechanism', S: '#c:sheets/brass'});
    event.shaped('2x minecraft:redstone_block', ['S', 'R', 'S'], {S: '#c:sheets/copper', R: 'minecraft:redstone'});
    event.shaped('minecraft:jukebox', ['XXX', 'XCX', 'XXX'], {X: '#minecraft:planks', C: '#c:gems'});
    event.shaped('tfc:bloomery', ['VNV', 'V V', 'VNV'], {N: '#c:sheets/all_bronze', V: '#c:double_sheets/all_bronze'});
    event.shaped('tfc:composter', ['V V', 'VRV', 'VVV'], {V: '#tfc:lumber', R: '#tfc:dirt'});
    event.shaped('minecraft:redstone_lamp', [' V ', 'VRV', ' V '], {V: 'minecraft:redstone', R: 'tfc:lamp_glass'});
    event.shaped('minecraft:leather_helmet', ['SLN', 'L L'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('minecraft:leather_chestplate', ['L L', 'LLL', 'SLN'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('minecraft:leather_leggings', ['LLL', 'L L', 'S N'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('minecraft:leather_boots', ['LSL', 'N L'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('minecraft:saddle', ['LLL', 'S N'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('minecraft:leather_horse_armor', ['  L', 'LLL', 'S N'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('3x minecraft:bowl', ['LKL', ' L '], {L: '#tfc:lumber', K: '#c:tools/knife'}).damageIngredient('#c:tools/knife');
    event.shaped('thermia:leather_wide_brim_hat', ['LLL', 'S N'], {L: 'minecraft:leather', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('thermia:leather_wide_brim_hat', ['LLL', 'S N'], {L: 'tfc:wool', N: '#c:tools/needles', S: '#c:strings'}).damageIngredient('#c:needles');
    event.shaped('thermia:straw_wide_brim_hat', ['SSS', 'S S'], {S: 'tfc:straw'});
    event.shaped('minecraft:fletching_table', ['SS', 'PP', 'PP'], {S: '#c:strings', P: '#minecraft:planks'});
    event.shaped('2x minecraft:redstone_torch', ['S', 'T'], {S: 'minecraft:redstone', T: '#c:rods/copper'});
    event.shaped('2x tfc:steel_pipe', ['SH'], {S: '#c:sheets/steel', H: '#c:tools/hammer'}).damageIngredient('#c:tools/hammer');

    // TODO: Missing Recipes
    /**
     * minecreft:dropper
     * minecreft:target
     * minecraft:crossbow
     * minecraft:sculk_sensor, 
     * minecreft:calibrated_sculk_sensor 
     * minecraft:furnace_minecart
     * minecreft:crafter
     * minecreft:repeater
     * minecreft:comparator
     * minecreft:daylight_detector
     * minecreft:dispenser
     * minecreft:observer
     * minecraft:arrow
     * 
     * minecraft:flower_banner_pattern
     * minecraft:creeper_banner_pattern
     * minecraft:skull_banner_pattern
     * minecraft:mojang_banner_pattern
     * minecraft:globe_banner_pattern
     * minecraft:piglin_banner_pattern
     * minecraft:flow_banner_pattern
     * minecraft:guster_banner_pattern
     * field:star_banner_pattern
     */

    function twoByTwo(result, input) {
        event.shaped(result, ['XX', 'XX'], {X: input});
    }

    function threeByThree(result, input) {
        event.shaped(result, ['XXX', 'XXX', 'XXX'], {X: input});
    }
    threeByThree('tfc:thatch', 'tfc:straw');
    threeByThree('minecraft:slime_block', 'tfc:glue');
    threeByThree('minecraft:bamboo_block', 'minecraft:bamboo');

    function brickRecipe(result, input, cat) {
        event.shaped(result, ['XXX', 'XCX', 'XXX'], {X: input, C: cat});
    }
    brickRecipe('2x minecraft:bricks', 'minecraft:brick', 'tfc:mortar');
    brickRecipe('minecraft:lodestone', '#minecraft:chiseled_bricks', '#tfc:magnetite_pieces');
    brickRecipe('2x tfc:alabaster/bricks', 'tfc:alabaster_brick', 'tfc:mortar');
    brickRecipe('2x tfc:fire_bricks', 'tfc:ceramic/fire_brick', 'tfc:mortar');

    function stairCrafting(result, input) {
        event.shaped(result, ['XV', 'XX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }
    stairCrafting('3x minecraft:brick_stairs', 'minecraft:bricks')

    function slabCrafting(result, input) {
        event.shaped(result, ['VX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 2);
    }
    slabCrafting('2x minecraft:brick_slab',  'minecraft:bricks');

    function wallCrafting(result, input) {
        event.shaped(result, ['V ', 'XX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }
    wallCrafting('2x minecraft:brick_wall', 'minecraft:bricks');

    function chiselSlab(result, input) {
        tfc.chisel(result, input, 'tfc:slab').extraDrop(result);
    }
    chiselSlab('minecraft:brick_slab', 'minecraft:bricks');

    function chiselStair(result, input) {
        tfc.chisel(result, input, 'tfc:stair');
    }
    chiselStair('minecraft:brick_stairs', 'minecraft:bricks');

    function chiselPolished(result, input) {
        tfc.chisel(result, input, 'tfc:smooth');
    }

    global.TFC_WOOD_TYPES.forEach(wood => {
        stairCrafting(`4x tfc:wood/planks/${wood}_stairs`, `tfc:wood/planks/${wood}`);
        slabCrafting(`2x tfc:wood/planks/${wood}_slab`, `tfc:wood/planks/${wood}`);
        
        event.shaped(`tfc:wood/clutch/${wood}`, ['RLH', 'LAL', 'RLS'], {L: `tfc:wood/lumber/${wood}`, R: 'minecraft:redstone', A: `tfc:wood/axle/${wood}`, H: '#c:tools/hammer', S: '#tfc:sticky_stuff'}).damageIngredient('#c:tools/hammer');
        event.shaped(`2x tfc:wood/gear_box/${wood}`, ['SL ', 'LML', ' LS'], {L: `tfc:wood/lumber/${wood}`, M: '#tfc:mechanism', S: '#tfc:sticky_stuff'});
        event.shapeless(`2x tfc:wood/axle/${wood}`, [`tfc:wood/stripped_log/${wood}`, '#c:tools/saw', '#tfc:sticky_stuff']).damageIngredient('#c:tools/saw');
        event.shaped(`tfc:wood/encased_axle/${wood}`, [' LS', 'LML', ' LS'], {L: `tfc:wood/lumber/${wood}`, M: `tfc:wood/axle/${wood}`, S: '#tfc:stick_stuff'});

        event.shaped(`tfc:wood/shelf/${wood}`, ['LLL', 'S S'], {L: `tfc:wood/lumber/${wood}`, S: '#c:rods/wooden'});
        event.shapeless(`tfc:wood/button/${wood}`, [`tfc:wood/lumber/${wood}`, '#c:tools/saw']).damageIngredient('#c:tools/saw'); 
        event.shaped(`tfc:wood/scribing_table/${wood}`, ['I F', 'SSS', 'W W'], {I: '#c:inks', F: 'minecraft:feather', S: `tfc:wood/planks/${wood}_slab`, W: `tfc:wood/planks/${wood}`});
    })

    global.AFC_WOOD_TYPES.forEach(wood => {
        stairCrafting(`4x afc:wood/planks/${wood}_stairs`, `afc:wood/planks/${wood}`);
        slabCrafting(`2x afc:wood/planks/${wood}_slab`, `afc:wood/planks/${wood}`);
        
        event.shaped(`afc:wood/clutch/${wood}`, ['RLH', 'LAL', 'RLS'], {L: `afc:wood/lumber/${wood}`, R: 'minecraft:redstone', A: `afc:wood/axle/${wood}`, H: '#c:tools/hammer', S: '#tfc:sticky_stuff'}).damageIngredient('#c:tools/hammer');
        event.shaped(`2x afc:wood/gear_box/${wood}`, ['SL ', 'LML', ' LS'], {L: `afc:wood/lumber/${wood}`, M: '#tfc:mechanism', S: '#tfc:sticky_stuff'});
        event.shapeless(`2x afc:wood/axle/${wood}`, [`afc:wood/stripped_log/${wood}`, '#c:tools/saw', '#tfc:sticky_stuff']).damageIngredient('#c:tools/saw');
        event.shaped(`afc:wood/encased_axle/${wood}`, [' LS', 'LML', ' LS'], {L: `afc:wood/lumber/${wood}`, M: `afc:wood/axle/${wood}`, S: '#tfc:stick_stuff'});

        event.shaped(`afc:wood/shelf/${wood}`, ['LLL', 'S S'], {L: `afc:wood/lumber/${wood}`, S: '#c:rods/wooden'});
        event.shapeless(`afc:wood/button/${wood}`, [`afc:wood/lumber/${wood}`, '#c:tools/saw']).damageIngredient('#c:tools/saw');
        event.shaped(`afc:wood/scribing_table/${wood}`, ['I F', 'SSS', 'W W'], {I: '#c:inks', F: 'minecraft:feather', S: `afc:wood/planks/${wood}_slab`, W: `afc:wood/planks/${wood}`});
    })

    global.TFC_ROCK_TYPES.forEach(rock => {
        brickRecipe(`2x tfc:rock/bricks/${rock}`, `tfc:brick/${rock}`, 'tfc:mortar');
        brickRecipe(`2x tfc:rock/cobble/${rock}`, `tfc:rock/loose/${rock}`, 'minecraft:clay_ball');
        brickRecipe(`2x tfc:rock/mossy_cobble/${rock}`, `tfc:rock/mossy_loose/${rock}`, 'minecraft:clay_ball');
        brickRecipe(`4x tfc:rock/hardened/${rock}`, `tfc:rock/raw/${rock}`, 'tfc:mortar');

        stairCrafting(`3x tfc:rock/raw/${rock}_stairs`, `tfc:rock/raw/${rock}`);
        stairCrafting(`3x tfc:rock/bricks/${rock}_stairs`, `tfc:rock/bricks/${rock}`);
        stairCrafting(`3x tfc:rock/cobble/${rock}_stairs`, `tfc:rock/cobble/${rock}`);
        stairCrafting(`3x tfc:rock/smooth/${rock}_stairs`, `tfc:rock/smooth/${rock}`);
        stairCrafting(`3x tfc:rock/mossy_cobble/${rock}_stairs`, `tfc:rock/mossy_cobble/${rock}`);
        stairCrafting(`3x tfc:rock/mossy_bricks/${rock}_stairs`, `tfc:rock/mossy_bricks/${rock}`);
        stairCrafting(`3x tfc:rock/cracked_bricks/${rock}_stairs`, `tfc:rock/cracked_bricks/${rock}`);

        slabCrafting(`2x tfc:rock/raw/${rock}_slab`, `tfc:rock/raw/${rock}`);
        slabCrafting(`2x tfc:rock/bricks/${rock}_slab`, `tfc:rock/bricks/${rock}`);
        slabCrafting(`2x tfc:rock/cobble/${rock}_slab`, `tfc:rock/cobble/${rock}`);
        slabCrafting(`2x tfc:rock/smooth/${rock}_slab`, `tfc:rock/smooth/${rock}`);
        slabCrafting(`2x tfc:rock/mossy_cobble/${rock}_slab`, `tfc:rock/mossy_cobble/${rock}`);
        slabCrafting(`2x tfc:rock/mossy_bricks/${rock}_slab`, `tfc:rock/mossy_bricks/${rock}`);
        slabCrafting(`2x tfc:rock/cracked_bricks/${rock}_slab`, `tfc:rock/cracked_bricks/${rock}`);

        wallCrafting(`3x tfc:rock/raw/${rock}_wall`, `tfc:rock/raw/${rock}`);
        wallCrafting(`3x tfc:rock/bricks/${rock}_wall`, `tfc:rock/bricks/${rock}`);
        wallCrafting(`3x tfc:rock/cobble/${rock}_wall`, `tfc:rock/cobble/${rock}`);
        wallCrafting(`3x tfc:rock/smooth/${rock}_wall`, `tfc:rock/smooth/${rock}`);
        wallCrafting(`3x tfc:rock/mossy_cobble/${rock}_wall`, `tfc:rock/mossy_cobble/${rock}`);
        wallCrafting(`3x tfc:rock/mossy_bricks/${rock}_wall`, `tfc:rock/mossy_bricks/${rock}`);
        wallCrafting(`3x tfc:rock/cracked_bricks/${rock}_wall`, `tfc:rock/cracked_bricks/${rock}`);

        event.shaped(`tfc:rock/aqueduct/${rock}`, ['XMX', ' X '], {X: `tfc:brick/${rock}`, M: 'tfc:mortar'});
    })

    global.TFC_DIRT_TYPES.forEach(dirt => {
        event.shaped(`3x tfc:mud_bricks/${dirt}_stairs`, ['X ', 'XX'], {X: `tfc:mud_bricks/${dirt}`});
        event.shaped(`4x tfc:mud_bricks/${dirt}_slab`, ['XX'], {X: `tfc:mud_bricks/${dirt}`});
    })

    global.TFC_SAND_COLORS.forEach(color => {
        stairCrafting(`4x tfc:raw_sandstone/${color}_stairs`, `tfc:raw_sandstone/${color}`);
        stairCrafting(`4x tfc:smooth_sandstone/${color}_stairs`, `tfc:smooth_sandstone/${color}`);
        stairCrafting(`4x tfc:cut_sandstone/${color}_stairs`, `tfc:cut_sandstone/${color}`);

        slabCrafting(`2x tfc:raw_sandstone/${color}_slab`, `tfc:raw_sandstone/${color}`);
        slabCrafting(`2x tfc:smooth_sandstone/${color}_slab`, `tfc:smooth_sandstone/${color}`);
        slabCrafting(`2x tfc:cut_sandstone/${color}_slab`, `tfc:cut_sandstone/${color}`);

        wallCrafting(`4x tfc:raw_sandstone/${color}_wall`, `tfc:raw_sandstone/${color}`);
        wallCrafting(`4x tfc:smooth_sandstone/${color}_wall`, `tfc:smooth_sandstone/${color}`);
        wallCrafting(`4x tfc:cut_sandstone/${color}_wall`, `tfc:cut_sandstone/${color}`);
    })

    function barrelDye(result, input, color) {
        tfc.barrel_sealed(Fluid.of(`tfc:${color}_dye`, 25), 1000)
            .inputItem(input)
            .outputItem(result);
    }

    function barrelBleach(result, input) {
        tfc.barrel_sealed(Fluid.of('tfc:lye', 25), 1000)
        .inputItem(input)
        .outputItem(result);
    }

    global.COLORS.forEach(color => {
        event.shapeless(`tfc:ceramic/unfired_large_vessel/${color}`, [`minecraft:${color}_dye`, `tfc:ceramic/unfired_large_vessel`]);
        event.shapeless(`tfc:ceramic/${color}_unfired_vessel`, [`minecraft:${color}_dye`, `tfc:ceramic/unfired_vessel`]);
        
        stairCrafting(`4x tfc:alabaster/bricks/${color}_stairs`, `tfc:alabaster/bricks/${color}`);
        stairCrafting(`4x tfc:alabaster/polished/${color}_stairs`, `tfc:alabaster/polished/${color}`);

        slabCrafting(`2x tfc:alabaster/bricks/${color}_slab`, `tfc:alabaster/bricks/${color}`);
        slabCrafting(`2x tfc:alabaster/polished/${color}_slab`, `tfc:alabaster/polished/${color}`);

        wallCrafting(`4x tfc:alabaster/bricks/${color}_wall`, `tfc:alabaster/bricks/${color}`);
        wallCrafting(`4x tfc:alabaster/polished/${color}_wall`, `tfc:alabaster/polished/${color}`);

        if(color != 'white') {
            barrelDye(`chalk:${color}_chalk`, 'chalk:white_chalk', color);
        }

        tfc.barrel_sealed(Fluid.of(`tfc:${color}_dye`, 25), 1000)
            .inputItem('tfc:hardened_clay')
            .outputItem(`minecraft:${color}_terracotta`)
            .id(`tfc:barrel/${color}_terracotta`)

        tfc.barrel_instant(Fluid.of('minecraft:water', 20))
            .inputItem(`minecraft:${color}_concrete_powder`)
            .outputItem(`minecraft:${color}_concrete`);

        for (let i = 1; i <= 5; i++) {
            tfc.pot(parseIngredients(['#c:strings', `minecraft:${color}_dye`]), Fluid.of('tfc:tallow', 40 * i), 480 * i, 600)
                .itemOutput(parseIngredients(`${i}x tfc:candle/${color}`));
        }
    })

    tfc.loom('minecraft:white_wool', '2x tfc:wool_cloth', 4, 'minecraft:block/white_wool');

    leatherMaking.forEach(([size, amount, output]) => {
        tfc.barrel_sealed(Fluid.of('tfc:limewater', amount), 16000 * output)
            .inputItem(`tfc:${size}_raw_hide`)
            .outputItem(`tfc:${size}_soaked_hide`)
            .id(`tfc:barrel/${size}_soaked_hide`);

        tfc.barrel_sealed(Fluid.of('minecraft:water', amount), 10000 * output)
            .inputItem(`tfc:${size}_scraped_hide`)
            .outputItem(`tfc:${size}_prepared_hide`)
            .id(`tfc:barrel/${size}_prepared_hide`);

        tfc.barrel_sealed(Fluid.of('tfc:tannin', amount), 20000 * output)
            .inputItem(`tfc:${size}_prepared_hide`)
            .outputItem(`${output}x minecraft:leather`)
            .id(`tfc:barrel/${size}_leather`);
    })

    barrelBleach('chalk:white_chalk', '#chalk:colored_chalks');
    barrelBleach('tfc:hardened_clay', '#minecraft:terracotta');
    
    for (let i = 1; i <= 5; i++) {
        tfc.pot(parseFoodIngredients(`${i}x #tfc:produces_tallow`), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:tallow', 200 * i));

        tfc.pot(parseFoodIngredients(`${i}x tfc:olive_paste`), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:olive_oil_water', 200 * i));

        tfc.pot(parseIngredients('#c:strings'), Fluid.of('tfc:tallow', 40 * i), 480 * i, 600)
            .itemOutput(parseIngredients(`${i}x tfc:candle`));

        if (i != 5 && i != 1) {
            tfc.pot(parseFoodIngredients([`${i}x tfc:food/beet`, 'tfc:powder/salt']), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
                .itemOutput(parseIngredients(`${i}x minecraft:sugar`));
        }
    }

    global.TIERED_TFC_METALS.forEach(([metal, i, temp]) => {
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#c:rods/${metal}`, ['bend_any', 'hit_any', 'draw_not_last']);
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#c:ingots/${metal}`, ['hit_any', 'draw_not_last']);
        tfc.anvil(`precisionprospecting:metal/prospector_drill_head/${metal}`, `#c:double_sheets/${metal}`, ['punch_last', 'hit_any', 'hit_any']);

        event.shaped(`tfc:metal/anvil/${metal}`, ['DDD', ' I ', 'III'], {D: `#c:double_ingots/${metal}`, I: `#c:ingots/${metal}`});
        event.shaped(`tfc:metal/horse_armor/${metal}`, ['HSR', 'SAS'], {S: `#c:sheets/${metal}`, R: `#c:rods/${metal}`, A: 'minecraft:leather_horse_armor', H: '#c:tools/hammer'}).damageIngredient('#c:tools/hammer');

        tfc.heating(`tfc:metal/fish_hook/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 50));
        tfc.heating(`tfc:metal/chain/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 10));
        tfc.heating(`tfc:metal/anvil/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 1000));

        // TODO: (Combat Update) Tool/Weapon Recipes
        let handle = tieredMetalHandles[metal];
        metalToolHeads.forEach(tool => {
            tfc.advanced_shapeless_crafting(TFC.isp.of(`tfc:metal/${tool}/${metal}`).copyForgingBonus(), [`tfc:metal/${tool}_head/${metal}`, handle], `tfc:metal/${tool}_head/${metal}`);
        })

        metalWeaponBlades.forEach(weapon => {
            tfc.advanced_shapeless_crafting(TFC.isp.of(`tfc:metal/${weapon}/${metal}`).copyForgingBonus(), [`tfc:metal/${weapon}_blade/${metal}`, handle], `tfc:metal/${weapon}_blade/${metal}`);
        })

        prospectingMetalHeads.forEach(tool => {
            tfc.advanced_shapeless_crafting(TFC.isp.of(`precisionprospecting:metal/${tool}/${metal}`).copyForgingBonus(), [`precisionprospecting:metal/${tool}_head/${metal}`, handle], `precisionprospecting:metal/${tool}_head/${metal}`);
        })

        hammerTimeHeads.forEach(tool => {
            tfc.advanced_shapeless_crafting(TFC.isp.of(`tfc_hammer_time:metal/${tool}/${metal}`).copyForgingBonus(), [`tfc_hammer_time:metal/${tool}_head/${metal}`, handle], `tfc_hammer_time:metal/${tool}_head/${metal}`);
        })

        // TODO: (Combat Update) Shield Recipes
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/shield/${metal}`).copyForgingBonus(), ['SL', 'UL',], {S: `#c:sheets/${metal}`, U: `#c:double_sheets/${metal}`, L: '#c:leathers'});

        // TODO: (Combat Update) Armor Recipe
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/helmet/${metal}`).copyForgingBonus(), [' U ', 'SLS'], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_helmet', U: `tfc:metal/unfinished_helmet/${metal}`}).inputColumn(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/chestplate/${metal}`).copyForgingBonus(), [' U ', 'SLS', ' S '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_chestplate', U: `tfc:metal/unfinished_chestplate/${metal}`}).inputColumn(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/greaves/${metal}`).copyForgingBonus(), ['SLS', ' U '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_leggings', U: `tfc:metal/unfinished_greaves/${metal}`}).inputColumn(1).inputRow(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/boots/${metal}`).copyForgingBonus(), [' U ', ' L ', ' S '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_boots', U: `tfc:metal/unfinished_boots/${metal}`}).inputColumn(1);
    })

    // TODO: (Combat Update) Stone Tool Recipes
    basicToolTypes.forEach(tool => {
        global.TFC_ROCK_CATEGORIES.forEach(category => {
            event.shapeless(`tfc:stone/${tool}/${category}`, [`tfc:stone/${tool}_head/${category}`, '#tfc:stone_tool_handles']);
        })
        event.shapeless(`tfc:obsidian_${tool}`, [`tfc:obsidian_${tool}_head`, '#tfc:stone_tool_handles']);
    })

    tfc.anvil('20x minecraft:redstone', '#c:ingots/copper', ['hit_any', 'hit_any', 'hit_any']);
    tfc.anvil('afc:tree_tap', '#c:sheets/copper', ['hit_last', 'upset_second_last', 'upset_third_last']);
    tfc.anvil('minecraft:bell', '#c:sheets/gold', ['bend_last', 'bend_second_last', 'hit_third_last']);
    tfc.anvil('tfc:bronze_bell', '#c:sheets/bronze', ['bend_last', 'bend_second_last', 'hit_third_last']);
    tfc.anvil('tfc:brass_bell', '#c:sheets/brass', ['bend_last', 'bend_second_last', 'hit_third_last']);

    tfc.heating('tfc:dead_torch', 60).resultItem('tfc:torch');
    tfc.heating('minecraft:clay', 1399).resultItem('tfc:hardened_clay');

    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX'])
        .defaultOn(false)
        .ingredient('#tfc:rock/loose_chalk');
})