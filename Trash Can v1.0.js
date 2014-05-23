//Trash Can Mod v0.8.5
//by wilco375

var TrashCanId = 122

Block.defineBlock(TrashCanId,"Trash Can", [["endframe_eye",0],["endframe_side",0],["end_stone",0],["end_stone",0],["end_stone",0],["end_stone",0]] ,20,false,0)

Block.setShape(TrashCanId,0.125,0,0.125,0.875,0.875,0.875)
Block.setDestroyTime(TrashCanId, 6)
Item.addCraftRecipe(TrashCanId,1,0,[54,1,0,4,5,0,1,3,0])
Item.setCategory(TrashCanId,8,0);

function useItem(x,y,z,itemId,blockId,side){
if(blockId == TrashCanId){
if(itemId == 0){
clientMessage("You aren't holding anything")}
else{
preventDefault()
Player.clearInventorySlot(Player.getSelectedSlotId())}
}}
