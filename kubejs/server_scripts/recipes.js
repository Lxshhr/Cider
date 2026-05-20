ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc

    event.shapeless('kubejs:flint_hoe', ['kubejs:flint_hoe_head', '#c:rods/wooden'])
    event.shapeless('kubejs:flint_knife', ['kubejs:flint_knife_blade', '#c:rods/wooden'])
    event.shapeless('kubejs:flint_axe', ['kubejs:flint_axe_head', '#c:rods/wooden'])
    event.shapeless('kubejs:flint_shovel', ['kubejs:flint_shovel_head', '#c:rods/wooden'])
    event.shapeless('kubejs:flint_hammer', ['kubejs:flint_hammer_head', '#c:rods/wooden'])
    event.shapeless('kubejs:flint_javelin', ['kubejs:flint_javelin_head', '#c:rods/wooden'])
    event.shapeless('kubejs:measuring_cup', ['#tfc:lumber', '#c:tools/knife']).damageIngredient('#c:tools/knife')
    event.shapeless('kubejs:cinnabar_gem', ['tfc:ore/cinnabar', 'tfc:sandpaper']).damageIngredient('tfc:sandpaper')
    event.shapeless('minecraft:detector_rail', ['minecraft:rail', '#c:stones/pressure_plate'])
    event.shapeless('minecraft:activator_rail', ['minecraft:rail', 'minecraft:redstone_torch'])
    event.shapeless('5x minecraft:clay_ball', ['#tfc:is_five_clay'])
    event.shapeless('minecraft:crafting_table', ['#tfc:workbenches', '#c:tools/saw']).damageIngredient('#c:tools/saw')
    event.shapeless('labels:label', ['minecraft:paper', '#c:tools/knife']).damageIngredient('#c:tools/knife')
    event.shapeless('2x tfc:fire_clay', ['minecraft:clay_ball', 'tfc:powder/graphite', 'tfc:powder/graphite', 'tfc:powder/graphite', 'tfc:powder/graphite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite'])
    event.shapeless('supplementaries:ash_brick', ['tfc:powder/wood_ash', 'minecraft:brick', 'tfc:mortar'])
    event.shapeless('kubejs:tool_handle', ['sewingkit:leather_strip', 'minecraft:stick'])
    event.shapeless('minecraft:stripped_bamboo_block', ["tfc:golden_bamboo_block", '#minecraft:axes']).damageIngredient('#minecraft:axes')

    // event.shapeless('minecraft:map', [], {})

    event.shaped('tfc:dead_torch', [' S ', ' T '], {S: 'tfc:straw', T:'minecraft:stick'})
    event.shaped('minecraft:clock', [' L ', 'MCM'], {L: 'tfc:lens', M: 'tfc:brass_mechanisms', C: 'kubejs:unfinished_clock'})
    event.shaped('minecraft:spyglass', [' L ', 'BU ', ' S '], {L: 'tfc:lens', B: 'tfc:brass_mechanisms', U: 'kubejs:unfinished_spyglass', S: 'sewingkit:leather_strip'})
    event.shaped('2x minecraft:scaffolding', ['SCS', 'S S', 'S S'], {S: 'minecraft:stick', C: '#c:strings'})
    event.shaped('64x minecraft:rail', ['RSR', 'RSR', 'RSR'], {R: '#c:rods/steel', S: 'minecraft:stick'})
    event.shaped('minecraft:white_bed', ['CCC', 'LLL', 'L L'], {C: '#tfc:high_quality_cloth', L: '#tfc:lumber'})
    event.shaped('minecraft:redstone_lamp', [' R ', 'RLR', ' R '], {R: 'minecraft:redstone', L: 'tfc:lamp_glass'})
    event.shaped('2x minecraft:item_frame', [' S ', 'SLS', ' S '], {S: '#tfc:lumber', L: 'sewingkit:leather_sheet'})
    event.shaped('4x minecraft:item_frame', [' S ', 'SLS', ' S '], {S: '#tfc:lumber', L: 'minecraft:leather'})
    event.shaped('minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: 'minecraft:paper'})
    event.shaped('2x minecraft:painting', [' S ', 'SPS', ' S '], {S: 'minecraft:stick', P: '#tfc:high_quality_cloth'})
    event.shaped('3x minecraft:bowl', ['XSX', ' X '], {S: '#c:tools/saw', X: '#tfc:lumber'}).damageIngredient('#c:tools/saw')
    event.shaped('minecraft:name_tag', [' S', 'P '], {S: '#c:strings', P: 'minecraft:paper'})
    event.shaped('2x minecraft:tripwire_hook', ['C', 'R', 'L'], {C: '#c:ingots/copper', R: '#tfc:lumber', L: 'minecraft:redstone'})
    event.shaped('minecraft:observer', [' X ', 'RRL', ' X '], {X: 'kubejs:ceramic_plate', R: 'minecraft:redstone', L: 'tfc:lens'})
    event.shaped('minecraft:daylight_detector', ['X', 'G', 'P'], {X: 'tfc:lens', G: '#c:gems', P: 'kubejs:ceramic_plate'})
    event.shaped('minecraft:repeater', [' R ', 'TLT'], {R: 'minecraft:redstone', T: 'minecraft:redstone_torch', L: 'kubejs:ceramic_plate'})
    event.shaped('minecraft:comparator', [' TD', 'TLT'], {T: 'minecraft:redstone_torch', L: 'kubejs:ceramic_plate', D: '#tfc:gem_powders'})
    event.shaped('tfc:bloomery', ['XCX', 'X X', 'XCX'], {X: '#c:double_sheets/all_bronze', C: '#c:sheets/all_bronze'})
    event.shaped('tfc:stove', ['BCB', 'C C', ' C '], {C: 'tfc:metal/sheet/cast_iron', B: 'tfc:metal/rod/brass'})
    event.shaped('minecraft:piston', ['LLL', 'BMB', 'BRB'], {L: '#tfc:lumber', B: '#minecraft:stone_bricks', M: '#tfc:mechanisms', R: 'minecraft:redstone'})
    event.shaped('tfc:steel_pump', ['PWM', ' P '], {P: 'tfc:steel_pipe', W: 'tfc:metal/rod/brass', M: '#tfc:mechanisms'})
    event.shaped('tfc:crankshaft', ['AMB', ' SR'], {A: '#tfc:axles', M: '#tfc:mechainsms', B: 'tfc:metal/rod/brass', S: '#c:sheets/brass', R: 'tfc:metal/rod/steel'})
    event.shaped('kubejs:chiseled_ash_bricks', ['S', 'S'], {S: 'supplementaries:ash_bricks_slab'})
    event.shaped('kubejs:chiseled_bricks', ['S', 'S'], {S: 'minecraft:brick_slab'})
    event.shaped('kubejs:chiseled_rustic_bricks', ['S', 'S'], {S: 'firmalife:rustic_brick_slab'})
    event.shaped('kubejs:chiseled_tile_bricks', ['S', 'S'], {S: 'firmalife:tile_brick_slab'})
    event.shaped('minecraft:saddle', ['LFL', 'SNS'], {L: 'sewingkit:leather_sheet', F: 'kubejs:unfinished_saddle', S: '#forge:string', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
    event.shaped('16x minecraft:powered_rail', ['ISI', 'BRB', 'ISI'], {I: '#c:rods/wrought_iron', S: 'minecraft:stick', B: '#c:rods/brass', R: 'minecraft:redstone'})
    event.shaped('minecraft:minecart', ['C C', 'BCB'], {C: '#c:sheets/wrought_iron', B: '#c:rods/brass'})
    
    // event.shaped('dummmmmmy:target_dummy', [], {})
    // event.shaped('minecraft:sculk_sensor', [], {})
    // event.shaped('minecraft:fletching_table', [], {})
    // event.shaped('minecraft:loom', [], {})
    // event.shaped('minecraft:jukebox', [], {})
    // event.shaped('minecraft:golden_bell', [], {})
    // event.shaped('minecraft:target', [], {})
    // event.shaped('minecraft:lever', [], {})
    // event.shaped('minecraft:calibrated_sculk_sensor', [], {})
    // event.shaped('minecraft:crafter', [], {})
    // event.shaped('minecraft:brush', [], {})

    // Heads, Disks, 

    tfc.advanced_shaped_crafting(TFC.isp.of('kubejs:brass_spindle').copyForgingBonus(),  ['X', 'S'], {X: 'kubejs:brass_spindle_head', S: 'minecraft:stick'})

    function twoByTwo(result, input) {
        event.shaped(result, ['XX', 'XX'], {X: input})
    }
    twoByTwo('tfc:peat', 'kubejs:peat_kindling')

    function threeByThree(result, input) {
        event.shaped(result, ['XXX', 'XXX', 'XXX'], {X: input})
    }

    function brickRecipe(result, input, cat) {
        event.shaped(result, ['XXX', 'XCX', 'XXX'], {X: input, C: cat})
    }
    brickRecipe('2x minecraft:bricks', 'minecraft:brick', 'tfc:mortar')
    brickRecipe('2x supplementaries:ash_bricks', 'supplementaries:ash_brick', 'tfc:mortar')
    brickRecipe('minecraft:lodestone', '#minecraft:chiseled_bricks', '#tfc:magnetite_pieces')
    brickRecipe('2x tfc:alabaster/bricks', 'tfc:alabaster_brick', 'tfc:mortar')
    brickRecipe('2x firmalife:tile_bricks', 'firmalife:tile_brick', 'tfc:mortar')
    brickRecipe('2x tfc:fire_bricks', 'tfc:ceramic/fire_brick', 'tfc:mortar')

    function stairCrafting(result, input) {
        event.shaped(result, ['XV', 'XX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3)
    }
    stairCrafting('3x supplementaries:ash_bricks_stairs', 'supplementaries:ash_bricks')
    stairCrafting('3x minecraft:brick_stairs', 'minecraft:bricks')
    stairCrafting('3x minecraft:bamboo_stairs', 'minecraft:stripped_bamboo_block')
    stairCrafting('3x minecraft:bamboo_mosaic_stairs', 'minecraft:bamboo_mosaic')

    function slabCrafting(result, input) {
        event.shaped(result, ['XXV'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 2)
    }
    slabCrafting('4x supplementaries:ash_bricks_slab',  'supplementaries:ash_bricks')
    slabCrafting('4x minecraft:brick_slab',  'minecraft:bricks')
    slabCrafting('4x supplementaries:checker_slab',  'supplementaries:checker_block')
    slabCrafting('4x minecraft:bamboo_slab', 'minecraft:stripped_bamboo_block')
    slabCrafting('4x minecraft:bamboo_mosaic_slab', 'minecraft:bamboo_mosaic')

    function wallCrafting(result, input) {
        event.shaped(result, ['V  ', 'XXX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3)
    }
    wallCrafting('3x supplementaries:ash_bricks_wall', 'supplementaries:ash_bricks')
    wallCrafting('3x minecraft:brick_wall', 'minecraft:bricks')

    tfcRockTypes.forEach(rock => {
        brickRecipe(`2x tfc:rock/bricks/${rock}`, `tfc:brick/${rock}`, 'tfc:mortar')
        brickRecipe(`2x tfc:rock/hardened/${rock}`, `tfc:rock/loose/${rock}`, 'tfc:mortar')
        brickRecipe(`2x tfc:rock/cobble/${rock}`, `tfc:rock/loose/${rock}`, 'minecraft:clay_ball')

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
    })

    tfcDirtTypes.forEach(dirt => {
        event.shaped(`3x tfc:mud_bricks/${dirt}_stairs`, ['X ', 'XX'], {X: `tfc:mud_bricks/${dirt}`})
        event.shaped(`4x tfc:mud_bricks/${dirt}_slab`, ['XX'], {X: `tfc:mud_bricks/${dirt}`})
    })

    tfcSandTypes.forEach(color => {
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

    tfcWoodTypes.forEach(wood => {
        event.shaped(`2x tfc:wood/pressure_plate/${wood}`, ['XXS'], {X: `tfc:wood/lumber/${wood}`, S: '#c:tools/saw'}).damageIngredient('#c:tools/saw')
        stairCrafting(`4x tfc:wood/planks/${wood}_stairs`, `tfc:wood/planks/${wood}`)
        slabCrafting(`4x tfc:wood/planks/${wood}_slab`, `tfc:wood/planks/${wood}`)
        event.shaped(`2x tfc:wood/clutch/${wood}`, ['LSL', 'MAR', 'LSL'], {L: `tfc:wood/lumber/${wood}`, S: `tfc:wood/stripped_log/${wood}`, M: '#tfc:mechanisms', A: `tfc:wood/axle/${wood}`, R: 'minecraft:redstone'})
        event.shaped(`2x tfc:wood/gear_box/${wood}`, [' L ', 'LML', ' L '], {L: `tfc:wood/lumber/${wood}`, M: '#tfc:mechanisms'})

        event.shapeless(`tfc:wood/button/${wood}`, [`tfc:wood/lumber/${wood}`, '#c:tools/saw']).damageIngredient('#c:tools/saw') 
    })

    function chiselSlab(result, input) {
        tfc.chisel(result, input, 'tfc:slab').extraDrop(result)
    }
    function chiselStair(result, input) {
        tfc.chisel(result, input, 'tfc:stair')
    }

    chiselSlab('minecraft:brick_slab', 'minecraft:bricks')
    chiselSlab('supplementaries:ash_bricks_slab', 'supplementaries:ash_bricks')
    chiselSlab('supplementaries:checker_slab', 'supplementaries:checker_block')

    chiselStair('minecraft:brick_stairs', 'minecraft:bricks')
    chiselStair('supplementaries:ash_bricks_stairs', 'supplementaries:ash_bricks')

    colors.forEach(color => {
        stairCrafting(`4x tfc:alabaster/bricks/${color}_stairs`, `tfc:alabaster/bricks/${color}`)
        stairCrafting(`4x tfc:alabaster/polished/${color}_stairs`, `tfc:alabaster/polished/${color}`)

        slabCrafting(`4x tfc:alabaster/bricks/${color}_slab`, `tfc:alabaster/bricks/${color}`)
        slabCrafting(`4x tfc:alabaster/polished/${color}_slab`, `tfc:alabaster/polished/${color}`)

        wallCrafting(`4x tfc:alabaster/bricks/${color}_wall`, `tfc:alabaster/bricks/${color}`)
        wallCrafting(`4x tfc:alabaster/polished/${color}_wall`, `tfc:alabaster/polished/${color}`)

        if(color != 'white') {
            tfc.barrel_sealed(Fluid.of(`tfc:${color}_dye`, 25), 1000)
                .inputItem('chalk:white_chalk')
                .outputItem(`chalk:${color}_chalk`)
        }
    })

    tfc.quern('2x kubejs:seed_paste', '#c:seeds')
    tfc.quern('8x minecraft:redstone', 'kubejs:cinnabar_gem')
    tfc.quern('2x kubejs:chromite_powder', 'firmalife:ore/small_chromite')
    tfc.quern('3x kubejs:chromite_powder', 'firmalife:ore/poor_chromite')
    tfc.quern('5x kubejs:chromite_powder', 'firmalife:ore/normal_chromite')
    tfc.quern('7x kubejs:chromite_powder', 'firmalife:ore/rich_chromite')

    tfc.loom('minecraft:white_wool', '2x tfc:wool_cloth', 4, 'minecraft:block/white_wool')

    hides.forEach(([size, amount, output]) => {
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

    tfc.barrel_instant(Fluid.of('kubejs:seed_oil_water', 250))
        .inputItem('tfc:jute_net')
        .outputItem('tfc:dirty_jute_net')
        .outputFluid(Fluid.of('kubejs:seed_oil', 50))

    tfc.barrel_sealed(Fluid.of("tfc:lye", 25), 1000)
        .inputItem('#chalk:colored_chalks')
        .outputItem('chalk:white_chalk')

    for (let i = 1; i <= 5; i++) {
        tfc.pot(toArray('#tfc:produces_tallow', i), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:tallow', 200 * i))
        tfc.pot(toArray('tfc:olive_paste', i), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('tfc:olive_oil_water', 200 * i))
        tfc.pot(toArray('kubejs:seed_paste', i), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
            .fluidOutput(Fluid.of('kubejs:seed_oil_water', 200 * i))

        if (i != 1) {
            tfc.pot(toArrayEI("tfc:food/beet", i, "tfc:powder/salt"), Fluid.of('minecraft:water', 200 * i), 480 * i, 600)
                .itemOutput(toArray('minecraft:sugar', i))
        }
    }

    tfc.knapping('chalk:white_chalk', 'tfc:rock', ['XXX', 'XXX', 'XXX', 'XXX', 'XXX',])
        .defaultOn(false)
        .ingredient('#tfc:rock/loose_chalk')

    tfc.knapping('kubejs:unfinished_saddle', 'tfc:leather',  ['  #  ', '#####', '#####', '#####', '  #  '])
        .defaultOn(false)
    
    tfc.knapping('kubejs:flint_arrow_tip', 'kubejs:flint',  [' X X ', 'XX XX', '     ', 'XX XX', ' X X '])
        .defaultOn(false)

    tfc.knapping('kubejs:flint_axe_head', 'kubejs:flint', [' X   ', 'XXXX ', 'XXXXX', 'XXXX ', ' X   '])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_shovel_head', 'kubejs:flint', [' XXX ', ' XXX ', ' XXX ', ' XXX ', '  X  '])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_hoe_head', 'kubejs:flint', ['XXXXX', '   XX'])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_hoe_head', 'kubejs:flint', ['XXXXX', '   XX','     ', 'XXXXX', '   XX',])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_hoe_head', 'kubejs:flint', ['XXXXX', '   XX','     ', 'XXXXX', 'XX   '])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_knife_blade', 'kubejs:flint', [' X', 'XX', 'XX', 'XX', 'XX'])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_knife_blade', 'kubejs:flint', ['X  X ', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_knife_blade', 'kubejs:flint', ['X   X', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_knife_blade', 'kubejs:flint', [' X X ', 'XX XX', 'XX XX', 'XX XX', 'XX XX'])
        .defaultOn(false)
    tfc.knapping('kubejs:flint_hammer_head', 'kubejs:flint', ['XXXXX', 'XXXXX','  X  '])
        .defaultOn(false)

    tfc.anvil('kubejs:unfinished_clock', '#c:sheets/brass', ['bend_any', 'draw_second_last', 'hit_third_last'])
    tfc.anvil('kubejs:unfinished_spyglass', '#c:sheets/brass', ['bend_any', 'punch_second_last', 'draw_third_last'])
    tfc.anvil('kubejs:brass_spindle_head', '#c:ingots/brass', ['punch_last', 'punch_second_last', 'draw_any']).applyBonus(true)

    tieredMetals.forEach(([metal, i, temp]) => {
        event.shaped(`tfc:metal/horse_armor/${metal}`, ['J J', 'BHB'], {B: `#c:sheets/${metal}`, J: 'tfc:jute_fiber', H: 'minecraft:leather_horse_armor'})
        tfc.anvil(`tfc:metal/fish_hook/${metal}`, `#c:rods/${metal}`, ['draw_not_last', 'bend_any', 'hit_any'])
        tfc.anvil(`10x tfc:metal/chain/${metal}`, `#c:ingots/${metal}`, ['draw_not_last', 'hit_any'])

        event.shaped(`tfc:metal/anvil/${metal}`, ['DDD', ' I ', 'III'], {D: `#c:double_ingots/${metal}`, I: `#c:ingots/${metal}`})
        // slabCrafting(`4x tfc:metal/block/${metal}_slab`, `tfc:metal/block/${metal}`)

        tfc.heating(`tfc:metal/fish_hook/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 50))
        tfc.heating(`tfc:metal/chain/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 10))
        tfc.heating(`tfc:metal/anvil/${metal}`, temp).fluidOutput(Fluid.of(`tfc:metal/${metal}`, 1000))
    })

    tfc.heating('tfc:dead_torch', 60).resultItem('tfc:torch')

    tfc.heating('kubejs:unfinished_clock', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))

    tfc.heating('kubejs:unfinished_spyglass', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))

    tfc.heating('kubejs:brass_spindle_head', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 100))
    
    tfc.heating('kubejs:brass_spindle', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 100))
        .useDurability(true)
    
    tfc.bloomery('tfc:raw_iron_bloom', '2x tfc:ore/bituminous_coal',Fluid.of('tfc:metal/cast_iron', 100), 15000)
})