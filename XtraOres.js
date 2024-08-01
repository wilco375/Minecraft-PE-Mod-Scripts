//XtraOres Mod
//By wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://adf.ly/vO3I2
//Texturepack download: http://goo.gl/igBRQD

var oreGenCheckerId = 200
var boneOreId = 201
//var enderOreId = 202
var rainbowOre = 203
var gunPowderOre = 204
var oldPx, worldGenerated, starterTick

Block.defineBlock(oreGenCheckerId,"OreGenCheckerBlock",["bedrock",0],7,1,0)
Block.defineBlock(boneOreId,"Bone Ore",["enchanting_table_side",0],15,1,0)
//Block.defineBlock(enderOreId,"Ender Ore",["lapis_ore",0],15,1,0)
Block.defineBlock(rainbowOre,"Rainbow Ore",["enchanting_table_bottom",0],15,1,0)
Block.defineBlock(gunPowderOre,"Gunpowder Ore",["enchanting_table_top",0],15,1,0)

function leaveGame(){
 starterTick = 0
 worldGenerated = 0
}

function startDestroyBlock(x,y,z){
 c = Player.getCarriedItem()
 blockId = getTile(x,y,z)
	if(blockId == boneOreId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,352,2)
	}
//	if(blockId == enderOreId){
//		preventDefault()
//		setTile(x,y,z,0)
//		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,368,1)
//	}
	if(blockId == rainbowOre){
		preventDefault()
		setTile(x,y,z,0)
		for(i = 0;i < 3;i++){
			damage = Math.floor((Math.random() * 16) + 0)
			if(damage == 4){ damage = 5}
			Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,351,1,damage)
		}
	}
	if(blockId == gunPowderOre){
		preventDefault()
		setTile(x,y,z,0)
		if(Math.floor((Math.random() * 20) + 1) ==  15) Level.explode(x,y,z,6)
		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,289,1)
	}
 if(getTile(x,y,z) == oreGenCheckerId){
  preventDefault()
 }
}

function destroyBlock(x,y,z){
 c = Player.getCarriedItem()
 blockId = getTile(x,y,z)
	if(blockId == boneOreId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,352,2)
	}
//	if(blockId == enderOreId){
//		preventDefault()
//		setTile(x,y,z,0)
//		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,368,1)
//	}
	if(blockId == rainbowOre){
		preventDefault()
		setTile(x,y,z,0)
		for(i = 0;i < 3;i++){
			damage = Math.floor((Math.random() * 16) + 0)
			if(damage == 4){ damage = 5}
			Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,351,1,damage)
		}
	}
	if(blockId == gunPowderOre){
		preventDefault()
		setTile(x,y,z,0)
		if(Math.floor((Math.random() * 20) + 1) ==  15) Level.explode(x,y,z,6)
		Level.dropItem(x+0.5,y+0.5,z+0.5,0.5,289,1)
	}
}
 
function modTick(){
	if(starterTick == null) starterTick = 0
	if(starterTick < 200) starterTick++
	Px = Player.getX()
	Pz = Player.getZ()
	chunkX = 0
	chunkZ = 0
	if(oldPx != null && Px != oldPx){
		worldGenerated = 1
	}
	//16 to 32 -> 1 
	while(Px > 0){
		Px = Px - 16
		chunkX++
	}
	//-1 to - 16 -> -1 
	while(Px < 0){
		Px = Px + 16
		chunkX--
	}
	//16 to 32 -> 1 
	while(Pz > 0){
		Pz = Pz - 16
		chunkZ++
	}
	//-1 to - 16 -> -1 
	while(Pz < 0){
		Pz = Pz + 16
		chunkZ--
	}
	if(getTile(chunkX*16,1,chunkZ*16) != oreGenCheckerId && worldGenerated == 1 && starterTick > 199){
		setTile(chunkX*16,1,chunkZ*16,oreGenCheckerId)
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				generateOres()
			}catch(e){
				print(e)
			}
		}}));
	}
	oldPx = getPlayerX()
}

function generateOres(){
	for(i = 0;i < 16; i++){
		oreNumber = Math.floor((Math.random() * 3) + 1)
		if(oreNumber == 1){
			ore = boneOreId
		}
		//if(oreNumber == 2){
		//	ore = enderOreId
		//}
		if(oreNumber == 2){
			ore = rainbowOre
		}
		if(oreNumber == 3){
			ore = gunPowderOre
		}
		oreX = chunkX*16 + Math.floor((Math.random() * 16) + 1)
		oreY = Math.floor((Math.random() * 96) + 1)
		oreZ = chunkZ*16 + Math.floor((Math.random() * 16) + 1)
		cluster = Math.floor((Math.random() * 4) + 1)
		if(cluster == 1){
			cluster1(oreX,oreY,oreZ,ore)
		}
		if(cluster == 2){
			cluster2(oreX,oreY,oreZ,ore)
		}
		if(cluster == 3){
			cluster3(oreX,oreY,oreZ,ore)
		}
		if(cluster == 4){
			cluster4(oreX,oreY,oreZ,ore)
		}
	}
}

function cluster1(x,y,z,ore){
	var X=[x+1,x+2,x+2,x+2,x+2,x+3,x+3]
	var Y=[y+2,y+2,y+3,y+2,y+2,y+1,y+2]
	var Z=[z+-3,z+-3,z+-3,z+-2,z+-1,z+-3,z+-3]
	var success
	for(n=0;n<125+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster2(x,y,z,ore){
	var X=[x+1,x+1,x+2,x+2,x+2,x+3]
	var Y=[y+1,y+2,y+2,y+3,y+2,y+2]
	var Z=[z+-1,z+-1,z+-2,z+-2,z+-1,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster3(x,y,z,ore){
	var X=[x+1,x+1,x+1,x+2]
	var Y=[y+1,y+2,y+1,y+1]
	var Z=[z+-2,z+-2,z+-1,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster4(x,y,z,ore){
	var X=[x+1,x+1,x+1,x+2,x+2]
	var Y=[y+1,y+2,y+1,y+2,y+3]
	var Z=[z+-2,z+-2,z+-1,z+-2,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}
