//Upgradable ToolsMod WIP version
//by wilco375 
//Textures are from the Thermal Expantion Mod or created by myself

//Item ID's:
var ironDustId = 408
var goldDustId = 409
var SawDustId = 407
var CompressedSawdust = 406
//Pickaxe upgrades
var AutoSmeltPickaxeUpgradeId = 410 
var PulverisePickaxeUpgradeId = 411 
var FortunePickaxeUpgradeId = 412 
var RepairPickaxeUpgradeId = 413
var UnbreakingPickaxeUpgradeId = 414 
var EfficiencyPickaxeUpgradeId = 415 
var SilkTouchPickaxeUpgradeId = 416 
//Axe upgrades
var ChainSawAxeUpgradeId = 417
var UnbreakingAxeUpgradeId = 418


//Only enable the efficiency upgrade if you have a good device, it causes a lot of lag because it has to track all kinds of things every tick to work
var EfficiencyUpgradeOn = 0

var Counter
var Repair
var Random
var extraItem
var dBx
var dBy
var dBz
var lastX
var lastY
var lastZ
var lastDamage
var destroyingBlock
var blockStartDestroying
var blockDestroyed
var EfficiencyOn

//pickaxe upgrades
ModPE.setItem(AutoSmeltPickaxeUpgradeId,"record_cat",0,"Auto-Smelt Pickaxe Upgrade")
ModPE.setItem(PulverisePickaxeUpgradeId,"record_chirp",0,"Pulveriser Pickaxe Upgrade")
ModPE.setItem(FortunePickaxeUpgradeId,"record_mellohi",0,"Fortune Pickaxe Upgrade")
ModPE.setItem(RepairPickaxeUpgradeId,"record_stal",0,"Repair Pickaxe Upgrade")
ModPE.setItem(UnbreakingPickaxeUpgradeId,"record_strad",0,"Unbreaking Pickaxe Upgrade")
ModPE.setItem(EfficiencyPickaxeUpgradeId,"record_wait",0,"Efficiency Pickaxe Upgrade")
ModPE.setItem(SilkTouchPickaxeUpgradeId,"record_ward",0,"Silk-Touch Pickaxe Upgrade")
//other items
ModPE.setItem(ironDustId,"record_far",0,"Iron Dust")
ModPE.setItem(goldDustId,"record_mall",0,"Gold Dust")
ModPE.setItem(SawDustId,"texture",0,"Sawdust")
ModPE.setItem(CompressedSawdust,"texture",0,"Compressed Sawdust")
//funace
Item.addFurnaceRecipe(ironDustId,265,0)
Item.addFurnaceRecipe(goldDustId,266,0)
Item.addFurnaceRecipe(CompressedSawdust,263,0)
//craft pickaxe upgrades
Item.addCraftRecipe(AutoSmeltPickaxeUpgradeId, 1, 0, [61,4,0,263,4,0,264,1,0])
Item.addCraftRecipe(PulverisePickaxeUpgradeId, 1, 0, [257,4,0,42,2,0,1,2,0,264,1,0])
Item.addCraftRecipe(FortunePickaxeUpgradeId, 1, 0, [22,4,0,41,1,0,266,3,0,264,1,0])
Item.addCraftRecipe(RepairPickaxeUpgradeId, 1, 0, [42,4,0,265,4,0,264,1,0])
Item.addCraftRecipe(UnbreakingPickaxeUpgradeId, 1, 0, [49,1,0,42,3,0,1,4,0,264,1,0])
Item.addCraftRecipe(SilkTouchPickaxeUpgradeId, 1, 0, [287,4,0,266,4,0,264,1,0])
if(EfficiencyUpgradeOn == 1){
	Item.addCraftRecipe(EfficiencyPickaxeUpgradeId, 1, 0, [331,4,0,266,4,0,264,1,0])
	Item.setCategory(EfficiencyPickaxeUpgradeId,2)
}
else{
	Item.setCategory(EfficiencyPickaxeUpgradeId,-1)
}
Item.setCategory(AutoSmeltPickaxeUpgradeId,2)
Item.setCategory(PulverisePickaxeUpgradeId,2)
Item.setCategory(FortunePickaxeUpgradeId,2)
Item.setCategory(RepairPickaxeUpgradeId,2)
Item.setCategory(UnbreakingPickaxeUpgradeId,2)
Item.setCategory(SilkTouchPickaxeUpgradeId,2)
//craft other items
Item.addCraftRecipe(CompressedSawdust, 1, 0, [SawDustId,8,0])
Item.setCategory(CompressedSawdust,ItemCategory.DECORATION)

ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/PymUpLQ.png")

function startDestroyBlock(){
	blockStartDestroying = 1
}

function destroyBlock(x,y,z,shouldDropItem){
	blockDestroyed = 1
	xdes = x
	ydes = y
	zdes = z
	dBx = x
	dBy = y
	dBz = z
	runUpgrades()
	//Unbreaking Pickaxe upgrade:
}





function modTick(){

//Efficiency upgrade
if(EfficiencyUpgradeOn == 1){
	velX=(Player.getX()-lastX)/(1/20)
	lastX=Player.getX()
	velY=(Player.getY()-lastY)/(1/20)
	lastY=Player.getY()
	velZ=(Player.getZ()-lastZ)/(1/20)
	lastZ=Player.getZ()
	damage=(Player.getCarriedItemData()-lastDamage)
	lastDamage=Player.getCarriedItemData()
	
	if(blockStartDestroying == 1){
		destroyingBlock = 1
	}
	if(damage != 0){
		destroyingBlock = 1
	}
	if(destroyingBlock == 1 && velX != 0){
		destroyingBlock = 0
		if(EfficiencyOn == 1){
			ModPE.setGameSpeed(20)
			EfficiencyOn = 0
		}
	}
	if(destroyingBlock == 1 && velY != 0){
		destroyingBlock = 0
		if(EfficiencyOn == 1){
			ModPE.setGameSpeed(20)
			EfficiencyOn = 0
		}
	}	
	if(destroyingBlock == 1 && velZ != 0){
		destroyingBlock = 0
		if(EfficiencyOn == 1){
			ModPE.setGameSpeed(20)
			EfficiencyOn = 0
		}
	}
	if(Player.checkForInventoryItem(EfficiencyPickaxeUpgradeId) >= 1 && destroyingBlock == 1){
		ci = Player.getCarriedItem()
		if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
		if(EfficiencyOn != 1){
		if(Player.checkForInventoryItem(EfficiencyPickaxeUpgradeId) <= 5){
			tickSpeed = Player.checkForInventoryItem(EfficiencyPickaxeUpgradeId)*6+20
		}
		else{
			tickSpeed = 50
		}
		ModPE.setGameSpeed(tickSpeed)
		EfficiencyOn = 1
		tickSpeed = 20
		}
		}
	}
	
	blockStartDestroying = 0
	blockDestroyed = 0
}
//Repair upgrade (Only works on selected item)
	if(Counter == null){
		Counter = 1
	}
	if(Counter != 200){
		Counter++
	}
	if(Counter == 200){
		Counter = 1
		if(Player.checkForInventoryItem(RepairPickaxeUpgradeId) == 1){
			Repair = 1
		}
		else if(Player.checkForInventoryItem(RepairPickaxeUpgradeId) >= 2){
			Repair = 2
		}
		if(Player.checkForInventoryItem(RepairPickaxeUpgradeId) >= 1){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0 && Repair == 1){	
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-Repair)
				}
				if(Player.getCarriedItemData() >= 2 && Repair == 2){
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
	return count/2
};

//function that runs all the upgrades
function runUpgrades(){
	x = dBx
	y = dBy
	z = dBz
	ci = getCarriedItem()

//Axe upgrades
	if(ci == 258 || ci == 271 || ci == 275 || ci == 279 || ci == 286){
	if(Player.checkForInventoryItem(ChainSawAxeUpgradeId) >= 1 Player.checkForInventoryItem(SawMillAxeUpgradeId) == 0){
		if(getTile(x,y,z) == 17){
			treeblocksdestroyed = 0
			endoftree = 0
			log = getData(x,y,z)
			for(treey = y+1; treey <= 16; treey++){
				if(getTile(x,treey,z) == 17 && getData(x,treey,z) == log endoftree == 0){
					setTile(x,treey,z,0)
					Level.playSound(x, y, z, "step.wood", 1, 3)
					treeblocksdestroyed++
				}
				else{
					endoftree = 1
				}
			}
		Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+treeblocksdestroyed)
		Level.dropItem(x,y,z,0.25,17,treeblocksdestroyed,log)
		}
	}
	
	//Sawmill Upgrade
	if(Player.checkForInventoryItem(SawMillAxeUpgradeId) >= 1){
		if(getTile == 17){
			preventDefault()
			log = getData(x,y,z)
			setTile(x,y,z,0)
			Level.playSound(x, y, z, "step.wood", 1, 3)
			Level.dropItem(x,y,z,0.25,SawDustId,1,0)
			Level.dropItem(x,y,z,0.25,5,6,log)
			if(Player.checkForInventoryItem(ChainSawAxeUpgradeId) >= 1){
				treeblocksdestroyed = 0
				endoftree = 0
					for(treey = y+1; treey <= 16; treey++){
						if(getTile(x,treey,z) == 17 && getData(x,treey,z) == log endoftree == 0){
							setTile(x,treey,z,0)
							Level.playSound(x, y, z, "step.wood", 1, 3)
							treeblocksdestroyed++
						}
						else{
							endoftree = 1
						}	
					}
			Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+treeblocksdestroyed)
			Level.dropItem(x,y,z,0.25,5,treeblocksdestroyed*6,log)
			Level.dropItem(x,y,z,0.25,SawDustId,treeblocksdestroyed,0)
			}
		}
	}
	
	//Unbreaking Axe Upgrade
	if(Player.checkForInventoryItem(UnbreakingAxeUpgradeId) == 1){
		ExtraDurRandom = Math.floor((Math.random() * 2) + 1)
		if(ExtraDurRandom == 1){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){	
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingAxeUpgradeId) == 2){
		ExtraDurRandom = Math.floor((Math.random() * 3) + 1)
		if(ExtraDurRandom != 3){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingAxeUpgradeId) >= 2){
		ExtraDurRandom = Math.floor((Math.random() * 4) + 1)
		if(ExtraDurRandom != 4){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	
		
	}
		
//Pickaxe upgrades
	//unbreaking
	if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
	if(Player.checkForInventoryItem(UnbreakingPickaxeUpgradeId) == 1){
		ExtraDurRandom = Math.floor((Math.random() * 2) + 1)
		if(ExtraDurRandom == 1){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){	
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingPickaxeUpgradeId) == 2){
		ExtraDurRandom = Math.floor((Math.random() * 3) + 1)
		if(ExtraDurRandom != 3){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	if(Player.checkForInventoryItem(UnbreakingPickaxeUpgradeId) >= 2){
		ExtraDurRandom = Math.floor((Math.random() * 4) + 1)
		if(ExtraDurRandom != 4){
			ci = Player.getCarriedItem()
			if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
				if(Player.getCarriedItemData() != 0){
					Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
				}
			}
		}
	}
	}
//fortune
	if(Player.checkForInventoryItem(FortunePickaxeUpgradeId) == 1){
		Random = Math.floor((Math.random() * 3) + 1);
		if(Random == 1){
			extraItem = 1 
		}
	}
	else if(Player.checkForInventoryItem(FortunePickaxeUpgradeId) == 2){
		Random = Math.floor((Math.random() * 6) + 1);
		if(Random == 1 || Random == 2){
			extraItem = 1
		}
		else if(Random == 6){
			extraItem = 2
		}
	}
	else if(Player.checkForInventoryItem(FortunePickaxeUpgradeId) >= 3){
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
	if(extraItem != 1 && extraItem != 2 && extraItem != 3){
		extraItem = 0
	}
	
	if(Player.checkForInventoryItem(SilkTouchPickaxeUpgradeId) >= 1 && Player.checkForInventoryItem(FortunePickaxeUpgradeId) == 0 && Player.checkForInventoryItem(PulverisePickaxeUpgradeId) == 0 && Player.checkForInventoryItem(AutoSmeltPickaxeUpgradeId) == 0){
		gt = getTile(x,y,z)
		if(gt == 16 || gt == 21 || gt == 73 || gt == 74 || gt == 56 || gt == 2 || gt == 79 || gt == 1 || gt == 80 || gt == 13 || gt == 82 || gt == 47 || gt == 20){
			if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
			if(gt != 74){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,gt,1,0)
			}
			else if(gt == 74){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,73,1,0)
			}
			}
		}
	}
	
	if(Player.checkForInventoryItem(PulverisePickaxeUpgradeId) == 0 && Player.checkForInventoryItem(FortunePickaxeUpgradeId) >= 1){ //fortune, no pulverise (lapis, redstone)
			if(gt == 73 || gt == 74){
				if(ci != 270 && ci != 274){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,331,6+(extraItem*8),0)
				}
			}
			if(gt == 21 && ci != 270){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,351,6+(extraItem*8),4)
			}
		}
	
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		gt = getTile(x,y,z)
		if(Player.checkForInventoryItem(AutoSmeltPickaxeUpgradeId) >= 1){ //autosmelt and changes if also pulverise (gold and iron)
			if(gt == 15 && ci != 270){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				if(Player.checkForInventoryItem(PulverisePickaxeUpgradeId) >= 1){
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
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				if(Player.checkForInventoryItem(PulverisePickaxeUpgradeId) >= 1){
					extraPulverise = 1
					extraItem = extraItem*2
				}
				else{
					extraPulverise = 0
				}
				if(extraItem == null){
					extraItem = 0
				}
				Level.dropItem(x,y,z,0.25,266,Player.checkForInventoryItem(PulverisePickaxeUpgradeId)+1+extraItem,0)
			}
		}
		
		if(Player.checkForInventoryItem(PulverisePickaxeUpgradeId) >= 1 && Player.checkForInventoryItem(AutoSmeltPickaxeUpgradeId) == 0){ //Pulverise and no autosmelt (gold and iron)
			if(gt == 15 && ci != 270){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,ironDustId,2+extraItem,0)
			}
			if(gt == 14 && ci != 270 && ci != 274){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,goldDustId,2+extraItem,0)
			}	
		}
		
		if(Player.checkForInventoryItem(PulverisePickaxeUpgradeId) >= 1){ //Pulveriser upgrade and optinally autosmelt (lapis and redstone)
			if(gt == 73 || gt == 74){
				if(ci != 270 && ci != 274){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,331,8+(extraItem*8),0)
				}
			}
			if(gt == 21 && ci != 270){
				preventDefault()
				Level.playSound(x, y, z, "step.stone", 1, 3);
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,351,8+(extraItem*8),4)
			}
		}
	}
}
