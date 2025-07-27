const registerGeneralItemTags = (/** @type {Internal.TagEventJS} */ event) => {
    console.log('Tags Loaded')
   
    global.vanillaDisabled.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    global.extraSupplementariesDisabled.forEach(item => {
        event.removeAllTagsFrom(`supplementaries:${item}`)
        event.add('c:hidden_from_recipe_viewers', `supplementaries:${item}`)
    })
    global.disabledItems.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerGeneralFluidTags = (/** @type {Internal.TagEventJS} */ event) => {
    global.disabledFluids.forEach(fluid => {
        event.removeAllTagsFrom(fluid)
    })
}