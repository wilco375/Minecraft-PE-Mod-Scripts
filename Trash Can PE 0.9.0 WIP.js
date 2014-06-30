//Trash Can Mod v1.0 PE 0.9.0
//by wilco375

var TrashCanId = 122

ModPE.overrideTexture("images/terrain-atlas.tga", "http://i.imgur.com/siiGzEm.png")
Block.defineBlock(TrashCanId,"Trash Can", [["endframe_eye",0],["endframe_side",0],["end_stone",0],["end_stone",0],["end_stone",0],["end_stone",0]] ,20,false,143)
Block.setDestroyTime(TrashCanId, 6)
Item.addCraftRecipe(TrashCanId,1,0,[54,1,0,4,5,0,1,3,0])
Item.setCategory(TrashCanId,8,0);

function renderBlockHook(blockId,x,y,z){
  if(Block.getRenderType(blockId) == 143){
    renderTrashCan(x,y,z)
  }
}

function renderTrashCan(x,y,z){
	Block.setShape(TrashCanId,0.125,0,0.125,0.875,0.875,0.875)
	BlockRenderer.renderBlock(TrashCanId,x,y,z)
	Block.setShape(TrashCanId,0.3125,0.875,0.375,0.6875,0.9375,0.625)
	BlockRenderer.renderBlock(TrashCanId,x,y,z)
}

function useItem(x,y,z,itemId,blockId,side){
	if(blockId == TrashCanId){
		if(itemId == 0){
			clientMessage("You aren't holding anything")
		}
		else{
			preventDefault()
			Player.clearInventorySlot(Player.getSelectedSlotId())
		}
	}
}
