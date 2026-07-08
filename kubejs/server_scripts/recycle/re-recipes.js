ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc;

    let tieredWeatheringMetals = ['wrought_iron', 'steel', 'copper', 'bronze'];

    event.shapeless('5x minecraft:clay_ball', ['#cider:costs_five_clay']);
    event.shapeless('2x minecraft:clay_ball', ['#cider:costs_two_clay']);
    event.shapeless('minecraft:clay_ball', ['#cider:costs_one_clay']);

    event.shapeless('5x tfc:fire_clay', ['#cider:costs_five_fire_clay']);
    event.shapeless('2x tfc:fire_clay', ['#cider:costs_two_fire_clay']);
    event.shapeless('tfc:fire_clay', ['#cider:costs_one_fire_clay']);

    global.TIERED_TFC_METALS.forEach(([metal, i, temp]) => {
        tfc.heating(`#cider:${metal}_tool_heads`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 100));
        tfc.heating(`#cider:${metal}_tools`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 100))
            .useDurability();

        tfc.heating(`#cider:${metal}_weapon_blades`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 200));
        tfc.heating(`#cider:${metal}_weapons`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 200))
            .useDurability();
    });

    global.WEATHERING_TFC_METALS.forEach(([metal, i, temp]) => {
        tfc.heating(`#tfc:blocks/${metal}`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 100));

        tfc.heating(`#tfc:stairs/${metal}`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 75));

        tfc.heating(`#tfc:slabs/${metal}`, temp)
            .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 50));

        if (tieredWeatheringMetals.includes(metal)) {
            tfc.heating(`#tfc:grates/${metal}`, temp)
                .fluidOutput(Fluid.of(`tfc:metal/${metal}`, 100));
        }
    })
})