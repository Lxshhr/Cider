ServerEvents.tags('item', event => {
    event.add('c:tools/spindles', ['tfc:spindle', 'kubejs:brass_spindle'])

    event.add('tfc:usable_on_tool_rack', [
        
    ])

    event.remove("tfc:can_be_lit_on_torch", [
        "#tfc:twigs"
    ])
    event.add('tfc:can_be_lit_on_torch', [
        'tfc:dead_torch'
    ])
})