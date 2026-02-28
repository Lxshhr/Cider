StartupEvents.registry('item', event => {
    event.create('unfinished_clock')
    event.create('unfinished_spyglass')
    event.create('steel_mechanisms')

    allMetals.forEach(metal => {
        event.create(`${metal}_nugget`)
        event.create(`${metal}_foil`)
    })
})