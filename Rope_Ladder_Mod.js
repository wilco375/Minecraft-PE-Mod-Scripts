//Rope Ladder Mod
//By wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

ropeLadderId = 510
ropeLadderCheckerId = 511

Block.defineBlock(ropeLadderId, "Rope Ladder",["ladder",0],20,1,1)
Block.defineBlock(ropeLadderCheckerId, "Rope Ladder Checker",["bedrock",0],20,1,0)

function useItem(x,y,z,itemId,blockId,side){
	if(itemId == ropeLadderId && side != 0 && side != 1){
		if(side == 2){
			z--
		}
		if(side == 3){
			z++
		}
		if(side == 4){
			x--
		}
		if(side == 5){
			x++
		}
		Y = y
		while(getTile(x,Y,z) == 0){
			setTile(x,Y,z,65,side)
			Y--
		}
		setTile(x,1,z,ropeLadderCheckerId)
		setTile(x,2,z,7)
	}
}

function destroyBlock(x,y,z){
	if(getTile(x,y,z) == 65 && getTile(x,1,z) == ropeLadderCheckerId){
		Y = y
		while(getTile(x,Y,z) == 65){
			setTile(x,Y,z,0)
			Level.dropItem(x,y,z,ropeLadderId)
			Y--
		}
		Y = y
		while(getTile(x,Y,z) == 65){
			setTile(x,Y,z,0)
			Level.dropItem(x,y,z,ropeLadderId)
			Y++
		}
		setTile(x,1,z,7)
	}
}
