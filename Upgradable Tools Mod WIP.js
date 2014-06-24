//Upgradable Tools Mod WIP version
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
var SawMillAxeUpgradeId = 419
var RepairAxeUpgradeId = 420
//Shovel upgrades
var ExcavatorShovelUpgradeId = 421
var SilkTouchShovelUpgradeId = 422
var UnbreakingShovelUpgradeId = 423
var RepairShovelUpgradeId = 424
//Sword upgrades
var SharpnessUpgradeId = 425 
var FireAspectUpgradeId = 426 
var KnockbackUpgradeId = 427 
var SwordRepairUpgradeId = 428 
var SwordUnbreakingUpgradeId = 429 
//Universal upgrades
var UniversalRepairUpgradeId = 430
var UniversalUnbreakingUpgradeId = 431
//Hoe upgrades
var RadiusUpgradeId = 432 
var HoeRepairUpgradeId = 433 
var HoeUnbreakingUpgradeId = 434 

//Only enable the efficiency upgrade if you have a high-end device, it can cause a lot of lag.
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

//Hoe upgrades
ModPE.setItem(RadiusUpgradeId,"emerald",0,"Radius Hoe Upgrade")
Item.addCraftRecipe(RadiusUpgradeId, 1, 0, [292,4,0,265,4,0,264,1,0])
Item.setCategory(RadiusUpgradeId,2)
ModPE.setItem(HoeRepairUpgradeId,"record_stal",0,"Hoe Repair Upgrade")
Item.addCraftRecipe(HoeRepairUpgradeId, 1, 0, [42,2,0,292,2,0,265,4,0,264,1,0])
Item.setCategory(HoeRepairUpgradeId,2)
//Sword upgrades
ModPE.setItem(SharpnessUpgradeId,"minecart_chest",0,"Sharpness Sword Upgrade")
Item.addCraftRecipe(SharpnessUpgradeId, 1, 0, [42,1,0,265,4,0,267,4,0,264,1,0])
Item.setCategory(SharpnessUpgradeId,2)
ModPE.setItem(FireAspectUpgradeId,"minecart_furnace",0,"Fire Aspect Sword Upgrade")
Item.addCraftRecipe(FireAspectUpgradeId, 1, 0, [259,4,0,87,4,0,264,1,0])
Item.setCategory(FireAspectUpgradeId,2)
ModPE.setItem(KnockbackUpgradeId,"minecart_hopper",0,"Knockback Sword Upgrade")
Item.addCraftRecipe(KnockbackUpgradeId, 1, 0, [64,4,0,42,2,0,265,2,0,264,1,0])
Item.setCategory(KnockbackUpgradeId,2)
ModPE.setItem(SwordRepairUpgradeId,"record_stal",0,"Repair Sword Upgrade")
Item.addCraftRecipe(SwordRepairUpgradeId, 1, 0, [42,2,0,267,2,0,265,4,0,264,1,0])
Item.setCategory(SwordRepairUpgradeId,2)
ModPE.setItem(SwordUnbreakingUpgradeId,"minecart_normal",0,"Unbreaking Sword Upgrade")
Item.addCraftRecipe(SwordUnbreakingUpgradeId, 1, 0, [49,1,0,42,3,0,1,3,0,267,1,0,264,1,0])
Item.setCategory(SwordUnbreakingUpgradeId,2)
//Universal upgrades
ModPE.setItem(UniversalRepairUpgradeId,"emerald",0,"Universal Repair Upgrade")
Item.addCraftRecipe(UniversalRepairUpgradeId, 1, 0, [42,4,0,265,4,0,57,1,0])
Item.setCategory(UniversalRepairUpgradeId,2)
ModPE.setItem(UniversalUnbreakingUpgradeId,"minecart_tnt",0,"Universal Unbreaking Upgrade")
Item.addCraftRecipe(UniversalUnbreakingUpgradeId, 1, 0, [49,1,0,42,3,0,265,4,0,57,1,0])
Item.setCategory(UniversalUnbreakingUpgradeId,2)
//Pickaxe upgrades
ModPE.setItem(AutoSmeltPickaxeUpgradeId,"record_cat",0,"Auto-Smelt Pickaxe Upgrade")
ModPE.setItem(PulverisePickaxeUpgradeId,"record_chirp",0,"Pulveriser Pickaxe Upgrade")
ModPE.setItem(FortunePickaxeUpgradeId,"record_mellohi",0,"Fortune Pickaxe Upgrade")
ModPE.setItem(RepairPickaxeUpgradeId,"record_stal",0,"Repair Pickaxe Upgrade")
ModPE.setItem(UnbreakingPickaxeUpgradeId,"record_strad",0,"Unbreaking Pickaxe Upgrade")
ModPE.setItem(EfficiencyPickaxeUpgradeId,"record_wait",0,"Efficiency Pickaxe Upgrade")
ModPE.setItem(SilkTouchPickaxeUpgradeId,"record_ward",0,"Silk-Touch Pickaxe Upgrade")
//Axe upgrades
ModPE.setItem(ChainSawAxeUpgradeId,"quiver",0,"Chainsaw Axe Upgrade")
ModPE.setItem(UnbreakingAxeUpgradeId,"map_empty",0,"Unbreaking Axe Upgrade")
ModPE.setItem(SawMillAxeUpgradeId,"melon_speckled",0,"Sawmill Axe Upgrade")
ModPE.setItem(RepairAxeUpgradeId,"record_stal",0,"Repair Axe Upgrade")
//Shovel upgrades
ModPE.setItem(ExcavatorShovelUpgradeId,"record_11",0,"Excavator Shovel Upgrade")
ModPE.setItem(SilkTouchShovelUpgradeId,"record_ward",0,"Silk-Touch Shovel Upgrade")
ModPE.setItem(UnbreakingShovelUpgradeId,"map_filled",0,"Unbreaking Shovel Upgrade")
ModPE.setItem(RepairShovelUpgradeId,"record_stal",0,"Repair Shovel Upgrade")
//Other items
ModPE.setItem(ironDustId,"record_far",0,"Iron Dust")
ModPE.setItem(goldDustId,"record_mall",0,"Gold Dust")
ModPE.setItem(SawDustId,"record_blocks",0,"Sawdust")
ModPE.setItem(CompressedSawdust,"record_13",0,"Compressed Sawdust")
//Funace
Item.addFurnaceRecipe(ironDustId,265,0)
Item.addFurnaceRecipe(goldDustId,266,0)
Item.addFurnaceRecipe(CompressedSawdust,263,1)
//Craft pickaxe upgrades
Item.addCraftRecipe(AutoSmeltPickaxeUpgradeId, 1, 0, [61,4,0,263,4,0,264,1,0])
Item.addCraftRecipe(PulverisePickaxeUpgradeId, 1, 0, [257,4,0,42,2,0,1,2,0,264,1,0])
Item.addCraftRecipe(FortunePickaxeUpgradeId, 1, 0, [22,4,0,41,1,0,266,3,0,264,1,0])
Item.addCraftRecipe(RepairPickaxeUpgradeId, 1, 0, [42,2,0,257,2,0,265,4,0,264,1,0])
Item.addCraftRecipe(UnbreakingPickaxeUpgradeId, 1, 0, [49,1,0,42,3,0,1,3,0,257,1,0,264,1,0])
Item.addCraftRecipe(SilkTouchPickaxeUpgradeId, 1, 0, [287,4,0,266,3,0,257,1,0,264,1,0])
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
//Craft Axe recipes
Item.addCraftRecipe(ChainSawAxeUpgradeId, 1, 0, [258,4,0,265,4,0,264,1,0])
Item.addCraftRecipe(UnbreakingAxeUpgradeId, 1, 0, [49,1,0,42,2,0,265,1,0,1,3,0,258,1,0,264,1,0])
Item.addCraftRecipe(SawMillAxeUpgradeId, 1, 0, [258,2,0,42,2,0,265,4,0,264,1,0])
Item.addCraftRecipe(RepairAxeUpgradeId, 1, 0, [42,2,0,265,4,0,258,2,0,264,1,0])
Item.setCategory(RepairAxeUpgradeId,2)
Item.setCategory(SawMillAxeUpgradeId,2)
Item.setCategory(UnbreakingAxeUpgradeId,2)
Item.setCategory(ChainSawAxeUpgradeId,2)
//Craft Shovel recipes
Item.addCraftRecipe(ExcavatorShovelUpgradeId, 1, 0, [256,4,0,265,4,0,264,1,0])
Item.addCraftRecipe(SilkTouchShovelUpgradeId, 1, 0, [287,4,0,266,3,0,256,1,0,264,1,0])
Item.addCraftRecipe(UnbreakingShovelUpgradeId, 1, 0, [49,1,0,42,3,0,1,3,0,256,1,0,264,1,0])
Item.addCraftRecipe(RepairShovelUpgradeId, 1, 0, [42,2,0,265,4,0,256,2,0,264,1,0])
Item.setCategory(RepairShovelUpgradeId,2)
Item.setCategory(UnbreakingShovelUpgradeId,2)
Item.setCategory(SilkTouchShovelUpgradeId,2)
Item.setCategory(ExcavatorShovelUpgradeId,2)
//craft other items
Item.addCraftRecipe(CompressedSawdust, 1, 0, [SawDustId,8,0])
Item.setCategory(CompressedSawdust,ItemCategory.DECORATION)

ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/waF0tGR.png")

function useItem(x,y,z,itemId,blockId,side){
	if(ci == 290 || ci == 291 || ci == 292 || ci == 293 || ci == 294){
		if(blockId == 2 || blockId == 3){
//Radius upgrade
			if(Player.checkForInventoryItem(RadiusUpgradeId) >= 1){
			ci = getCarriedItem()
				for(xf = x-1; xf <= x+1; xf++){
					for(zf = z-1; zf <= z+1; zf++){
						if(getTile(xf,y,zf) == 2 || getTile(xf,y,zf) == 3){
							if(getTile(xf,y+1,zf) == 0){
							setTile(xf,y,zf,60,0)
							}
						}
					}
				}
			}
		}
//Hoe unbreaking upgrade
		unbreakId = HoeUnbreakingUpgradeId
		unbreak()
		unbreakId = UniversalUnbreakingUpgradeId
		unbreak()
	}
}

function startDestroyBlock(){
	blockStartDestroying = 1
}

function destroyBlock(x,y,z,side){
	blockDestroyed = 1
	xdes = x
	ydes = y
	zdes = z
	dBx = x
	dBy = y
	dBz = z
	blockSide = side
	runUpgrades()
//Unbreaking Pickaxe upgrade
}

function attackHook(attacker, victim){
	if(attacker == getPlayerEnt()){
	ci = getCurrentItem()
	if(ci ==  267 || ci == 268 || ci == 272 || ci == 276 || ci == 283){
//Sword unbreaking upgrade
		unbreakId = SwordUnbreakingUpgradeId
		unbreak()
		unbreakId = UniversalUnbreakingUpgradeId
		unbreak()
//Knockback upgrade
//code by and used with permission of Metamorposis_2 
//Check out his enchantment mod here: http://www.minecraftforum.net/topic/2721107-enchantment-mod-enchant-swordshovelpickaxeaxehoenow-enchant-any-tools/
		if(Player.checkForInventoryItem(KnockbackUpgradeId) == 1){
			if(getYaw() < 0){
				var hit = getYaw()+90;
        			for(go=0; hit<0; go++){
        				hit+= 360;
        			}
        			x = Math.cos(hit*(Math.PI/180));
        			z = Math.sin(hit*(Math.PI/180));
        			setVelX(v, x*2);
        			setVelY(v, 1);
        			setVelZ(v, z*2);
        		}
			else if(getYaw() > 0 && getYaw() < 360){
        			var hit = getYaw()+90;
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel= Math.sin(hit*(Math.PI/180));
            			setVelX(v, XVel*2);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*2);
        		}
        		else if( getYaw() >= 360){
            			var hit= getYaw()+90;
            			for(go=0; hit>=360; go++){
        				hit -= 360;
        			}
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel = Math.sin(hit*(Math.PI/180));
			        setVelX(v, XVel*2);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*2);
          
    			}
		}
		else if(Player.checkForInventoryItem(KnockbackUpgradeId) == 2){
			if(getYaw() < 0){
				var hit = getYaw()+90;
        			for(go=0; hit<0; go++){
        				hit+= 360;
        			}
        			x = Math.cos(hit*(Math.PI/180));
        			z = Math.sin(hit*(Math.PI/180));
        			setVelX(v, x*3);
        			setVelY(v, 1);
        			setVelZ(v, z*3);
        		}
			else if(getYaw() > 0 && getYaw() < 360){
        			var hit = getYaw()+90;
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel= Math.sin(hit*(Math.PI/180));
            			setVelX(v, XVel*3);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*3);
        		}
        		else if( getYaw() >= 360){
            			var hit= getYaw()+90;
            			for(go=0; hit>=360; go++){
        				hit -= 360;
        			}
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel = Math.sin(hit*(Math.PI/180));
			        setVelX(v, XVel*3);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*3);
          
    			}
		}
		else if(Player.checkForInventoryItem(KnockbackUpgradeId) >= 3){
			if(getYaw() < 0){
				var hit = getYaw()+90;
        			for(go=0; hit<0; go++){
        				hit+= 360;
        			}
        			x = Math.cos(hit*(Math.PI/180));
        			z = Math.sin(hit*(Math.PI/180));
        			setVelX(v, x*4);
        			setVelY(v, 1);
        			setVelZ(v, z*4);
        		}
			else if(getYaw() > 0 && getYaw() < 360){
        			var hit = getYaw()+90;
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel= Math.sin(hit*(Math.PI/180));
            			setVelX(v, XVel*4);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*4);
        		}
        		else if( getYaw() >= 360){
            			var hit= getYaw()+90;
            			for(go=0; hit>=360; go++){
        				hit -= 360;
        			}
            			XVel = Math.cos(hit*(Math.PI/180));
            			ZVel = Math.sin(hit*(Math.PI/180));
			        setVelX(v, XVel*4);
            			setVelY(v, 1);
            			setVelZ(v, ZVel*4);
          
    			}
		}
//Sword sharpness upgrade
		if(Player.checkForInventoryItem(SharpnessUpgradeId) >= 1 && Player.checkForInventoryItem(SharpnessUpgradeId) <= 4){
			sa = Player.checkForInventoryItem(SharpnessUpgradeId)/2
			if(Entity.getHealth(victim) >= sa){
				Entity.setHealth(victim, Entity.getHealth(victim)-sa)
			}
			else{
				Entity.setHealth(victim, 0)
			}
		}
		else if(Player.checkForInventoryItem(SharpnessUpgradeId) >= 5){
			if(Entity.getHealth(victim) >= 2.5){
				Entity.setHealth(victim, Entity.getHealth(victim)-2.5)
			}
			else{
				Entity.setHealth(victim, 0)
			}
		}
		if(Player.checkForInventoryItem(FireAspectUpgradeId) == 1){
			Entity.setFireTicks(victim, 4)
		}
		if(Player.checkForInventoryItem(FireAspectUpgradeId) >= 2){
			Entity.setFireTicks(victim, 8)
		}
	}}
}

function modTick(){
ci = getCarriedItem()
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

	if(Counter == null){
		Counter = 1
	}
	if(Counter != 200){
		Counter++
	}
	if(Counter == 200){
		Counter = 1
//universal repair	
		if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285 || ci == 256 || ci == 269 || ci == 273 || ci == 277 || ci == 284 || ci ==  267 || ci == 268 || ci == 272 || ci == 276 || ci == 283 || ci == 258 || ci == 271 || ci == 275 || ci == 279 || ci == 286 || ci == 290 || ci == 291 || ci == 292 || ci == 293 || ci == 294){
			RepairId = UniversalRepairUpgradeId
			repair()
		}
//Pick Repair upgrade (Only works on selected item)
	if(UniversalRepairUpgradeId == 0){
		if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
			RepairId = RepairPickaxeUpgradeId
			repair()
		}
//Axe repair
		if(ci == 256 || ci == 269 || ci == 273 || ci == 277 || ci == 284){
			RepairId = RepairAxeUpgradeId
			repair()
		}
//Sword repair
		if(ci ==  267 || ci == 268 || ci == 272 || ci == 276 || ci == 283){
			RepairId = SwordRepairUpgradeId
			repair()
		}		
//Shovel repair
		if(ci == 258 || ci == 271 || ci == 275 || ci == 279 || ci == 286){
			RepairId = RepairShovelUpgradeId
			repair()
		}		
//Hoe repair
		if(ci == 290 || ci == 291 || ci == 292 || ci == 293 || ci == 294){
			RepairId = RepairShovelUpgradeId
			repair()
		}				
	}}
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
	side = blockSide
//Shovel upgrades
	if(ci == 256 || ci == 269 || ci == 273 || ci == 277 || ci == 284){
		if(Player.checkForInventoryItem(ExcavatorShovelUpgradeId) >= 1){
			if(side == 4 || side == 5){
				blocksMined = 0
				for(zdes = z-1;zdes<=z+1;zdes++){
					for(ydes = y-1;ydes <= y+1;ydes++){
						t = getTile(x,ydes,zdes)
						d = Level.getData(x,ydes,zdes)
							if(t == 2 || t == 3 || t == 12 || t == 13 || t == 82 || t == 80){
								setTile(x,ydes,zdes,0,0)
								if(t == 2 || t == 3){
									Level.playSound(x, ydes, zdes, "step.grass", 1, 3)
								}
								if(t == 12){
									Level.playSound(x, ydes, zdes, "step.sand", 1, 3)
								}
								if(t == 13 || t == 82){
									Level.playSound(x, ydes, zdes, "step.gravel", 1, 3)
								}
								if(t == 80){
									Level.playSound(x, ydes, zdes, "step.cloth", 1, 3)
								}
								blocksMined++
								if(Player.checkForInventoryItem(SilkTouchShovelUpgradeId) == 0){
									if(t == 80){
										Level.dropItem(x,ydes,zdes,0.25,332,4,d)	
									}
									if(t == 2){
										Level.dropItem(x,ydes,zdes,0.25,3,4,d)	
									}
									else{
										Level.dropItem(x,ydes,zdes,0.25,t,1,d)
									}
								}
								else{
								Level.dropItem(x,ydes,zdes,0.25,t,1,d)									
								}
							}
						}
					}
				
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+blocksMined)
			}
			else if(side == 2 || side == 3){
				blocksMined = 0
				for(xdes = x-1;xdes<=x+1;xdes++){
					for(ydes = y-1;ydes <= y+1;ydes++){
						t = getTile(xdes,ydes,z)
						d = Level.getData(xdes,ydes,z)
							if(t == 2 || t == 3 || t == 12 || t == 13 || t == 82 || t == 80){
								setTile(xdes,ydes,z,0,0)
								if(t == 2 || t == 3){
									Level.playSound(xdes, ydes, z, "step.grass", 1, 3)
								}
								if(t == 12){
									Level.playSound(xdes, ydes, z, "step.sand", 1, 3)
								}
								if(t == 13 || t == 82){
									Level.playSound(xdes, ydes, z, "step.gravel", 1, 3)
								}
								if(t == 80){
									Level.playSound(xdes, ydes, z, "step.cloth", 1, 3)
								}
								blocksMined++
								if(Player.checkForInventoryItem(SilkTouchShovelUpgradeId) == 0){
									if(t == 80){
										Level.dropItem(xdes,ydes,z,0.25,332,4,d)	
									}
									if(t == 2){
										Level.dropItem(xdes,ydes,z,0.25,3,4,d)	
									}
									else{
										Level.dropItem(x,ydes,zdes,0.25,t,1,d)
									}
								}
								else{
								Level.dropItem(xdes,ydes,z,0.25,t,1,d)									
								}
							}
						}
					}
				
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+blocksMined)
			}
			else if(side == 0 || side == 1){
				blocksMined = 0
				for(xdes = x-1;xdes<=x+1;xdes++){
					for(zdes = z-1;zdes <= z+1;zdes++){
						t = getTile(xdes,y,zdes)
						d = Level.getData(xdes,y,zdes)
							if(t == 2 || t == 3 || t == 12 || t == 13 || t == 82 || t == 80){
								setTile(xdes,y,zdes,0,0)
								if(t == 2 || t == 3){
									Level.playSound(xdes, y, zdes, "step.grass", 1, 3)
								}
								if(t == 12){
									Level.playSound(xdes, y, zdes, "step.sand", 1, 3)
								}
								if(t == 13 || t == 82){
									Level.playSound(xdes, y, zdes, "step.gravel", 1, 3)
								}
								if(t == 80){
									Level.playSound(xdes, y, zdes, "step.cloth", 1, 3)
								}
								blocksMined++
								if(Player.checkForInventoryItem( SilkTouchShovelUpgradeId) == 0){
									if(t == 80){
										Level.dropItem(xdes,y,zdes,0.25,332,4,d)	
									}
									if(t == 2){
										Level.dropItem(xdes,y,zdes,0.25,3,4,d)	
									}
									else{
										Level.dropItem(x,ydes,zdes,0.25,t,1,d)
									}
								}
								else{
								Level.dropItem(xdes,y,zdes,0.25,t,1,d)									
								}
							}
						}
					}
				
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+blocksMined)
			}
		}
//Unbreaking Shovel Upgrade
		unbreakId = UnbreakingShovelUpgradeId
		unbreak()
		unbreakId = UniversalUnbreakingUpgradeId
		unbreak()
//Silk Touch Shovel upgrade
		if(Player.checkForInventoryItem(ExcavatorShovelUpgradeId) == 0 && Player.checkForInventoryItem(SilkTouchShovelUpgradeId) >= 1){
			t = getTile(x,y,z)
			d = Level.getData(x,y,z)
			if(t == 2 || t == 80){
				preventDefault()
				if(t == 2){
					Level.playSound(x, y, z, "step.grass", 1, 3)
				}
				if(t == 80){
					Level.playSound(x, y, z, "step.cloth", 1, 3)
				}
				if(t == 79){
					Level.playSound(x, y, z, "random.glass", 1, 3)
				}
				if(t == 89 || t == 20){
					Level.playSound(x, y, z, "random.glass", 1, 3)
				}
				if(t == 13 || t == 82){
					Level.playSound(x, y, z, "step.gravel", 1, 3)
				}
				Level.dropItem(x,y,z,0.25,t,1,d)
			}	
		}
	}

//Axe upgrades
	if(ci == 258 || ci == 271 || ci == 275 || ci == 279 || ci == 286){
	if(Player.checkForInventoryItem(ChainSawAxeUpgradeId) >= 1 && Player.checkForInventoryItem(SawMillAxeUpgradeId) == 0){
		if(getTile(x,y,z) == 17){
			treeblocksdestroyed = 0
			endoftree = 0
			log = Level.getData(x,y,z)
			for(treey = y+1; treey <= y+16; treey++){
				if(getTile(x,treey,z) == 17 && Level.getData(x,treey,z) == log && endoftree == 0){
					setTile(x,treey,z,0)
					Level.playSound(x, y, z, "step.wood", 1, 3)
					treeblocksdestroyed++
				}
				else{
					endoftree = 1
				}
			}
			if(treeblocksdestroyed >= 1){
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+treeblocksdestroyed)
				Level.dropItem(x,y,z,0.25,17,treeblocksdestroyed,log)
			}
		}
	}
	
//Sawmill Upgrade	
if(Player.checkForInventoryItem(SawMillAxeUpgradeId) >= 1){
		if(getTile(x,y,z) == 17){
			preventDefault()
			log = Level.getData(x,y,z)
			setTile(x,y,z,0)
			Level.playSound(x, y, z, "step.wood", 1, 3)
			Level.dropItem(x,y,z,0.25,SawDustId,1,0)
			Level.dropItem(x,y,z,0.25,5,6,log)
			if(Player.checkForInventoryItem(ChainSawAxeUpgradeId) >= 1){
				treeblocksdestroyed = 0
				endoftree = 0
					for(treey = y+1; treey <= y+16; treey++){
						if(getTile(x,treey,z) == 17 && Level.getData(x,treey,z) == log && endoftree == 0){
							setTile(x,treey,z,0)
							Level.playSound(x, y, z, "step.wood", 1, 3)
							treeblocksdestroyed++
						}
						else{
							endoftree = 1
						}	
					}
			if(treeblocksdestroyed >= 1){
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()+treeblocksdestroyed)
				Level.dropItem(x,y,z,0.25,5,treeblocksdestroyed*6,log)
				Level.dropItem(x,y,z,0.25,SawDustId,treeblocksdestroyed,0)
			}
		}
	}
	
	//Unbreaking Axe Upgrade
	unbreakId = UnbreakingAxeUpgradeId
	unbreak()
	unbreakId = UniversalUnbreakingUpgradeId
	unbreak()
	}
}
		
//Pickaxe upgrades
	//unbreaking
	if(ci == 257 || ci == 274 || ci == 270 || ci == 278 || ci == 285){
		unbreakId = UnbreakingPickaxeUpgradeId
		unbreak()
		unbreakId = UniversalUnbreakingUpgradeId
		unbreak()
		gt = getTile(x,y,z)
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
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,gt,1,0)
				if(t == 2){
					Level.playSound(x, y, z, "step.grass", 1, 3)
				}
				if(t == 80){
					Level.playSound(x, y, z, "step.cloth", 1, 3)
				}
				if(t == 89 || t == 20 || t == 79){
					Level.playSound(x, y, z, "random.glass", 1, 3)
				}
				if(t == 13 || t == 82){
					Level.playSound(x, y, z, "step.gravel", 1, 3)
				}
				else{
					Level.playSound(x, y, z, "step.stone", 1, 3)	
				}
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

function repair(){
	if(Player.checkForInventoryItem(RepairId) == 1){
		Repair = 1
	}
	else if(Player.checkForInventoryItem(RepairId) >= 2){
		Repair = 2
	}
	if(Player.checkForInventoryItem(RepairId) >= 1){
		ci = Player.getCarriedItem()
			if(Player.getCarriedItemData() != 0 && Repair == 1){	
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-Repair)
			}
			if(Player.getCarriedItemData() >= 2 && Repair == 2){
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-Repair)
			}
	}
}

function unbreak(){
	if(unbreakId != UniversalUnbreakingUpgradeId && Player.checkForInventoryItem(UniversalUnbreakingUpgradeId) == 0){
		unbreak2()
	}
	else if(unbreakId == UniversalUnbreakingUpgradeId){
		unbreak2()
	}
}
	
function unbreak2(){
	if(Player.checkForInventoryItem(unbreakId) == 1){
		ExtraDurRandom = Math.floor((Math.random() * 2) + 1)
		if(ExtraDurRandom == 1){
			ci = Player.getCarriedItem()
			if(Player.getCarriedItemData() != 0){	
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
			}
		}
	}
	if(Player.checkForInventoryItem(unbreakId) == 2){
	ExtraDurRandom = Math.floor((Math.random() * 3) + 1)
		if(ExtraDurRandom != 3){
		ci = Player.getCarriedItem()
			if(Player.getCarriedItemData() != 0){
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
			}
		}
	}
	if(Player.checkForInventoryItem(unbreakId) >= 3){
	ExtraDurRandom = Math.floor((Math.random() * 4) + 1)
		if(ExtraDurRandom != 4){
			ci = Player.getCarriedItem()
			if(Player.getCarriedItemData() != 0){
				Entity.setCarriedItem(getPlayerEnt(), ci, Player.getCarriedItemCount(), Player.getCarriedItemData()-1)
			}
		}
	}
}
