const registerFluids = (/** @type {Registry.Fluid} */ event) => {
    event.create('cfc:seed_oil_water').thinTexture(0x7d8750).bucketColor(0x7d8750).noBlock()
    event.create('cfc:seed_oil').thinTexture(0x879546).bucketColor(0x879546).noBlock()

    event.create('cfc:soy_milk').thinTexture(0x879546).bucketColor(0x879546).noBlock()
        
    event.create('cfc:soap').thinTexture(0xF4F5CE).bucketColor(0xF4F5CE).noBlock()
    
    event.create('cfc:resin').thickTexture(0xFF991C).bucketColor(0xFF991C).noBlock()

    event.create('cfc:aluminium').thickTexture(0x848789).bucketColor(0x848789).noBlock()
    event.create("cfc:alumina").thickTexture(0xEFF4F8).thinTexture(0xEFF4F8).noBlock()
    event.create("cfc:lead").thickTexture(0x5C6274).thinTexture(0x5C6274).noBlock()
}