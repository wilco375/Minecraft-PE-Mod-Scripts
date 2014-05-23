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
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "/games/com.mojang/Sounds/ignite.m4a ", 5000, 15)
preventDefault()
pi = Player.getCarriedItem()
pic = Player.getCarriedItemCount() * -1
pid = Player.getCarriedItemData()
if(itemId >= 256 && itemId <= 259){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId >= 283 && itemId <= 286){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId >= 290 && itemId <= 294){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId >= 298 && itemId <= 317){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId >= 326 && itemId <= 330){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId >= 354 && itemId <= 355){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}
else if(itemId == 261 || itemId == 324 || itemId == 333 || itemId == 335){
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete non-stackable items (at this     moment)")}

else if(itemId == 0){
clientMessage("You aren't holding anything")}
else if(pic != -64){
Player.addItemInventory(pi,pic,pid)}
else if(pic == -64){
preventDefault()
clientMessage("Sorry, due to Minecraft PE script not   working correctly, it's not possible to delete a stack of items (at this moment)")
}}}
