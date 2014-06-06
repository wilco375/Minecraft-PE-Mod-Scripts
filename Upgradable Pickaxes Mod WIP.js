var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubletUpgradeId = 401

function destroyBlock(x,y,z,shouldDropItem){
	clientMessage("1")
	ci = getCarriedItem()
	clientMessage(ci)
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
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


checkInventory=function checkInventory(itemId,data){
	var count=0;
	if(data==null){
		data=0}
	for(var i=0;i<27;i++){
		if(Player.getInventorySlot(i)==itemId&&Player.getInventoryData(i)==data)
		{count+=Player.getSlotCount(i)}}return count}}



