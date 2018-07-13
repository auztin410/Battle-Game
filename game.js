function Character(name, profession, gender, experience, strength, agility, intellect, stamina){
    this.name= name;
    this.profession= profession;
    this.gender= gender;
    this.experience= experience;
    this.strength=strength;
    this.agility= agility;
    this.intellect= intellect;
    this.stamina= stamina;
    this.hp= stamina*25;
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
}


var antonath = new Character("Antonath", "Hunter", "Male", 400, 6, 8, 5, 5);
var tethrin = new Character("Tethrin", "Druid", "Male", 0, 4, 7, 6, 7);



antonath.printStats();
tethrin.printStats();
antonath.meleeAttack(tethrin);
antonath.agileAttack(tethrin);
antonath.spellAttack(tethrin);
// tethrin.spellAttack(antonath);
// tethrin.agileAttack(antonath);
antonath.levelUp();
antonath.agileAttack(tethrin);