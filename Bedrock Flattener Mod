//Bedrock Flattener Mod
//by wilco375

var count

function modTick(){
 if(count == null){
//clientMessage("count is null")
if(java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/FlatBedrock.info").exists() == false){
//clientMessage(".info doesnt exist")
if( java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/entities.dat").exists()){
//clientMessage("entities.dat exists")
  clientMessage(ChatColor.RED+ "[FlatBedrock]" + ChatColor.WHITE + " Now removing all the bedrock. PLEASE DON'T")
clientMessage("TOUCH THE SCREEN DURING THIS PROCESS, IT WILL CRASH YOUR GAME. A message will appear when it's done. It might take 10-20 seconds, depending on your device.")
  count = 1
 }}}
if( java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/FlatBedrock.info").exists() && count == null){
 count = 277 
 clientMessage(ChatColor.RED+ "[FlatBedrock]" + ChatColor.WHITE + " Bedrock is already successfully flattened out in")
clientMessage("this world!")
}
if(count >= 1 && count <20) count++
 if(count >= 20 && count <= 275){
  x = count-20
  for(var z = 0;z<=255;z++){
   for(var y = 1;y<=4;y++){
    if(getTile(x,y,z) == 7){
     setTile(x,y,z,1)
    }
   }
  }
  count++
 }
 if(count == 276){
  clientMessage(ChatColor.RED+ "[FlatBedrock]" + ChatColor.WHITE + " Bedrock successfully flattened out")
	var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+"FlatBedrock.info")
	file.createNewFile()
 count = 277
 }
}
