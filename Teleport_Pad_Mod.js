//Teleport Pad Mod
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var maxTeleporterAmount = 64
var tperX, tperY, tperZ, nameTeleporter, GUI, teleporterX, teleporterY, teleporterZ, teleported
var teleporterId = 181
var teleporters = []
var teleportersX = []
var teleportersY = []
var teleportersZ = []
var redstoneBlock

Block.defineBlock(teleporterId,"Teleport Pad",["redstone_block",0],18,false,0) 
Block.setDestroyTime(teleporterId, 1) 
Item.addCraftRecipe(teleporterId,1,0,[331,4,0,264,1,0,331,4,0]) 
Item.setCategory(teleporterId,8,0); 

//Get all teleporters when starting world
function selectLevelHook(){
 if(ModPE.readData("teleporters"+Level.getWorldDir()) != null && ModPE.readData("teleporters"+Level.getWorldDir()) != ""){
  teleporters = ModPE.readData("teleporters"+Level.getWorldDir()).split(",")
  teleportersX = ModPE.readData("teleportersX"+Level.getWorldDir()).split(",")
  teleportersY = ModPE.readData("teleportersY"+Level.getWorldDir()).split(",")
  teleportersZ = ModPE.readData("teleportersZ"+Level.getWorldDir()).split(",")
  print("Loaded "+teleporters.length+" teleporters")
  teleported = 1
 }
}

//Save teleporters if leaving level
function leaveGame(){
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

//Remove teleporter from list if destroyed
function destroyBlock(x,y,z,side){
 blockId = getTile(x,y,z)
 if(blockId == teleporterId){
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

//Ask to name teleporter and save it if placed down
function useItem(x,y,z,itemId,blockId,side){
 if(itemId == teleporterId){
  if(teleporters.length >= maxTeleporterAmount){
	clientMessage("Error: You have reached the maximum amount of teleporters: " + maxTeleporterAmount)
	preventDefault()
  }
  else{
   clientMessage("Please type »/teleporter name <name>« to give this teleporter a name")
   nameTeleporter = 1
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
}

//Commands
function procCmd(command){
 cmd = command.split(" ")
 if(cmd[0] == "teleporter"){
 //Give the teleporter a name
  if(cmd[1] == "name"){
   if(nameTeleporter == 1){
    clientMessage("You named the teleporter " + cmd[2])
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
   else{
    clientMessage("Place down a teleporter first to name it")
   }
  }
  //Remove a teleporter from the list
  else if(cmd[1] == "remove"){
   for(i = 0;i < teleporters.length;i++){
    if(teleporters[i] == cmd[2]){
     teleporters.splice(i,1)
     teleportersX.splice(i,1)
     teleportersY.splice(i,1)
     teleportersZ.splice(i,1)
     removed = 1
     clientMessage("Successfully removed the teleporter")
    }
   }
   if(removed != 1) clientMessage("No teleporters with this name found")
   removed = 0
  }
  //List all the commands
  else if(cmd[1] == "list"){
   clientMessage("»/teleporter name <name>«, used to set the name of a teleporter once prompted to do so.")
   clientMessage("»/teleporter remove <name>«, a teleporter should automatically be removed from the list when broken. If not, you can use this command to remove it")
  }
 }
}

//Show the teleporter that's selected from the list
function goToSelectedTeleporter(){
 teleporterX = parseInt(teleportersX[parseInt(goToTeleporter)])
 teleporterY = parseInt(teleportersY[parseInt(goToTeleporter)])
 teleporterZ = parseInt(teleportersZ[parseInt(goToTeleporter)])
 if(getTile(teleporterX,teleporterY,teleporterZ) == teleporterId){
  Entity.setPosition(getPlayerEnt(),teleporterX+0.5,teleporterY+2.75,teleporterZ+0.5)
  teleported = 1
 }
 else{
  clientMessage("The block at the location of this teleporter isn't a teleporter any more!")
 }
}

//Show GUI when player is standing on a teleporter
function modTick(){
 if(getTile(Player.getX(),Player.getY()-2,Player.getZ()) == teleporterId && teleported != 1){
  if(GUI != 1){
   GUI = 1
   ShowTeleportersMenu()
  }
 }
 if(getTile(Player.getX(),Player.getY()-2,Player.getZ()) != teleporterId && teleported == 1){
  teleported = 0
 }
}

//Show GUI
function ShowTeleportersMenu(){
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
    
    //Add buttons
    if(teleporters[0] != null){
     var  teleporter0 = new android.widget.Button(ctx); 
     teleporter0.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       try{
        dialog.dismiss();
        goToTeleporter = 0;
        GUI = 0
        goToSelectedTeleporter();
       }
       catch(e){
        clientMessage(e)
       }
      }
     })
     teleporter0.setText(teleporters[0])
     teleporter0.setTextSize(textsize)
     menu.addView(teleporter0); 
    }
    if(teleporters[1] != null){
     var  teleporter1 = new android.widget.Button(ctx); 
     teleporter1.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 1;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter1.setText(teleporters[1])
     teleporter1.setTextSize(textsize)
     menu.addView(teleporter1); 
    }
    if(teleporters[2] != null){
     var  teleporter2 = new android.widget.Button(ctx); 
     teleporter2.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 2;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter2.setText(teleporters[2])
     teleporter2.setTextSize(textsize)
     menu.addView(teleporter2); 
    }
    if(teleporters[3] != null){
     var  teleporter3 = new android.widget.Button(ctx); 
     teleporter3.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 3;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter3.setText(teleporters[3])
     teleporter3.setTextSize(textsize)
     menu.addView(teleporter3); 
    } 
    if(teleporters[4] != null){
     var  teleporter4 = new android.widget.Button(ctx); 
     teleporter4.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 4;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter4.setText(teleporters[4])
     teleporter4.setTextSize(textsize)
     menu.addView(teleporter4); 
    }
    if(teleporters[5] != null){
     var  teleporter5 = new android.widget.Button(ctx); 
     teleporter5.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 5;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter5.setText(teleporters[5])
     teleporter5.setTextSize(textsize)
     menu.addView(teleporter5); 
    }
    if(teleporters[6] != null){
     var  teleporter6 = new android.widget.Button(ctx); 
     teleporter6.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 6;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter6.setText(teleporters[6])
     teleporter6.setTextSize(textsize)
     menu.addView(teleporter6); 
    }
    if(teleporters[7] != null){
     var  teleporter7 = new android.widget.Button(ctx); 
     teleporter7.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 7;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter7.setText(teleporters[7])
     teleporter7.setTextSize(textsize)
     menu.addView(teleporter7); 
    }
    if(teleporters[8] != null){
     var  teleporter8 = new android.widget.Button(ctx); 
     teleporter8.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 8;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter8.setText(teleporters[8])
     teleporter8.setTextSize(textsize)
     menu.addView(teleporter8); 
    }
    if(teleporters[9] != null){
     var  teleporter9 = new android.widget.Button(ctx); 
     teleporter9.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 9;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter9.setText(teleporters[9])
     teleporter9.setTextSize(textsize)
     menu.addView(teleporter9); 
    }
    if(teleporters[10] != null){
     var  teleporter10 = new android.widget.Button(ctx); 
     teleporter10.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 10;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter10.setText(teleporters[10])
     teleporter10.setTextSize(textsize)
     menu.addView(teleporter10); 
    }
    if(teleporters[11] != null){
     var  teleporter11 = new android.widget.Button(ctx); 
     teleporter11.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 11;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter11.setText(teleporters[11])
     teleporter11.setTextSize(textsize)
     menu.addView(teleporter11); 
    }
    if(teleporters[12] != null){
     var  teleporter12 = new android.widget.Button(ctx); 
     teleporter12.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 12;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter12.setText(teleporters[12])
     teleporter12.setTextSize(textsize)
     menu.addView(teleporter12); 
    }
    if(teleporters[13] != null){
     var  teleporter13 = new android.widget.Button(ctx); 
     teleporter13.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 13;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter13.setText(teleporters[13])
     teleporter13.setTextSize(textsize)
     menu.addView(teleporter13); 
    }    
    if(teleporters[14] != null){
     var  teleporter14 = new android.widget.Button(ctx); 
     teleporter14.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 14;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter14.setText(teleporters[14])
     teleporter14.setTextSize(textsize)
     menu.addView(teleporter14); 
    }
    if(teleporters[15] != null){
     var  teleporter15 = new android.widget.Button(ctx); 
     teleporter15.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss();
       goToTeleporter = 15;
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter15.setText(teleporters[15])
     teleporter15.setTextSize(textsize)
     menu.addView(teleporter15); 
    }
    if(teleporters[16] != null){
     var  teleporter16 = new android.widget.Button(ctx); 
     teleporter16.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 16
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter16.setText(teleporters[16])
     teleporter16.setTextSize(textsize)
     menu.addView(teleporter16); 
    }
    if(teleporters[17] != null){
     var  teleporter17 = new android.widget.Button(ctx); 
     teleporter17.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 17
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter17.setText(teleporters[17])
     teleporter17.setTextSize(textsize)
     menu.addView(teleporter17); 
    }
    if(teleporters[18] != null){
     var  teleporter18 = new android.widget.Button(ctx); 
     teleporter18.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 18
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter18.setText(teleporters[18])
     teleporter18.setTextSize(textsize)
     menu.addView(teleporter18); 
    }
    if(teleporters[19] != null){
     var  teleporter19 = new android.widget.Button(ctx); 
     teleporter19.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 19
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter19.setText(teleporters[19])
     teleporter19.setTextSize(textsize)
     menu.addView(teleporter19); 
    }
    if(teleporters[20] != null){
     var  teleporter20 = new android.widget.Button(ctx); 
     teleporter20.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 20
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter20.setText(teleporters[20])
     teleporter20.setTextSize(textsize)
     menu.addView(teleporter20); 
    }
    if(teleporters[21] != null){
     var  teleporter21 = new android.widget.Button(ctx); 
     teleporter21.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 21
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter21.setText(teleporters[21])
     teleporter21.setTextSize(textsize)
     menu.addView(teleporter21); 
    }
    if(teleporters[22] != null){
     var  teleporter22 = new android.widget.Button(ctx); 
     teleporter22.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 22
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter22.setText(teleporters[22])
     teleporter22.setTextSize(textsize)
     menu.addView(teleporter22); 
    }
    if(teleporters[23] != null){
     var  teleporter23 = new android.widget.Button(ctx); 
     teleporter23.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 23
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter23.setText(teleporters[23])
     teleporter23.setTextSize(textsize)
     menu.addView(teleporter23); 
    }
    if(teleporters[24] != null){
     var  teleporter24 = new android.widget.Button(ctx); 
     teleporter24.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 24
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter24.setText(teleporters[24])
     teleporter24.setTextSize(textsize)
     menu.addView(teleporter24); 
    }
    if(teleporters[25] != null){
     var  teleporter25 = new android.widget.Button(ctx); 
     teleporter25.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 25
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter25.setText(teleporters[25])
     teleporter25.setTextSize(textsize)
     menu.addView(teleporter25); 
    }
    if(teleporters[26] != null){
     var  teleporter26 = new android.widget.Button(ctx); 
     teleporter26.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 26
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter26.setText(teleporters[26])
     teleporter26.setTextSize(textsize)
     menu.addView(teleporter26); 
    }
    if(teleporters[27] != null){
     var  teleporter27 = new android.widget.Button(ctx); 
     teleporter27.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 27
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter27.setText(teleporters[27])
     teleporter27.setTextSize(textsize)
     menu.addView(teleporter27); 
    }
    if(teleporters[28] != null){
     var  teleporter28 = new android.widget.Button(ctx); 
     teleporter28.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 28
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter28.setText(teleporters[28])
     teleporter28.setTextSize(textsize)
     menu.addView(teleporter28); 
    }
    if(teleporters[29] != null){
     var  teleporter29 = new android.widget.Button(ctx); 
     teleporter29.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 29
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter29.setText(teleporters[29])
     teleporter29.setTextSize(textsize)
     menu.addView(teleporter29); 
    }
    if(teleporters[30] != null){
     var  teleporter30 = new android.widget.Button(ctx); 
     teleporter30.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 30
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter30.setText(teleporters[30])
     teleporter30.setTextSize(textsize)
     menu.addView(teleporter30); 
    }
    if(teleporters[31] != null){
     var  teleporter31 = new android.widget.Button(ctx); 
     teleporter31.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 31
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter31.setText(teleporters[31])
     teleporter31.setTextSize(textsize)
     menu.addView(teleporter31); 
    }
    if(teleporters[32] != null){
     var  teleporter32 = new android.widget.Button(ctx); 
     teleporter32.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 32
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter32.setText(teleporters[32])
     teleporter32.setTextSize(textsize)
     menu.addView(teleporter32); 
    }
    if(teleporters[33] != null){
     var  teleporter33 = new android.widget.Button(ctx); 
     teleporter33.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 33
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter33.setText(teleporters[33])
     teleporter33.setTextSize(textsize)
     menu.addView(teleporter33); 
    }
    if(teleporters[34] != null){
     var  teleporter34 = new android.widget.Button(ctx); 
     teleporter34.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 34
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter34.setText(teleporters[34])
     teleporter34.setTextSize(textsize)
     menu.addView(teleporter34); 
    }
    if(teleporters[35] != null){
     var  teleporter35 = new android.widget.Button(ctx); 
     teleporter35.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 35
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter35.setText(teleporters[35])
     teleporter35.setTextSize(textsize)
     menu.addView(teleporter35); 
    }
    if(teleporters[36] != null){
     var  teleporter36 = new android.widget.Button(ctx); 
     teleporter36.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 36
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter36.setText(teleporters[36])
     teleporter36.setTextSize(textsize)
     menu.addView(teleporter36); 
    }
    if(teleporters[37] != null){
     var  teleporter37 = new android.widget.Button(ctx); 
     teleporter37.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 37
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter37.setText(teleporters[37])
     teleporter37.setTextSize(textsize)
     menu.addView(teleporter37); 
    }
    if(teleporters[38] != null){
     var  teleporter38 = new android.widget.Button(ctx); 
     teleporter38.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 38
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter38.setText(teleporters[38])
     teleporter38.setTextSize(textsize)
     menu.addView(teleporter38); 
    }
    if(teleporters[39] != null){
     var  teleporter39 = new android.widget.Button(ctx); 
     teleporter39.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 39
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter39.setText(teleporters[39])
     teleporter39.setTextSize(textsize)
     menu.addView(teleporter39); 
    }
    if(teleporters[40] != null){
     var  teleporter40 = new android.widget.Button(ctx); 
     teleporter40.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 40
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter40.setText(teleporters[40])
     teleporter40.setTextSize(textsize)
     menu.addView(teleporter40); 
    }
    if(teleporters[41] != null){
     var  teleporter41 = new android.widget.Button(ctx); 
     teleporter41.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 41
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter41.setText(teleporters[41])
     teleporter41.setTextSize(textsize)
     menu.addView(teleporter41); 
    }
    if(teleporters[42] != null){
     var  teleporter42 = new android.widget.Button(ctx); 
     teleporter42.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 42
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter42.setText(teleporters[42])
     teleporter42.setTextSize(textsize)
     menu.addView(teleporter42); 
    }
    if(teleporters[43] != null){
     var  teleporter43 = new android.widget.Button(ctx); 
     teleporter43.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 43
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter43.setText(teleporters[43])
     teleporter43.setTextSize(textsize)
     menu.addView(teleporter43); 
    }
    if(teleporters[44] != null){
     var  teleporter44 = new android.widget.Button(ctx); 
     teleporter44.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 44
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter44.setText(teleporters[44])
     teleporter44.setTextSize(textsize)
     menu.addView(teleporter44); 
    }
    if(teleporters[45] != null){
     var  teleporter45 = new android.widget.Button(ctx); 
     teleporter45.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 45
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter45.setText(teleporters[45])
     teleporter45.setTextSize(textsize)
     menu.addView(teleporter45); 
    }
    if(teleporters[46] != null){
     var  teleporter46 = new android.widget.Button(ctx); 
     teleporter46.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 46
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter46.setText(teleporters[46])
     teleporter46.setTextSize(textsize)
     menu.addView(teleporter46); 
    }
    if(teleporters[47] != null){
     var  teleporter47 = new android.widget.Button(ctx); 
     teleporter47.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 47
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter47.setText(teleporters[47])
     teleporter47.setTextSize(textsize)
     menu.addView(teleporter47); 
    }
    if(teleporters[48] != null){
     var  teleporter48 = new android.widget.Button(ctx); 
     teleporter48.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 48
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter48.setText(teleporters[48])
     teleporter48.setTextSize(textsize)
     menu.addView(teleporter48); 
    }
    if(teleporters[49] != null){
     var  teleporter49 = new android.widget.Button(ctx); 
     teleporter49.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 49
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter49.setText(teleporters[49])
     teleporter49.setTextSize(textsize)
     menu.addView(teleporter49); 
    }
    if(teleporters[50] != null){
     var  teleporter50 = new android.widget.Button(ctx); 
     teleporter50.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 50
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter50.setText(teleporters[50])
     teleporter50.setTextSize(textsize)
     menu.addView(teleporter50); 
    }
    if(teleporters[51] != null){
     var  teleporter51 = new android.widget.Button(ctx); 
     teleporter51.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 51
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter51.setText(teleporters[51])
     teleporter51.setTextSize(textsize)
     menu.addView(teleporter51); 
    }
    if(teleporters[52] != null){
     var  teleporter52 = new android.widget.Button(ctx); 
     teleporter52.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 52
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter52.setText(teleporters[52])
     teleporter52.setTextSize(textsize)
     menu.addView(teleporter52); 
    }
    if(teleporters[53] != null){
     var  teleporter53 = new android.widget.Button(ctx); 
     teleporter53.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 53
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter53.setText(teleporters[53])
     teleporter53.setTextSize(textsize)
     menu.addView(teleporter53); 
    }
    if(teleporters[54] != null){
     var  teleporter54 = new android.widget.Button(ctx); 
     teleporter54.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 54
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter54.setText(teleporters[54])
     teleporter54.setTextSize(textsize)
     menu.addView(teleporter54); 
    }
    if(teleporters[55] != null){
     var  teleporter55 = new android.widget.Button(ctx); 
     teleporter55.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 55
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter55.setText(teleporters[55])
     teleporter55.setTextSize(textsize)
     menu.addView(teleporter55); 
    }
    if(teleporters[56] != null){
     var  teleporter56 = new android.widget.Button(ctx); 
     teleporter56.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 56
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter56.setText(teleporters[56])
     teleporter56.setTextSize(textsize)
     menu.addView(teleporter56); 
    }
    if(teleporters[57] != null){
     var  teleporter57 = new android.widget.Button(ctx); 
     teleporter57.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 57
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter57.setText(teleporters[57])
     teleporter57.setTextSize(textsize)
     menu.addView(teleporter57); 
    }
    if(teleporters[58] != null){
     var  teleporter58 = new android.widget.Button(ctx); 
     teleporter58.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 58
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter58.setText(teleporters[58])
     teleporter58.setTextSize(textsize)
     menu.addView(teleporter58); 
    }
    if(teleporters[59] != null){
     var  teleporter59 = new android.widget.Button(ctx); 
     teleporter59.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 59
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter59.setText(teleporters[59])
     teleporter59.setTextSize(textsize)
     menu.addView(teleporter59); 
    }	
    if(teleporters[60] != null){
     var  teleporter60 = new android.widget.Button(ctx); 
     teleporter60.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 60
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter60.setText(teleporters[60])
     teleporter60.setTextSize(textsize)
     menu.addView(teleporter60); 
    }
    if(teleporters[61] != null){
     var  teleporter61 = new android.widget.Button(ctx); 
     teleporter61.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 61
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter61.setText(teleporters[61])
     teleporter61.setTextSize(textsize)
     menu.addView(teleporter61); 
    }
    if(teleporters[62] != null){
     var  teleporter62 = new android.widget.Button(ctx); 
     teleporter62.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 62
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter62.setText(teleporters[62])
     teleporter62.setTextSize(textsize)
     menu.addView(teleporter62); 
    }
    if(teleporters[63] != null){
     var  teleporter63 = new android.widget.Button(ctx); 
     teleporter63.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 63
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter63.setText(teleporters[63])
     teleporter63.setTextSize(textsize)
     menu.addView(teleporter63); 
    }
    if(teleporters[64] != null){
     var  teleporter64 = new android.widget.Button(ctx); 
     teleporter64.setOnClickListener(new android.view.View.OnClickListener(){
      onClick: function(){ 
       dialog.dismiss() 
       goToTeleporter = 64
       GUI = 0
       goToSelectedTeleporter();
      }
     })
     teleporter64.setText(teleporters[64])
     teleporter64.setTextSize(textsize)
     menu.addView(teleporter64); 
    }	
	dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener(){
	 onDismiss: function(){
	  GUI = 0
	 }
	})
    dialog.show()
   } 
   catch (e){
    print ("Error: "+e)
   }
  }
 });
}
