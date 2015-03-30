/*
Focus of: 
- Portable Hole
- Harming (6 DMG)
- Harming II (10 DMG)
- Healing
- Floating
- Teleportation
*/

var activeFocus = "floating";
var y;
var prevY;

ModPE.setItem(510,"stick",0,"Wizard Staff");

function modTick(){
	y = getPlayerY();
	if(getPlayerY != null){
		if(prevY > y){
			setVelY(getPlayerEnt(),0.1);
		}
	}
	prevY = getPlayerY();
}

function useItem(x,y,z,itemId,blockId,side){
	
}
