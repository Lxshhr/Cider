const registerMetals = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.metal('cfc:alumina', 1535, 0.00857, 'cfc:metal/ingot/alumina', 'cfc:metal/double_ingot/alumina', 'cfc:metal/sheet/alumina', 2)
    event.metal('cfc:aluminium', 660, 0.00857, 'cfc:metal/ingot/aluminium', 'cfc:metal/double_ingot/aluminium', 'cfc:metal/sheet/aluminium', 3)
}

const registerHeats = (/** @type {Internal.TFCDataEventJS} */ event) => {
    let ciderMetalData = {
        'aluminium' : [396, 528],
        'alumina': [921, 1228]
    }
    let metalItems = {
		ingot: 2.857,
		double_ingot: 5.714,
		sheet: 5.714,
		double_sheet: 11.428,
		rod: 1.428,
	}
    let tMetalData = {
        'copper': [648, 864],
        'bismuth_bronze': [591, 788],
        'black_bronze': [642, 856],
        'bronze': [570, 760],
        'wrought_iron': [921, 1228],
        'steel': [924, 1232],
        'black_steel': [891, 1188],
        'red_steel': [924, 1232],
        'blue_steel': [924, 1232],
    }

    let powderData = {
        'tfc:powder/bismuthinite': 2.857,
        'tfc:powder/cassiterite': 2.857,
        'tfc:powder/garnierite': 0.833,
        'tfc:powder/hematite': 1.143,
        'tfc:powder/limonite' : 1.143,
        'tfc:powder/magnetite' : 1.143,
        'tfc:powder/malachite' : 1.143,
        'tfc:powder/native_copper' : 1.143,
        'tfc:powder/native_gold' : 0.667,
        'tfc:powder/native_silver' : 0.833,
        'tfc:powder/sphalerite' : 1.905,
        'tfc:powder/tetrahidrite' : 1.143,
        'cfc:powder/bauxite' : 1.143,
        'cfc:powder/chromite' : 1.143,
    }

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

    event.itemHeat('cfc:iron_frame', 5.714, null, null)
    event.itemHeat('cfc:aluminium_frame', 5.714, null, null)

    event.itemHeat('cfc:unfinished_clock', 5.714, null)
    event.itemHeat('cfc:unfinished_thermometer', 5.714, null)
    event.itemHeat('cfc:unfinished_spyglass', 5.714, null)

    for(let metal in tMetalData) {
        let [forge, weld] = tMetalData[metal] 
        event.itemHeat(`cfc:metal/spindle/${metal}`, 2.857, forge, weld)
    }
        
}

const registerSizes = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.itemSize('supplementaries:wrench', 'very_large', 'very_heavy')
    
    event.itemSize('cfc:iron_frame', 'large', 'heavy')
    event.itemSize('cfc:aluminium_frame', 'large', 'heavy')
    event.itemSize('cfc:food/bush_meat', 'small', 'light')
    event.itemSize('cfc:food/cooked_bush_meat', 'small', 'light')
}

const registerLampFuels = (/** @type {Internal.TFCDataEventJS} */event) => {
    event.lampFuel('cfc:seed_oil', '#tfc:lamps', 3600)
}