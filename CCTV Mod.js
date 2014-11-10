//CCTV Mod
//by wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

var Camera = 180
var camX, camY, camZ, goToCam, currentX, currentY, currentZ, camera, cameraX, cameraY, cameraZ, air, removed, nameCam
var cameras = []
var camerasX = []
var camerasY = []
var camerasZ = []

Block.defineBlock(Camera,"CCTV Camera",["piston_inner",0],18,false,0)
Block.setDestroyTime(Camera, 1)
Item.addCraftRecipe(Camera,1,0,[1,3,0,20,1,0,331,2,0,1,3,0])
Item.setCategory(Camera,8,0);

function selectLevelHook(){
 if(ModPE.readData("cameras"+Level.getWorldDir()) != null && ModPE.readData("cameras"+Level.getWorldDir()) != ""){
  cameras = ModPE.readData("cameras"+Level.getWorldDir()).split(",")
  camerasX = ModPE.readData("camerasX"+Level.getWorldDir()).split(",")
  camerasY = ModPE.readData("camerasY"+Level.getWorldDir()).split(",")
  camerasZ = ModPE.readData("camerasZ"+Level.getWorldDir()).split(",")
  print("Loaded "+cameras.length+" cameras")
 }
}

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

function useItem(x,y,z,itemId,blockId,side){
 if(camera == 1){
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

function procCmd(command){
 cmd = command.split(" ")
 if(cmd[0] == "cctv"){
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
  else if(cmd[1] == "cameras"){
   clientMessage(cameras)
  }
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
  else if(cmd[1] == "list"){
   clientMessage("»/cctv name <camera name>«, used to set the name of a camera once prompted to do so.")
   clientMessage("»/cctv cameras«, gives a list of all the cameras")
   clientMessage("»/cctv show <camera name>«, used to look through the camera")
   clientMessage("»/cctv leave«, leaves the camera you're looking through")
   clientMessage("»/cctv remove <camera name>«, a camera should automatically be removed from the list when broken. If not, you can use this command to remove it")
  }
 }
}

function modTick(){
 if(camera == 1){
  if(Player.getX() != cameraX+0.5 || Player.getY() > cameraY+1.5 || Player.getY() < cameraY+0.5 || Player.getZ() != cameraZ+0.5){ 
   Entity.setPosition(getPlayerEnt(), cameraX+0.5,cameraY+1,cameraZ+0.5)
  }
 }
}

function destroyBlock(){
 if(camera == 1){
  preventDefault()
 }
}

