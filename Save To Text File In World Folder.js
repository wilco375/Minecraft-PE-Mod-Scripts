function saveToDocInWorld(string,string2,string3,string4){
 var pathToCctvFile = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/cctv.cams"
 var file = new java.io.File(pathToCctvFile)
 if(string != null && string != []){
  if(file.exists()){
   file.delete()
  }
  file.createNewFile()
  var outputStream = new java.io.BufferedWriter(new java.io.FileWriter(pathToCctvFile))
  outputStream.write(string+"|"+string2+"|"+string3+"|"+string4)
  outputStream.flush()
 }
}

function readFromDocInWorld(){
 var pathToCctvFile = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/cctv.cams"
 var file = new java.io.File(pathToCctvFile)
 if(file.exists()){
  var inputStream = new java.io.BufferedReader(new java.io.FileReader(pathToCctvFile))
  return inputStream.readLine()
 }
 else{
  return null
 }
}
