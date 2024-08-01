//CCTV Mod V2.3 (Compatible with 0.13)
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://adf.ly/tvNt3 

var cameraId = 180
var monitorId = 510
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var currentX, currentY, currentZ, camera, cameraX, cameraY, cameraZ, air, removed, prevCameraX, prevCameraY, prevCameraZ
var cameras = []
var camerasX = []
var camerasY = []
var camerasZ = []
var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 

//Define Camera & Monitor
Block.defineBlock(cameraId,"CCTV Camera",["piston_inner",0],18,false,0)
Block.setDestroyTime(cameraId, 1)
Item.addCraftRecipe(cameraId,1,0,[1,3,0,20,1,0,331,2,0,1,3,0])
if(ModPE.getMinecraftVersion().split(".")[1]<13)
	Item.setCategory(cameraId,8,0); 
else{
	Item.setCategory(cameraId,ItemCategory.TOOL,0);
	Player.addItemCreativeInv(cameraId,1,0);
}

ModPE.setItem(monitorId,"item_frame",0,"CCTV Monitor")
Item.addCraftRecipe(monitorId,1,0,[1,4,0,20,1,0,1,2,0,331,1,0,1,1,0])
if(ModPE.getMinecraftVersion().split(".")[1]<13)
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
		print("Loaded "+cameras.length+" cameras")
	}
}

function newLevel(){
	var out = new java.io.ByteArrayOutputStream();
	var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/CCTV%20V2.2%20Update%20Checker.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
}

//Remove camera from list if destroyed
function destroyBlock(x,y,z,side){
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
	if(camera == 1){
		camera = 0
		if(air == 1){
			setTile(cameraX,cameraY-2,cameraZ,0)
			air = 0
		}
		Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
	}
	if(cameras != null && cameras != [] && cameras != ""){
	ModPE.saveData("cameras"+Level.getWorldDir(),cameras.toString())
	ModPE.saveData("camerasX"+Level.getWorldDir(),camerasX.toString())
	ModPE.saveData("camerasY"+Level.getWorldDir(),camerasY.toString())
	ModPE.saveData("camerasZ"+Level.getWorldDir(),camerasZ.toString())
	print("Saved " + cameras.length + " cameras")
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
	else if(camera == 1){
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
								clientMessage("You named the camera " + name);
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

//All the commands:
function procCmd(command){
	cmd = command.split(" ")
	if(cmd[0] == "cctv"){
		//List all the cameras
		if(cmd[1] == "cameras"){
			clientMessage(cameras)
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
				clientMessage("This camera doesn't exist. Type »/cctv cameras« to get a list of all the cameras")
			}
		}
		//Leave the current camera
		else if(cmd[1] == "leave"){
			if(camera == 1){
				camera = 0
				if(air == 1){
					setTile(cameraX,cameraY-2,cameraZ,0)
					air = 0
				}
				Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
			}
			else{clientMessage("You're not looking through a camera")}
		}
		//Remove a camera from the list
		else if(cmd[1] == "remove"){
			for(i = 0;i < cameras.length;i++){
				if(cameras[i] == cmd[2]){
					cameras.splice(i,1)
					camerasX.splice(i,1)
					camerasY.splice(i,1)
					camerasZ.splice(i,1)
					removed = 1
					clientMessage("Successfully removed the camera")
				}
			}
			if(removed != 1) clientMessage("No cameras with this name found")
			removed = 0
		}
		//List all the commands
		else if(cmd[1] == "list"){
			clientMessage("»/cctv cameras«, gives a list of all the cameras")
			clientMessage("»/cctv show <camera name>«, used to look through the camera")
			clientMessage("»/cctv leave«, leaves the camera you're looking through")
			clientMessage("»/cctv remove <camera name>«, a camera should automatically be removed from the list when broken. If not, you can use this command to remove it")
		}
	}
}

//TP the player back into the camera if he tries to leave
function modTick(){
	if(camera == 1){
		if(Player.getX() != cameraX+0.5 || Player.getY() > cameraY+1.5 || Player.getY() < cameraY+0.5 || Player.getZ() != cameraZ+0.5){ 
			Entity.setPosition(getPlayerEnt(), cameraX+0.5,cameraY+1,cameraZ+0.5)
		}
	}
}

//Prevent the player from breaking blocks if he's in a camera
function destroyBlock(){
	if(camera == 1){
		preventDefault()
	}
}
	
//Show GUI
function showCameraMenu(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
		
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
		
				dialog.setTitle("Cameras");
				
				//Add buttons
				if(camera == 1){
					var  leave = new android.widget.Button(ctx); 
					leave.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							try{
								dialog.dismiss();
								camera = 0
								if(air == 1){
									setTile(cameraX,cameraY-2,cameraZ,0)
									air = 0
								}
								Entity.setPosition(getPlayerEnt(),currentX,currentY,currentZ)
							}
							catch(e){
								clientMessage(e)
							}
						}
					});
					leave.setText("Leave this camera");
					leave.setTextSize(textsize);
					menu.addView(leave); 
				}
				
				var buttonArray = [];
				//Add buttons
				for(i=0;i<cameras.length;i++){
					buttonArray.push(new android.widget.Button(ctx));
				}
					
				for(i=0;i<cameras.length;i++){
					buttonArray[i].setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							try{
								dialog.dismiss();
								if(camera == 1) showCameraFromList(menu.indexOfChild(arguments[0]) - 1);
								else showCameraFromList(menu.indexOfChild(arguments[0]));
							}
							catch(e){
								clientMessage(e);
							}
						}
					})
					//clientMessage("i "+i+" cameras[i] "+cameras[i])
					buttonArray[i].setText(cameras[i]);
					buttonArray[i].setTextSize(textsize);
					menu.addView(buttonArray[i]); 
				}
				
				dialog.show();
			} 
			catch (e){
				print ("Error: "+e);
			}
		}
	});
}

//Show the camera that's selected from the list
function showCameraFromList(goToCam){
	if(camera != 1){
		currentX = Player.getX()
		currentY = Player.getY()
		currentZ = Player.getZ()
		cameraX = parseInt(camerasX[parseInt(goToCam)])
		cameraY = parseInt(camerasY[parseInt(goToCam)])
		cameraZ = parseInt(camerasZ[parseInt(goToCam)])
		if(getTile(cameraX,cameraY,cameraZ) == cameraId){
			if(getTile(cameraX,cameraY-2,cameraZ) == 0){
				air = 1
				setTile(cameraX,cameraY-2,cameraZ,20)
			}
			Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
			clientMessage("Type »/cctv leave« to leave the camera")
			camera = 1
		}
		else{
			clientMessage("The block at the location of this camera isn't a camera any more!")
			//clientMessage("The block at " + cameraX + " " + cameraY + " " + cameraZ + " is " + getTile(cameraX,cameraY,cameraZ) + ", goToCam = " + goToCam + ", camerasX[goToCam] is " + camerasX[goToCam])
		}
	}
	else{
		prevCameraX = cameraX
		prevCameraY = cameraY
		prevCameraZ = cameraZ
		//clientMessage("goToCam "+goToCam);
		cameraX = parseInt(camerasX[parseInt(goToCam)])
		cameraY = parseInt(camerasY[parseInt(goToCam)])
		cameraZ = parseInt(camerasZ[parseInt(goToCam)])
		//clientMessage("cameraxyz: "+cameraX+","+cameraY+","+cameraZ);
		if(getTile(cameraX,cameraY,cameraZ) == cameraId){
			if(air == 1){
				setTile(prevCameraX,prevCameraY-2,prevCameraZ,0)
				air = 0
			}
			if(getTile(cameraX,cameraY-2,cameraZ) == 0){
				air = 1
				setTile(cameraX,cameraY-2,cameraZ,20)
			}
			Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
		}
		else clientMessage("The block at the location of this camera isn't a camera anymore!") 
	}
}