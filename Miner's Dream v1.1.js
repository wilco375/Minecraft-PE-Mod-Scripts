//Miner's Dream Mod
//by wilco375
//Idea by Zipperink on the MC Forums (Thanks for the tip/idea)

var MinDrId = 250
var MinDrLength = 64
var MinDrWidth = 5 //(Take the width you want, substract 1, and then divide it by 2, for example, if you want it to be 21 blocks wide, fill in 10, because 21-1=20, 20/2=10)
var givemindr

Block.defineBlock(152,"Redstone Block",["redstone_block",0],20,1,0);
Block.setDestroyTime(152,1);
Item.addCraftRecipe(152,1,0,[331,9,0]);
Item.setCategory(152,8,0);

ModPE.setItem(MinDrId,"fireworks_charge_overlay",0,"Miner's Dream")
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/xzj1cmR.png")
Item.addCraftRecipe(250,1,0,[81,3,0, 152,3,0, 289,3,0]);

function modTick(){
if(givemindr == 1 && amount != 0){
Player.addItemInventory(MinDrId,amount,0)
givemindr = 0}}

function useItem(x,y,z,itemId,blockId,side){

if(itemId == MinDrId){
if(side != 0 && side != 1){
amount = Player.getCarriedItemCount() - 1
Player.clearInventorySlot(Player.getSelectedSlotId())
givemindr = 1}
xstart = x
ystart = getPlayerY()
zstart = z
if(side == 4){
//clientMessage("go")

var y = ystart+4
for(var x = xstart; x <= xstart+MinDrLength; x++)
	{
			for(var z = zstart-MinDrWidth; z <= zstart+MinDrWidth; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 4,0);
}
}}




for(var x = xstart; x <= xstart+MinDrLength; x++)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var z = zstart-MinDrWidth; z <= zstart+MinDrWidth; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
}
}
}
}

for(x = xstart + 4; x <= xstart+MinDrLength; x = x+5){
if(getTile(x,ystart-1,zstart) == 0 && getTile(x,ystart-2,zstart) != 0){
setTile(x,ystart-1,zstart,50,0)}}


}



if(side == 5){
//clientMessage("go")

var y = ystart+4
for(var x = xstart; x >= xstart-MinDrLength; x--)
	{
			for(var z = zstart-MinDrWidth; z <= zstart+MinDrWidth; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 4,0);
//clientMessage(x + " " + y + " " + z) 
}
}}




for(var x = xstart; x >= xstart-MinDrLength; x--)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var z = zstart-MinDrWidth; z <= zstart+MinDrWidth; z++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
//clientMessage(x + " " + y + " " + z)
}
}
}
}

for(x = xstart - 4; x >= xstart-MinDrLength; x = x-5){
//clientMessage("torch")
if(getTile(x,ystart-1,zstart) == 0 && getTile(x,ystart-2,zstart) != 0){
setTile(x,ystart-1,zstart,50,0)
//clientMessage(x + " " + y + " " + z) 
}}


}

if(side == 2){
//clientMessage("go")

var y = ystart+4
for(var z = zstart; z <= zstart+MinDrLength; z++)
	{
			for(var x = xstart-MinDrWidth; x <= xstart+MinDrWidth; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 4,0);
}
}}




for(var z = zstart; z <= zstart+MinDrLength; z++)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var x = xstart-MinDrWidth; x <= xstart+MinDrWidth; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
}
}
}
}

for(z = zstart + 4; z <= zstart+MinDrLength; z = z+5){
if(getTile(xstart,ystart-1,z) == 0 && getTile(xstart,ystart-2,z) != 0){
setTile(xstart,ystart-1,z,50,0)
//clientMessage(x + " " + y + " " + z) 
}}
}

if(side == 3){
//clientMessage("go")

var y = ystart+4
for(var z = zstart; z >= zstart-MinDrLength; z--)
	{
			for(var x = xstart-MinDrWidth; x <= xstart+MinDrWidth; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 0 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12){
				setTile(x, y, z, 4,0);
//clientMessage(x + " " + y + " " + z) 
}
}}




for(var z = zstart; z >= zstart-MinDrLength; z--)
	{
		for(var y = ystart-1; y <= ystart+3; y++)
		{
			for(var x = xstart-MinDrWidth; x <= xstart+MinDrWidth; x++)
			{
					tile = getTile(x,y,z)
				 if(tile == 1 || tile == 2 || tile == 3 || tile == 13 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 24){
				setTile(x, y, z, 0);
//clientMessage(x + " " + y + " " + z)
}
}
}
}

for(z = zstart - 4; z >= zstart-MinDrLength; z = z-5){
//clientMessage("torch")
if(getTile(xstart,ystart-1,z) == 0 && getTile(xstart,ystart-2,z) != 0){
setTile(xstart,ystart-1,z,50,0)
//clientMessage(x + " " + y + " " + z) 
}}


}


}
}

