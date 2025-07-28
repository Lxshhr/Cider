function anvilRuleHelper(rules) {
    if (rules.length == 1 || rules.length > 3) return rules
    let newRules = Array(3).fill(null)
    let fallback = []
    let notLastCount = 0
    let firstRules = {
        'last': 0,
        'second_last': 1,
        'third_last': 2
    }

    for (let rule of rules) {
        let iRule = rule.substring(rule.indexOf('_') + 1)
        if (firstRules[iRule] !== undefined) {
            let index = firstRules[iRule]
            if (newRules[index] !== null) {
                return rules
            }
            newRules[index] = rule
        } else if (iRule === 'not_last' || iRule === 'any') {
            if (iRule === 'not_last') notLastCount++
            fallback.push(rule)
        }
    }
    if (notLastCount >= 3) return rules
    
    for (let rule of fallback) {
        let iRule = rule.substring(rule.indexOf('_') + 1)
        let startIndex = (iRule === 'not_last') ? 1 : 0
        for (let i = startIndex; i < 3; i++) {
            if (newRules[i] === null) {
                newRules[i] = rule
                break
            }
        }
    }
    return newRules.filter(rule => rule !== null)
}

function notRotten(ingredient) {
    return TFC.ingredient.notRotten(ingredient)
}