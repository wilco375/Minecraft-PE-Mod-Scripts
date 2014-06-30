//UltraMiner Mod
//by wilco375
//Idea by Zipperink on the MC Forums (Thanks for the tip/idea)

var UltraMinerId = 250
var giveUltraMiner

ModPE.setItem(UltraMinerId,"fireworks_charge_overlay",0,"Ultra Miner",1)
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/trFNulJ.png")
Item.addCraftRecipe(250,1,0,[278,2,0, 289,7,0]);

function modTick(){
if(giveUltraMiner == 1 && amount != 0){
Player.addItemInventory(UltraMinerId,amount,0)
giveUltraMiner = 0}}
function useItem(x,y,z,itemId,blockId,side){
if(itemId == UltraMinerId){
	if(side != 0 && side != 1){
			Player.clearInventorySlot(Player.getSelectedSlotId())
	}
xstart = x
ystart = getPlayerY()
zstart = z
if(side == 4){
//clientMessage("go")

var y = ystart+4
for(var x = xstart; x <= xstart+64; x++)
	{
			for(var z = zstart-5; z <= zstart+5; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 1,0);
}
}}





for(var x = xstart; x <= xstart+64; x++)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var z = zstart-5; z <= zstart+5; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
}
}
}
}

for(x = xstart + 4; x <= xstart+64; x = x+5){
if(getTile(x,ystart-1,zstart) == 0 && getTile(x,ystart-2,zstart) != 0){
setTile(x,ystart-1,zstart,50,0)}}


}



if(side == 5){
//clientMessage("go")

var y = ystart+4
for(var x = xstart; x >= xstart-64; x--)
	{
			for(var z = zstart-5; z <= zstart+5; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 1,0);
//clientMessage(x + " " + y + " " + z) 
}
}}




for(var x = xstart; x >= xstart-64; x--)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var z = zstart-5; z <= zstart+5; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
//clientMessage(x + " " + y + " " + z)
}
}
}
}

for(x = xstart - 4; x >= xstart-64; x = x-5){
//clientMessage("torch")
if(getTile(x,ystart-1,zstart) == 0 && getTile(x,ystart-2,zstart) != 0){
setTile(x,ystart-1,zstart,50,0)
//clientMessage(x + " " + y + " " + z) 
}}


}

if(side == 2){
//clientMessage("go")

var y = ystart+4
for(var z = zstart; z <= zstart+64; z++)
	{
			for(var x = xstart-5; x <= xstart+5; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 1,0);
}
}}




for(var z = zstart; z <= zstart+64; z++)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var x = xstart-5; x <= xstart+5; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
}
}
}
}

for(z = zstart + 4; z <= zstart+64; z = z+5){
if(getTile(xstart,ystart-1,z) == 0 && getTile(xstart,ystart-2,z) != 0){
setTile(xstart,ystart-1,z,50,0)
//clientMessage(x + " " + y + " " + z) 
}}
}

if(side == 3){
//clientMessage("go")

var y = ystart+4
for(var z = zstart; z >= zstart-64; z--)
	{
			for(var x = xstart-5; x <= xstart+5; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 1,0);
//clientMessage(x + " " + y + " " + z) 
}
}}




for(var z = zstart; z >= zstart-64; z--)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var x = xstart-5; x <= xstart+5; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
//clientMessage(x + " " + y + " " + z)
}
}
}
}

for(z = zstart - 4; z >= zstart-64; z = z-5){
//clientMessage("torch")
if(getTile(xstart,ystart-1,z) == 0 && getTile(xstart,ystart-2,z) != 0){
setTile(xstart,ystart-1,z,50,0)
//clientMessage(x + " " + y + " " + z) 
}}


}


}
}
