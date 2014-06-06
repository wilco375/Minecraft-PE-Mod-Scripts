var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubletUpgradeId = 401


function destroyBlock(x,y,z,shouldDropItem){
	clientMessage("1")
	ci = getCarriedItem()
	clientMessage(ci) 
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		clientMessage("2")
		clientMessage(Player.checkForInventoryItem(AutoSmeltUpgradeId))
		if(Player.checkForInventoryItem(AutoSmeltUpgradeId) => 1){
			gt = getTile(x,y,z)
			clientMessage("3")
			if(gt == 15){
				clientMessage("4")
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,1,265,Player.checkForInventoryItem(DoubleUpgradeId)+1,0) 
			}
		}
	}
}
	


Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};
