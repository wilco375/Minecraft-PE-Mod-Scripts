var AutoSmeltUpgradeId = 400

function destroyBlock(){
if(Player.getCarriedItem == 257 || Player.getCarriedItem == 270 || Player.getCarriedItem == 274 || Player.getCarriedItem == 278 || Player.getCarriedItem == 285){
if(Player.itemInInv(AutoSmeltUpgradeId) == 1){
}
}}

function entityAddedHook(entity){
clientMessage(entity)}

Player.itemInInv = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};
