//Jetpack Mod
//by wilco375

var lastPY
var watertickcount = 0

ModPE.langEdit("item.chestplateChain.name","Jetpack");
Item.addCraftRecipe(303,1,0, [265,3,0,331,1,0,265,1,0,331,2,0,57,1,0,331,1,0])
//ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/1heEotN.png")
//ModPE.overrideTexture("images/armor/chain_1.png", "http://i.imgur.com/7DLrI7j.png")

function modTick(){
currentPY = getPlayerY()
PY1 = getPlayerY() -1
PY2 = getPlayerY() -2
PZ1 = getPlayerZ()
PX1 = getPlayerX()
Block1 = getTile(PX1, PY1, PZ1)
Block2 = getTile(PX1, PY2, PZ1)
chestp = Player.getArmorSlot(1)
if(chestp == 303 && Player.canFly() == false) Player.setCanFly(1)
if(chestp != 303 && Player.canFly() == true){
Player.setCanFly(0)
Player.setFlying(0)
}
if(chestp == 303 && Block1 == 0 && Block2 != 0 && Player.isFlying() == true && lastPY > currentPY){

setTile(PX1,PY1,PZ1,9,0)
watertickcount = 1
waterx = PX1
watery = PY1
waterz = PZ1
}
if(watertickcount == 2){
setTile(waterx,watery,waterz,0,0)
watertickcount = 0}

if(watertickcount != 0) watertickcount++

lastPY = getPlayerY()
}
