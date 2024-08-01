//Teleport Pad Mod
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://adf.ly/v7qTc

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15;
var GUI, teleporterX, teleporterY, teleporterZ, teleported;
var teleporterId = 181;
var teleporters = [];
var teleportersX = [];
var teleportersY = [];
var teleportersZ = [];
var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 

Block.defineBlock(teleporterId,"Teleport Pad",["redstone_block",0],18,false,0);
Block.setDestroyTime(teleporterId, 1);
Item.addCraftRecipe(teleporterId,1,0,[331,4,0,264,1,0,331,4,0]);

if(ModPE.getMinecraftVersion().split(".")[1]<13)
	Item.setCategory(teleporterId,8,0); 
else{
	Item.setCategory(teleporterId,ItemCategory.TOOL,0);
	Player.addItemCreativeInv(teleporterId,1,0);
}

//Get all teleporters when starting world
function selectLevelHook(){
	if(ModPE.readData("teleporters"+Level.getWorldDir()) != null && ModPE.readData("teleporters"+Level.getWorldDir()) != ""){
		teleporters = ModPE.readData("teleporters"+Level.getWorldDir()).split(",");
		teleportersX = ModPE.readData("teleportersX"+Level.getWorldDir()).split(",");
		teleportersY = ModPE.readData("teleportersY"+Level.getWorldDir()).split(",");
		teleportersZ = ModPE.readData("teleportersZ"+Level.getWorldDir()).split(",");
		print("Loaded "+teleporters.length+" teleporters");
		teleported = 1;
	}
}

function newLevel(){
	var out = new java.io.ByteArrayOutputStream();
	var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/Teleport%20Pad%20V1.2%20Update%20Checker.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
}

//Save teleporters if leaving level
function leaveGame(){
	if(teleporters != null && teleporters != [] && teleporters != ""){
		ModPE.saveData("teleporters"+Level.getWorldDir(),teleporters.toString());
		ModPE.saveData("teleportersX"+Level.getWorldDir(),teleportersX.toString());
		ModPE.saveData("teleportersY"+Level.getWorldDir(),teleportersY.toString());
		ModPE.saveData("teleportersZ"+Level.getWorldDir(),teleportersZ.toString());
		print("Saved " + teleporters.length + " teleporters");
		teleporters = null;
		teleportersX = null;
		teleportersY = null;
		teleportersZ = null;
	}
}

//Remove teleporter from list if destroyed
function destroyBlock(x,y,z,side){
	blockId = getTile(x,y,z);
	if(blockId == teleporterId){
		for(i = 0;i < teleporters.length;i++){
			if(teleportersX[i] == x && teleportersY[i] == y && teleportersZ[i] == z){
				teleporters.splice(i,1);
				teleportersX.splice(i,1);
				teleportersY.splice(i,1);
				teleportersZ.splice(i,1);
			}
		}
	}
}

//Ask to name teleporter and save it if placed down
function useItem(x,y,z,itemId,blockId,side){
	if(itemId == teleporterId){
		preventDefault();
		setTile(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2],teleporterId);
		if(Level.getGameMode() == 0){
			if(Player.getCarriedItemCount()>1) Player.addItemInventory(itemId,-1,0);
			else Player.clearInventorySlot(Player.getSelectedSlotId);
		} 
		showNameGUI(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2]);
	}
}

//Commands
function procCmd(command){
	cmd = command.split(" ")
	if(cmd[0] == "teleporter"){
		//Remove a teleporter from the list
		if(cmd[1] == "remove"){
			for(i = 0;i < teleporters.length;i++){
				if(teleporters[i] == cmd[2]){
					teleporters.splice(i,1);
					teleportersX.splice(i,1);
					teleportersY.splice(i,1);
					teleportersZ.splice(i,1);
					removed = 1;
					clientMessage("Successfully removed the teleporter");
				}
			}
			if(removed != 1) clientMessage("No teleporters with this name found");
			removed = 0;
		}
		//List all the commands
		else if(cmd[1] == "list"){
			clientMessage("»/teleporter remove <name>«, a teleporter should automatically be removed from the list when broken. If not, you can use this command to remove it");
		}
	}
}

//Show the teleporter that's selected from the list
function goToSelectedTeleporter(goToTeleporter){
	teleporterX = parseInt(teleportersX[parseInt(goToTeleporter)]);
	teleporterY = parseInt(teleportersY[parseInt(goToTeleporter)]);
	teleporterZ = parseInt(teleportersZ[parseInt(goToTeleporter)]);
	if(getTile(teleporterX,teleporterY,teleporterZ) == teleporterId){
		Entity.setPosition(getPlayerEnt(),teleporterX+0.5,teleporterY+2.75,teleporterZ+0.5);
		teleported = 1;
	}
	else{
		clientMessage("The block at the location of this teleporter isn't a teleporter any more!");
		//clientMessage("goToTeleporter is "+goToTeleporter+" Block is "+getTile(teleporterX,teleporterY,teleporterZ));
	}
}

//Show GUI when player is standing on a teleporter
function modTick(){
	if(getTile(Player.getX(),Player.getY()-2,Player.getZ()-1) == teleporterId && teleported != 1){
		if(GUI != 1){
			GUI = 1;
			showTeleportersMenu();
		}
	}
	if(getTile(Player.getX(),Player.getY()-2,Player.getZ()-1) != teleporterId && teleported == 1){
		teleported = 0;
		GUI = 0;
	}
}

function showNameGUI(tperX,tperY,tperZ){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
		
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
		
				dialog.setTitle("Enter a name");
				
				var editText = new android.widget.EditText(ctx);
				menu.addView(editText);
				
				var button  = new android.widget.Button(ctx);
				button.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							var name = editText.getText().toString();
							if(name != ""){
								dialog.dismiss();
								clientMessage("You named the teleporter " + name);
								if(teleporters == null){
									teleporters = [];
									teleportersX = [];
									teleportersY = [];
									teleportersZ = [];
								}
								teleporters.push(name);
								teleportersX.push(tperX);
								teleportersY.push(tperY);
								teleportersZ.push(tperZ);
							}
						}
						catch(e){
							clientMessage(e);
						}
					}
				})
				button.setText("Ok");
				button.setTextSize(textsize);
				menu.addView(button); 
				
				
				dialog.setCancelable(false);
				dialog.show();
			} 
			catch (e){
				print ("Error: "+e)
			}
		}
	});
}

//Show GUI
function showTeleportersMenu(){
	if(teleporters.length >= 2){
		ctx.runOnUiThread(new java.lang.Runnable(){
			run: function(){
				try{
					var menu = new android.widget.LinearLayout(ctx);
					var scroll = new android.widget.ScrollView(ctx);
					
					menu.setOrientation(android.widget.LinearLayout.VERTICAL);
					scroll.addView(menu);
			
					var dialog = new android.app.Dialog(ctx); 
					dialog.setContentView(scroll);
			
					dialog.setTitle("Teleporters");
					
					var buttonArray = [];
					//Add buttons
					for(i=0;i<teleporters.length;i++){
						buttonArray.push(new android.widget.Button(ctx));
					}
					
					for(i=0;i<teleporters.length;i++){
						buttonArray[i].setOnClickListener(new android.view.View.OnClickListener(){
							onClick: function(){ 
								try{
									dialog.dismiss();
									GUI = 0;
									goToSelectedTeleporter(menu.indexOfChild(arguments[0]));
								}
								catch(e){
									clientMessage(e);
								}
							}
						})
						buttonArray[i].setText(teleporters[i]);
						buttonArray[i].setTextSize(textsize);
						menu.addView(buttonArray[i]); 
					}
					
					dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener(){
						onDismiss: function(){
							GUI = 0;
							teleported = 1;
						}
					});
					dialog.show();
				} 
				catch (e){
					print ("Error: "+e)
				}
			}
		});
	}else{
		clientMessage("You need to have at least two teleporters defined");
	}
}
