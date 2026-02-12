ServerEvents.recipes(event => {
    let removeId = []

    removeId.forEach(recipeId => {
        event.remove({id: recipeId})
    })

    let removeMod = [
        'supplementaries', 
        'chalk', 
        'labels', 
        'clayworks',
        'minecraft'
    ]

    removeMod.forEach(recipeMod => {
        event.remove({mod: recipeMod})
    })

    
})