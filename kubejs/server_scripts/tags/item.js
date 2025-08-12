const registerCiderItemTags = (/** @type {Internal.TagEventJS} */ event) => {
    event.add('cfc:high_quality_cut_cloths', [
        'cfc:cut_silk_cloth', 
        'cfc:cut_wool_cloth'
    ])

    event.add('cfc:low_quality_cloths', [
        'cfc:linen_cloth', 
        'tfc:burlap_cloth'
    ])

    event.add('tfc:metal_item/brass', [
        'cfc:metal/unfinished_clock',
        'cfc:metal/unfinished_spyglass', 
        'cfc:metal/brick_mold', 
        'minecraft:clock', 
        'minecraft:spyglass', 
        'cfc:metal/spindle_head/brass', 
        'cfc:metal/spindle/brass'
    ])

    event.add('cfc:fibers', [
        'cfc:flax_fiber', 
        'tfc:jute_fiber'
    ])

    event.add('tfc:usable_on_tool_rack', [
        'minecraft:clock', 
        'minecraft:spyglass'
    ])

    event.add('c:hidden_from_recipe_viewers', vanillaDisabled)
    event.add('c:hidden_from_recipe_viewers', disabledItems)

    vanillaDisabled.forEach(item => {
        event.removeAllTagsFrom(item)
    })
    extraSupplementariesDisabled.forEach(item => {
        event.removeAllTagsFrom(`supplementaries:${item}`)
        event.add('c:hidden_from_recipe_viewers', `supplementaries:${item}`)
    })
    disabledItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })

}