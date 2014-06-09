//Upgradable Pickaxes Mod (STILL WIP)
//by wilco375
//Textures are from the Thermal Expantion Mod 

//Item ID's:
var AutoSmeltUpgradeId = 410 //done
var PulveriseUpgradeId = 411 //done
var FortuneUpgradeId = 412 //WORKING?
var RepairUpgradeId = 413 //WIP
var UnbreakingUpgradeId = 414 //working
var ExplosiveUpgradeId = 415 //WIP/causing lag spike
var SilkTouchUpgradeId = 416 //done
var ironDustId = 400
var goldDustId = 401 

var RepairCounter
var Repair
var Random
var extraItem
var dBx
var dBy
var dBz

ModPE.setItem(AutoSmeltUpgradeId,"record_cat",0,"Auto-Smelt Upgrade")
ModPE.setItem(PulveriseUpgradeId,"record_chirp",0,"Pulveriser Upgrade")
ModPE.setItem(FortuneUpgradeId,"record_mellohi",0,"Fortune Upgrade")
ModPE.setItem(RepairUpgradeId,"record_stal",0,"Repair Upgrade")
ModPE.setItem(UnbreakingUpgradeId,"record_strad",0,"Unbreaking Upgrade")
ModPE.setItem(ExplosiveUpgradeId,"record_wait",0,"Explosive Upgrade")
ModPE.setItem(ironDustId,"record_far",0,"Iron Dust")
ModPE.setItem(goldDustId,"record_mall",0,"Gold Dust")
Item.addFurnaceRecipe(ironDustId,265,0)
Item.addFurnaceRecipe(goldDustId,266,0)
Item.addCraftRecipe(AutoSmeltUpgradeId, 1, 0, [61,4,0,263,4,0,264,1,0])
Item.addCraftRecipe(PulveriseUpgradeId, 1, 0, [257,4,0,42,2,0,1,2,0,264,1,0])
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/URVKFJB.png")

function destroyBlock(x,y,z,shouldDropItem){
	xdes = x
	ydes = y
	zdes = z
	dBx = x
	dBy = y
	dBz = z
	if(Player.checkForInventoryItem(ExplosiveUpgradeId) == 0){
	runUpgrades()
	}
	if(Player.checkForInventoryItem(ExplosiveUpgradeId) >= 1){
		for(x-1;x<=1;x++){
			for(y-1;y<=1;y++){
				for(z-1;z<=1;z++){
					runUpgrades()
				}	
			}
		}
		explode(xdes,ydes,zdes,1)
	}
	//Unbreaking upgrade:
	if(Player.checkForInventoryItem(UnbreakingUpgradeId) == 1){
		ExtraDurRandom = Math.floor((Math.random() * 2) + 1)
		if(ExtraDurRandom == 1){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){	
					clientMessage("Prevented your item taking damage")
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingUpgradeId) == 2){
		ExtraDurRandom = Math.floor((Math.random() * 3) + 1)
		if(ExtraDurRandom != 3){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){	
					clientMessage("Prevented your item taking damage")
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingUpgradeId) >= 2){
		ExtraDurRandom = Math.floor((Math.random() * 4) + 1)
		if(ExtraDurRandom != 4){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){
					clientMessage("Prevented your item taking damage")
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	
}




//Pickaxe repair upgrade (Only works on selected item)

function modTick(){
	if(RepairCounter = null){
		RepairCounter = 1
	}
	if(RepairCounter != 200){
		RepairCounter++
	}
	if(RepairCounter == 200){
		RepairCounter = 1
		if(Player.checkForInventoryItem(RepairUpgradeId) == 1){
			Repair = 1
		}
		else if(Player.checkForInventoryItem(RepairUpgradeId) >= 2){
			Repair = 2
		}
		if(Player.checkForInventoryItem(RepairUpgradeId) >= 1){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0 && Repair == 1){	
					clientMessage("Repaired your item")
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-Repair)
				}
				if(Player.getCarriedItemData() >= 2 && Repair == 2){
					clientMessage("Repaired your item")
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-Repair)
				}
			}
		}
	}	
}

//The following custom function is created by Kyurem838 on the minecraft forums:
//(Check out this topic for all the custom functions: http://goo.gl/xT7mFB)
Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};

//function that runs all the upgrades
function runUpgrades(){
	x = dBx
	y = dBy
	z = dBz
	ci = getCarriedItem()
	if(Player.checkForInventoryItem(FortuneUpgradeId) == 1){
		Random = Math.floor((Math.random() * 3) + 1);
		if(Random == 1){
			extraItem = 1 
		}
	}
	else if(Player.checkForInventoryItem(FortuneUpgradeId) == 2){
		Random = Math.floor((Math.random() * 6) + 1);
		if(Random == 1 || Random == 2){
			extraItem = 1
		}
		else if(Random == 6){
			extraItem = 2
		}
	}
	else if(Player.checkForInventoryItem(FortuneUpgradeId) >= 3){
		Random = Math.floor((Math.random() * 15) + 1);
		if(Random >= 1 && Random <= 6){
			extraItem = 1
		}
		else if(Random >= 7 && Random <= 9){
			extraItem = 2
		}
		else if(Random == 15){
			extraItem = 3
		}
	}
	else if(Player.checkForInventoryItem(FortuneUpgradeId) == 0){
		extraItem = 0
	}
	
	if(Player.checkForInventoryItem(SilkTouchUpgradeId) >= 1 && Player.checkForInventoryItem(FortuneUpgradeId) == 0 && Player.checkForInventoryItem(PulveriseUpgradeId) == 0 && Player.checkForInventoryItem(AutoSmeltUpgradeId) == 0){
		gt = getTile(x,y,z)
		if(gt == 16 || gt == 21 || gt == 73 || gt == 74 || gt == 56 || gt == 2 || gt == 79 || gt == 1 || gt == 80 || gt == 13 || gt == 82 || gt == 47 || gt == 20){
			if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
			if(gt != 74){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,gt,1,0)
			}
			else if(gt == 74){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,73,1,0)
			}
			}
		}
	}
	
	if(Player.checkForInventoryItem(PulveriseUpgradeId) == 0 && Player.checkForInventoryItem(FortuneUpgradeId) >= 1){ //fortune, no pulverise (lapis, redstone)
			if(gt == 73 || gt == 74){
				if(ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,331,6+(extraItem*8),0)
				}
			}
			if(gt == 21 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,351,6+(extraItem*8),4)
			}
		}
	
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		gt = getTile(x,y,z)
		if(Player.checkForInventoryItem(AutoSmeltUpgradeId) >= 1){ //autosmelt and changes if also pulverise (gold and iron)
			//clientMessage("3")
			if(gt == 15 && ci != 270){
				preventDefault()
				setTile(x,y,z,0,0)
				if(Player.checkForInventoryItem(PulveriseUpgradeId) >= 1){
					extraPulverise = 1
					extraItem = extraItem*2
				}
				else{
					extraPulverise = 0
				}
				if(extraItem == null){
					extraItem = 0
				}
				Level.dropItem(x,y,z,0.25,265,extraPulverise+1+extraItem,0)
			}
			if(gt == 14 && ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0,0)
				if(Player.checkForInventoryItem(PulveriseUpgradeId) >= 1){
					extraPulverise = 1
					extraItem = extraItem*2
				}
				else{
					extraPulverise = 0
				}
				if(extraItem == null){
					extraItem = 0
				}
				Level.dropItem(x,y,z,0.25,266,Player.checkForInventoryItem(PulveriseUpgradeId)+1+extraItem,0)
			}
		}
		
		if(Player.checkForInventoryItem(PulveriseUpgradeId) >= 1 && Player.checkForInventoryItem(AutoSmeltUpgradeId) == 0){ //Pulverise and no autosmelt (gold and iron)
			if(gt == 15 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,ironDustId,2+extraItem,0)
			}
			if(gt == 14 && ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,goldDustId,2+extraItem,0)
			}	
		}
		
		if(Player.checkForInventoryItem(PulveriseUpgradeId) >= 1){ //Pulveriser upgrade and optinally autosmelt (lapis and redstone)
			if(gt == 73 || gt == 74){
				if(ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,331,8+(extraItem*8),0)
				}
			}
			if(gt == 21 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,351,8+(extraItem*8),4)
			}
		}
	}
}
