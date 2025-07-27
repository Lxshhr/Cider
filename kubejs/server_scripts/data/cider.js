let sandColors = ['black', 'brown', 'green', 'pink', 'red', 'white', 'yellow']
const registerPanningData = (/** @type {Internal.TFCDataEventJS} */ event) => {
    global.tfcRockTypes.forEach(rock => {
        event.panning(`tfc:rock/gravel/${rock}`, `cfc:panning/deposits/gravel_${rock}`, [
            `tfc:item/pan/native_copper/${rock}_full`,
            `tfc:item/pan/native_copper/${rock}_half`,
            `tfc:item/pan/native_copper/result`,
        ], `cfc:panning/deposits/gravel_${rock}`)
    })
    sandColors.forEach(sand => {
        event.panning(`tfc:sand/${sand}`, `cfc:panning/deposits/sand_${sand}`, [
            `cfc:item/pan/native_copper/${sand}_full`,
            `cfc:item/pan/native_copper/${sand}_half`,
            `cfc:item/pan/native_copper/result`,
        ], `cfc:panning/deposits/sand_${sand}`)
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