// Imports
const $FlintAndSteelItem = Java.loadClass('net.minecraft.world.item.FlintAndSteelItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

global.tfcWoodTypes = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangroove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]
global.afcWoodTypes = [
    'baobab',
    'eucalyptus',
    'mahogany',
    'hevea',
    'tualang',
    'teak',
    'cypress',
    'fig',
    'ironwood',
    'ipe'
]
global.afcWoodTypesExtra = [
    'rainbow_eucalyptus',
    'redcedar',
    'gum_arabic',
    'black_oak',
    'poplar',
    'rubber_fig'
]
global.tfcRockTypes = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'conglomerate',
    'claystone',
    'limestone',
    'dolomite',
    'chert',
    'chalk',
    'ryhollite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble',
]
global.grainTypes = [
    'wheat',
    'barley',
    'oat',
    'rye',
    'corn',
    'maize',
    'rice',
]
global.dyes = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]
global.TFCMetals = [
    'bismuth',
	'gold',
	'silver',
	'nickel',
	'tin',
	'zinc',
	'cast_iron',
	'brass',
	'rose_gold',
	'sterling_silver',
	'copper',
	'bronze',
	'bismuth_bronze',
	'black_bronze',
	'wrought_iron',
	'steel',
	'black_steel',
	'blue_steel',
	'red_steel',
]
global.FLMetals = [
    'chromium',
    'stainless_steel'
]
global.MMetal = [
    'copper',
	'bronze',
	'bismuth_bronze',
	'black_bronze',
	'wrought_iron',
	'steel',
	'black_steel',
	'blue_steel',
	'red_steel',
]

const MMetalDurability = {
    'copper': 600,
	'bronze': 1300,
	'bismuth_bronze': 1200,
	'black_bronze': 1460,
	'wrought_iron': 2200,
	'steel': 3300
}


global.tfcRockCatergories =[
    'igneous_extrusive',
    'igneous_intrusive',
    'metamorphic',
    'sedimentary'
]

global.tfcOreTypes = {
    'bismuthinite': 270,
    'cassiterite': 230,
    'garnierite': 1453,
    'hematite': 1535,
    'limonite': 1535,
    'magnetite': 1535,
    'malachite': 1080,
    'native_copper': 1080,
    'native_gold': 1060,
    'native_silver': 961,
    'sphalerite': 420,
    'tetrahidrite' : 1080,
}

global.disabledItems = [
    /astikorcarts:.*/,
    /afc:(?:birch|maple)_sugar/,
    'afc:rubber_bar',
    /afc:bucket\/.*/,
    /tfc:wood\/boat.*/,
    /afc:wood\/boat.*/,
    /firmalife:(?:cinnamon)/,
    'firmaciv:barometer',
    'firmaciv:sextant',
    'firmalife:tirage_mixture',
    'firmalife:seed_ball',
    /tfc:ceramic\/(:?saw|chisel|scythe).*_mold/,
    /tfcscraping:ceramic\/.*/,
    /tfc:food\/.*(:?bear).*/,
    /cold_sweat:(:?holgin|goar|chameleon|soul).*/,
    /tfchotornot:.*\/(:?bismuth|zinc|gold|silver|sterling_silver)/,
    /rnr:.*(:?pouring|wet|cracked|trodden).*/,
    /^precisionprospecting:ceramic\/.*/,
    /supplementaries:.*(:?lumisene|candle|sconce|lamp|flint|feather|sugar|fodder).*/,
    /supplementaries:.*(:?lapis|stone|gravel|duab|timber|flax).*/,
    /supplementaries:(:?sign_post).*/
]
global.extraSupplementariesDisabled = [
    'soap_block', 'fire_pit', 'lunch_basket', 'quiver', 'speaker_block',
    'goblet', 'altimeter', 'flower_box', 'planter', 'urn', 'jar', 'sack',
    'bamboo_spikes_tipped', 'enderman_head', 'cog_block', 'crank',
    'cannon', 'faucet', 'relayer', 'display', 'bellows', 'dispener_minecart',
    'redstone_illuminator', 'slice_map', 'bomb_blue', 'cannon_ball',
    'pancake', 'candy', 'ash_brick', 'ash'
]
global.disabledFluids = [
    'afc:birch_sap_concentrate',
    'afc:maple_sap_concentrate',
    'afc:latex',
    'firmalife:fruity_fluid', 
    'rnr:concrete',
    'supplementaries:lumisene'
]
global.vanillaDisabled = [
    /minecraft:.*(?:oak|spruce|birch|dark_oak|cherry|jungle|acacia|mangrove|crimson|warped).*/,
    /minecraft:.*(?:andesite|cobblestone|granite|deepslate|blackstone|diorite|quartz|basalt|prismarine|sand|sandstone|sandstone|mud|moss|chiseled|polished|infested|smooth|netherack|end_stone|concrete).*/,
    /minecraft:.*(?:iron|diamond|gold|chainmail|copper|stone).*/,
    /minecraft:.*(?:anvil|shulker|amethyst|potion|candle|seed)/,
    /minecraft:.*froglight/,
    /minecraft:.*(?:podzol|mycelium|dirt|farmland|gravel).*/,
    /minecraft:.*(?:tulip|bush|flower|daisy|lilac|vine|rose|plant).*/,
    /minecraft:.*(?:furnace|minecart|enchant).*/,
    /minecraft:.*(?:mutton|beef|chicken|pumpkin|beetroot|honey).*/,
    'minecraft:grindstone',
    'minecraft:smoker',
    'minecraft:trident',
    'minecraft:torch',
    'minecraft:lantern',
    /minecraft:redstone.*/,
    /minecraft:.*_rail/,
    'minecraft:observer',
    'minecraft:repeater',
    /minecraft:(:?honey|slime).*/,
    'minecraft:fire_charge', 
]