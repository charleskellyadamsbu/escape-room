const readline = require('readline-sync');

const name = readline.question("What is your name? ");

let isDead = false;
let hasKey = false;
let won = false;

while(!isDead) {
    console.log("1. Put hand in hole.");
    console.log("2. Find the key, or");
    console.log("3. Open the door");
    const choice = readline.questionInt('Choice: ');

    switch(choice) {
        case 1:
            isDead = true;
            console.log(name + " died!");
        break;

        case 2:
            if(hasKey == false) {
                hasKey = true;
                console.log("You found the key!");
            } else if(hasKey == true) {
                console.log("You already found the key!");
            }

        break;

        case 3:
            if(hasKey == false) {
                console.log("You need to find the key first!");
            } else if(hasKey == true) {
                won = true;
                console.log(name + " has successfuly escaped the room!");
            }
        break;

        default:
            console.log("Invalid choice.");
        break;
    }

    if(won == true) {
        break;
    }
}