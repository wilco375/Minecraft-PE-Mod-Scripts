var leafBlower 
var wateringCan
var superHoe
var leafBlowerOn, wateringCanOn

function useItem(x,y,z,itemId,blockId){
	if(itemId == superHoe){
		for(i = x-1;i <= x+1;i++){
			for(j = z-1;j <= z+1;j++){
				if(blockId == 2 || blockId == 3){
					setTile(i,y,j,60)
				}
			}
		}
	}
}

function startDestroyBlock(x,y,z,side){
	i = Player.getCarriedItem()
	if(i == leafBlower){
		blockX = Player.getPointedBlockX()
		blockY = Player.getPointedBlockY()
		blockZ = Player.getPointedBlockZ()
		leafBlowerOn = 1
	}
	if(i == wateringCan){
		blockX = Player.getPointedBlockX()
		blockY = Player.getPointedBlockY()
		blockZ = Player.getPointedBlockZ()
		wateringCanOn = 1
	}
}

function destroyBlock(){
	i = Player.getCarriedItem()
	if(i == leafBlower || i == wateringCan){
		preventDefault()
		leafBlowerOn = 0
		wateringCanOn = 0
	}
}

function modTick(){
	if(Player.getCarriedItem() != leafBlower){
		leafBlowerOn = 0
	}
	if(leafBlowerOn == 1){
		for(x = blockX-1;x <= blockX+1;x++){
			for(y = blockY-1;y <= blockY+1;y++){
				for(z = blockZ-1;z <= blockZ+1;z++){
					b = getTile(x,y,z)
					if(b == 31){
						setTile(x,y,z,0)
					}
					if(b >= 37 && b <= 40){
						setTile(x,y,z,0)
					}
					if(b == 18){
						setTile(x,y,z,0)
					}
				}
			}
		}
	}
	if(wateringCanOn == 1){
		if(time == 2000){
			for(x = blockX-1;x <= blockX+1;x++){
				for(y = blockY-1;y <= blockY+1;y++){
					for(z = blockZ-1;z <= blockZ+1;z++){
						b = getTile(x,y,z)
						if(b == 59 || b == 141 || b == 142 || b == 244){
							if(Level.getData(x,y,z) <  7){	
								setTile(x,y,z,b,Level.getData(x,y,z)+1)
							}
						}
					}
				}
			}
			time = 0
		}
		if(time == null) time = 0
		time++
	}
}



