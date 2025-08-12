const registerMetals = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.metal('cfc:alumina', 1535, 0.00857, 'cfc:metal/ingot/alumina', 'cfc:metal/double_ingot/alumina', 'cfc:metal/sheet/alumina', 2)
    event.metal('cfc:aluminium', 660, 0.00857, 'cfc:metal/ingot/aluminium', 'cfc:metal/double_ingot/aluminium', 'cfc:metal/sheet/aluminium', 3)
    event.metal('cfc:lead', 327, 0.00857, 'cfc:metal/ingot/lead', 'cfc:metal/double_ingot/lead', 'cfc:metal/sheet/lead', 3)
}

const registerHeats = (/** @type {Internal.TFCDataEventJS} */ event) => {
    for(let metal in ciderMetalData) {
        let [forge, weld] = ciderMetalData[metal]
        for (let [item, heatCap] of Object.entries(metalItems)) {
            event.itemHeat(`cfc:metal/${item}/${metal}`, heatCap, forge, weld)
        }
        
        event.itemHeat(`cfc:metal/block/${metal}`, 2.857, null, null)
        event.itemHeat(`cfc:metal/block/${metal}_stairs`, 2.857, null, null)
        event.itemHeat(`cfc:metal/block/${metal}_slab`, 1.428, null, null)
    }

    for (let [item, heatCap] of Object.entries(powderData)) {
        event.itemHeat(item, heatCap, null, null)
    }

    event.itemHeat('cfc:metal/iron_frame', 5.714, null, null)
    event.itemHeat('cfc:metal/aluminium_frame', 5.714, null, null)

    event.itemHeat('cfc:metal/unfinished_clock', 5.714, null, null)
    event.itemHeat('cfc:metal/unfinished_spyglass', 5.714, null, null)

    event.itemHeat('cfc:metal/spindle_head/brass', 2.857, null, null)
    event.itemHeat('cfc:metal/spindle/brass', 2.857, null, null)
        
}

const registerSizes = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.itemSize('supplementaries:wrench', 'very_large', 'very_heavy')
    event.itemSize('cfc:metal/spindle/brass', 'very_large', 'very_heavy')
    
    event.itemSize('cfc:metal/iron_frame', 'large', 'heavy')
    event.itemSize('cfc:metal/aluminium_frame', 'large', 'heavy')
    event.itemSize('cfc:food/bush_meat', 'small', 'light')
    event.itemSize('cfc:food/cooked_bush_meat', 'small', 'light')
}

const registerLampFuels = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.lampFuel('cfc:seed_oil', '#tfc:lamps', 3600)
}

const registerFuels = (/** @type {Internal.TFCDataEventJS} */ event) => {
    event.fuel('cfc:coal_chunk', 1415, 550, 1.0)
    event.fuel('cfc:lignite_chunk', 1350, 550, 1.0)
} 