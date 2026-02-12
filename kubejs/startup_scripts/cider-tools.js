StartupEvents.registry('item', event => {

    event.create('flint_knife_blade')
    event.create('flint_hoe_head')
    event.create('flint_axe_head')
    event.create('flint_shovel_head')
    event.create('flint_hammer_head')
    event.create('flint_javelin_head')

    event.create('flint_knife', 'tfc:hoe')
        .maxDamage(60)
    
    event.create('flint_hoe', 'tfc:hoe')
        .maxDamage(60)

    event.create('flint_axe', 'kubejs:axe')
        .maxDamage(60)

    event.create('flint_shovel', 'kubejs:shovel')
        .maxDamage(60)

    event.create('flint_hammer', 'tfc:hammer')
        .maxDamage(60)

    event.create('flint_javelin', 'tfc:javelin')
        .maxDamage(60)

    event.create('brass_spindle_head')
    event.create('brass_spindle')
        .maxDamage(560)
})