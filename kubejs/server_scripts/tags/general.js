const registerGeneralItemTags = (/** @type {Internal.TagEventJS} */ event) => {
    event.add('c:hidden_from_recipe_viewers', global.vanillaDisabled)
    event.add('c:hidden_from_recipe_viewers', global.disabledItems)

    global.vanillaDisabled.forEach(item => {
        event.removeAllTagsFrom(item)
    })
    global.extraSupplementariesDisabled.forEach(item => {
        event.removeAllTagsFrom(`supplementaries:${item}`)
        event.add('c:hidden_from_recipe_viewers', `supplementaries:${item}`)
    })
    global.disabledItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}

const registerGeneralFluidTags = (/** @type {Internal.TagEventJS} */ event) => {
    global.disabledFluids.forEach(fluid => {
        event.removeAllTagsFrom(fluid)
    })
}