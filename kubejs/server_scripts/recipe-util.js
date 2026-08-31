/**
 * Derived from TFC's KubejsTFC thread, Thanks Redeix and TFC :pray:.
 */
function parseIngredients(inputArray) {
    let formattedInputs = [];

    // If inputArray is a string, wrap it in an array to prevent errors. If null, return empty.
    if (typeof inputArray === 'string') {
        inputArray = [inputArray];
    }
    if (!inputArray || !Array.isArray(inputArray)) {
        return [];
    }

    inputArray.forEach(input => {
        // Skip null or undefined entries in the list.
        if (!input) return;
        
        // Regex splits '4x item:name' into ['4x item:name', '4', 'item:name']
        let match = input.match(/^(\d+)x\s+(.+)$/);
        
        // Get count from match array if it wasnt null. Otherwise count = 1.
        let count = match ? parseInt(match[1]) : 1;
        // Get item from match array if it wasnt null.
        let item = match ? match[2] : input;

        // Loop through the count of each item and push to the new array with ingredient handler.
        for (let i = 0; i < count; i++) {
            formattedInputs.push(item);
        }
    });

    return formattedInputs;
};

/** 
 * 
 */
function parseFoodIngredients(inputArray) {
    return parseIngredients(inputArray).map(item => 
        TFC.ingredient.and(item, TFC.ingredient.notRotten())
    );
}

/**
 * Gets all the Item IDs from the game.
 */
function getItemIds(namespaces) {
    if (typeof namespaces === 'string') {
        namespaces = [namespaces];
    }

    const itemIds = Ingredient.all.itemIds;

    if (!namespaces) {
        return itemIds;
    }

    return itemIds.filter(id => namespaces.includes(id.split(':')[0]));
}
let content_mods = ["minecraft", "tfc", "afc", "precisionprospecting", "field", "tfccanes", "tfc_hammer_time", "thermia", "waterflasks"];
// console.log(JSON.stringify(getItemIds(content_mods)));


/**
 * Gets all recipe IDs from the game.
 */
function getRecipeIds(event, namespaces) {
    if (typeof namespaces === 'string') {
        namespaces = [namespaces];
    }
    
    let recipeIds = [];
    
    event.forEachRecipe({}, recipe => {
        const id = recipe.getId().toString();
        const namespace = id.split(':')[0];

        if (!namespaces || namespaces.includes(namespace)) {
            recipeIds.push(id);
        }
    });

    return recipeIds;
}

ServerEvents.recipes(event => {
    // const all = getRecipeIds(event, content_mods);
    // console.log(JSON.stringify(all));
})