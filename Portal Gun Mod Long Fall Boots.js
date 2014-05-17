//Long Fall Boots Mod
//by wilco375

tickcount = 0
watertickcount = 0
ModPE.langEdit("item.bootsChain.name","Long Fall Boots");
ModPE.setItem(460,"hopper",0,"Long Fall Boot")
Item.addCraftRecipe(460,1,0, [265,6,0, 1,1,0, 264,2,0])
Item.setCategory(460,4)
Item.addCraftRecipe(305,1,0, [460,2,0])
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/OYznGRZ.png ")
ModPE.overrideTexture("images/armor/chain_1.png", " http://i.imgur.com/M1tWIjs.png ")

function modTick(){
PY3 = getPlayerY() -1
PY1 = getPlayerY() -3
PY2 = getPlayerY() -5
PZ1 = getPlayerZ()
PX1 = getPlayerX()
Block1 = getTile(PX1, PY1, PZ1)
Block2 = getTile(PX1, PY2, PZ1)
boots = Player.getArmorSlot(3)

if(boots == 305 && Block1 == 0 && Block2 != 0 && tickcount == 0){
setTile(PX1,PY3,PZ1,9,0)
watertickcount = 1
waterx = PX1
watery = PY3
waterz = PZ1
tickcount = 1
}
if(watertickcount == 2){
setTile(waterx,watery,waterz,0,0)
watertickcount = 0}


if(tickcount !=0){
if(tickcount != 10){
tickcount++}
else if(tickcount == 10){
tickcount = 0}}

if(watertickcount != 0){
watertickcount++}
}
