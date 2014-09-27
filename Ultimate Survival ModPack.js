//Ultimate Survival ModPack
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/sPOI1

var underground, undergroundTime

function modTick(){
 //clientMessage(underground)
 x = Player.getX()
 y = Player.getY()
 z = Player.getZ()
 if(y <= 60 && underground != 1){
  //clientMessage("y<60 && underground != 1")
  for(i = 1;i < 11;i++){
   //clientMessage("tile " + getTile(x,y+i,z))
   if(getTile(x,y+i,z) == 1){ 
    underground = 1
    //clientMessage("underground == 1")
   }
  }
 }
 if(y > 60 && underground == 1) underground = 0
 if(y <= 60 && underground == 1){
  if(getTile(x,y+1,z) != 1 && getTile(x,y+2,z) != 1 && getTile(x,y+3,z) != 1 && getTile(x,y+4,z) != 1 && getTile(x,y+5,z) != 1 && getTile(x,y+6,z) != 1 && getTile(x,y+7,z) != 1 && getTile(x,y+8,z) != 1 && getTile(x,y+9,z) != 1 && getTile(x,y+10,z) != 1){
   underground = 0
   clientMessage("underground = 0")
  }
 } 
 if(undergroundTime == null) undergroundTime = 0
 if(underground == 1){
  undergroundTime++
 }
 if(underground != 1 && undergroundTime > 0){
  undergroundTime = 0
 }
 if(undergroundTime == 6000){
  clientMessage("You can be underground for 5 more minutes")
 }
 if(undergroundTime == 9600){
  clientMessage("You can be underground for 2 more minutes")
 }
 if(undergroundTime == 11400){
  clientMessage("[WARNING] You're running row on air!")
 }
 if(undergroundTime == 12000 || undergroundTime == 12020 || undergroundTime == 12040 || undergroundTime == 12060 || undergroundTime == 12080 || undergroundTime == 12100 || undergroundTime == 12120 || undergroundTime == 12140 || undergroundTime == 12160 || undergroundTime == 12180){
  Player.setHealth(Entity.getHealth(getPlayerEnt())-2)
 }
 if(undergroundTime == 12200){
  Player.setHealth(0)
 }
}

function procCmd(command){
 if(command == "air" && undergroundTime < 10800 && underground == 1){
  clientMessage("You can stay underground for " + Math.round((12000-undergroundTime)/1200) + " minute(s)")
 }
 if(command == "air" && undergroundTime >= 10800){
  clientMessage("[WARNING] You can only stay underground for " + Math.round((12000-undergroundTime)/20) + " more seconds!")
 }
 if(command == "air" && underground != 1){
  clientMessage("You can breath just fine right here!")
 }
}

function attackHook(a,v){
 if(Level.getGameMode() != 1){
  mx = Entity.getX(v)
  my = Entity.getY(v)
  mz = Entity.getZ(v)
  px = Player.getX()
  py = Player.getY()
  pz = Player.getZ() 
  if(mx < px-2 || mx > px+2){
   preventDefault()
   clientMessage("This mob is too far away to hit")
  }
  else if(my < py-3 || my > py+3) {
   preventDefault()
   clientMessage("This mob is too far away to hit")
  }
  else if(mz < pz-2 || mz > pz+2) {
   preventDefault()
   clientMessage("This mob is too far away to hit")
  }
 }
}

var lastHealth, lastCarriedItemId

function modTick(){
 currentHealth = Entity.getHealth(getPlayerEnt())
 if(currentHealth-lastHealth == 2){
  if(lastCarriedItemId == 360 || lastCarriedItemId == 365 || lastCarriedItemId == 357){
   Player.setHealth(lastHealth+1)
  }
 }
 if(currentHealth-lastHealth == 3){
  if(lastCarriedItemId == 363 || lastCarriedItemId == 319){
   Player.setHealth(lastHealth+2)
  }
 }
 if(currentHealth-lastHealth == 4){
  if(lastCarriedItemId == 260 || lastCarriedItemId == 391){
   Player.setHealth(lastHealth+2)
  }
 }
 if(currentHealth-lastHealth == 6){
  if(lastCarriedItemId == 393 || lastCarriedItemId == 366){
   Player.setHealth(lastHealth+3)
  }
 }
 if(currentHealth-lastHealth == 8){
  if(lastCarriedItemId == 459 || lastCarriedItemId == 364 || lastCarriedItemId == 320 || lastCarriedItemId == 282){
   Player.setHealth(lastHealth+4)
  }
 }
 if(currentHealth-lastHealth == 5){
  if(lastCarriedItemId == 297){
   Player.setHealth(lastHealth+3)
  }
 }
 lastHealth = Entity.getHealth(getPlayerEnt())
 lastCarriedItemId = Player.getCarriedItem()
}
