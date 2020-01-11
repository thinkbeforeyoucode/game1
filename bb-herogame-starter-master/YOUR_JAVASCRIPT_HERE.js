// Write your JS here
let hero = {
    name: 'redRanger',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { 'type': 'Power Sword', 'damage': 2 }
}

function equipWeapon(person) {
    if (person.inventory.length === 0)
// if (person.inventory === undefined)
    // I don't know why the line above wont work.. tried several possibilities  
    {return person;}
    else 
    {person.weapon = person.inventory[0];} 
    return person;
}

function pickUpItem(person, weapon) {
  weapon.push(inventory[0])
  // SHOULD Adds the weapon object as the last element of the inventory array of person

}

function rest(person) {
    if (person.health === 10) {
        alert("You are full of energy!")
    } else { person.health = 10 }

    return person;
}
// yes!

function displayStats() {

}
