ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return

    event.server.gameRules.set("announceAdvancements", false)
    event.server.gameRules.set("showDeathMessages", false)
    event.server.gameRules.set("mobGriefing", false)

    event.server.persistentData.gameRules = true
})