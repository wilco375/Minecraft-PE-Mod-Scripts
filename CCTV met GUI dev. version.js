//CCTV Mod V2 (GUI Added)
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://adf.ly/tvNt3 

var Camera = 180
var Monitor = 1
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var camX, camY, camZ, goToCam, currentX, currentY, currentZ, camera, cameraX, cameraY, cameraZ, air, removed, nameCam
var cameras = []
var camerasX = []
var camerasY = []
var camerasZ = []

//Define Camera
Block.defineBlock(Camera,"CCTV Camera",["piston_inner",0],18,false,0)
Block.setDestroyTime(Camera, 1)
Item.addCraftRecipe(Camera,1,0,[1,3,0,20,1,0,331,2,0,1,3,0])
Item.setCategory(Camera,8,0);

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

//Remove camera from list if destroyed
function destroyBlock(x,y,z,side){
 blockId = getTile(x,y,z)
 if(blockId == Camera){
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

//Ask to name camera and save it if placed down and prevent the player from placing blocks if in  camera and show GUI if using Monitor
function useItem(x,y,z,itemId,blockId,side){
 if(itemId == Monitor){
	ShowCameraMenu()
 }
 else if(camera == 1){
  preventDefault()
 }
 else if(itemId == Camera){
  clientMessage("Please type »/cctv name <camera name>« to give this camera a name")
  nameCam = 1
  if(side == 0){
   camX = x
   camY = y-1
   camZ = z
  }
  else if(side == 1){
   camX = x
   camY = y+1
   camZ = z
  }
  else if(side == 2){
   camX = x
   camY = y
   camZ = z-1
  }
  else if(side == 3){
   camX = x
   camY = y
   camZ = z+1
  }
  else if(side == 4){
   camX = x-1
   camY = y
   camZ = z
  }
  else if(side == 5){
   camX = x+1
   camY = y
   camZ = z
  }
 }
}

//All the commands:
function procCmd(command){
 cmd = command.split(" ")
 if(cmd[0] == "cctv"){
 //Give the camera a name
  if(cmd[1] == "name"){
   if(nameCam == 1){
    clientMessage("You named the camera " + cmd[2])
    if(cameras == null){
     cameras = []
     camerasX = []
     camerasY = []
     camerasZ = []
    }
    cameras.push(cmd[2])
    camerasX.push(camX)
    camerasY.push(camY)
    camerasZ.push(camZ)
   }
   else{clientMessage("Place down a camera first to name it")}
  }
  //List all the cameras
  else if(cmd[1] == "cameras"){
   clientMessage(cameras)
  }
  //Show a camera
  else if(cmd[1] == "show"){
   goToCam = null
   for(i = 0;i < cameras.length;i++){
    if(cameras[i] == cmd[2]){
     goToCam = i
     break;
    }
   }
   if(goToCam == null){
    clientMessage("This camera doesn't exist. Type »/cctv cameras« to get a list of all the cameras")
   }
   else{
    if(camera != 1){
     currentX = Player.getX()
     currentY = Player.getY()
     currentZ = Player.getZ()
     cameraX = parseInt(camerasX[goToCam])
     cameraY = parseInt(camerasY[goToCam])
     cameraZ = parseInt(camerasZ[goToCam])
     if(getTile(cameraX,cameraY,cameraZ) == Camera){
      if(getTile(cameraX,cameraY-2,cameraZ) == 0){
       air = 1
       setTile(cameraX,cameraY-2,cameraZ,20)
      }
      Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
      clientMessage("Type »/cctv leave« to leave the camera")
      camera = 1
     }
     else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
    }
    else{
     cameraX = parseInt(camerasX[goToCam])
     cameraY = parseInt(camerasY[goToCam])
     cameraZ = parseInt(camerasZ[goToCam])
     if(getTile(cameraX,cameraY,cameraZ) == Camera){
      if(air == 1){
       setTile(cameraX,cameraY-2,cameraZ,0)
       air = 0
      }
      if(getTile(cameraX,cameraY-2,cameraZ) == 0){
       air = 1
       setTile(cameraX,cameraY-2,cameraZ,20)
      }
      Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
     }
     else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
    }
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
   clientMessage("»/cctv name <camera name>«, used to set the name of a camera once prompted to do so.")
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

//Show the camera that's selected from the list
function showCameraFromList(){
	if(camera != 1){
		currentX = Player.getX()
		currentY = Player.getY()
		currentZ = Player.getZ()
		cameraX = parseInt(camerasX[goToCam])
		cameraY = parseInt(camerasY[goToCam])
		cameraZ = parseInt(camerasZ[goToCam])
		if(getTile(cameraX,cameraY,cameraZ) == Camera){
			if(getTile(cameraX,cameraY-2,cameraZ) == 0){
				air = 1
				setTile(cameraX,cameraY-2,cameraZ,20)
			}
			Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
			clientMessage("Type »/cctv leave« to leave the camera")
			camera = 1
		}
		else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
	}
	else{
		cameraX = parseInt(camerasX[goToCam])
		cameraY = parseInt(camerasY[goToCam])
		cameraZ = parseInt(camerasZ[goToCam])
		if(getTile(cameraX,cameraY,cameraZ) == Camera){
			if(air == 1){
				setTile(cameraX,cameraY-2,cameraZ,0)
				air = 0
			}
			if(getTile(cameraX,cameraY-2,cameraZ) == 0){
				air = 1
				setTile(cameraX,cameraY-2,cameraZ,20)
			}
			Entity.setPosition(getPlayerEnt(), cameraX,cameraY,cameraZ)
		}
		else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
	}
}
	
//Show GUI
function ShowCameraMenu(){
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
				if(cameras[0] != null){
					var  camera0 = new android.widget.Button(ctx); 
					camera0.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							try{
								dialog.dismiss();
								var goToCam = 0;
								ShowCameraFromList();
							}
							catch(e){
								clientMessage(e)
							}
						}
					})
					camera0.setText(cameras[0])
					camera0.setTextSize(textsize)
					menu.addView(camera0); 
				}
				if(cameras[1] != null){
					var  camera1 = new android.widget.Button(ctx); 
					camera1.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 1;
							ShowCameraFromList();
						}
					})
					camera1.setText(cameras[1])
					camera1.setTextSize(textsize)
					menu.addView(camera1); 
				}
				if(cameras[2] != null){
					var  camera2 = new android.widget.Button(ctx); 
					camera2.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 2;
							ShowCameraFromList();
						}
					})
					camera2.setText(cameras[2])
					camera2.setTextSize(textsize)
					menu.addView(camera2); 
				}
				if(cameras[3] != null){
					var  camera3 = new android.widget.Button(ctx); 
					camera3.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 3;
							ShowCameraFromList();
						}
					})
					camera3.setText(cameras[3])
					camera3.setTextSize(textsize)
					menu.addView(camera3); 
				}	
				if(cameras[4] != null){
					var  camera4 = new android.widget.Button(ctx); 
					camera4.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 4;
							ShowCameraFromList();
						}
					})
					camera4.setText(cameras[4])
					camera4.setTextSize(textsize)
					menu.addView(camera4); 
				}
				if(cameras[5] != null){
					var  camera5 = new android.widget.Button(ctx); 
					camera5.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 5;
							ShowCameraFromList();
						}
					})
					camera5.setText(cameras[5])
					camera5.setTextSize(textsize)
					menu.addView(camera5); 
				}
				if(cameras[6] != null){
					var  camera6 = new android.widget.Button(ctx); 
					camera6.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 6;
							ShowCameraFromList();
						}
					})
					camera6.setText(cameras[6])
					camera6.setTextSize(textsize)
					menu.addView(camera6); 
				}
				if(cameras[7] != null){
					var  camera7 = new android.widget.Button(ctx); 
					camera7.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 7;
							ShowCameraFromList();
						}
					})
					camera7.setText(cameras[7])
					camera7.setTextSize(textsize)
					menu.addView(camera7); 
				}
				if(cameras[8] != null){
					var  camera8 = new android.widget.Button(ctx); 
					camera8.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 8;
							ShowCameraFromList();
						}
					})
					camera8.setText(cameras[8])
					camera8.setTextSize(textsize)
					menu.addView(camera8); 
				}
				if(cameras[9] != null){
					var  camera9 = new android.widget.Button(ctx); 
					camera9.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 9;
							ShowCameraFromList();
						}
					})
					camera9.setText(cameras[9])
					camera9.setTextSize(textsize)
					menu.addView(camera9); 
				}
				if(cameras[10] != null){
					var  camera10 = new android.widget.Button(ctx); 
					camera10.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 10;
							ShowCameraFromList();
						}
					})
					camera10.setText(cameras[10])
					camera10.setTextSize(textsize)
					menu.addView(camera10); 
				}
				if(cameras[11] != null){
					var  camera11 = new android.widget.Button(ctx); 
					camera11.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 11;
							ShowCameraFromList();
						}
					})
					camera11.setText(cameras[11])
					camera11.setTextSize(textsize)
					menu.addView(camera11); 
				}
				if(cameras[12] != null){
					var  camera12 = new android.widget.Button(ctx); 
					camera12.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 12;
							ShowCameraFromList();
						}
					})
					camera12.setText(cameras[12])
					camera12.setTextSize(textsize)
					menu.addView(camera12); 
				}
				if(cameras[13] != null){
					var  camera13 = new android.widget.Button(ctx); 
					camera13.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 13;
							ShowCameraFromList();
						}
					})
					camera13.setText(cameras[13])
					camera13.setTextSize(textsize)
					menu.addView(camera13); 
				}				
				if(cameras[14] != null){
					var  camera14 = new android.widget.Button(ctx); 
					camera14.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 14;
							ShowCameraFromList();
						}
					})
					camera14.setText(cameras[14])
					camera14.setTextSize(textsize)
					menu.addView(camera14); 
				}
				if(cameras[15] != null){
					var  camera15 = new android.widget.Button(ctx); 
					camera15.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(){ 
							dialog.dismiss();
							var goToCam = 15;
							ShowCameraFromList();
						}
					})
					camera15.setText(cameras[15])
					camera15.setTextSize(textsize)
					menu.addView(camera15); 
				}
				dialog.show()
			} 
			catch (e){
				print ("Error: "+e)
			}
		}
	});
}


