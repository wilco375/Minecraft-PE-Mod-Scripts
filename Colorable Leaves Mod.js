//Colorable Leaves Mod
//by wilco375

var coloredleavesFirstId = 220

Block.defineBlock(coloredleavesFirstId,"White colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+1,"Orange colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+2,"Magenta colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+3,"Light Blue colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+4,"Yellow colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+5,"Light Green colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+6,"Pink colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+7,"Gray colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+8,"Light Gray colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+9,"Cyan colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+10,"Purple colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+11,"Blue colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+12,"Brown colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+13,"Dark Green colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+14,"Red colored leaves",["leaves_opaque",0],18,0,0)
Block.defineBlock(coloredleavesFirstId+15,"Black colored leaves",["leaves_opaque",0],18,0,0)

Block.setColor(coloredleavesFirstId,[0xffffff])
Block.setColor(coloredleavesFirstId+1,[0xff8000])
Block.setColor(coloredleavesFirstId+2,[0xff80ff])
Block.setColor(coloredleavesFirstId+3,[0x4040ff])
Block.setColor(coloredleavesFirstId+4,[0xffff00])
Block.setColor(coloredleavesFirstId+5,[0x00ff00])
Block.setColor(coloredleavesFirstId+6,[0xff0080])
Block.setColor(coloredleavesFirstId+7,[0x404040])
Block.setColor(coloredleavesFirstId+8,[0xc4c4c4])
Block.setColor(coloredleavesFirstId+9,[0x0080c8])
Block.setColor(coloredleavesFirstId+10,[0x800080])
Block.setColor(coloredleavesFirstId+11,[0x000080])
Block.setColor(coloredleavesFirstId+12,[0x804000])
Block.setColor(coloredleavesFirstId+13,[0x008000])
Block.setColor(coloredleavesFirstId+14,[0x800000])
Block.setColor(coloredleavesFirstId+15,[0x202020])

function useItem(x,y,z,itemId,blockId){
	if(itemId == 351 && blockId == 18){
		colorleaves(x,y,z,itemId,blockId)
	}
	if(itemId == 351){
		if(blockId <= coloredleavesFirstId+15 && blockId >= coloredleavesFirstId){
			colorleaves(x,y,z,itemId,blockId)
		}
	}
}

function destroyBlock(x,y,z){
	if(getTile(x,y,z) <= coloredleavesFirstId+15 && getTile(x,y,z) >= coloredleavesFirstId){
		preventDefault()
		setTile(x,y,z,0)
		Level.playSound(x, y, z, "step.grass", 1, 1)
	}
}

function colorleaves(x,y,z,itemId,blockId){
	theColor = 15-Player.getCarriedItemData()
	setTile(x,y,z,coloredleavesFirstId+theColor,0)
	if(Player.getCarriedItemCount == 1){
		Player.clearInventorySlot(Player.getSelectedSlotId())
	}
	else{
		Player.addItemInventory(Player.getCarriedItem(),-1,Player.getCarriedItemData())
	}
}


