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