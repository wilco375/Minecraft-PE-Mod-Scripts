//Upgradable Pickaxes Mod (STILL WIP)
//by wilco375
//Textures are from the Thermal Expantion Mod

//Item ID's:
var AutoSmeltUpgradeId = 410
var PulveriseUpgradeId = 411 
var FortuneUpgradeId = 412
var RepairUpgradeId = 413
var UnbreakingUpgradeId = 414
var ExplosiveUpgrade = 415
var ironDustId = 400
var goldDustId = 401 

var RepairICounter
var RepairIICounter

ModPE.setItem(AutoSmeltUpgradeId,"record_cat",0,"Auto-Smelt Upgrade")
ModPE.setItem(PulveriseUpgradeId,"record_chirp",0,"Pulveriser Upgrade")
ModPE.setItem(FortuneUpgradeId,"record_mellohi",0,"Fortune Upgrade")
ModPE.setItem(RepairUpgradeId,"record_stal",0,"Repair Upgrade")
ModPE.setItem(UnbreakingUpgradeId,"record_strad",0,"Unbreaking Upgrade")
ModPE.setItem(ExplosiveUpgrade,"record_wait",0,"Explosive Upgrade")
ModPE.setItem(ironDustId,"record_far",0,"Iron Dust")
ModPE.setItem(goldDustId,"record_mall",0,"Gold Dust")
Item.addFurnaceRecipe(ironDustId,265,0)
Item.addFurnaceRecipe(goldDustId,266,0)
Item.addCraftRecipe(AutoSmeltUpgradeId, 1, 0, [61,4,0,263,4,0,264,1,0])
Item.addCraftRecipe(PulveriseUpgradeId, 1, 0, [257,4,0,42,2,0,1,2,0,264,1,0])
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/URVKFJB.png")

//function modTick(){
//	if(RepairICounter = null){
//		RepairICounter = 0
//		RepairIICounter = 0
//	}
//	if(RepairICounter != 200){
//		RepairICounter++
//	}
//	if(RepairIICounter != 100){
//		RepairIICounter++
//	}
//	if(RepairICounter == 200){
//		RepairICounter = 0
//		if(Player.checkForInventoryItem(RepairUpgradeId) == 1){
//			for(var i = 0; i <= 36; i++){
//				gis = Player.getInventorySlot(i)
//				if(gis == 257 || gis == 270 || gis == 274 || gis == 278 || gis == 285){
//					if(Player.getInventorySlotData(i)  != 0 ){
//						
//					}
//				}
//			}
//		}
//	}
//}



function destroyBlock(x,y,z,shouldDropItem){
	ci = getCarriedItem()
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		gt = getTile(x,y,z)
		if(Player.checkForInventoryItem(AutoSmeltUpgradeId) >= 1){ //autosmelt and changes if also pulverise (gold and iron)
			//clientMessage("3")
			if(gt == 15 && ci != 270){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,265,Player.checkForInventoryItem(PulveriseUpgradeId)+1,0)
			}
			if(gt == 14 && ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,266,Player.checkForInventoryItem(PulveriseUpgradeId)+1,0)
			}
		}
		
		if(Player.checkForInventoryItem(PulveriseUpgradeId) == 1 && Player.checkForInventoryItem(AutoSmeltUpgradeId) == 0){ //Pulverise and no autosmelt (gold and iron)
			if(gt == 15 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,ironDustId,2,0)
			}
			if(gt == 14 && ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,goldDustId,2,0)
			}	
		}
		
		if(Player.checkForInventoryItem(PulveriseUpgradeId) == 1){ //Pulveriser upgrade and optinally autosmelt (lapis and redstone)
			if(gt == 73 || gt == 74){
				if(ci != 270 && ci != 274){
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,331,8,0)
				}
			}
			if(gt == 21 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,351,8,4)
			}
		}
	}
}

	

//The following custom function is created by Kyurem838 on the minecraft forums:
//(Check out this topic: http://goo.gl/xT7mFB)
Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};
