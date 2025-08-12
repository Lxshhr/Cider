const registerVanillaRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
    let tfc = event.recipes.tfc

    event.remove({id: /minecraft:dye_.*_wool/})
    event.remove({id: /minecraft:dye_.*bed/})
    event.remove({id: /minecraft:.*_terracotta/})

    event.shapeless('minecraft:clock', ['cfc:metal/unfinished_clock', 'tfc:lens', 'tfc:brass_mechanisms', 'tfc:brass_mechanisms', 'tfc:glue']).id('cider:crafting/clock_from_unfinished')
    event.shaped('minecraft:spyglass', [' L ', 'BU ', ' S '], {L: 'tfc:lens', B: 'tfc:brass_mechanisms', U: 'cfc:metal/unfinished_spyglass', S: 'sns:leather_strip'}).id('cider:crafting/spyglass_from_unfinished')

    event.shaped('minecraft:leather_chestplate', ['LNL', 'LLL', 'SLL'], {L: 'cfc:leather_sheet', S: '#forge:string', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/leather_chestplate')
    event.shaped('minecraft:leather_leggings', ['LLL', 'LSL', 'KNK'], {L: 'cfc:leather_sheet', S: '#forge:string', K: 'sns:leather_strip', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/leather_leggings')
    event.shaped('minecraft:leather_helmet', ['LLL', 'KSK', 'N  '], {L: 'cfc:leather_sheet', S: '#forge:string', K: 'sns:leather_strip', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/leather_helmet')
    event.shaped('minecraft:leather_boots', ['LSL', 'KNK'], {L: 'cfc:leather_sheet', S: '#forge:string', K: 'sns:leather_strip', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/leather_boots')
    event.shaped('minecraft:leather_horse_armor', ['  L', 'FFF', 'LNL'], {L: 'cfc:leather_sheet', F: 'minecraft:leather', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/leather_horse_armor')
    event.shaped('minecraft:saddle', ['LFL', 'SN '], {L: 'cfc:leather_sheet', F: 'minecraft:leather', S: '#forge:string', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle').id('cider:crafting/saddle')

    event.shaped('minecraft:white_banner', [' S ', ' S ', ' T '], {S: '#tfc:cut_high_quality_cloth', T: '#forge:rods/wooden'})
    event.shaped('minecraft:cartography_table', ['SS', 'TT'], {S: 'minecraft:paper', T: '#minecraft:planks'})

    tfc.chisel('minecraft:brick_slab', 'minecraft:bricks', 'slab').extraDrop('minecraft:brick_slab').id('cider:chisel/brick_slab')
    tfc.chisel('minecraft:brick_stairs', 'minecraft:bricks', 'stair').id('cider:chisel/brick_stairs')

    global.dyes.forEach(color => {
        event.shaped(`4x minecraft:${color}_carpet`, ['WWS'], {W: `minecraft:${color}_wool`, S: '#tfc:shears'})
    })

    tfc.heating('minecraft:clock', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))
        .id('minecraft:heating/metal/clock')
    tfc.heating('minecraft:spyglass', 930)
        .resultFluid(Fluid.of('tfc:metal/brass', 200))
        .id('minecraft:heating/metal/spyglass')
}