var blocksVar=[];
var blockIdVar;
var blockDataVar;
var blocksReplaced;
var itemToDropId;
var carriedItem;
var veinMinerEnabled = false;

var buttonShowed
var buttonWindow = null;

function newLevel(){
	blocksVar=[];
	
	var out=new java.io.ByteArrayOutputStream(); 
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/VeinMiner_Update_Checker_V1.1.txt")).getEntity().writeTo(out); 
	out.close(); 
	clientMessage(String(out.toString()));
}
	
function destroyBlock(x,y,z,side){
	blockIdVar = getTile(x,y,z);
	blockDataVar = Level.getData(x,y,z);
	blocksReplaced = 0;
	if(veinMinerEnabled && testItem(blockIdVar)){
		preventDefault();
		blocksVar.push([x,y,z]);
	}
}
	
function modTick(){
	carriedItem = Player.getCarriedItem();
	
	if(blocksVar[0] && blocksReplaced < 128 && (carriedItem == 257 || carriedItem == 278 || carriedItem == 285 || carriedItem == 258 || carriedItem == 286 || carriedItem == 279 || carriedItem == 275 || carriedItem == 271 || carriedItem == 274 || carriedItem == 270 || carriedItem == 256 || carriedItem == 269 || carriedItem == 273 || carriedItem == 277 || carriedItem == 284)){
		try{
			for(var i=0;i<blocksVar.length;i++){
				if(Level.getTile(blocksVar[i][0],blocksVar[i][1],blocksVar[i][2])==0) blocksVar.splice(i,1);
			}
			var sides=[[blocksVar[0][0],blocksVar[0][1]-1,blocksVar[0][2]],[blocksVar[0][0],blocksVar[0][1]+1,blocksVar[0][2]],[blocksVar[0][0],blocksVar[0][1],blocksVar[0][2]-1],[blocksVar[0][0],blocksVar[0][1],blocksVar[0][2]+1],[blocksVar[0][0]-1,blocksVar[0][1],blocksVar[0][2]],[blocksVar[0][0]+1,blocksVar[0][1],blocksVar[0][2]]];
			for(var i=0;i<6;i++){
				if(Level.getTile(sides[i][0],sides[i][1],sides[i][2])==blockIdVar && Level.getData(sides[i][0],sides[i][1],sides[i][2])==blockDataVar)
					blocksVar.push([sides[i][0],sides[i][1],sides[i][2]]);
			}
			if(Level.getTile(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2])==blockIdVar && Level.getData(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2])==blockDataVar){
				if(blockIdVar == itemToDropId){
					if(ModPE.getMinecraftVersion().split(".")[1]<12){
						//clientMessage("<0.12");
						Level.destroyBlock(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],true);
					} 
					else{
						//clientMessage("0.12");
						Level.setTile(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0);
						Level.dropItem(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0.5,itemToDropId,1,0);
					}
				}
				else{
					if(ModPE.getMinecraftVersion().split(".")[1]<12){
						//clientMessage("<0.12");
						Level.destroyBlock(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],false);
					} 
					else{
						//clientMessage("0.12");
						Level.setTile(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0);
					}
					Level.dropItem(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0.5,itemToDropId,1,0);
				}
				blocksReplaced++;
				if(ModPE.getMinecraftVersion().split(".")[1]<12){
					Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);
				}
			}
			blocksVar.splice(0,1);
		}catch(e){
			java.lang.System.out.println(String.toString(e));
		}
	}else{
		blocksVar = [];
		blocksReplaced = 0;
	}
	
	if(buttonShowed != 1 && (carriedItem == 257 || carriedItem == 278 || carriedItem == 285 || carriedItem == 258 || carriedItem == 286 || carriedItem == 279 || carriedItem == 275 || carriedItem == 271 || carriedItem == 274 || carriedItem == 270 || carriedItem == 256 || carriedItem == 269 || carriedItem == 273 || carriedItem == 277 || carriedItem == 284)){
		buttonShowed = 1;
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				buttonWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(activity);
				var button = new android.widget.Button(activity);
				button.setText("V");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						toggleVeinMiner();
					}
				}));
				layout.addView(button);
				buttonWindow.setContentView(layout);
				buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				buttonWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
			}catch(problem){
				print("Button could not be displayed: " + problem);
			}
		}}));
	}
	if(buttonShowed == 1 && carriedItem != 257 && carriedItem != 278 && carriedItem != 285 && carriedItem != 258 && carriedItem != 286 && carriedItem != 279 && carriedItem != 275 && carriedItem != 271 && carriedItem != 274 && carriedItem != 270 && carriedItem != 256 && carriedItem != 269 && carriedItem != 273 && carriedItem != 277 && carriedItem != 284){
		buttonShowed = 0;
		veinMinerEnabled = false;
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			if(buttonWindow != null) {
				buttonWindow.dismiss();
				buttonwindow = null;
			}
		}}));
	}
}

function testItem(id){
	if(id == 3 || id == 4 || id == 5 || id == 12 || id == 13 || id == 14 || id == 15 || id == 17 || id == 24 || id == 48 || id == 49 || id == 87 || id == 98 || id == 155 || id == 159){
		itemToDropId = id;
		return true;
	}else if(id == 2){
		itemToDropId = 3;
		return true;
	}else if(id == 1){
		itemToDropId = 4;
		return true;
	}else if(id == 16){
		itemToDropId = 263;
		return true;
	}else if(id == 56){
		itemToDropId = 264;
		return true;
	}
	else return false
}

function toggleVeinMiner(){
	veinMinerEnabled = !veinMinerEnabled;
	if(veinMinerEnabled){
		clientMessage("VeinMiner is now enabled");
	}else clientMessage("VeinMiner is now disabled");
}

function leaveGame() {
	if(buttonShowed == 1){
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			if(buttonWindow != null) {
				buttonWindow.dismiss();
				buttonwindow = null;
			}
		}}));
	}
}






