//Camouflage Block Mod
//by wilco375
//Do not reupload or use in your own mod without permission

var camBlock = 250
var Xs = []
var Ys = []
var Zs = []

Block.defineBlock(camBlock,"Camouflage Block",["piston_top_normal",0],20,false,0);
Item.addCraftRecipe(camBlock,1,0,[5,4,0,351,1,15,5,4,0])

function newLevel(){
 var string = getStringFromWorld()
 if(string != null && string != "" && string.indexOf("|") > -1) {
  //clientMessage(string)
  XsString = string.split("/")[0]
  YsString = string.split("/")[1]
  ZsString = string.split("/")[2]
  //clientMessage(XsString+" - "+ZsString.length())
  XsString = XsString.substring(0, XsString.length()-1) + "";
  YsString = YsString.substring(0, YsString.length()-1) + "";
  ZsString = ZsString.substring(0, ZsString.length()-1) + "";
  if(XsString.indexOf("|") > -1) {
   Xs = XsString.split("|")
   Ys = YsString.split("|")
   Zs = ZsString.split("|")
  }
 }
}

function useItem(x,y,z,itemId,blockId){
 //clientMessage(Xs)
 //clientMessage(Ys)
 //clientMessage(Zs)
 if(blockId == camBlock && itemId != camBlock && itemId > 0 && itemId < 256){
  setTile(x,y,z,Player.getCarriedItem(),Player.getCarriedItemData())
  preventDefault()
  Xs.push(x)
  Ys.push(y)
  Zs.push(z)
 }
}

function leaveGame(){
 Xstring = ""
 for(i=0;i<Xs.length;i++){
  Xstring = Xstring+Xs[i]+"|"
 }
 Ystring = ""
 for(i=0;i<Ys.length;i++){
  Ystring = Ystring+Ys[i]+"|"
 }
 Zstring = ""
 for(i=0;i<Zs.length;i++){
  Zstring = Zstring+Zs[i]+"|"
 }
 saveStringToWorld(Xstring+"/"+Ystring+"/"+Zstring)
}

function destroyBlock(x,y,z){
 for(i = 0;i<Xs.length;i++){
  if(Xs[i] == x && Ys[i] == y && Zs[i] == z){
   preventDefault()
   setTile(x,y,z,camBlock)
   Xs.splice(i,1)
   Ys.splice(i,1)
   Zs.splice(i,1)
   //clientMessage ("removed block")
  }
 }
}

function startDestroyBlock(x,y,z){
  if(getTile(x,y,z) == camBlock) {
    preventDefault()
    setTile(x,y,z,0)
    Level.dropItem(x,y,z,0.5,camBlock,1)
  }
}

function saveStringToWorld(string){
 var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/cbm.info"
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
 var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/cbm.info"
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