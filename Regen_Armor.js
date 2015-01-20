var hlth = 1
var zro = 0
var counter, previousHealth

ModPE.langEdit("item.helmetChain.name", "Army Helmet");
Item.setMaxDamage(302, 1500);
ModPE.langEdit("item.chestplateChain.name","Bullet Proof Vest");
Item.setMaxDamage(303, 1500);
ModPE.langEdit("item.bootsChain.name","Army Boots");
Item.setMaxDamage(305,1500);
ModPE.langEdit("item.leggingsChain.name", "Bullet Proof Pants");
Item.setMaxDamage(304, 1500);

Item.addShapedRecipe(304, 1, 0, ["rer","r r","r r"], ["r",42, 0, "e",133, 0]);
Item.addShapedRecipe(305, 1, 0, ["   ","r r","r r"], ["r",42, 0, "l",334, 0]);
Item.addShapedRecipe(303, 1, 0, ["e e","rrr","rrr"], ["r",42, 0, "e",133, 0]);
Item.addShapedRecipe(302, 1, 0, ["rer","r r","   "], ["r",42, 0, "e",133, 0]);

function newWorld(){
	clientMessage("Say something when the player joins a world")
}

function modTick(){
	health = Entity.getHealth(getPlayerEnt())
	if(Player.getArmorSlot(0)+Player.getArmorSlot(1)+Player.getArmorSlot(2)+Player.getArmorSlot(3)==1214){
		if(health != 0){
			//Check if the player is hurt
			if(health < previousHealth){
				if(previousHealth-health > 5){
					Player.setHealth(health+5)
				}
				else{
					Player.setHealth(previousHealth)
				}
			}
		}
	}
	previousHealth = Entity.getHealth(getPlayerEnt())
}

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
