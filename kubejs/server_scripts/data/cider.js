let sandColors = ['black', 'brown', 'green', 'pink', 'red', 'white', 'yellow']
const registerPanningData = (/** @type {Internal.TFCDataEventJS} */ event) => {
    global.tfcRockTypes.forEach(rock => {
        event.panning((`tfc:rock/gravel/${rock}`).toString(), (`cfc:panning/deposits/gravel_${rock}`).toString(), [
            (`tfc:item/pan/native_copper/${rock}_full`).toString(),
            (`tfc:item/pan/native_copper/${rock}_half`).toString(),
            `tfc:item/pan/native_copper/result`,
        ], (`cfc:panning/deposits/gravel_${rock}`).toString())
    })
    sandColors.forEach(sand => {
        event.panning((`tfc:sand/${sand}`).toString(), (`cfc:panning/deposits/sand_${sand}`).toString(), [
            (`cfc:item/pan/native_copper/${sand}_full`).toString(),
            (`cfc:item/pan/native_copper/${sand}_half`).toString(),
            `cfc:item/pan/native_copper/result`,
        ], (`cfc:panning/deposits/sand_${sand}`).toString())
    })

}

const registerSluiceData = (/** @type {Internal.TFCDataEventJS} */ event) =>{
    global.tfcRockTypes.forEach(rock => {
        event.sluicing(`tfc:rock/gravel/${rock}`, `cfc:panning/deposits/gravel_${rock}`, `cfc:panning/deposits/gravel_${rock}`)
    })
    sandColors.forEach(sand => {
        event.sluicing(`tfc:sand/${sand}`, `cfc:panning/deposits/sand_${sand}`, `cfc:panning/deposits/sand_${sand}`)
    })
}