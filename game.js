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