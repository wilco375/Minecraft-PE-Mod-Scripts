//CCTV Mod V2.5 (Compatible with 1.1)
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://wilco375.github.io/mods/cctv_mod.html 

var cameraId = 238
var monitorId = 510
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var currentX, currentY, currentZ, camera, cameraX, cameraY, cameraZ, air, removed, prevCameraX, prevCameraY, prevCameraZ
var cameras = []
var camerasX = []
var camerasY = []
var camerasZ = []
var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 
var nthModTick = 0;

// True if block below camera was an air block, which has been replaced by glass to keep the player from falling
var air = false;

//Define Camera & Monitor
Block.defineBlock(cameraId,"CCTV Camera",["piston_inner",0],18,false,0)
Block.setDestroyTime(cameraId, 1)
Item.addCraftRecipe(cameraId,1,0,[1,3,0,20,1,0,331,2,0,1,3,0])
if(ModPE.getMinecraftVersion().split(".")[0] == 0 && ModPE.getMinecraftVersion().split(".")[1]<13)
	Item.setCategory(cameraId,8,0); 
else{
	Item.setCategory(cameraId,ItemCategory.TOOL,0);
	Player.addItemCreativeInv(cameraId,1,0);
}

ModPE.setItem(monitorId,"item_frame",0,"CCTV Monitor")
Item.addCraftRecipe(monitorId,1,0,[1,4,0,20,1,0,1,2,0,331,1,0,1,1,0])
if(ModPE.getMinecraftVersion().split(".")[0] == 0 && ModPE.getMinecraftVersion().split(".")[1]<13)
	Item.setCategory(monitorId,8,0); 
else{
	Item.setCategory(monitorId,ItemCategory.TOOL,0);
	Player.addItemCreativeInv(monitorId,1,0);
}

//Get all cameras when starting world
function selectLevelHook(){
	if(ModPE.readData("cameras"+Level.getWorldDir()) != null && ModPE.readData("cameras"+Level.getWorldDir()) != ""){
		cameras = ModPE.readData("cameras"+Level.getWorldDir()).split(",")
		camerasX = ModPE.readData("camerasX"+Level.getWorldDir()).split(",")
		camerasY = ModPE.readData("camerasY"+Level.getWorldDir()).split(",")
		camerasZ = ModPE.readData("camerasZ"+Level.getWorldDir()).split(",")
		ctx.runOnUiThread(new java.lang.Runnable(){
			run: function(){
				android.widget.Toast.makeText(ctx, "[CCTV Mod] Loaded "+cameras.length+" cameras", 0).show();
			}
		});
	}
}

// Check for updates
function checkUpdates(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var out = new java.io.ByteArrayOutputStream();
				var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/CCTV%202.5%20Update%20Checker.txt")).getEntity().writeTo(out);
				out.close();
				clientMessage(String(out.toString()));
			}catch(e){
				showClientMessage("Updates check failed");
			}
		}
	});
}

//Remove camera from list if destroyed
//Prevent the player from breaking blocks if he's in a camera
function destroyBlock(x,y,z,side){
	if(camera){
		preventDefault();
		return;
	}
	
	blockId = getTile(x,y,z)
	if(blockId == cameraId){
		for(i = 0;i < cameras.length;i++){
			if(camerasX[i] == x && camerasY[i] == y && camerasZ[i] == z){
				cameras.splice(i,1)
				camerasX.splice(i,1)
				camerasY.splice(i,1)
				camerasZ.splice(i,1)
			}
		}
	}
}

//Save cameras if leaving level
function leaveGame(){
	if(camera == true){
		camera = false
		if(air){
			setTile(cameraX,cameraY-2,cameraZ,0)
			air = false
		}
		Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
		setTile(cameraZ, cameraY, cameraZ, cameraId);
	}
	if(cameras != null && cameras != [] && cameras != ""){
		ModPE.saveData("cameras"+Level.getWorldDir(),cameras.toString())
		ModPE.saveData("camerasX"+Level.getWorldDir(),camerasX.toString())
		ModPE.saveData("camerasY"+Level.getWorldDir(),camerasY.toString())
		ModPE.saveData("camerasZ"+Level.getWorldDir(),camerasZ.toString())
		cameras = null
		camerasX = null
		camerasY = null
		camerasZ = null
	}
}

//Ask to name camera and save it if placed down and prevent the player from placing blocks if in  camera and show GUI if using monitorId
function useItem(x,y,z,itemId,blockId,side){
	if(itemId == monitorId){
		showCameraMenu();
	}
	else if(camera == true){
		preventDefault();
	}
	else if(itemId == cameraId){
		preventDefault();
		setTile(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2],cameraId);
		if(Level.getGameMode() == 0){
			if(Player.getCarriedItemCount()>1) Player.addItemInventory(itemId,-1,0);
			else Player.clearInventorySlot(Player.getSelectedSlotId);
		} 
		showNameGUI(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2]);
	}
}

function showNameGUI(camX,camY,camZ){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				var padding = dpToPx(16);
				layout.setPadding(padding,0,padding,0);
		
				var dialogBuilder = new android.app.AlertDialog.Builder(ctx); 
				dialogBuilder.setView(layout);
		
				dialogBuilder.setTitle("Enter a name");
				
				var editText = new android.widget.EditText(ctx);
				layout.addView(editText);
				
				dialogBuilder.setPositiveButton("Ok", new android.content.DialogInterface.OnClickListener(){
					onClick: function(){ 
						try{
							var name = editText.getText().toString();
							if(name != ""){
								showClientMessage("You named the camera \"" + name + "\"");
								if(cameras == null){
									cameras = []
									camerasX = []
									camerasY = []
									camerasZ = []
								}
								cameras.push(name)
								camerasX.push(camX)
								camerasY.push(camY)
								camerasZ.push(camZ)
								
								ModPE.saveData("cameras"+Level.getWorldDir(),cameras.toString())
								ModPE.saveData("camerasX"+Level.getWorldDir(),camerasX.toString())
								ModPE.saveData("camerasY"+Level.getWorldDir(),camerasY.toString())
								ModPE.saveData("camerasZ"+Level.getWorldDir(),camerasZ.toString())
							}else{
								showClientMessage("Please enter a name");
								showNameGUI(camX, camY, camZ);
							}
						}
						catch(e){
							showClientMessage(e);
						}
					}
				}); 
				
				dialogBuilder.setCancelable(false);
				dialogBuilder.show();
			} 
			catch (e){
				print ("Error: "+e)
			}
		}
	});
}

function dpToPx(sizeInDp){
	var scale = ctx.getResources().getDisplayMetrics().density;
	return (sizeInDp*scale + 0.5);
}

//All the commands:
function procCmd(command){
	cmd = command.split(" ")
	if(cmd[0] == "cctv"){
		preventDefault();
		
		//List all the cameras
		if(cmd[1] == "cameras"){
			showClientMessage(cameras)
		}
		//Show a camera
		else if(cmd[1] == "show"){
			var goToCam = null;
			for(i = 0;i < cameras.length;i++){
				if(cameras[i] == cmd[2]){
					showCameraFromList(i);
					break;
				}
			}
			if(goToCam == null){
				showClientMessage("This camera doesn't exist. Type »/cctv cameras« to get a list of all the cameras")
			}
		}
		//Leave the current camera
		else if(cmd[1] == "leave"){
			if(camera){
				camera = false
				if(air){
					setTile(cameraX,cameraY-2,cameraZ,0)
					air = false
				}
				Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
				setTile(cameraX,cameraY,cameraZ,cameraId)
			}
			else{showClientMessage("You're not looking through a camera")}
		}
		//Remove a camera from the list
		else if(cmd[1] == "remove"){
			var camToRemove = command.substr(12);
			for(i = 0;i < cameras.length;i++){
				if(cameras[i] == camToRemove){
					cameras.splice(i,1)
					camerasX.splice(i,1)
					camerasY.splice(i,1)
					camerasZ.splice(i,1)
					removed = 1
					showClientMessage("Successfully removed the camera")
				}
			}
			if(removed != 1) showClientMessage("No cameras with this name found")
			removed = 0
		}
		//List all the commands
		else if(cmd[1] == "list"){
			showClientMessage("»/cctv cameras«, gives a list of all the cameras")
			showClientMessage("»/cctv show <camera name>«, used to look through the camera")
			showClientMessage("»/cctv leave«, leaves the camera you're looking through")
			showClientMessage("»/cctv remove <camera name>«, a camera should automatically be removed from the list when broken. If not, you can use this command to remove it")
		}
	}
}

//TP the player back into the camera if he tries to leave
function modTick(){
	// Check for updates after 10 seconds, newLevel seems to no longer work
	if(nthModTick == 200){
		checkUpdates();
		nthModTick++;
	}else if(nthModTick < 200){
		nthModTick++;
	}
	
	if(camera){	
		var playerX = Player.getX();
		var playerY = Player.getY();
		var playerZ = Player.getZ();
		if(
			playerX < cameraX + 0.3 || playerX > cameraX + 0.7 ||
			playerY < cameraY + 0.5 || playerY > cameraY + 1.5 ||
			playerZ < cameraZ + 0.3 || playerZ > cameraZ + 0.7 
		){ 
			Entity.setVelX(getPlayerEnt(), 0);
			Entity.setVelY(getPlayerEnt(), 0);
			Entity.setVelZ(getPlayerEnt(), 0);
			Entity.setPosition(getPlayerEnt(), cameraX+0.5,cameraY+1,cameraZ+0.5)
		}
	}
}
	
//Show GUI
function showCameraMenu(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{		
				var dialogBuilder = new android.app.AlertDialog.Builder(ctx); 
		
				dialogBuilder.setTitle("Cameras");
				
				var items = [];
				var firstIsLeave = (camera == 1);
				
				//Add buttons
				if(camera == 1){
					items.push("Leave this camera");
				}
					
				for(i=0;i<cameras.length;i++){
					items.push(cameras[i]);
				}
				
				dialogBuilder.setItems(items, new android.content.DialogInterface.OnClickListener(){
					onClick: function(dialog, which){
						try{
							if(firstIsLeave && which == 0){
								camera = 0;
								if(air == 1){
									setTile(cameraX,cameraY-2,cameraZ,0);
									air = 0;
								}
								Entity.setPosition(getPlayerEnt(),currentX,currentY,currentZ);
								setTile(cameraX,cameraY,cameraZ,cameraId);
							}else{
								if(firstIsLeave) showCameraFromList(which - 1);
								else showCameraFromList(which);
							}
						}catch(e){
							showClientMessage(e);
						}
					}
				});
				dialogBuilder.show();
			} 
			catch (e){
				print ("Error: "+e);
			}
		}
	});
}

//Show the camera that's selected from the list
function showCameraFromList(goToCam){
	
	if(!camera){
		currentX = Player.getX()
		currentY = Player.getY()
		currentZ = Player.getZ()
	}else{		
		prevCameraX = cameraX
		prevCameraY = cameraY
		prevCameraZ = cameraZ
	}
	
	cameraX = parseInt(camerasX[parseInt(goToCam)])
	cameraY = parseInt(camerasY[parseInt(goToCam)])
	cameraZ = parseInt(camerasZ[parseInt(goToCam)])
	
	if(camera && prevCameraX == cameraX && prevCameraY == cameraY && prevCameraZ == cameraZ){
		return;
	}
	
	if(getTile(cameraX,cameraY,cameraZ) == cameraId){
		setTile(cameraX, cameraY, cameraZ, 0);
		
		if(camera && air){
			setTile(prevCameraX,prevCameraY-2,prevCameraZ,0)
			air = false
		}
		
		if(getTile(cameraX,cameraY-2,cameraZ) == 0){
			air = true
			setTile(cameraX,cameraY-2,cameraZ,20)
		}
		
		Entity.setVelX(getPlayerEnt(), 0);
		Entity.setVelY(getPlayerEnt(), 0);
		Entity.setVelZ(getPlayerEnt(), 0);
		Entity.setPosition(getPlayerEnt(), cameraX+0.5,cameraY+1,cameraZ+0.5)
		
		if(!camera){
			showClientMessage("Type »/cctv leave« to leave the camera, or use the CCTV Monitor")
			camera = true
		}else{
			setTile(prevCameraX, prevCameraY, prevCameraZ, cameraId);
		}
	}
	else{
		showClientMessage("The block at the location of this camera is no longer a camera and has been removed from the list");
		
		cameras.splice(goToCam,1)
		camerasX.splice(goToCam,1)
		camerasY.splice(goToCam,1)
		camerasZ.splice(goToCam,1)
	}
}

function showClientMessage(message){
	clientMessage("[CCTV Mod] "+message);
}