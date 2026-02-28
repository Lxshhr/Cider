StartupEvents.registry('block', event => {
	event.create('chiseled_bricks')
		.soundType('stone').hardness(2).resistance(6)
		.requiresTool(true)

	event.create('chiseled_ash_bricks')
		.soundType('stone').hardness(2).resistance(6)
		.requiresTool(true)

	event.create('chiseled_rustic_bricks')
		.soundType('stone').hardness(2).resistance(6)
		.requiresTool(true)

	event.create('chiseled_tile_bricks')
		.soundType('stone').hardness(2).resistance(6)
		.requiresTool(true)

	event.create('borax_ore', 'tfc:groundcover')
		.withPreexistingItem('tfc:ore/borax')
	
	event.create('lignite_lump', 'tfc:groundcover')
		.item(item => item.maxStackSize(32))
	
	event.create('coal_lump', 'tfc:groundcover')
		.item(item => item.maxStackSize(32))
})