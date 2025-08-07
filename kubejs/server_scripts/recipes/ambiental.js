// const registerAmbientalRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {

//     furTypes.forEach(fur => {
//         event.shaped(`tfc_textile:${fur}_hat`, ['ABA', 'ACN'], {A: '#forge:string', B: `tfc_textile:${fur}_fur`, C: 'minecraft:leather_helmet', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//         event.shaped(`tfc_textile:${fur}_shirt`, ['ACA', 'ABN'], {A: '#forge:string', B: `tfc_textile:${fur}_fur`, C: 'minecraft:leather_chestplate', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//         event.shaped(`tfc_textile:${fur}_pants`, ['ACA', 'ABN'], {A: '#forge:string', B: `tfc_textile:${fur}_fur`, C: 'minecraft:leather_leggings', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//         event.shaped(`tfc_textile:${fur}_boots`, ['ABA', 'ACN'], {A: '#forge:string', B: `tfc_textile:${fur}_fur`, C: 'minecraft:leather_boots', N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//     })

//     for (let [cloth, clothId] of Object.entries(clothType)) {
//         event.shaped(`tfcambiental:${cloth}_hat`, ['ABN', 'B B'], {A: '#forge:string', B: `cfc:cut_${cloth}_cloth`, N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//         event.shaped(`tfcambiental:${cloth}_shirt`, ['A B', 'BCB', 'NBA'], {A: '#forge:string', B: `cfc:cut_${cloth}_cloth`, C: clothId,  N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//         event.shaped(`tfcambiental:${cloth}_pants`, ['ACN', 'B B', 'B A'], {A: '#forge:string', B: `cfc:cut_${cloth}_cloth`, C:clothId, N: 'tfc:bone_needle'}).damageIngredient('tfc:bone_needle')
//     }
// }