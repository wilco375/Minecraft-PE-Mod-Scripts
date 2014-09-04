//Stained Glass Mod
//by wilco375

var color = [0xffffff, 0xff8000, 0xff80ff, 0x4040ff, 0xffff00, 0x00ff00, 0xff0080, 0x404040, 0xc4c4c4, 0x0080c8, 0x800080, 0x000080, 0x804000, 0x008000, 0x800000, 0x000000];
var stainedGlassFirstId = 220

Block.defineBlock(stainedGlassFirstId,"White Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+1,"Orange Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+2,"Magenta Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+3,"Light Blue Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+4,"Yellow Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+5,"Light Green Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+6,"Pink Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+7,"Gray Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+8,"Light Gray Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+9,"Cyan Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+10,"Purple Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+11,"Blue Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+12,"Brown Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+13,"Dark Green Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+14,"Red Stained Glass",["glass",0],20,0,0)
Block.defineBlock(stainedGlassFirstId+15,"Black Stained Glass",["glass",0],20,0,0)

Block.setColor(stainedGlassFirstId,0xffffff)
Block.setColor(stainedGlassFirstId+1,0xff8000)
Block.setColor(stainedGlassFirstId+2,0xff80ff)
Block.setColor(stainedGlassFirstId+3,0x4040ff)
Block.setColor(stainedGlassFirstId+4,0xffff00)
Block.setColor(stainedGlassFirstId+5,0x00ff00)
Block.setColor(stainedGlassFirstId+6,0xff0080)
Block.setColor(stainedGlassFirstId+7,0x404040)
Block.setColor(stainedGlassFirstId+8,0xc4c4c4)
Block.setColor(stainedGlassFirstId+9,0x0080c8)
Block.setColor(stainedGlassFirstId+10,0x800080)
Block.setColor(stainedGlassFirstId+11,0x000080)
Block.setColor(stainedGlassFirstId+12,0x804000)
Block.setColor(stainedGlassFirstId+13,0x008000)
Block.setColor(stainedGlassFirstId+14,0x800000)
Block.setColor(stainedGlassFirstId+15,0x000000)

function useItem(x,y,z,itemId,blockId){
	if(itemId == 351 && blockId == 20){
		colorGlass(x,y,z,itemId,blockId)
	}
	if(itemId == 351){
		if(blockId <= stainedGlassFirstId+15 && blockId >= stainedGlassFirstId){
			colorGlass(x,y,z,itemId,blockId)
		}
	}
}

function destroyBlock(x,y,z){
	if(getTile(x,y,z) <= stainedGlassFirstId+15 && getTile(x,y,z) >= stainedGlassFirstId){
		preventDefault()
		setTile(x,y,z,0)
		Level.playSound(x, y, z, "random.glass", 1, 3)
	}
}

function colorGlass(x,y,z,itemId,blockId){
	theColor = 15-Player.getCarriedItemData()
	setTile(x,y,z,stainedGlassFirstId+theColor,0)
	if(Player.getCarriedItemCount == 1){
		Player.clearInventorySlot(Player.getSelectedSlotId())
	}
	else{
		Player.addItemInventory(Player.getCarriedItem(),-1,Player.getCarriedItemData())
	}
}


