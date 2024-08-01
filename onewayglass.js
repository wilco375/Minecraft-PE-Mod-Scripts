//One Way Glass Mod
//By wilco375

var ids = [252,253,254,255]
var X, Y, Z, SIDE
var defaultTexture = "iron_block"

Item.addCraftRecipe(ids[1],1,0,[265,4,0,20,2,0,265,3,0])

function selectLevelHook(){
  texture = defaultTexture
  worldTexture = getStringFromWorld()
  if(worldTexture != null && worldTexture != "") {
    texture = String(worldTexture)
  }
  Block.defineBlock(ids[0],"One Way Glass",[[texture,0],[texture,0],["glass",0], [texture,0], [texture,0], [texture,0]],20,false,0)
  Block.defineBlock(ids[1],"One Way Glass",[[texture,0],[texture,0],[texture,0], ["glass",0], [texture,0], [texture,0]],20,false,0)
  Block.defineBlock(ids[2],"One Way Glass",[[texture,0],[texture,0],[texture,0], [texture,0], ["glass",0], [texture,0]],20,false,0)
  Block.defineBlock(ids[3],"One Way Glass",[[texture,0],[texture,0],[texture,0], [texture,0], [texture,0], ["glass",0]],20,false,0)
  for(i=0;i<ids.length;i++){
    Block.setRenderLayer(ids[i],5)
  }
  //print("texture set to "+texture)
}


function useItem(x,y,z,itemId,blockId,side){
  if(itemId == ids[1]){
    //preventDefault()
    X = x
    Y = y
    Z = z
    SIDE = side
  }
}

function destroyBlock(x,y,z){
  destroyGlass(x,y,z)
}

function startDestroyBlock(x,y,z){
  destroyGlass(x,y,z)
}

function destroyGlass(x,y,z){
  for(i = 0;i<ids.length;i++){
    if(getTile(x,y,z) == ids[i]){
      preventDefault()
      setTile(x,y,z,0)
      Level.dropItem(x,y,z,0.5,ids[1],1)
    }
  }
}

function procCmd(command) { 
  var cmd = command.split(" ")
  if(cmd[0] == "glasstexture"){
    saveStringToWorld(cmd[1])
    clientMessage("Texture is now set to "+cmd[1])
  }
}

function getYaw(){
  yaw = Entity.getYaw(getPlayerEnt())
  while(yaw < 0){
    yaw = yaw+360
  }
  while(yaw>360){
    yaw = yaw-360
  }
  return yaw
}

function modTick(){
  if(X != null && SIDE != null){
    x = X
    y = Y
    z = Z
    side = SIDE
    yaw = getYaw()
    if(side == 0){
      y = y-1
    }
    else if(side == 1){
      y = y+1
    }
    else if(side == 2){
      z = z-1
    }
    else if(side == 3){
      z = z+1
    }
    else if(side == 4){
      x = x-1
    }
    else if(side == 5){
      x = x+1
    }
    if(getTile(x,y,z) == ids[1]){
    if((yaw >= 315 && yaw <= 360)||(yaw >= 0 && yaw <= 45)){
      setTile(x,y,z,ids[0])
    }
    else if(yaw >= 135 && yaw <= 225){
      setTile(x,y,z,ids[1])
    }
    else if(yaw >= 225 && yaw <= 315){
      setTile(x,y,z,ids[2])
    }
    else if(yaw >= 45 && yaw <= 135){
      setTile(x,y,z,ids[3])
    }
}
    X = null
    Y = null
    Z = null
    SIDE = null
  }
}

function saveStringToWorld(string){
 var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/owg.texture"
 var file = new java.io.File(filePath)
 if(file.exists()){
  file.delete()
 }
 file.createNewFile()
 var outputStream = new java.io.BufferedWriter(new java.io.FileWriter(filePath))
 outputStream.write(string)
 outputStream.flush()
}

function getStringFromWorld(){
 var string
 var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/owg.texture"
 var file = new java.io.File(filePath)
 if(file.exists()){
  var inputStream = new java.io.BufferedReader(new java.io.FileReader(filePath))
  return inputStream.readLine()
 }
 else{
  return null
 }
 return string
}