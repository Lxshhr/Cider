ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc;

    event.shapeless('minecraft:crafting_table', ['#tfc:workbenches', '#c:tools/saw']).damageIngredient('#c:tools/saw');
    event.shapeless('2x tfc:fire_clay', ['minecraft:clay_ball', '4x tfc:powder/kaolinite', '4x tfc:powder/graphite']);
    event.shapeless('tfc:dead_torch', ['tfc:straw', 'minecraft:stick']);
    event.shapeless('2x minecraft:stick', ['#tfc:twigs']);
    event.shapeless('minecraft:target', ['tfc:thatch', '#tfc:any_cloth', 'minecraft:redstone']);
    event.shapeless('minecraft:book', ['#c:leathers', '3x minecraft:paper', '#c:strings', '#c:tools/needles']).damageIngredient('#c:tools/needles')
    event.shapeless('minecraft:writable_book', ['minecraft:book', '#c:inks', 'minecraft:feather'])
    event.shapeless('minecraft:lever', ['#tfc:chiseled_bricks', 'minecraft:stick'])
    event.shapeless('9x tfc:straw', ['tfc:thatch'])
    event.shapeless('2x tfc:soot', ['tfc:powder/charcoal', 'tfc:powder/wood_ash', '#tfc:sticky_stuff'])

    event.shaped('2x minecraft:scaffolding', ['SCS', 'S S', 'S S'], {S: 'minecraft:stick', C: '#c:strings'})
    event.shaped('minecraft:white_bed', ['CCC', 'LLL', 'L L'], {C: '#tfc:high_quality_cloth', L: '#tfc:lumber'})
    event.shaped('4x minecraft:item_frame', [' S ', 'SLS', ' S '], {S: '#tfc:lumber', L: 'minecraft:leather'})
    event.shaped('minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: 'minecraft:paper'})
    event.shaped('2x minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: '#tfc:high_quality_cloth'})
    event.shaped('minecraft:name_tag', [' S', 'P '], {S: '#c:strings', P: 'minecraft:paper'})
    event.shaped('2x minecraft:tripwire_hook', ['C', 'R', 'L'], {C: '#c:ingots/copper', R: '#tfc:lumber', L: 'minecraft:redstone'})
    event.shaped('tfc:bloomery', ['XCX', 'X X', 'XCX'], {X: '#c:double_sheets/all_bronze', C: '#c:sheets/all_bronze'})
    event.shaped('tfc:stove', ['BCB', 'C C', ' C '], {C: 'tfc:metal/sheet/cast_iron', B: 'tfc:metal/rod/brass'})
    event.shaped('tfc:steel_pump', ['PWM', ' P '], {P: 'tfc:steel_pipe', W: 'tfc:metal/rod/brass', M: '#tfc:mechanism'})
    event.shaped('tfc:crankshaft', ['AMB', ' SR'], {A: '#tfc:axles', M: '#tfc:mechainsms', B: 'tfc:metal/rod/brass', S: '#c:sheets/brass', R: 'tfc:metal/rod/steel'})
    event.shaped('minecraft:minecart', ['C C', 'BCB'], {C: '#c:sheets/wrought_iron', B: '#c:rods/brass'})
    event.shaped('minecraft:minecart', ['C C', 'BCB'], {C: '#c:sheets/steel', B: '#c:rods/brass'})
    event.shaped('minecraft:brush', ['F', 'R', 'S'], {F: 'minecraft:feather', R: 'tfc:metal/rod/copper', S: '#c:rods/wooden'})
    event.shaped('minecraft:hopper', ['SCS', ' S '], {S: 'tfc:metal/sheet/brass', C: '#c:chests'})
    event.shaped('minecraft:recovery_compass', ['RBR', 'BCB', 'RBR'], {R: 'minecraft:redstone', B: 'tfc:metal/rod/brass', C: '#c:compasses'})
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/wrought_iron', V: '#c:double_sheets/wrought_iron', C: 'tfc:crucible'})
    event.shaped('tfc:blast_furnace', ['XVX', 'VCV', 'XVX'], {X: '#c:sheets/steel', V: '#c:double_sheets/steel', C: 'tfc:crucible'})
    event.shaped('16x minecraft:ladder', ['X X', 'XXX', 'X X'], {X: '#tfc:lumber'})
    event.shaped('8x tfc:wattle', ['XV', 'X '], {X: '#minecraft:logs', V: '#minecraft:axes'})
    event.shaped(`tfc:firebox`, ['XVX', 'V V', 'XVX'], {X: '#c:sheets/cast_iron', V: '#tfc:double_sheets/any_bronze'});
    event.shaped('2x tfc:fire_brick_shelf', ['SSS', 'LCL'], {L: 'tfc:fire_bricks', S: '#c:rods/cast_iron', C: 'tfc:fire_clay'})
    event.shaped('tfc:rustic_windmill_blade', ['B B', 'BWB'], {B: 'tfc:burlap_cloth', W: 'tfc:windmill_blade/white'})

    tfc.advanced_shaped_crafting('tfc:steel_rope_anchor', ['SH', 'SG'], {S: '#c:rods/steel', H: '#c:tools/hammer', G: '#c:rods/brass'}).remainder(TFC.isp.copyInputStack().damageInput()).inputColumn(1)

    // Power Loom
    // Spindle
    // Trip hammer

    function twoByTwo(result, input) {
        event.shaped(result, ['XX', 'XX'], {X: input});
    }

    function threeByThree(result, input) {
        event.shaped(result, ['XXX', 'XXX', 'XXX'], {X: input});
    }
    threeByThree('tfc:thatch', 'tfc:straw')
    threeByThree('minecraft:slime_block', 'tfc:glue')

    function brickRecipe(result, input, cat) {
        event.shaped(result, ['XXX', 'XCX', 'XXX'], {X: input, C: cat});
    }
    brickRecipe('2x minecraft:bricks', 'minecraft:brick', 'tfc:mortar')
    brickRecipe('minecraft:lodestone', '#minecraft:chiseled_bricks', '#tfc:magnetite_pieces')
    brickRecipe('2x tfc:alabaster/bricks', 'tfc:alabaster_brick', 'tfc:mortar')
    brickRecipe('2x tfc:fire_bricks', 'tfc:ceramic/fire_brick', 'tfc:mortar')

    function stairCrafting(result, input) {
        event.shaped(result, ['XV', 'XX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }
    stairCrafting('3x minecraft:brick_stairs', 'minecraft:bricks')

    function slabCrafting(result, input) {
        event.shaped(result, ['XXV'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 2);
    }
    slabCrafting('4x minecraft:brick_slab',  'minecraft:bricks')

    function wallCrafting(result, input) {
        event.shaped(result, ['V  ', 'XXX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }
    wallCrafting('3x minecraft:brick_wall', 'minecraft:bricks')

    function chiselSlab(result, input) {
        tfc.chisel(result, input, 'tfc:slab').extraDrop(result);
    }
    chiselSlab('minecraft:brick_slab', 'minecraft:bricks')

    function chiselStair(result, input) {
        tfc.chisel(result, input, 'tfc:stair');
    }
    chiselStair('minecraft:brick_stairs', 'minecraft:bricks')

    function chiselPolished(result, input) {
        tfc.chisel(result, input, 'tfc:smooth');
    }

    global.TFC_WOOD_TYPES.forEach(wood => {
        event.shaped(`2x tfc:wood/pressure_plate/${wood}`, ['XXS'], {X: `tfc:wood/lumber/${wood}`, S: '#c:tools/saw'}).damageIngredient('#c:tools/saw')
        stairCrafting(`4x tfc:wood/planks/${wood}_stairs`, `tfc:wood/planks/${wood}`)
        slabCrafting(`4x tfc:wood/planks/${wood}_slab`, `tfc:wood/planks/${wood}`)
        
        event.shaped(`tfc:wood/clutch/${wood}`, ['RLH', 'LAL', 'RLS'], {L: `tfc:wood/lumber/${wood}`, R: 'minecraft:redstone', A: `tfc:wood/axle/${wood}`, H: '#c:tools/hammer', S: '#tfc:sticky_stuff'}).damageIngredient('#c:tools/hammer')
        event.shaped(`2x tfc:wood/gear_box/${wood}`, ['SL ', 'LML', ' LS'], {L: `tfc:wood/lumber/${wood}`, M: '#tfc:mechanism', S: '#tfc:sticky_stuff'})
        event.shapeless(`2x tfc:wood/axle/${wood}`, [`tfc:wood/stripped_log/${wood}`, '#c:tools/saw', '#tfc:sticky_stuff']).damageIngredient('#c:tools/saw')
        event.shaped(`tfc:wood/encased_axle/${wood}`, [' LS', 'LML', ' LS'], {L: `tfc:wood/lumber/${wood}`, M: `tfc:wood/axle/${wood}`, S: '#tfc:stick_stuff'})

        event.shaped(`tfc:wood/shelf/${wood}`, ['LLL', 'S S'], {L: `tfc:wood/lumber/${wood}`, S: '#c:rods/wooden'})
        event.shapeless(`tfc:wood/button/${wood}`, [`tfc:wood/lumber/${wood}`, '#c:tools/saw']).damageIngredient('#c:tools/saw') 
        // Scribling Table, Bladed Axle
    })

    global.TFC_ROCK_TYPES.forEach(rock => {
        brickRecipe(`2x tfc:rock/bricks/${rock}`, `tfc:brick/${rock}`, 'tfc:mortar')
        brickRecipe(`2x tfc:rock/cobble/${rock}`, `tfc:rock/loose/${rock}`, 'minecraft:clay_ball')
        brickRecipe(`2x tfc:rock/mossy_cobble/${rock}`, `tfc:rock/mossy_loose/${rock}`, 'minecraft:clay_ball')
        brickRecipe(`4x tfc:rock/hardened/${rock}`, `tfc:rock/raw/${rock}`, 'tfc:mortar')

        stairCrafting(`3x tfc:rock/raw/${rock}_stairs`, `tfc:rock/raw/${rock}`)
        stairCrafting(`3x tfc:rock/bricks/${rock}_stairs`, `tfc:rock/bricks/${rock}`)
        stairCrafting(`3x tfc:rock/cobble/${rock}_stairs`, `tfc:rock/cobble/${rock}`)
        stairCrafting(`3x tfc:rock/smooth/${rock}_stairs`, `tfc:rock/smooth/${rock}`)
        stairCrafting(`3x tfc:rock/mossy_cobble/${rock}_stairs`, `tfc:rock/mossy_cobble/${rock}`)
        stairCrafting(`3x tfc:rock/mossy_bricks/${rock}_stairs`, `tfc:rock/mossy_bricks/${rock}`)
        stairCrafting(`3x tfc:rock/cracked_bricks/${rock}_stairs`, `tfc:rock/cracked_bricks/${rock}`)

        slabCrafting(`4x tfc:rock/raw/${rock}_slab`, `tfc:rock/raw/${rock}`)
        slabCrafting(`4x tfc:rock/bricks/${rock}_slab`, `tfc:rock/bricks/${rock}`)
        slabCrafting(`4x tfc:rock/cobble/${rock}_slab`, `tfc:rock/cobble/${rock}`)
        slabCrafting(`4x tfc:rock/smooth/${rock}_slab`, `tfc:rock/smooth/${rock}`)
        slabCrafting(`4x tfc:rock/mossy_cobble/${rock}_slab`, `tfc:rock/mossy_cobble/${rock}`)
        slabCrafting(`4x tfc:rock/mossy_bricks/${rock}_slab`, `tfc:rock/mossy_bricks/${rock}`)
        slabCrafting(`4x tfc:rock/cracked_bricks/${rock}_slab`, `tfc:rock/cracked_bricks/${rock}`)

        wallCrafting(`3x tfc:rock/raw/${rock}_wall`, `tfc:rock/raw/${rock}`)
        wallCrafting(`3x tfc:rock/bricks/${rock}_wall`, `tfc:rock/bricks/${rock}`)
        wallCrafting(`3x tfc:rock/cobble/${rock}_wall`, `tfc:rock/cobble/${rock}`)
        wallCrafting(`3x tfc:rock/smooth/${rock}_wall`, `tfc:rock/smooth/${rock}`)
        wallCrafting(`3x tfc:rock/mossy_cobble/${rock}_wall`, `tfc:rock/mossy_cobble/${rock}`)
        wallCrafting(`3x tfc:rock/mossy_bricks/${rock}_wall`, `tfc:rock/mossy_bricks/${rock}`)
        wallCrafting(`3x tfc:rock/cracked_bricks/${rock}_wall`, `tfc:rock/cracked_bricks/${rock}`)

        event.shaped(`tfc:rock/aqueduct/${rock}`, ['X X', 'XVX'], {X: `tfc:brick/${rock}`, V: 'tfc:mortar'})
    })

    global.TFC_DIRT_TYPES.forEach(dirt => {
        event.shaped(`3x tfc:mud_bricks/${dirt}_stairs`, ['X ', 'XX'], {X: `tfc:mud_bricks/${dirt}`})
        event.shaped(`4x tfc:mud_bricks/${dirt}_slab`, ['XX'], {X: `tfc:mud_bricks/${dirt}`})
    })

    global.TFC_SAND_COLORS.forEach(color => {
        stairCrafting(`4x tfc:raw_sandstone/${color}_stairs`, `tfc:raw_sandstone/${color}`)
        stairCrafting(`4x tfc:smooth_sandstone/${color}_stairs`, `tfc:smooth_sandstone/${color}`)
        stairCrafting(`4x tfc:cut_sandstone/${color}_stairs`, `tfc:cut_sandstone/${color}`)

        slabCrafting(`4x tfc:raw_sandstone/${color}_slab`, `tfc:raw_sandstone/${color}`)
        slabCrafting(`4x tfc:smooth_sandstone/${color}_slab`, `tfc:smooth_sandstone/${color}`)
        slabCrafting(`4x tfc:cut_sandstone/${color}_slab`, `tfc:cut_sandstone/${color}`)

        wallCrafting(`4x tfc:raw_sandstone/${color}_wall`, `tfc:raw_sandstone/${color}`)
        wallCrafting(`4x tfc:smooth_sandstone/${color}_wall`, `tfc:smooth_sandstone/${color}`)
        wallCrafting(`4x tfc:cut_sandstone/${color}_wall`, `tfc:cut_sandstone/${color}`)
    })

    global.COLORS.forEach(color => {
        stairCrafting(`4x tfc:alabaster/bricks/${color}_stairs`, `tfc:alabaster/bricks/${color}`)
        stairCrafting(`4x tfc:alabaster/polished/${color}_stairs`, `tfc:alabaster/polished/${color}`)

        slabCrafting(`4x tfc:alabaster/bricks/${color}_slab`, `tfc:alabaster/bricks/${color}`)
        slabCrafting(`4x tfc:alabaster/polished/${color}_slab`, `tfc:alabaster/polished/${color}`)

        wallCrafting(`4x tfc:alabaster/bricks/${color}_wall`, `tfc:alabaster/bricks/${color}`)
        wallCrafting(`4x tfc:alabaster/polished/${color}_wall`, `tfc:alabaster/polished/${color}`)

    })

    tfc.loom('minecraft:white_wool', '2x tfc:wool_cloth', 4, 'minecraft:block/white_wool')

    leatherMaking.forEach(([size, amount, output]) => {
        tfc.barrel_sealed(Fluid.of('tfc:limewater', amount), 16000 * output)
            .inputItem(`tfc:${size}_raw_hide`)
            .outputItem(`tfc:${size}_soaked_hide`)

        tfc.barrel_sealed(Fluid.of('minecraft:water', amount), 10000 * output)
            .inputItem(`tfc:${size}_scraped_hide`)
            .outputItem(`tfc:${size}_prepared_hide`)

        tfc.barrel_sealed(Fluid.of('tfc:tannin', amount), 20000 * output)
            .inputItem(`tfc:${size}_prepared_hide`)
            .outputItem(`${output}x minecraft:leather`)
    })

    for (let i = 1; i <= 5; i++) {
        tfc.pot(parseFoodIngredients(`${i}x #tfc:produces_tallow`), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:tallow', 200 * i))
        tfc.pot(parseFoodIngredients(`${i}x tfc:olive_paste`), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:olive_oil_water', 200 * i))

        if (i != 5 && i != 1) {
            tfc.pot(parseFoodIngredients([`${i}x tfc:food/beet`, 'tfc:powder/salt']), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
                .itemOutput(parseIngredients(`${i}x minecraft:sugar`))
        }
    }

    global.TIERED_TFC_METALS.forEach(([metal, i, temp]) => {
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#c:rods/${metal}`, ['draw_not_last', 'bend_any', 'hit_any'])
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#c:ingots/${metal}`, ['draw_not_last', 'hit_any'])

        event.shaped(`tfc:metal/anvil/${metal}`, ['DDD', ' I ', 'III'], {D: `#c:double_ingots/${metal}`, I: `#c:ingots/${metal}`})
        tfc.advanced_shaped_crafting(`tfc:metal/horse_armor/${metal}`, ['HSR', 'SAS'], {S: `#c:sheets/${metal}`, R: `#c:rods/${metal}`, A: 'minecraft:leather_horse_armor', H: '#c:tools/hammer'}).remainder(TFC.isp.copyInputStack().damageInput())

        tfc.heating(`tfc:metal/fish_hook/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 50))
        tfc.heating(`tfc:metal/chain/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 10))
        tfc.heating(`tfc:metal/anvil/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 1000))
    })

    tfc.heating('tfc:dead_torch', 60).resultItem('tfc:torch')

})