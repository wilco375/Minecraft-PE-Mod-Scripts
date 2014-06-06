var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubletUpgradeId = 401

function destroyBlock(x,y,z){
	clientMessage("1")
	if(Player.getCarriedItem == 257 || Player.getCarriedItem == 270 || Player.getCarriedItem == 274 || Player.getCarriedItem == 278 || Player.getCarriedItem == 285){
		clientMessage("2")	
		if(Player.itemInInv(AutoSmeltUpgradeId) == 1){
			gt = getTile(x,y,z)
			clientMessage("3")
			if(gt == 15){
				clientMessage("4")
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,1,265,Player.itemInInv(DoubleUpgradeId)+1,0)
			}
		}
	}
}


Player.itemInInv = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};
