var nv

function procCmd(cmd){
 var cmd = cmd.split(" ");
 if(cmd[0]=="nightvision"){
  if(nv != 1){
   nv = 1 
   for(i=1;i<=255;i++){
    if(i != 138 && i != 119 && i != 51 && i != 89 && i != 91 && i != 10 && i != 11 && i != 124 && i != 50 && i != 62 && i != 90 && i != 74 && i != 94 && i != 130 && i != 76 && i != 117 && i != 39 && i != 122 && i != 120 && i != 246){
     Block.setLightLevel(i,15)
     //clientMessage("set ll of "+i)
    }
   }
  clientMessage("nv 1")
  }
  else if(nv == 1){
   nightvisions = 0
   for(i=1;i<=255;i++){
    if(i != 138 && i != 119 && i != 51 && i != 89 && i != 91 && i != 10 && i != 11 && i != 124 && i != 50 && i != 62 && i != 90 && i != 74 && i != 94 && i != 130 && i != 76 && i != 117 && i != 39 && i != 122 && i != 120 && i != 246){
     Block.setLightLevel(i,15)
    }
   }
  clientMessage("nv 0")
  }
 }
}
