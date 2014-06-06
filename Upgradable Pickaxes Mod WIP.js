var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubletUpgradeId = 401

var NPlayer={takeItem=function takeItem(i,a,d){addItemInventory(i,-a,d)},giveItem=function giveItem(i,a,d){addItemInventory(i,a,d)},takeHeldItem=function takeHeldItem(a){if(a=="all"){var p=Player.getCarriedItemAmount();var i=getCarriedItem();Entity.setCarriedItem(getPlayerEnt(),i,1,p)}else{var p=Player.getCarriedItemAmount()-amount;var i=getCarriedItem();Entity.setCarriedItem(getPlayerEnt(),i,1,p)}},tp=function tp(x,y,z){setPosition(getPlayerEnt(),x,y,z)},move=function move(x,y,z){var xx=Player.getX();var yy=Player.getY();var zz=Player.getZ();setPosition(getPlayerEnt(),x+xx,y+yy,z+zz)},getCoords=function getCoords(){var px=Player.getX;var py=Player.getY;var pz=Player.getZ;return px+", "+py+", "+pz},checkInventory=function checkInventory(itemId,data){var count=0;if(data==null){data=0}for(var i=0;i<27;i++){if(Player.getInventorySlot(i)==itemId&&Player.getInventoryData(i)==data){count+=Player.getSlotCount(i)}}return count}}

function destroyBlock(x,y,z,shouldDropItem){
	clientMessage("1")
	ci = getCarriedItem()
	clientMessage(ci)
	if(ci == 257 || ci == 270 || ci == 274 || ci == 278 || ci == 285){
		clientMessage("2")
		clientMessage
		if(NPlayer.checkInventory(AutoSmeltUpgradeId) => 1){
			gt = getTile(x,y,z)
			clientMessage("3")
			if(gt == 15){
				clientMessage("4")
				preventDefault()
				setTile(x,y,z,0,0)
				Level.dropItem(x,y,z,1,265,NPlayer.checkInventory(DoubleUpgradeId)+1,0)
			}
		}
	}
}
	



