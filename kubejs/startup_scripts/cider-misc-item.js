StartupEvents.registry('item', event => {
    event.create('unfinished_clock')
    event.create('unfinished_spyglass')
    event.create('steel_mechanisms')
    
    event.create('measuring_cup', 'tfc:fluid_container')
        .capacity(50)
        .allowedFluids('tfc:usable_in_wooden_bucket')
        .maxStackSize(1)

    event.create('cinnabar_gem')
    event.create('chromite_powder')
    event.create('unfinished_saddle')
    event.create('flint_arrow_tip')

    event.create('peat_kindling')
        .maxStackSize(32)

    event.create('ceramic_plate')
        .maxStackSize(16)
})
