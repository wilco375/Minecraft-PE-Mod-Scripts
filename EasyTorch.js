function useItem(x,y,z,itemId,blockId,side){
i = itemId
if(i == 257 || i == 270 || i == 274 || i == 278 || i == 285){
if(Player.checkForInventoryItem(50) != null){
replace = 0
if(side == 1 && getTile(x,y+1,z) == 0){
replace = 1
setTile(x,y+1,z,50)}
if(side == 2 && getTile(x,y,z-1) == 0 ){
replace = 1
setTile(x,y,z-1,50)}
if(side == 3 && getTile(x,y,z+1) == 0 ){
replace = 1
setTile(x,y,z+1,50)}
if(side == 4 && getTile(x-1,y,z) == 0 ){
replace = 1
setTile(x-1,y,z,50)}
if(side == 5 && getTile(x+1,y,z) == 0 ){
replace = 1
setTile(x+1,y,z,50)}
if(replace == 1){
replace = 0
torchslot = Player.checkForInventoryItem(50)
amount = Player.getInventorySlotCount(torchslot)-1
Player.clearInventorySlot(torchslot)
if(amount != 0){
Player.addItemInventory(50,amount)}
}}
}}

Player.checkForInventoryItem = function(id){
	if(!id){	
		id = 0;
	}
slot = null
	var count = 0;
	for(var i = 0; i < 255; i++){
		if(Player.getInventorySlot(i) == id){
			slot = i
		}
	}
	return slot
}

