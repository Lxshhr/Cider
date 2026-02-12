const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

StartupEvents.registry('block', event => {
	allColours.forEach(color => {
		event.create(color + '_silk_block')
			.soundType('wool').hardness(0.5).resistance(0.5)
		
		event.create(color + '_burlap_block')
			.soundType('wool').hardness(0.5).resistance(0.5)

		event.create(color + 'leather_block')
            .soundType('wool').hardness(0.5).resistance(0.5)
	})

	event.create('burlap_block')
		.soundType('wool').hardness(0.5).resistance(0.5)

	event.create('leather_block')
			.soundType('wool').hardness(0.5).resistance(0.5)

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