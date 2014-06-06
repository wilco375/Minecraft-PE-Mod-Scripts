var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubleUpgradeId = 279 //(dia axe, temp)
var ironDustId = 263 //(coal, temp)

function destroyBlock(x,y,z,shouldDropItem){
	clientMessage("1")
	ci = getCarriedItem()
	clientMessage(ci) 
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		gt = getTile(x,y,z)
		clientMessage("2")
		clientMessage(Player.checkForInventoryItem(AutoSmeltUpgradeId))
		if(Player.checkForInventoryItem(AutoSmeltUpgradeId) >= 1){
			clientMessage("3")
			if(gt == 15 && ci != 270){
				clientMessage("4")
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,0.25,265,Player.checkForInventoryItem(DoubleUpgradeId)+1,0)
			}
		}
		if(Player.checkForInventoryItem(DoubleUpgradeId) == 1 && Player.checkForInventoryItem(AutoSmeltUpgradeId) == 0){
			if(gt == 15 && ci != 270){
				preventDefault()
				setTile(x,y,z,0)
				Level.dropItem(x,y,z,0.25,ironDustId,2,0)
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
