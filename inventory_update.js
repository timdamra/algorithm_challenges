// https://learn.freecodecamp.org/coding-interview-prep/algorithms/inventory-update/
// check old inventory 
// update old one with new items
// return alphabetically sorted array

// solution that utilizes native JS functional methods

function updateInventory(arr1, arr2) {
    let newArr = [...arr1, ...arr2]  

    const oldInventory = newArr  
    .reduce((acc, curr) => {
        let item = curr[1]
        let amount = curr[0]

        if (!acc[item]) {
        acc[item] = amount
        }
                
        if (acc[item] && acc[item] !== amount) {      
        acc[item] += amount
        }

        return acc
    }, {})

    return Object  
    .keys(oldInventory).map(val => {
        return [oldInventory[val], val]
    })
    .sort((a, b) => {
        return a[1] > b[1]
    })  
}
  
updateInventory([
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]
], [
    [2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]
])
