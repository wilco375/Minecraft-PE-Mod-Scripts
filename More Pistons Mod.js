//More Pistons Mod
//by wilco375
//Don't re-upload this code, nor share via alternative ways apart from my website (wilco375.github.io), e.g. adf.ly, your own site.

var pistonId = 199;
var stickyPistonId = 200;
var pistonExtensionId = 201;
var doublePistonId = 202;
var doubleStickyPistonId = 203;
var triplePistonId = 204;
var tripleStickyPistonId = 205;
var quadruplePistonId = 206;
var quadrupleStickyPistonId = 207;
var ultraStickyPistonId = 208;
var fakeRedstoneBlockId = 209;

var top = ["piston_top_normal",0];
var side = ["furnace",3];
//var side = ["piston_side",0];
var bottom = ["piston_bottom",0];
var extended = ["piston_inner",0];
var topSticky = ["piston_top_sticky",0];

var maxBlocksToPush = 12;
var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 

//Define the piston
Block.defineBlock(pistonId,"Piston",createPistonArray(false),1,false); 
Block.setRenderLayer(pistonId, 4);
Block.setLightOpacity(pistonId, 0); 
Block.setRedstoneConsumer(pistonId, true);
Item.addCraftRecipe(pistonId,1,0,[5,3,0,4,1,0,265,1,0,4,2,0,331,1,0,4,1,0]);

//Define the sticky piston
Block.defineBlock(stickyPistonId,"Sticky Piston",createPistonArray(true),1,false); 
Block.setRenderLayer(stickyPistonId, 4);
Block.setLightOpacity(stickyPistonId, 0); 
Block.setRedstoneConsumer(stickyPistonId, true);
Item.addCraftRecipe(stickyPistonId,1,0,[pistonId,1,0,341,1,0]);

//Define the double piston
Block.defineBlock(doublePistonId,"Double Piston",createPistonArray(false),1,false); 
Block.setRenderLayer(doublePistonId, 4);
Block.setLightOpacity(doublePistonId, 0); 
Block.setRedstoneConsumer(doublePistonId, true);
Block.setColor(doublePistonId,[0xFFAAAA]);
Item.addCraftRecipe(doublePistonId,1,0,[pistonId,2,0]);

//Define the double sticky piston
Block.defineBlock(doubleStickyPistonId,"Double Sticky Piston",createPistonArray(true),1,false); 
Block.setRenderLayer(doubleStickyPistonId, 4);
Block.setLightOpacity(doubleStickyPistonId, 0); 
Block.setRedstoneConsumer(doubleStickyPistonId, true);
Block.setColor(doubleStickyPistonId,[0xFFAAAA]);
Item.addCraftRecipe(doubleStickyPistonId,1,0,[stickyPistonId,2,0]);

//Define the triple piston
Block.defineBlock(triplePistonId,"Triple Piston",createPistonArray(false),1,false); 
Block.setRenderLayer(triplePistonId, 4);
Block.setLightOpacity(triplePistonId, 0); 
Block.setRedstoneConsumer(triplePistonId, true);
Block.setColor(triplePistonId,[0xAAFFAA]);
Item.addCraftRecipe(triplePistonId,1,0,[pistonId,3,0]);

//Define the triple sticky piston
Block.defineBlock(tripleStickyPistonId,"Triple Sticky Piston",createPistonArray(true),1,false); 
Block.setRenderLayer(tripleStickyPistonId, 4);
Block.setLightOpacity(tripleStickyPistonId, 0); 
Block.setRedstoneConsumer(tripleStickyPistonId, true);
Block.setColor(tripleStickyPistonId,[0xAAFFAA]);
Item.addCraftRecipe(tripleStickyPistonId,1,0,[stickyPistonId,3,0]);

//Define the quadruple piston
Block.defineBlock(quadruplePistonId,"Quadruple Piston",createPistonArray(false),1,false); 
Block.setRenderLayer(quadruplePistonId, 4);
Block.setLightOpacity(quadruplePistonId, 0); 
Block.setRedstoneConsumer(quadruplePistonId, true);
Block.setColor(quadruplePistonId,[0xAAAAFF]);
Item.addCraftRecipe(quadruplePistonId,1,0,[pistonId,4,0]);

//Define the quadruple sticky piston
Block.defineBlock(quadrupleStickyPistonId,"Quadruple Sticky Piston",createPistonArray(true),1,false); 
Block.setRenderLayer(quadrupleStickyPistonId, 4);
Block.setLightOpacity(quadrupleStickyPistonId, 0); 
Block.setRedstoneConsumer(quadrupleStickyPistonId, true);
Block.setColor(quadrupleStickyPistonId,[0xAAAAFF]);
Item.addCraftRecipe(quadrupleStickyPistonId,1,0,[stickyPistonId,4,0]);

//Define the quadruple sticky piston
Block.defineBlock(ultraStickyPistonId,"Ultra Sticky Piston",createPistonArray(true),1,false); 
Block.setRenderLayer(ultraStickyPistonId, 4);
Block.setLightOpacity(ultraStickyPistonId, 0); 
Block.setRedstoneConsumer(ultraStickyPistonId, true);
Block.setColor(ultraStickyPistonId,[0xAAFFFF]);
Item.addCraftRecipe(ultraStickyPistonId,1,0,[341,4,0,pistonId,1,0,341,4,0]);

//Define the piston extension
Block.defineBlock(pistonExtensionId,"piston_extension",createExtensionArray(),1,false); 
Block.setRenderLayer(pistonExtensionId, 4);
Block.setLightOpacity(pistonExtensionId, 0); 
Block.setShape(pistonExtensionId, 0.375,0,0.375,0.625,1,0.625, 0);
Block.setShape(pistonExtensionId, 0.375,0.375,0,0.625,0.625,1, 1);
Block.setShape(pistonExtensionId, 0,0.375,0.375,1,0.625,0.625, 2); 

//Define fake redstone block
Block.defineBlock(fakeRedstoneBlockId,"Redstone Block",["redstone_block",0],152,false); 

Item.setCategory(pistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(pistonId, 1, 0); 
Item.setCategory(stickyPistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(stickyPistonId, 1, 0); 
Item.setCategory(doublePistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(doublePistonId, 1, 0); 
Item.setCategory(doubleStickyPistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(doubleStickyPistonId, 1, 0); 
Item.setCategory(triplePistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(triplePistonId, 1, 0); 
Item.setCategory(tripleStickyPistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(tripleStickyPistonId, 1, 0); 
Item.setCategory(quadruplePistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(quadruplePistonId, 1, 0); 
Item.setCategory(quadrupleStickyPistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(quadrupleStickyPistonId, 1, 0); 
Item.setCategory(ultraStickyPistonId, ItemCategory.TOOL); 
Player.addItemCreativeInv(ultraStickyPistonId, 1, 0); 

//Creates an array that contains all the textures for 3 different states of the extension (x,y,z)
function createExtensionArray(){
	var array = new Array(3*6);
	for(var i = 0;i<array.length;i++){
		array[i] = top;
	}
	return array;
}

//Creates an array that contains all the textures for 12 different states of the piston (6 directions, subtracted and extended)
function createPistonArray(sticky){
	var topTex;
	if(sticky) topTex = topSticky;
	else topTex = top;
	
	var array = new Array(36*2);
	for(var i = 0; i < 36; i++){
		array[i] = side;
	}
	for(var i = 36; i < 36*2; i++){
		array[i] = bottom;
	}
	array[0] = topTex; array[1] = bottom; array[6] = bottom; array[7] = topTex; array[14] = topTex; array[15] = bottom;
	array[20] = bottom; array[21] = topTex; array[28] = topTex; array[29] = bottom; array[34] = bottom; array[35] = topTex;
	
	array[36+0] = extended; array[36+1] = bottom; array[36+6] = bottom; array[36+7] = extended; array[36+14] = extended; array[36+15] = bottom;
	array[36+20] = bottom; array[36+21] = extended; array[36+28] = extended; array[36+29] = bottom; array[36+34] = bottom; array[36+35] = extended;
	
	
	return array;
}

function useItem(x, y, z, itemId, blockId, side) { 
	if (itemId.in(pistonId,stickyPistonId,doublePistonId,doubleStickyPistonId,triplePistonId,tripleStickyPistonId,quadruplePistonId,quadrupleStickyPistonId,ultraStickyPistonId)) { 
		preventDefault(); 
		//Place piston in correct direction
		setTile(x + dirs[side][0], y + dirs[side][1], z + dirs[side][2], itemId, pistonDataFor(x,y,z)); 
	} 
} 

//Get correct orientation for piston based on player location and piston location
function pistonDataFor(x,y,z) { 
	//Get player location
	var player = getPlayerEnt(); 
	var pX = Entity.getX(player); 
	var pY = Entity.getY(player); 
	var pZ = Entity.getZ(player); 
	//Compare Y
	if (Math.abs(pX - x) < 2.0 && Math.abs(pZ - z) < 2.0) { 
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

//Redstone signal of a block is changed
function redstoneUpdateHook(x, y, z, newCurrent, worldLoading, blockId, blockDamage) {
	//Return if the updated block isn't a piston
	if(!blockId.in(pistonId,stickyPistonId,doublePistonId,doubleStickyPistonId,triplePistonId,tripleStickyPistonId,quadruplePistonId,quadrupleStickyPistonId,ultraStickyPistonId)) return;
	
	//Variable that is true if the redstone signal is active
	var active = newCurrent != 0;
	
	if(active && blockId.in(pistonId,stickyPistonId,doublePistonId,doubleStickyPistonId,triplePistonId,tripleStickyPistonId,quadruplePistonId,quadrupleStickyPistonId,ultraStickyPistonId) && blockDamage < 6 && getTile(x+dirs[blockDamage][0],y+dirs[blockDamage][1],z+dirs[blockDamage][2])!=152){
		//clientMessage("block is "+getTile(x+dirs[blockDamage][0],y+dirs[blockDamage][1],z+dirs[blockDamage][2]))
		var extendFor = 1;
		if(blockId.in(doublePistonId,doubleStickyPistonId)) extendFor = 2;
		if(blockId.in(triplePistonId,tripleStickyPistonId)) extendFor = 3;
		if(blockId.in(quadruplePistonId,quadrupleStickyPistonId)) extendFor = 4;
		var dir = dirs[blockDamage]; 
		
		for(k = 1;k<=extendFor;k++){
			if(k != 1){
				x = x + dir[0];
				y = y + dir[1];
				z = z + dir[2];
			}
			//Counts the amount of blocks to push
			var pistonCount = -1; 
			for (var i = 1; i <= maxBlocksToPush; i++) { 
				if (getTile(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])) == 0) { 
					//Stop pushing blocks after a block of air 
					pistonCount = i; 
					break; 
				} 
			} 
			//If blocks can be pushed
			if (pistonCount != -1) { 
				//Starting from the last block to push, push every block forward by 1 
				for (var i = pistonCount - 1; i >= 0; i--) { 
					var blockToMoveId, blockToMoveData; 
					//If the for loop arrives at the piston, set block type to the extension
					if(i==0){ 
						blockToMoveId = pistonExtensionId; 
						blockToMoveData = pistonExtensionData(blockDamage); 
					}else{ 
						//Get data of current block
						blockToMoveId = getTile(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])); 
						blockToMoveData = Level.getData(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])); 
					} 
					if(blockToMoveId == fakeRedstoneBlockId) blockToMoveId = 152;
					//Set the block one further from it's previous position
					setTile(x + ((i+1)*dir[0]), y + ((i+1)*dir[1]), z + ((i+1)*dir[2]), blockToMoveId, blockToMoveData); 
				} 
				if(k == 1){
					//Play piston sound
					Level.playSound(x, y, z, "random.eat", 1, 1.5);
					//Change piston to extended version
					setTile(x,y,z,blockId,blockDamage+6);
				}
			} 
		}
	}
	
	//If redstone is disabled and piston is extended, collapse it
	else if(!active && blockId.in(pistonId,stickyPistonId,doublePistonId,doubleStickyPistonId,triplePistonId,tripleStickyPistonId,quadruplePistonId,quadrupleStickyPistonId,ultraStickyPistonId) && blockDamage >= 6){
		//Set offset for all pistons
		var offset = 1;
		if(blockId.in(doublePistonId,doubleStickyPistonId)) offset = 2;
		if(blockId.in(triplePistonId,tripleStickyPistonId)) offset = 3;
		if(blockId.in(quadruplePistonId,quadrupleStickyPistonId)) offset = 4;
		//Remove all piston extensions
		for(i = 1; i<= offset; i++){
			setTile(x+i*dirs[blockDamage-6][0],y+i*dirs[blockDamage-6][1],z+i*dirs[blockDamage-6][2],0);
		}
		//Set piston to subtracted
		setTile(x,y,z,blockId,blockDamage-6);
		//Play piston sound
		Level.playSound(x, y, z, "random.eat", 1, 1.5);
		
		//If piston is sticky, move one block
		if(blockId.in(stickyPistonId,doubleStickyPistonId,tripleStickyPistonId,quadrupleStickyPistonId)){
			//Get coords of that block
			var coords = [x+(offset+1)*dirs[blockDamage-6][0],y+(offset+1)*dirs[blockDamage-6][1],z+(offset+1)*dirs[blockDamage-6][2]];
			var tile = getTile(coords[0],coords[1],coords[2]);
			if(tile == 152) tile = fakeRedstoneBlockId;
			//Move block to previous piston extension location
			setTile(x+dirs[blockDamage-6][0],y+dirs[blockDamage-6][1],z+dirs[blockDamage-6][2],tile,Level.getData(coords[0],coords[1],coords[2]));
			//Replace original location of moved block by air
			setTile(coords[0],coords[1],coords[2],0);
		}
		
		//If piston is ultra sticky move all blocks
		if(blockId == ultraStickyPistonId){
			var dir = dirs[blockDamage-6];
			//Counts the amount of blocks to pull
			var pistonCount = maxBlocksToPush; 
			x += dir[0];
			y += dir[1];
			z += dir[2];
			for (var i = 1; i <= maxBlocksToPush; i++) { 
				if (getTile(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])) == 0) { 
					//Stop pulling blocks after a block of air 
					pistonCount = i; 
					break; 
				} 
			} 
			//clientMessage(pistonCount);
			//If blocks can be pulled
			//Starting from the first block to pull, pull every block forward by 1 
			for (var i = 1; i < pistonCount; i++) { 
				//Get data of current block
				var blockToMoveId = getTile(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])); 
				var blockToMoveData = Level.getData(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2])); 
				//Set the block one further from it's previous position
				setTile(x + ((i-1)*dir[0]), y + ((i-1)*dir[1]), z + ((i-1)*dir[2]), blockToMoveId, blockToMoveData);
				if(i == pistonCount-1) setTile(x + (i*dir[0]), y + (i*dir[1]), z + (i*dir[2]), 0);
			} 			
		}
	}
	
	if(blockDamage < 6){
		if(getTile(x+dirs[blockDamage][0],y+dirs[blockDamage][1],z+dirs[blockDamage][2])==152) setTile(x+dirs[blockDamage][0],y+dirs[blockDamage][1],z+dirs[blockDamage][2],fakeRedstoneBlockId);
		//clientMessage("set to fake");
	}
	else if(getTile(x+dirs[blockDamage-6][0],y+dirs[blockDamage-6][1],z+dirs[blockDamage-6][2])==152){
		setTile(x+dirs[blockDamage-6][0],y+dirs[blockDamage-6][1],z+dirs[blockDamage-6][2],fakeRedstoneBlockId);
		//clientMessage("set to fake");
	}
}

Object.prototype.in = function() {
	for(var i=0; i<arguments.length; i++)
		if(arguments[i] == this) return true;
	return false;
}

function mod(a, b) {
	var out = a % b;
	if (out < 0) out += b;
	return out;
}



function pistonExtensionData(side){
	if(side.in(BlockFace.UP,BlockFace.DOWN)) return 0;
	else if(side.in(BlockFace.NORTH,BlockFace.SOUTH)) return 1;
	else return 2;
}