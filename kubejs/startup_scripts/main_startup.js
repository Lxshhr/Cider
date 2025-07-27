// priority: 0
StartupEvents.registry('block', event => {
    registerBlocks(event)
})

StartupEvents.registry('item', event => {
    registerItems(event)
})

StartupEvents.registry('fluid', event => {
    registerFluids(event)
})