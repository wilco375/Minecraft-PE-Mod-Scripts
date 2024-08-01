//VeinMiner Mod V1.3 (Compatible with 1.1)
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://wilco375.github.io/mods/veinminer.html 

var blocksVar=[];
var blockIdVar;
var blockDataVar;
var blocksReplaced;
var itemToDropId;
var carriedItem;
var veinMinerEnabled = false;
var supportsSneek = doesSupportSneek;
var nthModTick = 0;

var buttonShowed
var buttonWindow = null;

function newLevel(){
	blocksVar=[];
}

function checkUpdates(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var out = new java.io.ByteArrayOutputStream();
				var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/VeinMiner_Update_Checker_V1.3.txt")).getEntity().writeTo(out);
				out.close();
				clientMessage(String(out.toString()));
			}catch(e){
				showClientMessage("[VeinMiner] Updates check failed");
			}
		}
	});
}
	
function destroyBlock(x,y,z,side){
	//Handle block break
	blockIdVar = getTile(x,y,z);
	blockDataVar = Level.getData(x,y,z);
	blocksReplaced = 0;
	if(veinMinerEnabled && testItem(blockIdVar)){
		preventDefault();
		blocksVar.push([x,y,z]);
	}
}
	
function modTick(){
	// Check for updates after 10 seconds, newLevel seems to no longer work
	if(nthModTick == 200){
		checkUpdates();
		nthModTick++;
	}else if(nthModTick < 200){
		nthModTick++;
	}
	
	carriedItem = Player.getCarriedItem();
	
	//Handle VeinMine
	if(blocksVar[0] && blocksReplaced < 128 && carriedItem.in(257,278,285,258,286,279,275,271,274,270,256,269,273,277,284)){
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
					if(!supportsSneek) Level.destroyBlock(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],true);
					else{
						Level.setTile(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0);
						Level.dropItem(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0.5,itemToDropId,1,0);
					}
				}
				else{
					if(!supportsSneek) Level.destroyBlock(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],false);
					else Level.setTile(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0);
				
					Level.dropItem(blocksVar[0][0],blocksVar[0][1],blocksVar[0][2],0.5,itemToDropId,1,0);
				}
				blocksReplaced++;
				if(!supportsSneek){
					if(Player.getCarriedItemData() > getMaxItemDamage(Player.getCarriedItem())) Player.clearInventorySlot(selectedSlot);
					else Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);
				}else{
					var selectedSlot = Player.getSelectedSlotId();
					var enchantments = Player.getEnchantments(selectedSlot);
					var customName = Player.getItemCustomName(selectedSlot);
					if(Player.getCarriedItemData() > getMaxItemDamage(Player.getCarriedItem())){
						Player.clearInventorySlot(selectedSlot);
					}else{
						Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);
						if(customName != null) Player.setItemCustomName(selectedSlot);
						if(enchantments != null && enchantments.length != 0){
							for(i=0;i<enchantments.length;i++){
								Player.enchant(selectedSlot,enchantments[i].type,enchantments[i].level);
							}
						}
					}
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
	
	//Show button on < 0.12
	if(buttonShowed != 1 && carriedItem.in(257,278,285,258,286,279,275,271,274,270,256,269,273,277,284) && !supportsSneek){
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
	
	//Hide button
	if(buttonShowed == 1 && !carriedItem.in(257,278,285,258,286,279,275,271,274,270,256,269,273,277,284)){
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
	
	//Enable VeinMiner on sneak
	if(supportsSneek){
		if(Entity.isSneaking(getPlayerEnt()) && !veinMinerEnabled){
			veinMinerEnabled = true;
			clientMessage("VeinMiner is now enabled");
		}
		else if(!Entity.isSneaking(getPlayerEnt()) && veinMinerEnabled){
			veinMinerEnabled = false;
			clientMessage("VeinMiner is now disabled");
		}
	}
}

function doesSupportSneek(){
	if(ModPE.getMinecraftVersion().split(".")[0] == 0){
		return ModPE.getMinecraftVersion().split(".")[1] >= 12;
	}else return true;
}

function getMaxItemDamage(item){
	if(item.in(269,270,271)) return 60;
	else if(item.in(273,274,275)) return 132;
	else if(item.in(256,257,258)) return 251;
	else if(item.in(284,285,286)) return 33;
	else if(item.in(277,278,279)) return 1562;
}

function testItem(id){
	if(id.in(3,4,5,12,13,14,15,17,24,48,49,87,98,155,159)){
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
	//Hide button on leave
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

Object.prototype.in = function() {
    for(var i=0; i<arguments.length; i++)
        if(arguments[i] == this) return true;
    return false;
}




