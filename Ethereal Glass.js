//Ethereal Glass Mod
//By wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/oCPHE

var EtherealGlassId = 168
var unstableIngotId = 456
var lastX
var lastZ

ModPE.overrideTexture("images/terrain-atlas.tga", "http://i.imgur.com/siiGzEm.png")
Block.defineBlock(EtherealGlassId,"Ethereal Glass ",["mushroom_block_inside",1],20,false,0);
Block.setRenderLayer(EtherealGlassId, 1); 
Item.addCraftRecipe(EtherealGlassId,1,0,[20,8,0,unstableIngotId,1,0])
Item.setCategory(EtherealGlassId,8,0);


ModPE.setItem(unstableIngotId,"iron_ingot",9,"Unstable Ingot")
Item.addCraftRecipe(unstableIngotId,1,0,[264,1,0,265,1,0])




function modTick(){
velX=(Player.getX()-lastX)/(1/20)
lastX=Player.getX()
//clientMessage(velX)
playerxdecimals = getPlayerX() - Math.round(getPlayerX())
blockxpos = getTile(getPlayerX()+1, getPlayerY(), getPlayerZ())
blockxneg = getTile(getPlayerX()-1, getPlayerY(), getPlayerZ())
//clientMessage("x: " + playerxdecimals)
if(playerxdecimals < -0.29 && blockxpos == EtherealGlassId && velX > 0){
Entity.setPosition(getPlayerEnt(),getPlayerX()+0.13,getPlayerY(),getPlayerZ())
//clientMessage("tp+")
}
if(playerxdecimals > 0.28 && blockxneg == EtherealGlassId && velX < 0){
Entity.setPosition(getPlayerEnt(),getPlayerX()-0.13,getPlayerY(),getPlayerZ())
//clientMessage("tp-")
}


velZ=(Player.getZ()-lastZ)/(1/20)
lastZ=Player.getZ()
//clientMessage(velZ)
playerzdecimals = getPlayerZ() - Math.round(getPlayerZ())
blockzpos = getTile(getPlayerX(), getPlayerY(), getPlayerZ()+1)
blockzneg = getTile(getPlayerX()-1, getPlayerY(), getPlayerZ()-1)
//clientMessage("z: " + playerzdecimals)
if(playerzdecimals < -0.29 && blockzpos == EtherealGlassId && velZ > 0){
Entity.setPosition(getPlayerEnt(),getPlayerX(),getPlayerY(),getPlayerZ()+0.13)
//clientMessage("tp+")
}
if(playerzdecimals > 0.28 && blockzneg == EtherealGlassId && velZ < 0){
Entity.setPosition(getPlayerEnt(),getPlayerX(),getPlayerY(),getPlayerZ()-0.13)
//clientMessage("tp-")
}
}
