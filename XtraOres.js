//XtraOres Mod
//By wilco375

function modTick(){
	x = Player.getX()
	z = Player.getZ()
	chunkX = 0
	chunkZ = 0
	//16 to 32 -> 1 
	while(x > 0){
		x = x - 16
		chunkX++
	}
	//-1 to - 16 -> -1 
	while(x < 0){
		x = x + 16
		chunkX--
	}
	//16 to 32 -> 1 
	while(z > 0){
		z = z - 16
		chunkZ++
	}
	//-1 to - 16 -> -1 
	while(z < 0){
		z = z + 16
		chunkZ--
	}
	clientMessage("Coords: " + Player.getX() + " , " + Player.getZ())
	clientMessage("Chunk: " + chunkX + " , " + chunkZ)
}
