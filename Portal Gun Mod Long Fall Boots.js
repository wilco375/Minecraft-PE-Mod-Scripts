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

var tickcount = 0
var watertickcount = 0

ModPE.setItem(510,"stick",0,"Wizard Staff");

function modTick(){
	//Floating
	y = getPlayerY();
	if(getPlayerY != null){
		if(prevY > y){
			Entity.setVelY(getPlayerEnt(),-0.5);
			PY1 = getPlayerY() -3; PY2 = getPlayerY() -5; PY3 = getPlayerY() -1; PY4 = getPlayerY() -4;  PZ1 = getPlayerZ(); PX1 = getPlayerX();
			Block1 = getTile(PX1, PY1, PZ1); Block2 = getTile(PX1, PY2, PZ1); Block3 = getTile(PX1, PY4, PZ1);
			if(Block1 == 0 && Block2 != 0 && Block3 == 0 && tickcount == 0 && Level.getGameMode() == 0){
				setTile(PX1,PY3,PZ1,9,0);
				watertickcount = 1; waterx = PX1; watery = PY3; waterz = PZ1;
				tickcount = 1;
			}
			if(watertickcount == 2){
				setTile(waterx,watery,waterz,0,0);
				watertickcount = 0;
			}
			
			if(tickcount !=0){
				if(tickcount != 10){
					tickcount++;
				}
				else if(tickcount == 10){
					tickcount = 0;
				}
			}
			if(watertickcount != 0){
				watertickcount++;
			}
		}
	}
	prevY = getPlayerY();
	
	//-----------
}

function useItem(x,y,z,itemId,blockId,side){
	
}
