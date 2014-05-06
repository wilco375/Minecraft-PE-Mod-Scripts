//Magic Mirror Mod
//by wilco375

var MirrorId = 455

ModPE.setItem(455,"ender_eye",0,"Magic Mirror");
Item.addCraftRecipe(455,1,0,[264,4,0, 266,4,0, 288,1,0]);
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/g4Uw9yr.png")

function modTick()
{
Id1 = getTile(getPlayerX(),getPlayerY()+1,getPlayerZ())
Id2 = getTile(getPlayerX(),getPlayerY()+2,getPlayerZ())
Id3 = getTile(getPlayerX(),getPlayerY()+3,getPlayerZ())
Id4 = getTile(getPlayerX(),getPlayerY()+4,getPlayerZ())
Id5 = getTile(getPlayerX(),getPlayerY()+5,getPlayerZ())
Id6 = getTile(getPlayerX(),getPlayerY()+6,getPlayerZ())

if(Id1 == 0 && Id2 == 0 && Id3 == 0 && Id4 == 0 && Id5 == 0 && Id6 == 0){
	AirX = getPlayerX()
	AirY = getPlayerY()
	AirZ = getPlayerZ()
	//clientMessage(AirX,AirY,AirZ)
	
	}
}

function useItem(x,y,z,itemId,blockId, side) {
if(itemId == MirrorId){
	Entity.setPosition(Player.getEntity(),AirX,AirY,AirZ)
	clientMessage(ChatColor.GOLD + "[Magic Mirror] " + ChatColor.WHITE + "You see the sunlight once again!")
	//clientMessage("You've been teleported to " + AirX + " " + AirY + " " + AirZ + "!")
	}
}
