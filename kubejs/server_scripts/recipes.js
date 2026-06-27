ServerEvents.recipes(event => {
    let tfc = event.recipes.tfc;


    function twoByTwo(result, input) {
        event.shaped(result, ['XX', 'XX'], {X: input});
    }

    function threeByThree(result, input) {
        event.shaped(result, ['XXX', 'XXX', 'XXX'], {X: input});
    }

    function brickRecipe(result, input, cat) {
        event.shaped(result, ['XXX', 'XCX', 'XXX'], {X: input, C: cat});
    }

    function stairCrafting(result, input) {
        event.shaped(result, ['XV', 'XX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }
    function slabCrafting(result, input) {
        event.shaped(result, ['XXV'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 2);
    }
    function wallCrafting(result, input) {
        event.shaped(result, ['V  ', 'XXX'], {X: input, V: '#c:tools/chisel'}).damageIngredient('#c:tools/chisel', 3);
    }

    function chiselSlab(result, input) {
        tfc.chisel(result, input, 'tfc:slab').extraDrop(result);
    }
    function chiselStair(result, input) {
        tfc.chisel(result, input, 'tfc:stair');
    }
    function chiselPolished(result, input) {
        tfc.chisel(result, input, 'tfc:smooth');
    }
})