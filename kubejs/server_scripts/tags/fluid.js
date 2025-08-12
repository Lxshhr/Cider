const registerCiderFluidTags = (/** @type {Internal.TagEventJS} */ event) => {
    let wateryFluids = [
        'cfc:seed_oil_water', 
        'cfc:seed_oil', 
        'cfc:soy_milk', 
        'cfc:soap', 
        'cfc:resin', 
    ]
    let moltenMetals = [
        'cfc:alumina',
        'cfc:aluminium',
        'cfc:lead'
    ]

    event.add('tfc:usable_in_wooden_bucket', wateryFluids)
    event.add('tfc:usable_in_blue_steel_bucket', wateryFluids)
    event.add('tfc:usable_in_barrel', wateryFluids)
    event.add('tfc:usable_in_pot', wateryFluids)
    event.add('tfc:usable_in_jug', wateryFluids)

    event.add('tfc:molten_metals', moltenMetals)
    event.add('tfc:usable_in_ingot_mold', moltenMetals)


    disabledFluids.forEach(fluid => {
        event.removeAllTagsFrom(fluid)
    })
}