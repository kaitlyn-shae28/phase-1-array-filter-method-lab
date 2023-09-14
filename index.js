function findMatching(names, nameWanted){
    return names.filter((name) => name.toLowerCase() === nameWanted.toLowerCase())
}

function fuzzyMatch(names, letter){
    return names.filter((name) => name.startsWith(letter))
}

function matchName(drivers, data){
    return drivers.filter(driver => driver.name === data)
}