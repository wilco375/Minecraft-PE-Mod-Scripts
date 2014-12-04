//CCTV Mod V2.1 (Compatible with both 0.9 and 0.10)
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var tperX, tperY, tperZ, goToTeleporter, currentX, currentY, currentZ, camera, teleporterX, teleporterY, teleporterZ, air, removed, nameCam, prevteleporterX, prevteleporterY, prevteleporterZ
var teleporters = []
var teleportersX = []
var teleportersY = []
var teleportersZ = []
var redstoneBlock

//Get all teleporters when starting world
function selectLevelHook(){
 if(ModPE.readData("teleporters"+Level.getWorldDir()) != null && ModPE.readData("teleporters"+Level.getWorldDir()) != ""){
  teleporters = ModPE.readData("teleporters"+Level.getWorldDir()).split(",")
  teleportersX = ModPE.readData("teleportersX"+Level.getWorldDir()).split(",")
  teleportersY = ModPE.readData("teleportersY"+Level.getWorldDir()).split(",")
  teleportersZ = ModPE.readData("teleportersZ"+Level.getWorldDir()).split(",")
  print("Loaded "+teleporters.length+" teleporters")
 }
}

//Remove camera from list if destroyed
function destroyBlock(x,y,z,side){
 blockId = getTile(x,y,z)
 if(blockId == redstoneBlock){
  for(i = 0;i < teleporters.length;i++){
   if(teleportersX[i] == x && teleportersY[i] == y && teleportersZ[i] == z){
    teleporters.splice(i,1)
    teleportersX.splice(i,1)
    teleportersY.splice(i,1)
    teleportersZ.splice(i,1)
   }
  }
 }
}

//Save teleporters if leaving level
function leaveGame(){
 if(camera == 1){
  camera = 0
  if(air == 1){
   setTile(teleporterX,teleporterY-2,teleporterZ,0)
   air = 0
  }
  Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
 }
 if(teleporters != null && teleporters != [] && teleporters != ""){
 ModPE.saveData("teleporters"+Level.getWorldDir(),teleporters.toString())
 ModPE.saveData("teleportersX"+Level.getWorldDir(),teleportersX.toString())
 ModPE.saveData("teleportersY"+Level.getWorldDir(),teleportersY.toString())
 ModPE.saveData("teleportersZ"+Level.getWorldDir(),teleportersZ.toString())
 print("Saved " + teleporters.length + " teleporters")
 teleporters = null
 teleportersX = null
 teleportersY = null
 teleportersZ = null
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
  if(teleporters.length >= 32){
   clientMessage("Warning: You cannot see more than 32 teleporters in the GUI list. You can still access it by »/cctv show <camera name>« though")}
  clientMessage("Please type »/cctv name <camera name>« to give this camera a name")
  nameCam = 1
  if(side == 0){
   tperX = x
   tperY = y-1
   tperZ = z
  }
  else if(side == 1){
   tperX = x
   tperY = y+1
   tperZ = z
  }
  else if(side == 2){
   tperX = x
   tperY = y
   tperZ = z-1
  }
  else if(side == 3){
   tperX = x
   tperY = y
   tperZ = z+1
  }
  else if(side == 4){
   tperX = x-1
   tperY = y
   tperZ = z
  }
  else if(side == 5){
   tperX = x+1
   tperY = y
   tperZ = z
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
    if(teleporters == null){
     teleporters = []
     teleportersX = []
     teleportersY = []
     teleportersZ = []
    }
    teleporters.push(cmd[2])
    teleportersX.push(tperX)
    teleportersY.push(tperY)
    teleportersZ.push(tperZ)
   }
   else{clientMessage("Place down a camera first to name it")}
  }
  //List all the teleporters
  else if(cmd[1] == "teleporters"){
   clientMessage(teleporters)
  }
  //Show a camera
  else if(cmd[1] == "show"){
   goToTeleporter = null
   for(i = 0;i < teleporters.length;i++){
    if(teleporters[i] == cmd[2]){
     goToTeleporter = i
     break;
    }
   }
   if(goToTeleporter == null){
    clientMessage("This camera doesn't exist. Type »/cctv teleporters« to get a list of all the teleporters")
   }
   else{
    if(camera != 1){
     currentX = Player.getX()
     currentY = Player.getY()
     currentZ = Player.getZ()
     teleporterX = parseInt(teleportersX[goToTeleporter])
     teleporterY = parseInt(teleportersY[goToTeleporter])
     teleporterZ = parseInt(teleportersZ[goToTeleporter])
     if(getTile(teleporterX,teleporterY,teleporterZ) == Camera){
      if(getTile(teleporterX,teleporterY-2,teleporterZ) == 0){
       air = 1
       setTile(teleporterX,teleporterY-2,teleporterZ,20)
      }
      Entity.setPosition(getPlayerEnt(), teleporterX,teleporterY,teleporterZ)
      clientMessage("Type »/cctv leave« to leave the camera")
      camera = 1
     }
     else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
    }
    else{
	 prevteleporterX = teleporterX
	 prevteleporterY = teleporterY
	 prevteleporterZ = teleporterZ
     teleporterX = parseInt(teleportersX[goToTeleporter])
     teleporterY = parseInt(teleportersY[goToTeleporter])
     teleporterZ = parseInt(teleportersZ[goToTeleporter])
     if(getTile(teleporterX,teleporterY,teleporterZ) == Camera){
      if(air == 1){
       setTile(prevteleporterX,prevteleporterY-2,prevteleporterZ,0)
       air = 0
      }
      if(getTile(teleporterX,teleporterY-2,teleporterZ) == 0){
       air = 1
       setTile(teleporterX,teleporterY-2,teleporterZ,20)
      }
      Entity.setPosition(getPlayerEnt(), teleporterX,teleporterY,teleporterZ)
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
     setTile(teleporterX,teleporterY-2,teleporterZ,0)
     air = 0
    }
    Entity.setPosition(getPlayerEnt(), currentX,currentY,currentZ)
   }
   else{clientMessage("You're not looking through a camera")}
  }
  //Remove a camera from the list
  else if(cmd[1] == "remove"){
   for(i = 0;i < teleporters.length;i++){
    if(teleporters[i] == cmd[2]){
     teleporters.splice(i,1)
     teleportersX.splice(i,1)
     teleportersY.splice(i,1)
     teleportersZ.splice(i,1)
     removed = 1
     clientMessage("Successfully removed the camera")
    }
   }
   if(removed != 1) clientMessage("No teleporters with this name found")
   removed = 0
  }
  //List all the commands
  else if(cmd[1] == "list"){
   clientMessage("»/cctv name <camera name>«, used to set the name of a camera once prompted to do so.")
   clientMessage("»/cctv teleporters«, gives a list of all the teleporters")
   clientMessage("»/cctv show <camera name>«, used to look through the camera")
   clientMessage("»/cctv leave«, leaves the camera you're looking through")
   clientMessage("»/cctv remove <camera name>«, a camera should automatically be removed from the list when broken. If not, you can use this command to remove it")
  }
 }
}

//TP the player back into the camera if he tries to leave
function modTick(){
 if(camera == 1){
  if(Player.getX() != teleporterX+0.5 || Player.getY() > teleporterY+1.5 || Player.getY() < teleporterY+0.5 || Player.getZ() != teleporterZ+0.5){ 
   Entity.setPosition(getPlayerEnt(), teleporterX+0.5,teleporterY+1,teleporterZ+0.5)
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
  
    dialog.setTitle("teleporters");
    
    //Add buttons
    if(camera == 1){
     var  leave = new android.widget.Button(ctx); 
     leave.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       try{
        dialog.dismiss();
        camera = 0
        if(air == 1){
         setTile(teleporterX,teleporterY-2,teleporterZ,0)
         air = 0
        }
        Entity.setPosition(getPlayerEnt(),currentX,currentY,currentZ)
       }
	   catch(e){
	    clientMessage(e)
	   }
      }
     })
     leave.setText("Leave this camera")
     leave.setTextSize(textsize)
     menu.addView(leave); 
    }
    if(teleporters[0] != null){
     var  camera0 = new android.widget.Button(ctx); 
     camera0.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       try{
        dialog.dismiss();
        goToTeleporter = 0;
        ShowCameraFromList();
       }
       catch(e){
        clientMessage(e)
       }
      }
     })
     camera0.setText(teleporters[0])
     camera0.setTextSize(textsize)
     menu.addView(camera0); 
    }
    if(teleporters[1] != null){
     var  camera1 = new android.widget.Button(ctx); 
     camera1.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 1;
       ShowCameraFromList();
      }
     })
     camera1.setText(teleporters[1])
     camera1.setTextSize(textsize)
     menu.addView(camera1); 
    }
    if(teleporters[2] != null){
     var  camera2 = new android.widget.Button(ctx); 
     camera2.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 2;
       ShowCameraFromList();
      }
     })
     camera2.setText(teleporters[2])
     camera2.setTextSize(textsize)
     menu.addView(camera2); 
    }
    if(teleporters[3] != null){
     var  camera3 = new android.widget.Button(ctx); 
     camera3.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 3;
       ShowCameraFromList();
      }
     })
     camera3.setText(teleporters[3])
     camera3.setTextSize(textsize)
     menu.addView(camera3); 
    } 
    if(teleporters[4] != null){
     var  camera4 = new android.widget.Button(ctx); 
     camera4.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 4;
       ShowCameraFromList();
      }
     })
     camera4.setText(teleporters[4])
     camera4.setTextSize(textsize)
     menu.addView(camera4); 
    }
    if(teleporters[5] != null){
     var  camera5 = new android.widget.Button(ctx); 
     camera5.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 5;
       ShowCameraFromList();
      }
     })
     camera5.setText(teleporters[5])
     camera5.setTextSize(textsize)
     menu.addView(camera5); 
    }
    if(teleporters[6] != null){
     var  camera6 = new android.widget.Button(ctx); 
     camera6.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 6;
       ShowCameraFromList();
      }
     })
     camera6.setText(teleporters[6])
     camera6.setTextSize(textsize)
     menu.addView(camera6); 
    }
    if(teleporters[7] != null){
     var  camera7 = new android.widget.Button(ctx); 
     camera7.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 7;
       ShowCameraFromList();
      }
     })
     camera7.setText(teleporters[7])
     camera7.setTextSize(textsize)
     menu.addView(camera7); 
    }
    if(teleporters[8] != null){
     var  camera8 = new android.widget.Button(ctx); 
     camera8.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 8;
       ShowCameraFromList();
      }
     })
     camera8.setText(teleporters[8])
     camera8.setTextSize(textsize)
     menu.addView(camera8); 
    }
    if(teleporters[9] != null){
     var  camera9 = new android.widget.Button(ctx); 
     camera9.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 9;
       ShowCameraFromList();
      }
     })
     camera9.setText(teleporters[9])
     camera9.setTextSize(textsize)
     menu.addView(camera9); 
    }
    if(teleporters[10] != null){
     var  camera10 = new android.widget.Button(ctx); 
     camera10.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 10;
       ShowCameraFromList();
      }
     })
     camera10.setText(teleporters[10])
     camera10.setTextSize(textsize)
     menu.addView(camera10); 
    }
    if(teleporters[11] != null){
     var  camera11 = new android.widget.Button(ctx); 
     camera11.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 11;
       ShowCameraFromList();
      }
     })
     camera11.setText(teleporters[11])
     camera11.setTextSize(textsize)
     menu.addView(camera11); 
    }
    if(teleporters[12] != null){
     var  camera12 = new android.widget.Button(ctx); 
     camera12.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 12;
       ShowCameraFromList();
      }
     })
     camera12.setText(teleporters[12])
     camera12.setTextSize(textsize)
     menu.addView(camera12); 
    }
    if(teleporters[13] != null){
     var  camera13 = new android.widget.Button(ctx); 
     camera13.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 13;
       ShowCameraFromList();
      }
     })
     camera13.setText(teleporters[13])
     camera13.setTextSize(textsize)
     menu.addView(camera13); 
    }    
    if(teleporters[14] != null){
     var  camera14 = new android.widget.Button(ctx); 
     camera14.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 14;
       ShowCameraFromList();
      }
     })
     camera14.setText(teleporters[14])
     camera14.setTextSize(textsize)
     menu.addView(camera14); 
    }
    if(teleporters[15] != null){
     var  camera15 = new android.widget.Button(ctx); 
     camera15.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 15;
       ShowCameraFromList();
      }
     })
     camera15.setText(teleporters[15])
     camera15.setTextSize(textsize)
     menu.addView(camera15); 
    }
    if(teleporters[16] != null){
     var  camera16 = new android.widget.Button(ctx); 
     camera16.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 16
      }
     })
     camera16.setText(teleporters[16])
     camera16.setTextSize(textsize)
     menu.addView(camera16); 
    }
    if(teleporters[17] != null){
     var  camera17 = new android.widget.Button(ctx); 
     camera17.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 17
      }
     })
     camera17.setText(teleporters[17])
     camera17.setTextSize(textsize)
     menu.addView(camera17); 
    }
    if(teleporters[18] != null){
     var  camera18 = new android.widget.Button(ctx); 
     camera18.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 18
      }
     })
     camera18.setText(teleporters[18])
     camera18.setTextSize(textsize)
     menu.addView(camera18); 
    }
    if(teleporters[19] != null){
     var  camera19 = new android.widget.Button(ctx); 
     camera19.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 19
      }
     })
     camera19.setText(teleporters[19])
     camera19.setTextSize(textsize)
     menu.addView(camera19); 
    }
    if(teleporters[20] != null){
     var  camera20 = new android.widget.Button(ctx); 
     camera20.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 20
      }
     })
     camera20.setText(teleporters[20])
     camera20.setTextSize(textsize)
     menu.addView(camera20); 
    }
    if(teleporters[21] != null){
     var  camera21 = new android.widget.Button(ctx); 
     camera21.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 21
      }
     })
     camera21.setText(teleporters[21])
     camera21.setTextSize(textsize)
     menu.addView(camera21); 
    }
    if(teleporters[22] != null){
     var  camera22 = new android.widget.Button(ctx); 
     camera22.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 22
      }
     })
     camera22.setText(teleporters[22])
     camera22.setTextSize(textsize)
     menu.addView(camera22); 
    }
    if(teleporters[23] != null){
     var  camera23 = new android.widget.Button(ctx); 
     camera23.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 23
      }
     })
     camera23.setText(teleporters[23])
     camera23.setTextSize(textsize)
     menu.addView(camera23); 
    }
    if(teleporters[24] != null){
     var  camera24 = new android.widget.Button(ctx); 
     camera24.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 24
      }
     })
     camera24.setText(teleporters[24])
     camera24.setTextSize(textsize)
     menu.addView(camera24); 
    }
    if(teleporters[25] != null){
     var  camera25 = new android.widget.Button(ctx); 
     camera25.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 25
      }
     })
     camera25.setText(teleporters[25])
     camera25.setTextSize(textsize)
     menu.addView(camera25); 
    }
    if(teleporters[26] != null){
     var  camera26 = new android.widget.Button(ctx); 
     camera26.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 26
      }
     })
     camera26.setText(teleporters[26])
     camera26.setTextSize(textsize)
     menu.addView(camera26); 
    }
    if(teleporters[27] != null){
     var  camera27 = new android.widget.Button(ctx); 
     camera27.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 27
      }
     })
     camera27.setText(teleporters[27])
     camera27.setTextSize(textsize)
     menu.addView(camera27); 
    }
    if(teleporters[28] != null){
     var  camera28 = new android.widget.Button(ctx); 
     camera28.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 28
      }
     })
     camera28.setText(teleporters[28])
     camera28.setTextSize(textsize)
     menu.addView(camera28); 
    }
    if(teleporters[29] != null){
     var  camera29 = new android.widget.Button(ctx); 
     camera29.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 29
      }
     })
     camera29.setText(teleporters[29])
     camera29.setTextSize(textsize)
     menu.addView(camera29); 
    }
    if(teleporters[30] != null){
     var  camera30 = new android.widget.Button(ctx); 
     camera30.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 30
      }
     })
     camera30.setText(teleporters[30])
     camera30.setTextSize(textsize)
     menu.addView(camera30); 
    }
    if(teleporters[31] != null){
     var  camera31 = new android.widget.Button(ctx); 
     camera31.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 31
      }
     })
     camera31.setText(teleporters[31])
     camera31.setTextSize(textsize)
     menu.addView(camera31); 
    }
    if(teleporters[32] != null){
     var  camera32 = new android.widget.Button(ctx); 
     camera32.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 32
      }
     })
     camera32.setText(teleporters[32])
     camera32.setTextSize(textsize)
     menu.addView(camera32); 
    }
    dialog.show()
   } 
   catch (e){
    print ("Error: "+e)
   }
  }
 });
}

//Show the camera that's selected from the list
function ShowCameraFromList(){
 if(camera != 1){
  currentX = Player.getX()
  currentY = Player.getY()
  currentZ = Player.getZ()
  teleporterX = parseInt(teleportersX[parseInt(goToTeleporter)])
  teleporterY = parseInt(teleportersY[parseInt(goToTeleporter)])
  teleporterZ = parseInt(teleportersZ[parseInt(goToTeleporter)])
  if(getTile(teleporterX,teleporterY,teleporterZ) == Camera){
   if(getTile(teleporterX,teleporterY-2,teleporterZ) == 0){
    air = 1
    setTile(teleporterX,teleporterY-2,teleporterZ,20)
   }
   Entity.setPosition(getPlayerEnt(), teleporterX,teleporterY,teleporterZ)
   clientMessage("Type »/cctv leave« to leave the camera")
   camera = 1
  }
  else{
	clientMessage("The block at the location of this camera isn't a camera any more!")
	//clientMessage("The block at " + teleporterX + " " + teleporterY + " " + teleporterZ + " is " + getTile(teleporterX,teleporterY,teleporterZ) + ", goToTeleporter = " + goToTeleporter + ", teleportersX[goToTeleporter] is " + teleportersX[goToTeleporter])
  }
 }
 else{
  prevteleporterX = teleporterX
  prevteleporterY = teleporterY
  prevteleporterZ = teleporterZ
  teleporterX = parseInt(teleportersX[goToTeleporter])
  teleporterY = parseInt(teleportersY[goToTeleporter])
  teleporterZ = parseInt(teleportersZ[goToTeleporter])
  if(getTile(teleporterX,teleporterY,teleporterZ) == Camera){
   if(air == 1){
    setTile(prevteleporterX,prevteleporterY-2,prevteleporterZ,0)
    air = 0
   }
   if(getTile(teleporterX,teleporterY-2,teleporterZ) == 0){
    air = 1
    setTile(teleporterX,teleporterY-2,teleporterZ,20)
   }
   Entity.setPosition(getPlayerEnt(), teleporterX,teleporterY,teleporterZ)
  }
  else{clientMessage("The block at the location of this camera isn't a camera anymore!")}
 }
}


