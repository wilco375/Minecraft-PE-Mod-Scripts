//Walker Rings Mod
//By wilco375

var blocksToReplaceX = [];
var blocksToReplaceY = [];
var blocksToReplaceZ = [];

var blocksReplacedX = [];
var blocksReplacedY = [];
var blocksReplacedZ = [];

var blocksToSkip = [];

ModPE.setItem(450, "dye_powder", 12, "Ring of the Frost Walker", 1);
ModPE.setItem(451, "dye_powder", 14, "Ring of the Fire Walker", 1);
ModPE.setItem(452, "dye_powder", 7, "Ring of the Air Walker", 1);

Item.addCraftRecipe(450,1,0,[265,4,0,264,1,0,265,4,0]);
Item.addCraftRecipe(451,1,0,[265,4,0,264,1,0,265,4,0]);
Item.addCraftRecipe(452,1,0,[265,3,0,264,3,0,265,3,0]);

//Radius of rings: (37 blocks)
//   XXX
//  XXXXX
// XXXXXXX
// XXXOXXX
// XXXXXXX
//  XXXXX
//   XXX

function newLevel(){
	var out=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/walker_rings_mod_update_v1.0.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
}

function modTick(){	
	blocksToReplaceX = [];
	blocksToReplaceY = [];
	blocksToReplaceZ = [];
	
	playerX = getPlayerX();
	playerY = getPlayerY();
	playerZ = getPlayerZ();
	for(x = -3;x<=3;x++){
		for(z = -3;z<=3;z++){
			if(!(Math.abs(x)==3&&Math.abs(z)==3)&&!(Math.abs(x)==2&&Math.abs(z)==3)&&!(Math.abs(x)==3&&Math.abs(z)==2)){
				var tile = Level.getTile(Math.round(x+playerX),Math.round(playerY-3),Math.round(z+playerZ));
				if(ring()=="water"&&(tile == 9||tile==8||tile==79)){
					//setTile(x+playerX,playerY-2,z+playerZ,79);
					blocksToReplaceX.push(Math.round(x+playerX));
					blocksToReplaceY.push(Math.round(playerY-3));
					blocksToReplaceZ.push(Math.round(z+playerZ));
				}
				else if(ring()=="air"&& (tile == 0||tile == 20)){
					//setTile(x+playerX,playerY-2,z+playerZ,20);
					blocksToReplaceX.push(Math.round(x+playerX));
					blocksToReplaceY.push(Math.round(playerY-3));
					blocksToReplaceZ.push(Math.round(z+playerZ));
				}
				else if(ring()=="lava"&&(tile == 10||tile==11||tile==49)){
					//setTile(x+playerX,playerY-2,z+playerZ,49);
					blocksToReplaceX.push(Math.round(x+playerX));
					blocksToReplaceY.push(Math.round(playerY-3));
					blocksToReplaceZ.push(Math.round(z+playerZ));
				}
			}
		}
	}
	
	//clientMessage("blocksReplacedX = "+blocksReplacedX)
	if(blocksReplacedX!=null){
		blocksToSkip = [];
		
		for(i = 0;i < blocksReplacedX.length;i++){
			for(j = 0;j < blocksToReplaceX.length;j++){
				if(blocksReplacedX[i] == blocksToReplaceX[j] && blocksReplacedY[i] == blocksToReplaceY[j] && blocksReplacedZ[i] == blocksToReplaceZ[j]){
					blocksToSkip.push(i);
				}
			}
		}
		
		//clientMessage("blocksToSkip: "+blocksToSkip);
		
		var currentTile;
		for(i = 0;i < blocksReplacedX.length;i++){
			if(blocksToSkip.indexOf(i)<0){
				currentTile = getTile(blocksReplacedX[i],blocksReplacedY[i],blocksReplacedZ[i]);
				if(currentTile == 79){
					setTile(blocksReplacedX[i],blocksReplacedY[i],blocksReplacedZ[i],9);
				}
				else if(currentTile == 20){
					setTile(blocksReplacedX[i],blocksReplacedY[i],blocksReplacedZ[i],0);
				}
				else if(currentTile == 49){
					setTile(blocksReplacedX[i],blocksReplacedY[i],blocksReplacedZ[i],11);
				}
			}
		}
	}
	
	blocksReplacedX = [];
	blocksReplacedY = [];
	blocksReplacedZ = [];
	
	for(i = 0;i < blocksToReplaceX.length;i++){
		if(ring()=="water"){
			setTile(blocksToReplaceX[i],blocksToReplaceY[i],blocksToReplaceZ[i],79);
		}
		else if(ring()=="lava"){
			setTile(blocksToReplaceX[i],blocksToReplaceY[i],blocksToReplaceZ[i],49);
		}			
		else if(ring()=="air"){
			setTile(blocksToReplaceX[i],blocksToReplaceY[i],blocksToReplaceZ[i],20);
		}
	}
	
	for(i = 0;i < blocksToReplaceX.length;i++){
		blocksReplacedX.push(blocksToReplaceX[i]);
		blocksReplacedY.push(blocksToReplaceY[i]);
		blocksReplacedZ.push(blocksToReplaceZ[i]);
	}
}

function ring(){
	if(Player.getCarriedItem()==450) return "water"
	else if(Player.getCarriedItem()==451) return "lava"
	else if(Player.getCarriedItem()==452) return "air"
}