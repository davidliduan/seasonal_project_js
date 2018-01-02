// Define Pokemon class here

//	William Wong: william_pokemon.js

var pokeBowl = [];	// Note: Not referring to Hawaiian fish salad here (but it is very tasty).

// JavaScript classes introduced in ECMAScript 2015.
class Pokemon {	
	
	//	Constructor. Creates a Pokemon class.
	constructor(name, type, hp, def, atk, legend) {
		if (typeof(name) !== "string" || typeof(type) !== "string" || typeof(hp) !== "number" || typeof(def) !== "number" || typeof(atk) !== "number" || typeof(legend) !== "boolean"){
			alert('Invalid input!');
		}
		else{
			this.name = name;
			this.type = type;
			this.hp = hp;
			this.def = def;
			this.atk = atk;
			this.legend = legend;
			
			pokeBowl.push(this);
		}
	}
	
	//	METHOD: .attack(target)
	//	Attacks the target Pokemon. The target has its HP reduced equivalent to (attacker's ATK - target's DEF).
	//	This method checks to see if the target is a Pokemon; if not, it alerts the user appropriately and no action is taken.
	attack(target){
		if (target instanceof Pokemon){
			// Prevent defender from gaining HP if DEF > ATK. Does not throw an error.
			if ((this.atk - target.def) < 0){
				console.log("No damage dealt; target DEF > attacker's ATK!");
			}
			else{
				target.hp = target.hp - (this.atk - target.def);
			}
		}
		else{
			alert("Target is not a Pokemon!");
		}
	}
	
	//	METHOD: .aliveCheck()
	//	Check if the Pokemon in question has fainted or not. If HP <= 0, returns false; else returns true.
	//	By default, returns false in case the user tries to call alivecheck() on a non-Pokemon.
	aliveCheck(){
		if (this.hp > 0){
			return true;
		}
		return false;
	}
	
}

//	Class property: all
//	When invoked, returns an array that calls all previously constructed Pokemon instances.
Pokemon.all = pokeBowl;






// exporting
module.exports={
    pokemon:Pokemon
}