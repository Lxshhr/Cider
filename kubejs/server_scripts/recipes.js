ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc;

    event.shapeless('minecraft:crafting_table', ['#tfc:workbenches', '#c:tools/saw']).damageIngredient('#c:tools/saw');
    event.shapeless('2x tfc:fire_clay', ['minecraft:clay_ball', '4x tfc:powder/kaolinite', '4x tfc:powder/graphite']);
    event.shapeless('tfc:dead_torch', ['tfc:straw', 'minecraft:stick']);
    event.shapeless('2x minecraft:stick', ['#tfc:twigs']);
    event.shapeless('minecraft:target', ['tfc:thatch', '#c:cloths', 'minecraft:redstone']);
    event.shapeless('minecraft:book', ['#c:leathers', '3x minecraft:paper', '#c:strings', '#c:tools/needles']).damageIngredient('#c:tools/needles');
    event.shapeless('minecraft:writable_book', ['minecraft:book', '#c:inks', 'minecraft:feather']);
    event.shapeless('minecraft:lever', ['#tfc:chiseled_bricks', 'minecraft:stick']);
    event.shapeless('9x tfc:straw', ['tfc:thatch']);
    event.shapeless('2x tfc:soot', ['tfc:powder/charcoal', 'tfc:powder/wood_ash', '#tfc:sticky_stuff']);
    event.shapeless('minecraft:bamboo_block', ['tfc:golden_bamboo_block', '#minecraft:axes']).damageIngredient('#minecraft:axes');
    event.shapeless('tfc:spindle', ['tfc:ceramic/spindle_head', 'minecraft:stick']);
    event.shapeless('tfc:sandpaper', ['minecraft:paper', 'tfc:powder/flux', '#tfc:sticky_stuff', '#minecraft:sand', '#tfc:gem_powders']);
    event.shapeless('2x minecraft:fire_charge', ['tfc:powder/sulfur', 'tfc:powder/graphite', 'tfc:powder/charcoal']);

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
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/wrought_iron', V: '#c:double_sheets/wrought_iron', C: 'tfc:crucible'});
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/steel', V: '#c:double_sheets/steel', C: 'tfc:crucible'});
    event.shaped('16x minecraft:ladder', ['X X', 'XXX', 'X X'], {X: '#tfc:lumber'});
    event.shaped('8x tfc:wattle', ['XV', 'X '], {X: '#minecraft:logs', V: '#minecraft:axes'});
    event.shaped(`tfc:firebox`, ['XVX', 'V V', 'XVX'], {X: '#c:sheets/cast_iron', V: '#tfc:double_sheets/any_bronze'});
    event.shaped('2x tfc:fire_brick_shelf', ['SSS', 'LCL'], {L: 'tfc:fire_bricks', S: '#c:rods/cast_iron', C: 'tfc:fire_clay'});
    event.shaped('tfc:rustic_windmill_blade', ['B B', 'BWB'], {B: 'tfc:burlap_cloth', W: 'tfc:windmill_blade/white'});
    event.shaped('chalk:chalk_box', ['XVX', ' X '], {X: 'minecraft:paper', V: '#tfc:sticky_stuff'});
    event.shaped('minecraft:cartography_table', ['P I', 'SSS', 'W W'], {P: 'minecraft:paper', I: '#c:inks', S: '#minecraft:wooden_slabs', W: '#minecraft:planks'});
    event.shaped('minecraft:fletching_table', ['FF ', 'SSS', 'W W'], {F: 'minecraft:flint', S: '#minecraft:wooden_slabs', W: '#minecraft:planks'});
    event.shaped('minecraft:loom', ['SSS', 'WPW', 'LLL'], {S: '#minecraft:wooden_slabs', W: '#c:strings', L: '#tfc:lumber', P: '#tfc:looms'});
    event.shaped('tfc:steel_rope_anchor', ['SH', 'SG'], {S: '#c:rods/steel', H: '#c:tools/hammer', G: '#c:rods/brass'}).damageIngredient('#c:tools/hammer');
    event.shaped('16x minecraft:powered_rail', ['X X', 'XSX', 'XRX'], {X: '#c:rods/brass', S: 'minecraft:stick', R: 'minecraft:redstone'});
    event.shaped('minecraft:piston', ['XXX', 'SRS', 'SMS'], {X: '#tfc:lumber', S: '#c:bricks', R: 'minecraft:redstone', M: '#tfc:mechanism'});


    // TODO: Missing Recipes
    /**
     * minecraft:stripped_bamboo_block
     * minecraft:tinted_glass - use any gem powders
     * minecraft:sculk_sensor
     * minecraft:calibrated_sculk_sensor
     * minecraft:jukebox
     * minecraft:repeater
     * minecraft:comparator
     * minecraft:heavy_weighted_pressure_plate
     * minecraft:light_weighted_pressure_plate
     * minecraft:daylight_detector
     * minecraft:daylight_detector
     * minecraft:sticky_piston
     * minecraft:dispenser
     * minecraft:dropper
     * minecraft:crafter
     * minecraft:observer
     * minecraft:observer
     * minecraft:furnace_minecart
     * minecraft:compass
     * minecraft:clock
     * minecraft:spyglass
     * minecraft:saddle
     * minecraft:shield
     * minecraft:leather_helmet
     * minecraft:leather_chestplate
     * minecraft:leather_leggings
     * minecraft:leather_boots
     * minecraft:leather_horse_armor
     * minecraft:bow
     * minecraft:crossbow
     * minecraft:flint
     * minecraft:bowl
     * minecraft:flower_banner_pattern
     * minecraft:creeper_banner_pattern
     * minecraft:skull_banner_pattern
     * minecraft:mojang_banner_pattern
     * minecraft:globe_banner_pattern
     * minecraft:piglin_banner_pattern
     * minecraft:flow_banner_pattern
     * minecraft:guster_banner_pattern
     * 
     * afc:maple_sugar
     * afc:birch_sugar
     * 
     * tfc:basket
     * tfc:firestarter
     * 
     */

    function twoByTwo(result, input) {
        event.shaped(result, ['XX', 'XX'], {X: input});
    }

    function threeByThree(result, input) {
        event.shaped(result, ['XXX', 'XXX', 'XXX'], {X: input});
    }
    threeByThree('tfc:thatch', 'tfc:straw');
    threeByThree('minecraft:slime_block', 'tfc:glue');

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
        stairCrafting(`4x tfc:alabaster/bricks/${color}_stairs`, `tfc:alabaster/bricks/${color}`);
        stairCrafting(`4x tfc:alabaster/polished/${color}_stairs`, `tfc:alabaster/polished/${color}`);

        slabCrafting(`2x tfc:alabaster/bricks/${color}_slab`, `tfc:alabaster/bricks/${color}`);
        slabCrafting(`2x tfc:alabaster/polished/${color}_slab`, `tfc:alabaster/polished/${color}`);

        wallCrafting(`4x tfc:alabaster/bricks/${color}_wall`, `tfc:alabaster/bricks/${color}`);
        wallCrafting(`4x tfc:alabaster/polished/${color}_wall`, `tfc:alabaster/polished/${color}`);

        if(color != 'white') {
            barrelDye(`chalk:${color}_chalk`, 'chalk:white_chalk', color);
        }

        barrelDye(`minecraft:${color}_terracotta`, 'tfc:hardened_clay', color);

        for (let i = 1; i <= 5; i++) {
            tfc.pot(parseIngredients('#c:strings', `minecraft:${color}_dye`), Fluid.of('tfc:tallow', 40 * i), 480 * i, 600)
                .itemOutput(parseIngredients(`${i}x tfc:candle/${color}`));
        }
    })

    tfc.loom('minecraft:white_wool', '2x tfc:wool_cloth', 4, 'minecraft:block/white_wool');

    leatherMaking.forEach(([size, amount, output]) => {
        tfc.barrel_sealed(Fluid.of('tfc:limewater', amount), 16000 * output)
            .inputItem(`tfc:${size}_raw_hide`)
            .outputItem(`tfc:${size}_soaked_hide`);

        tfc.barrel_sealed(Fluid.of('minecraft:water', amount), 10000 * output)
            .inputItem(`tfc:${size}_scraped_hide`)
            .outputItem(`tfc:${size}_prepared_hide`);

        tfc.barrel_sealed(Fluid.of('tfc:tannin', amount), 20000 * output)
            .inputItem(`tfc:${size}_prepared_hide`)
            .outputItem(`${output}x minecraft:leather`);
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
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#c:rods/${metal}`, ['draw_not_last', 'bend_any', 'hit_any']);
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#c:ingots/${metal}`, ['draw_not_last', 'hit_any']);

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

        // TODO: (Combat Update) Shield Recipes
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/shield/${metal}`).copyForgingBonus(), ['SL', 'UL',], {S: `#c:sheets/${metal}`, U: `#c:double_sheets/${metal}`, L: '#c:leathers'});

        // TODO: (Combat Update) Armor Recipe
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/helmet/${metal}`).copyForgingBonus(), [' U ', 'SLS'], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_helmet', U: `tfc:metal/unfinished_helmet/${metal}`}).inputColumn(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/chestplate/${metal}`).copyForgingBonus(), [' U ', 'SLS', ' S '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_chestplate', U: `tfc:metal/unfinished_chestplate/${metal}`}).inputColumn(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/greaves/${metal}`).copyForgingBonus(), ['SLS', ' U '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_leggings', U: `tfc:metal/unfinished_greaves/${metal}`}).inputColumn(1).inputRow(1);
        tfc.advanced_shaped_crafting(TFC.isp.of(`tfc:metal/boots/${metal}`).copyForgingBonus(), [' U ', ' L ', ' S '], {S: `#c:sheets/${metal}`, L: 'minecraft:leather_boots', U: `tfc:metal/unfinished_boots/${metal}`}).inputColumn(1);
    })

    // TODO: (Combat Update) Stone Tool Recipes
    global.TFC_ROCK_CATEGORIES.forEach(category => {
        event.shapeless(`tfc:stone/axe/${category}`, [`tfc:stone/axe_head/${category}`, 'minecraft:stick']);
        event.shapeless(`tfc:stone/shovel/${category}`, [`tfc:stone/shovel_head/${category}`, 'minecraft:stick']);
        event.shapeless(`tfc:stone/hammer/${category}`, [`tfc:stone/hammer_head/${category}`, 'minecraft:stick']);
        event.shapeless(`tfc:stone/javelin/${category}`, [`tfc:stone/javelin_head/${category}`, 'minecraft:stick']);
        event.shapeless(`tfc:stone/hoe/${category}`, [`tfc:stone/hoe_head/${category}`, 'minecraft:stick']);
        event.shapeless(`tfc:stone/knife/${category}`, [`tfc:stone/knife_head/${category}`, 'minecraft:stick']);
    })

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