//Colorable Planks Mod
//by wilco375
//Don't share or redistribute this mod using the direct download link. Instead, use the adf.ly link

var coloredPlanksId = 220
var colors = [0xffffff, 0xff8000, 0xff80ff, 0x4040ff, 0xffff00, 0x00ff00, 0xff0080, 0x404040,0xc4c4c4, 0x0080c8, 0x800080, 0x000080, 0x804000, 0x008000, 0x800000, 0x000000];

Block.defineBlock(coloredPlanksId,"Colored Planks",["planks",0],5,0,0)
Block.setColor(coloredPlanksId,colors)
Block.setDestroyTime(coloredPlanksId,2)

function useItem(x,y,z,itemId,blockId){
	if(itemId == 351 && blockId == 5){
		colorPlanks(x,y,z,itemId,blockId)
	}
	if(itemId == 351 && blockId == coloredPlanksId){
		colorPlanks(x,y,z,itemId,blockId)
	}
}

/*
function startDestroyBlock(x,y,z){
	if(getTile(x,y,z) <= coloredPlanksId+15 && getTile(x,y,z) >= coloredPlanksId){
		preventDefault()
		id = getTile(x,y,z)
		setTile(x,y,z,0)
		Level.playSound(x, y, z, "step.wood", 1, 1)
		Level.dropItem(x,y,z,0.5,5,1,0)
		Level.dropItem(x,y,z,0.5,351,1,15-(id-coloredPlanksId))
	}
}
*/

function destroyBlock(x,y,z){
	if(getTile(x,y,z) == coloredPlanksId){
		preventDefault()
		dmg = Level.getData(x,y,z)
		setTile(x,y,z,0)
		Level.playSound(x, y, z, "step.wood", 1, 1)
		Level.dropItem(x,y,z,0.5,5,1,0)
		Level.dropItem(x,y,z,0.5,351,1,15-dmg)
	}
}

function colorPlanks(x,y,z,itemId,blockId){
	theColor = 15-Player.getCarriedItemData()
	setTile(x,y,z,coloredPlanksId,theColor)
	if(Player.getCarriedItemCount == 1){
		Player.clearInventorySlot(Player.getSelectedSlotId())
	}
	else{
		Player.addItemInventory(Player.getCarriedItem(),-1,Player.getCarriedItemData())
	}
}


