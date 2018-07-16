// Requirement for inquirer npm.
var inquirer = require("inquirer");

// Creating the character layout for stats and the functions for combat.
function Character(name, profession, gender, experience, strength, agility, intellect, stamina, potion){
    this.name= name;
    this.profession= profession;
    this.gender= gender;
    this.experience= experience;
    this.strength=strength;
    this.agility= agility;
    this.intellect= intellect;
    this.stamina= stamina;
    this.hp= stamina*25;
    this.potion= potion
    this.level=Math.floor(experience/200);
    this.printStats= function(){
        console.log("Name: " + this.name);
        console.log("Class: " + this.profession);
        console.log("Gender: " + this.gender);
        console.log("Experience: " + this.experience);
        console.log("Strength: " + this.strength);
        console.log("Agility: " + this.agility);
        console.log("Intellect: " + this.intellect);
        console.log("Stamina: " + this.stamina);
        console.log("HP: " + this.hp);
        console.log("Level: " + this.level);
        console.log("Potions: " + this.potion);
    }
    this.meleeAttack= function(player){
        player.hp= player.hp-this.strength;
        console.log(this.name + " attacked with a strong blow and did " + this.strength + " damage, leaving " + player.name + " with " + player.hp + " HP.")
    }
    this.agileAttack= function(player){
        player.hp= player.hp-this.agility;
        console.log(this.name + " attacked swiftly and did " + this.agility + " damage, leaving " + player.name + " with " + player.hp + " HP.")
    }
    this.spellAttack= function(player){
        player.hp= player.hp-this.intellect;
        console.log(this.name +" cast a spell and did " + this.intellect + " damage, leaving " + player.name + " with " + player.hp + " HP.")
    }
    this.levelUp= function(){
        this.strength +=1;
        this.agility +=1;
        this.intellect +=1;
        this.stamina +=3;
        this.hp= this.stamina*25;
        console.log("Congratulations you just leveled!");
        
        this.printStats();
    }
    this.usePotion= function(){
        if(this.potion > 0){
            this.hp += 50;
            this.potion -+1;
            console.log("You use a potion and recover 50 HP, you current HP is " + this.hp) + "You now have " + this.potion + " potions left";
        }
        else{
            console.log("You have no potions to use.");
            // Need to add the function to recall the action prompts.
        }
    }
}

// Creating the various creatures and opponents.
var antonath = new Character("Antonath", "Hunter", "Male", 400, 6, 8, 5, 5, 1);
var tethrin = new Character("Tethrin", "Druid", "Male", 0, 4, 7, 6, 7, 1);
var goblin = new Character("Goblin", "Skirmisher", "Male", 50, 5, 5, 4, 5, 2, 0);
var kobold = new Character("Kobold", "Mage", "Male", 50, 2, 3, 8, 1, 0);
var orc = new Character("Orc", "Warrior", "Male", 100, 8, 5, 3, 5, 0);
var rogue = new Character("Rogue", "Rogue", "Female", 200, 3, 9, 2, 4, 1);


// Printing out stats and testing combat.
antonath.printStats();
goblin.printStats();
kobold.printStats();
orc.printStats();
rogue.printStats();


// Character creation function definition.
function characterCreation(){
    inquirer.prompt([
        {
            name: "name",
            type: "text",
            message: "Choose a name for your adventurer."
        },
        {
            name: "gender",
            choices: ["Male", "Female"],
            message: "Choose the gender of your adventurer.",
            type: "list"
        },
        {
            name: "profession",
            choices: ["Warrior", "Druid", "Paladin", "Hunter", "Rogue", "Mage"],
            message: "Choose your adventurer's class.",
            type: "list"
        }
        
    ]).then(function(answers){
        
        switch(answers.profession){

            case "Warrior":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 8, 5, 3, 7, 1);
            break;

            case "Druid":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 6, 7, 5, 6, 1);
            break;

            case "Paladin":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 7, 3, 7, 8, 1);
            break;

            case "Hunter":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 4, 7, 3, 8, 1);
            break;

            case "Rogue":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 4, 8, 4, 5, 1);
            break;

            case "Mage":
            var newAdventurer = new Character(answers.name, answers.gender, answers.profession, 0, 1, 3, 10, 4, 2);
            break;
        }

        newAdventurer.printStats();
    });
}

// Launches the character creation prompt.
characterCreation();
// Create a recursive loop for prompting.

// Create switch case inside the recursive loop for class ability choice prompts.

// Create IF statement for deciding when combat is done by either player or opponent death.

// Create a continue adventure prompt to end recussive loop when player wants to stop.