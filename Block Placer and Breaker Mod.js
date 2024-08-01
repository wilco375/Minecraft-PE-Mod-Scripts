//Block Placer and Breaker Mod
//by wilco375

var blockPlacerId = 215;
var blockBreakerId = 216;
var redstoneBlockPlacerId = 217;
var redstoneBlockBreakerId = 218;

var top = ["piston_inner",0];
var topBreaker = ["stonebrick",3];
var side = ["furnace",3];
var bottom = ["chest_inventory",2];

var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 
var blockPlacersX = [];
var blockPlacersY = [];
var blockPlacersZ = [];
var blockBreakersX = [];
var blockBreakersY = [];
var blockBreakersZ = []; 

Block.defineBlock(blockPlacerId,"Block Placer",createTextureArray(false),1,false); 
Block.setRenderLayer(blockPlacerId, 4);
Block.setLightOpacity(blockPlacerId, 0); 
Item.addCraftRecipe(blockPlacerId,1,0,[4,4,0,256,1,0,4,4,0]);
Item.setCategory(blockPlacerId, ItemCategory.TOOL); 
Player.addItemCreativeInv(blockPlacerId, 1, 0); 

Block.defineBlock(blockBreakerId,"Block Breaker",createTextureArray(true),1,false); 
Block.setRenderLayer(blockBreakerId, 4);
Block.setLightOpacity(blockBreakerId, 0); 
Item.addCraftRecipe(blockBreakerId,1,0,[4,4,0,257,1,0,4,4,0]);
Item.setCategory(blockBreakerId, ItemCategory.TOOL); 
Player.addItemCreativeInv(blockBreakerId, 1, 0); 

Block.defineBlock(redstoneBlockPlacerId,"Restone Block Placer",createTextureArray(false),1,false); 
Block.setRenderLayer(redstoneBlockPlacerId, 4);
Block.setLightOpacity(redstoneBlockPlacerId, 0); 
Block.setRedstoneConsumer(redstoneBlockPlacerId, true);
Item.addCraftRecipe(redstoneBlockPlacerId,1,0,[4,4,0,256,1,0,4,1,0,331,3,0]);
Item.setCategory(redstoneBlockPlacerId, ItemCategory.TOOL); 
Player.addItemCreativeInv(redstoneBlockPlacerId, 1, 0); 
Block.setColor(redstoneBlockPlacerId,[0xff0000]);

Block.defineBlock(redstoneBlockBreakerId,"Redstone Block Breaker",createTextureArray(true),1,false); 
Block.setRenderLayer(redstoneBlockBreakerId, 4);
Block.setLightOpacity(redstoneBlockBreakerId, 0); 
Block.setRedstoneConsumer(redstoneBlockBreakerId, true);
Item.addCraftRecipe(redstoneBlockBreakerId,1,0,[4,4,0,257,1,0,4,1,0,331,3,0]);
Item.setCategory(redstoneBlockBreakerId, ItemCategory.TOOL); 
Player.addItemCreativeInv(redstoneBlockBreakerId, 1, 0); 
Block.setColor(redstoneBlockBreakerId,[0xff0000]);


function newLevel(){
	//Search for updates
	var out = new java.io.ByteArrayOutputStream(); 
    var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/block_placer_breaker_mod_v1.0.js")).getEntity().writeTo(out); 
    out.close(); 
    clientMessage(String(out.toString()));
	
	//Get all block placers/breakers
	blockBreakersX = readArrayXFromFile("breakers.data");
	blockBreakersY = readArrayYFromFile("breakers.data");
	blockBreakersZ = readArrayZFromFile("breakers.data");
	blockPlacersX = readArrayXFromFile("placers.data");
	blockPlacersY = readArrayYFromFile("placers.data");
	blockPlacersZ = readArrayZFromFile("placers.data");

}

function leaveGame(){
	//Save all block placers/breakers 
	saveArraysToFile("breakers.data",blockBreakersX,blockBreakersY,blockBreakersZ);
	//print("blockPlacersX is now "+blockPlacersX+" length "+blockPlacersX.length);
	saveArraysToFile("placers.data",blockPlacersX,blockPlacersY,blockPlacersZ);	
}

function createTextureArray(breaker){
	var topTex;
	if(breaker) topTex = topBreaker;
	else topTex = top;
	
	var array = new Array(36);
	for(var i = 0; i < 36; i++){
		array[i] = side;
	}
	array[0] = topTex; array[1] = bottom; array[6] = bottom; array[7] = topTex; array[14] = topTex; array[15] = bottom;
	array[20] = bottom; array[21] = topTex; array[28] = topTex; array[29] = bottom; array[34] = bottom; array[35] = topTex;
		
	return array;
}

function useItem(x, y, z, itemId, blockId, side) { 
	if (itemId.in(blockBreakerId,blockPlacerId,redstoneBlockBreakerId,redstoneBlockPlacerId)) { 
		preventDefault(); 
		//Place block in correct direction
		x = x + dirs[side][0];
		y = y + dirs[side][1];
		z = z + dirs[side][2];
		setTile(x,y,z,itemId,blockDataFor(x,y,z)); 
		if(Level.getGameMode() == 0) Player.addItemInventory(itemId,-1,0);
		if(itemId == blockBreakerId){
			if(blockPlacersX == null || blockPlacersX.length == 0){
				blockBreakersX = [x];
				blockBreakersY = [y];
				blockBreakersZ = [z];
			}else{
				blockBreakersX.push(x);
				blockBreakersY.push(y);
				blockBreakersZ.push(z);
			}
		}else if(itemId == blockPlacerId){
			if(blockPlacersX == null || blockPlacersX.length == 0){
				blockPlacersX = [x];
				blockPlacersY = [y];
				blockPlacersZ = [z];
			}else{
				blockPlacersX.push(x);
				blockPlacersY.push(y);
				blockPlacersZ.push(z);
			}
		}
	} 
} 

function blockDataFor(x,y,z) { 
	//Get player location
	var player = getPlayerEnt(); 
	var pX = Entity.getX(player); 
	var pY = Entity.getY(player); 
	var pZ = Entity.getZ(player); 
	//Compare Y
	if (Math.abs(pX - x) < 1.5 && Math.abs(pZ - z) < 1.5) { 
		var headY = pY; 
		if (headY - y > 2.0) { 
			return BlockFace.UP; 
		} 
		if (y - headY > 0.0){ 
			return BlockFace.DOWN; 
		} 
	}
	//Compare X and Z
	var yaw = Entity.getYaw(player); 
	var quadrant = ((mod(yaw, 360) * 4 / 360) + 0.5) & 3; 
	var faces = [BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST]; 
	return faces[quadrant]; 
}

function mod(a, b) {
	var out = a % b;
	if (out < 0) out += b;
	return out;
}

//Give correct block on break
function destroyBlock(x,y,z,shouldDropItem){
	var blockId = getTile(x,y,z);
	var data = Level.getData(x,y,z);
	if(blockId.in(blockPlacerId,blockBreakerId,redstoneBlockBreakerId,redstoneBlockPlacerId)){
		preventDefault();
		if(Level.getGameMode() == 0) Level.dropItem(x,y,z,0.5,blockId,1,0);
		setTile(x,y,z,0);
		if(blockId == blockBreakerId){
			for(i=0;i<blockBreakersX.length;i++){
				if(blockBreakersX[i] == x && blockBreakersY[i] == y && blockBreakersZ[i] == z){
					blockBreakersX.splice(i,1);
					blockBreakersY.splice(i,1);
					blockBreakersZ.splice(i,1);
				}
			}
		}else if(blockId == blockPlacerId){
			for(i=0;i<blockPlacersX.length;i++){
				if(blockPlacersX[i] == x && blockPlacersY[i] == y && blockPlacersZ[i] == z){
					blockPlacersX.splice(i,1);
					blockPlacersY.splice(i,1);
					blockPlacersZ.splice(i,1);
				}
			}
		}
	}
}

//Redstone signal of a block is changed
function redstoneUpdateHook(x, y, z, newCurrent, worldLoading, blockId, blockDamage) {
	//Return if the updated block isn't a piston
	if(!blockId.in(redstoneBlockBreakerId,redstoneBlockPlacerId)) return;
	
	if(blockId == redstoneBlockBreakerId && newCurrent > 0) breakBlock(x,y,z,blockDamage);
	if(blockId == redstoneBlockPlacerId && newCurrent > 0) placeBlock(x,y,z,blockDamage);
}

function modTick(){
	if(blockBreakersX.length > 0){
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
		activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
			try{ 
				for(var i=0;i<blockBreakersX.length;i++){
					breakBlock(blockBreakersX[i],blockBreakersY[i],blockBreakersZ[i],Level.getData(blockBreakersX[i],blockBreakersY[i],blockBreakersZ[i]));
				}
			}catch(e){ 
				clientMessage(e);
			} 
		}}));
	}
	if(blockPlacersX.length > 0){
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
		activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
			try{ 
				for(var i=0;i<blockPlacersX.length;i++){
					placeBlock(blockPlacersX[i],blockPlacersY[i],blockPlacersZ[i],Level.getData(blockPlacersX[i],blockPlacersY[i],blockPlacersZ[i]));
				}
			}catch(e){ 
				clientMessage(e);
			} 
		}}));
	}
}

function breakBlock(x,y,z,data){
	if(getTile(x,y,z).in(blockBreakerId,redstoneBlockBreakerId)){
		blockToBreakCoords = [x+dirs[data][0],y+dirs[data][1],z+dirs[data][2]];
		chestCoords = [x-dirs[data][0],y-dirs[data][1],z-dirs[data][2]];
		if(getTile(chestCoords[0],chestCoords[1],chestCoords[2])==54){
			var id;
			var data;
			var count;
			var tile = getTile(blockToBreakCoords[0],blockToBreakCoords[1],blockToBreakCoords[2]);
			var damage = Level.getData(blockToBreakCoords[0],blockToBreakCoords[1],blockToBreakCoords[2]);
			if(tile > 0 && !tile.in(8,9,10,11,79,174,212,20,95,102,160,32,31,18,161,105,104,92,51,52,97)){
				var tile = getBlock(tile);
				for(j = 0;j<27;j++){
					id = Level.getChestSlot(chestCoords[0],chestCoords[1],chestCoords[2],j);
					data = Level.getChestSlotData(chestCoords[0],chestCoords[1],chestCoords[2],j);
					count = Level.getChestSlotCount(chestCoords[0],chestCoords[1],chestCoords[2],j);
					if(id == 0)count = 0;
					if(id==0 || (id==tile && data==damage && count < 64)){
						Level.setChestSlot(chestCoords[0],chestCoords[1],chestCoords[2],j,tile,damage,count+1);
						setTile(blockToBreakCoords[0],blockToBreakCoords[1],blockToBreakCoords[2],0);
						break;
					}
				}
			}
		}
	}
}

function getBlock(tile){
	if(tile.in(2,60,110)) return 3;
	else if(tile == 1) return 4;
	else if(tile == 16) return 263;
	else if(tile == 56) return 264;
	else if(tile == 129) return 388;
	else if(tile == 153) return 406;
	else if(tile == 141) return 391;
	else if(tile == 115) return 372;
	else if(tile == 59) return 296;
	else if(tile == 207) return 434;
	else if(tile == 142) return 392;
	else if(tile == 30) return 287;
	else return tile;
}

function placeBlock(x,y,z,data){
	if(getTile(x,y,z).in(blockPlacerId,redstoneBlockPlacerId)){
		blockToPlaceCoords = [x+dirs[data][0],y+dirs[data][1],z+dirs[data][2]];
		chestCoords = [x-dirs[data][0],y-dirs[data][1],z-dirs[data][2]];
		if(getTile(chestCoords[0],chestCoords[1],chestCoords[2])==54 && getTile(blockToPlaceCoords[0],blockToPlaceCoords[1],blockToPlaceCoords[2])==0){
			for(j = 0;j<27;j++){
				var id = Level.getChestSlot(chestCoords[0],chestCoords[1],chestCoords[2],j);
				if(id>0 && id<255){
					var data = Level.getChestSlotData(chestCoords[0],chestCoords[1],chestCoords[2],j);
					var count = Level.getChestSlotCount(chestCoords[0],chestCoords[1],chestCoords[2],j);
					setTile(blockToPlaceCoords[0],blockToPlaceCoords[1],blockToPlaceCoords[2],id,data);
					if(count > 1) Level.setChestSlot(chestCoords[0],chestCoords[1],chestCoords[2],j,id,data,count-1);
					else Level.setChestSlot(chestCoords[0],chestCoords[1],chestCoords[2],j,0);
					break;
				}
			}
		}
	}
}

Object.prototype.in = function() {
	for(var i=0; i<arguments.length; i++)
		if(arguments[i] == this) return true;
	return false;
}

function saveArraysToFile(filename,arrayX,arrayY,arrayZ){
	//print("arrayX length: "+arrayX.length);
	if(arrayX != null && arrayX != []){
		var text = "";
		for(i=0;i<arrayX.length;i++){
			text += arrayX[i]+","
		}
		text += "|";
		for(i=0;i<arrayY.length;i++){
			text += arrayY[i]+","
		}
		text += "|";
		for(i=0;i<arrayZ.length;i++){
			text += arrayZ[i]+","
		}
		//print("text: "+text);
		ModPE.saveData(filename+Level.getWorldDir(),text);
	}
}

function getPosition(inputString, testString, nThOccurence) {
   return inputString.split(testString, nThOccurence).join(testString).length;
}

function readArrayXFromFile(filename){
	var text = ModPE.readData(filename+Level.getWorldDir()).toString();
	if(text.split("|").length >= 3)
		return text.split("|")[0].split(",").map(Number);
	else return [];
}

function readArrayYFromFile(filename){
	var text = ModPE.readData(filename+Level.getWorldDir()).toString();
	if(text.split("|").length >= 3)
		return text.split("|")[1].split(",").map(Number);
	else return [];
}

function readArrayZFromFile(filename){
	var text = ModPE.readData(filename+Level.getWorldDir()).toString();
	if(text.split("|").length >= 3)
		return text.split("|")[2].split(",").map(Number);
	else return [];
}