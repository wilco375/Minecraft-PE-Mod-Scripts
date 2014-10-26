//Building & Mining Wand Mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/tQJ7A

var buildingWand = 420
var miningWand = 421
var buildingWandStage, miningWandStage, buildingX1, buildingX2, buildingY1, buildingY2, buildingZ1, buildingZ2, miningX1, miningX2, miningY1, miningY2, miningZ1, miningZ2, tempXYZ, xMiningBlocks, yMiningBlocks, zMiningBlocks, xBuildingBlocks, yBuildingBlocks, zBuildingBlocks, p, q, buildingBlock, buildingBlockDmg, buildingBlock1, buildingBlockDmg1

ModPE.setItem(buildingWand,"blaze_rod",0,"Building Wand")
ModPE.setItem(miningWand,"magma_cream",0,"Mining Wand")
Item.addCraftRecipe(buildingWand, 1, 0, [57, 1, 0, 280, 2, 0])
Item.addCraftRecipe(miningWand, 1, 0, [264, 1, 0, 57, 1, 0, 264, 1, 0, 280, 2, 0])
Player.addItemCreativeInv(buildingWand,1,0)
Player.addItemCreativeInv(miningWand,1,0)

function useItem(x,y,z,itemId,blockId,side){
 if(itemId == miningWand){
  if(miningWandStage == null || miningWandStage == 0){
   miningWandStage = 1
   miningX1 = x
   miningY1 = y
   miningZ1 = z
  }
  else if(miningWandStage == 1){
   miningWandStage = 0
   miningX2 = x
   miningY2 = y
   miningZ2 = z
   mine()
  }
 }
 if(itemId == buildingWand){
  if(buildingWandStage == null || buildingWandStage == 0){
   buildingWandStage = 1
   buildingX1 = x
   buildingY1 = y
   buildingZ1 = z
   buildingBlock1 = getTile(x,y,z)
   buildingBlockDmg1 = getData(x,y,z)
  }
  else if(buildingWandStage == 1){
   buildingWandStage = 0
   buildingX2 = x
   buildingY2 = y
   buildingZ2 = z
   buildingBlock = getTile(x,y,z)
   buildingBlockDmg = getData(x,y,z)
   build()
  }
 }
}

function mine(){
//make sure XYZ1 IS SMALLER AS XYZ2)
 
 if(miningX2 < miningX1){
  tempXYZ = miningX2
  miningX2 = miningX1
  miningX1 = tempXYZ
 }
 if(miningY2 < miningY1){
  tempXYZ = miningY2
  miningY2 = miningY1
  miningY1 = tempXYZ
 }
 if(miningZ2 < miningZ1){
  tempXYZ = miningZ2
  miningZ2 = miningZ1
  miningZ1 = tempXYZ
 }
 xMiningBlocks = miningX2 - miningX1
 yMiningBlocks = miningY2 - miningY1
 zMiningBlocks = miningZ2 - miningZ1
 if(xMiningBlocks*yMiningBlocks*zMiningBlocks > 2048){
  clientMessage("The area you selected is too large")
 }
 else{
  for(var i = miningX1;i <= miningX2;i++){
   for(var j = miningY1;j <= miningY2;j++){
    for(var k = miningZ1;k <= miningZ2;k++){
     if(getTile(i,j,k) != 0){
      if(Level.getGameMode() == 1){
       setTile(i,j,k,0)
      }
      else{
       p = getTile(i,j,k)
       q = Level.getData(i,j,k)
       if(p == 7 || p == 8 || p == 9 || p == 10 || p == 11 || p == 18 || p == 20 || p == 31 || p == 51 || p == 52 || p == 59 || p == 79 || p == 92 || p == 95 || p == 102 || p == 104 || p == 105 || p == 106 || p == 160 || p == 161 || p == 174) p = 0
       else if(p == 1) Level.dropItem(i,j,k,0.5,4,1,q)
       else if(p == 43) Level.dropItem(i,j,k,0.5,44,2,q)
       else if(p == 125) Level.dropItem(i,j,k,0.5,126,2,q)
       else if(p == 181) Level.dropItem(i,j,k,0.5,182,2,q)
       else if(p == 21) Level.dropItem(i,j,k,0.5,351,4,4)
       else if(p == 47) Level.dropItem(i,j,k,0.5,340,4,0)
       else if(p == 56) Level.dropItem(i,j,k,0.5,264,1,0)
       else if(p == 60 || p == 110 || p == 2) Level.dropItem(i,j,k,0.5,3,1,0)
       else if(p == 62) Level.dropItem(i,j,k,0.5,61,1,0)
       else if(p == 64) Level.dropItem(i,j,k,0.5,324,1,0)
       else if(p == 63 || p == 68) Level.dropItem(i,j,k,0.5,323,1,0)
       else if(p == 73 || p == 74) Level.dropItem(i,j,k,0.5,331,4,0)
       else if(p == 78) Level.dropItem(i,j,k,0.5,332,1,0)
       else if(p == 82) Level.dropItem(i,j,k,0.5,337,4,0)
       else if(p == 83) Level.dropItem(i,j,k,0.5,338,1,0)
       else if(p == 127) Level.dropItem(i,j,k,0.5,351,1,3)
       else if(p == 141) Level.dropItem(i,j,k,0.5,391,1,0)
       else if(p == 142) Level.dropItem(i,j,k,0.5,392,1,0)
       else{Level.dropItem(i,j,k,0.5,p,1,q)}
       setTile(i,j,k,0)
      }
     }
    }
   }
  }
 }
}

function build(){
 if(buildingX2 < buildingX1){
  tempXYZ = buildingX2
  buildingX2 = buildingX1
  buildingX1 = tempXYZ
 }
 if(buildingY2 < buildingY1){
  tempXYZ = buildingY2
  buildingY2 = buildingY1
  buildingY1 = tempXYZ
 }
 if(buildingZ2 < buildingZ1){
  tempXYZ = buildingZ2
  buildingZ2 = buildingZ1
  buildingZ1 = tempXYZ
 }
 xBuildingBlocks = buildingX2 - buildingX1
 yBuildingBlocks = buildingY2 - buildingY1
 zBuildingBlocks = buildingZ2 - buildingZ1
 if(xBuildingBlocks*yBuildingBlocks*zBuildingBlocks > 2048){
  clientMessage("The area you selected is too large")
 }
 else if(buildingBlockDmg1 != buildingBlockDmg || buildingBlock1 != buildingBlock){
  clientMessage("The area will be filled with the blocks you selected, so please select two of the same blocks!")
 }
 else{
  var l = 0
  for(var i = buildingX1;i <= buildingX2;i++){
   for(var j = buildingY1;j <= buildingY2;j++){
    for(var k = buildingZ1;k <= buildingZ2;k++){
     if(getTile(i,j,k) == 0 || getTile(i,j,k) == 31) l++
    }
   }
  }
  if(Player.checkForInventoryItem(buildingBlock,l,buildingBlockDmg) || Level.getGameMode() == 1){
   if(Level.getGameMode() == 0) Player.removeItemInventory(buildingBlock,l,buildingBlockDmg)
   for(var i = buildingX1;i <= buildingX2;i++){
    for(var j = buildingY1;j <= buildingY2;j++){
     for(var k = buildingZ1;k <= buildingZ2;k++){
      if(getTile(i,j,k) == 0 || getTile(i,j,k) == 31){
       var b = buildingBlock
       var d = buildingBlockDmg
       setTile(i,j,k,b,d)
       //clientMessage("replaced, xyz= "+i+" "+j+" "+k+" b= "+b+" dmg= "+d)
      }
     }
    }
   }
  }
  else if(l != 0){clientMessage("You don't have enough items in your inventory (" + l + ")")}
 }
}

Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};

Player.removeItemInventory = function(id, amount, damage) {
if(amount != 0){
	if(!amount) amount = 255 * 255;
	if(!damage) damage = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) {
   count += Player.getInventorySlotCount(i);
		Player.clearInventorySlot(i);
	}
	if(count > amount) Player.addItemInventory(id, count - amount, damage);
}
}

getData = function(x,y,z){
 return Level.getData(x,y,z)
}
