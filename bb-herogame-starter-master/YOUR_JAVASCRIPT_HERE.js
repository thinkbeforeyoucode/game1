// Write your JS here


// Adds the weapon object as the last element of the inventory array of person


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
    // I don't know why the line above wont work..  
    {return person;}
    else 
    {person.weapon = person.inventory[0];} 
    return person;
}



function equipWeapon(person) {
    person.weapon = person[health]
    
    }

function pickUpItem(person, weapon) {
  weapon.push(inventory[0])
  // Need: .....

}

function rest(person) {
    if (person.health === 10) {
        alert("You are full of energy!")
    } else { person.health = 10 }

    return person;
}



function equipWeapon(person) {
    person.weapon = person.inventory[0];
   // And reassigns the `weapon` property of person to the first element of the person.inventory array
   return person;
}



function displayStats() {

}