var AutoSmeltUpgradeId = 277 //(dia shovel, temp)
var DoubletUpgradeId = 401

var NEntity={spawnMob=function spawnMob(i,x,y,z){var id;i=i.toLowerCase();switch(i){case'chicken':id=10;break;case'cow':id=11;break;case'pig':id=12;break;case'sheep':id=13;break;case'zombie':id=32;break;case'creeper':id=33;break;case'skelly':case'skeleton':id=34;break;case:'spider':id=35;break;case'zombie_pigman':case'pig_zombie':id=36;break;case'tnt':id=65;break;case'falling_block':case'falling_sand':id=66;break;case'arrow':id=80;break;case'snowball':id=81;break;case'egg':id=82;break;case'painting':id=83;break}Level.spawnMob(x,y,z,id)},spawnJockey=function spawnJockey(x,y,z,t,b){var tid;var bid t=t.toLowerCase();b=b.toLowerCase();var id;switch(i){case'chicken':id=10;break;case'cow':id=11;break;case'pig':id=12;break;case'sheep':id=13;break;case'zombie':id=32;break;case:'creeper':id=33;break;case'skelly':case'skeleton':id=34;break;case'spider':id=35;break;case'zombie_pigman':case'pig_zombie':id=36;break;case'tnt':id=65;break;case'falling_block':case'falling_sand':id=66;break;case'arrow':id=80;break;case'snowball':id=81;break;case'egg':id=82;break;case'painting':id=83;break;default:id=10;clientMessage(ChatColor.RED+"ERROR"+ChatColor.WHITE+"No Mob Defined");break}Level.spawnMob(x,y,z,tid);Level.spawnMob(x,y,z,bid);rideAnimal(tid,bid)},spawnCustMob=function spawnCustMob(x,y,z,i,h,r,t){i=i.toLowerCase();r=r.toLowerCase();var id;var rt;switch(i){case'chicken':id=10;break;case'cow':id=11;break;case'pig':id=12;break;case'sheep':id=13;break;case'zombie':id=32;break;case'creeper':id=33;break;case'skelly':case'skeleton':id=34;break;case'spider':id=35;break;case'zombie_pigman':case'pig_zombie':id=36;break;case'tnt':id=65;break;case'falling_block':case'falling_sand':id=66;break;case'arrow':id=80;break;case'snowball':id=81;break;case'egg':id=82;break;case'painting':id=83;break;default:id=10;clientMessage(ChatColor.RED+"ERROR"+ChatColor.WHITE+"No Mob Defined");break}switch(r){case'none':rt=0;break;case'tnt':rt=2;break;case'player':rt=3;break;case'chicken':rt=6;break;case'cow':rt=7;break;case'pig':rt=8;break;case'sheep':rt=9;break;case'zombie':rt=11;break;case'skeleton':case'skelly':rt=12;break;case'spider':rt=13;break;case'creeper':rt=14;break;case'arrow':rt=15;break;case'egg':rt=17;break;case'snowball':rt=18 break;case'falling_sand':case'falling_block':rt=20;break}var cm=Level.spawnMob(x,y,z,id,t);Entity.setRenderType(cm,rt);Entity.setHealth(cm,h)}};var NPlayer={takeItem=function takeItem(i,a,d){addItemInventory(i,-a,d)},giveItem=function giveItem(i,a,d){addItemInventory(i,a,d)},takeHeldItem=function takeHeldItem(a){if(a=="all"){var p=Player.getCarriedItemAmount();var i=getCarriedItem();Entity.setCarriedItem(getPlayerEnt(),i,1,p)}else{var p=Player.getCarriedItemAmount()-amount;var i=getCarriedItem();Entity.setCarriedItem(getPlayerEnt(),i,1,p)}},tp=function tp(x,y,z){setPosition(getPlayerEnt(),x,y,z)},move=function move(x,y,z){var xx=Player.getX();var yy=Player.getY();var zz=Player.getZ();setPosition(getPlayerEnt(),x+xx,y+yy,z+zz)},getCoords=function getCoords(){var px=Player.getX;var py=Player.getY;var pz=Player.getZ;return px+", "+py+", "+pz},checkInventory=function checkInventory(itemId,data){var count=0;if(data==null){data=0}for(var i=0;i<27;i++){if(Player.getInventorySlot(i)==itemId&&Player.getInventoryData(i)==data){count+=Player.getSlotCount(i)}}return count}}

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
	



