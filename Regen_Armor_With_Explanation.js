var hlth = 1
var zro = 0
var counter, previousHealth

//Option 1; regenerate a heart every 100 ticks
function modTick() {
	//This will make sure the regen occurs every 100 ticks. Every tick one will be added to the counter variable. 
	//As soon as this variable gets to 100, it'll heal one heart and go back to 0
	if(counter == null) counter = 0
	if(counter < 100) counter++
	else{
		counter = 0
		//After 100 ticks apply the regen if the player is wearing the right armor
		if(Player.getArmorSlot(0)+Player.getArmorSlot(1)+Player.getArmorSlot(2)+Player.getArmorSlot(3)==1214){
			Player.setHealth(Entity.getHealth(getPlayerEnt()) + hlth)
		} 
	}
}

//Option 2; reduce 5 hearts of damage
function modTick(){
	health = Entity.getHealth(getPlayerEnt())
	//It doesn't help to regen if a player has already died
	if(health != 0){
		//Check if the player is hurt
		if(health < previousHealth){
			//Make sure the player doesn't receive more hearts from the regen as he lost by receiving damage;
			//If the player received more than 5 hearts of damage, heal 5 hearts
			if(previousHealth-health > 5){
				Player.setHealth(health+5)
			}
			//Else if the player didn't receive more than 5 hearts of damage, just set his health back to the previous value
			else{
				Player.setHealth(previousHealth())
			}
		}
	}
	previousHealth = Entity.getHealth(getPlayerEnt())
}



//Remove one durability from the armor if the player is attacked and delete the armorpiece if it hit it's maximum durability of 1500
function attackHook(attacker, victim){
	if(victim == getPlayerEnt()){
		if(Player.getArmorSlot(0) == 302){
			if(Player.getArmorSlotDamage(0) != 1500){
				Player.setArmorSlot(0, 302, Player.getArmorSlotDamage(0)+1)
			}
			else{
				Player.setArmorSlot(0,0)
			}
		}
		if(Player.getArmorSlot(1) == 303){
			if(Player.getArmorSlotDamage(1) != 1500){
				Player.setArmorSlot(1, 303, Player.getArmorSlotDamage(1)+1)
			}
			else{
				Player.setArmorSlot(0,0)
			}
		}
		if(Player.getArmorSlot(2) == 304){
			if(Player.getArmorSlotDamage(2) != 1500){
				Player.setArmorSlot(2, 304, Player.getArmorSlotDamage(2)+1)
			}
			else{
				Player.setArmorSlot(0,0)
			}
		}
		if(Player.getArmorSlot(3) == 305){
			if(Player.getArmorSlotDamage(3) != 1500){
				Player.setArmorSlot(3, 305, Player.getArmorSlotDamage(3)+1)
			}
			else{
				Player.setArmorSlot(0,0)
			}
		}
	}
}

//Define armorpieces and set a maximum damage value
ModPE.langEdit("item.helmetChain.name", "Army Helmet");
Item.setMaxDamage(302, 1500);
ModPE.langEdit("item.chestplateChain.name","Bullet Proof Vest");
Item.setMaxDamage(303, 1500);
ModPE.langEdit("item.bootsChain.name","Army Boots");
Item.setMaxDamage(305,1500);
ModPE.langEdit("item.leggingsChain.name", "Bullet Proof Pants");
Item.setMaxDamage(304, 1500);

//Add some crafting recipes
Item.addShapedRecipe(304, 1, 0, ["rer","r r","r r"], ["r",42, 0, "e",133, 0]);
Item.addShapedRecipe(305, 1, 0, [" ","r r","r r"], ["r",42, 0, "l",334, 0]);
Item.addShapedRecipe(303, 1, 0, ["e e","rrr","rrr"], ["r",42, 0, "e",133, 0]);
Item.addShapedRecipe(302, 1, 0, ["rer","r r"," "], ["r",42, 0, "e",133, 0]);
