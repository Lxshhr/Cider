ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc

    tfc.heating('#tfc:blocks/bronze', 950)
        .fluidOutput(Fluid.of('tfc:metal/bronze', 100))

    tfc.heating('#tfc:blocks/copper', 1080)
        .fluidOutput(Fluid.of('tfc:metal/copper', 100))

    tfc.heating('#tfc:blocks/wrought_iron', 1535)
        .fluidOutput(Fluid.of('tfc:metal/wrought_iron', 100))

    tfc.heating('#tfc:blocks/steel', 1540)
        .fluidOutput(Fluid.of('tfc:metal/steel', 100))

    tfc.heating('#tfc:blocks/sterling_silver', 950)
        .fluidOutput(Fluid.of('tfc:metal/sterling_silver', 100))

    tfc.heating('#tfc:blocks/silver', 961)
        .fluidOutput(Fluid.of('tfc:metal/silver', 100))

    tfc.heating('#tfc:blocks/brass', 930)
        .fluidOutput(Fluid.of('tfc:metal/brass', 100))

    // Stairs
    tfc.heating('#tfc:stairs/bronze', 950)
        .fluidOutput(Fluid.of('tfc:metal/bronze', 75))

    tfc.heating('#tfc:stairs/copper', 1080)
        .fluidOutput(Fluid.of('tfc:metal/copper', 75))

    tfc.heating('#tfc:stairs/wrought_iron', 1535)
        .fluidOutput(Fluid.of('tfc:metal/wrought_iron', 75))

    tfc.heating('#tfc:stairs/steel', 1540)
        .fluidOutput(Fluid.of('tfc:metal/steel', 75))

    tfc.heating('#tfc:stairs/sterling_silver', 950)
        .fluidOutput(Fluid.of('tfc:metal/sterling_silver', 75))

    tfc.heating('#tfc:stairs/silver', 961)
        .fluidOutput(Fluid.of('tfc:metal/silver', 75))

    tfc.heating('#tfc:stairs/brass', 930)
        .fluidOutput(Fluid.of('tfc:metal/brass', 75))

    // Slabs
    tfc.heating('#tfc:slabs/bronze', 950)
        .fluidOutput(Fluid.of('tfc:metal/bronze', 50))

    tfc.heating('#tfc:slabs/copper', 1080)
        .fluidOutput(Fluid.of('tfc:metal/copper', 50))

    tfc.heating('#tfc:slabs/wrought_iron', 1535)
        .fluidOutput(Fluid.of('tfc:metal/wrought_iron', 50))

    tfc.heating('#tfc:slabs/steel', 1540)
        .fluidOutput(Fluid.of('tfc:metal/steel', 50))

    tfc.heating('#tfc:slabs/sterling_silver', 950)
        .fluidOutput(Fluid.of('tfc:metal/sterling_silver', 50))

    tfc.heating('#tfc:slabs/silver', 961)
        .fluidOutput(Fluid.of('tfc:metal/silver', 50))

    tfc.heating('#tfc:slabs/brass', 930)
        .fluidOutput(Fluid.of('tfc:metal/brass', 50))


    // Grates
    tfc.heating('#tfc:grates/bronze', 950)
        .fluidOutput(Fluid.of('tfc:metal/bronze', 100))

    tfc.heating('#tfc:grates/copper', 1080)
        .fluidOutput(Fluid.of('tfc:metal/copper', 100))

    tfc.heating('#tfc:grates/wrought_iron', 1535)
        .fluidOutput(Fluid.of('tfc:metal/wrought_iron', 100))

    tfc.heating('#tfc:grates/steel', 1540)
        .fluidOutput(Fluid.of('tfc:metal/steel', 100))
})