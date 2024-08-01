//Ultimate Survival ModPack V1.1
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: 

var underground, undergroundTime
var lastHealth, lastCarriedItemId

var nightmare
var counter

function modTick(){
 if(counter == null) counter = 0
 if(nightmare == 1){
  counter++
  nightmare = 0
 }
 if(counter >= 1 && counter < 105){
  counter++
 }
 if(counter == 105){
  counter = 0
  if(Level.getTime() == 19204){
   rnd = Math.floor((Math.random() * 10) + 2)
   clientMessage("You've had a nightmare!")
   Player.setHealth(Entity.getHealth(getPlayerEnt())-rnd)
  }
 }
 //clientMessage(underground)
 x = Player.getX()
 y = Player.getY()
 z = Player.getZ()
 if(y <= 60 && underground != 1){
  //clientMessage("y<60 && underground != 1")
  for(i = -1;i < 16;i++){
   //clientMessage("tile " + getTile(x,y+i,z))
   if(getTile(x,y+i,z) == 1){ 
    underground = 1
    //clientMessage("underground == 1")
   }
  }
 }
 if(y > 60 && underground == 1) underground = 0
 if(y <= 60 && underground == 1){
  if(getTile(x,y+1,z) != 1 && getTile(x,y+2,z) != 1 && getTile(x,y+3,z) != 1 && getTile(x,y+4,z) != 1 && getTile(x,y+5,z) != 1 && getTile(x,y+6,z) != 1 && getTile(x,y+7,z) != 1 && getTile(x,y+8,z) != 1 && getTile(x,y+9,z) != 1 && getTile(x,y+10,z) != 1 && getTile(x,y+11,z) != 1 && getTile(x,y+12,z) != 1 && getTile(x,y+13,z) != 1 && getTile(x,y+14,z) != 1 && getTile(x,y+15,z) != 1 && getTile(x,y-1,z) != 1 && getTile(x,y-2,z) != 1){
   underground = 0
   //clientMessage("underground = 0")
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
  clientMessage("§c[WARNING] §fYou're running row on air!")
 }
 if(undergroundTime == 12000 || undergroundTime == 12020 || undergroundTime == 12040 || undergroundTime == 12060 || undergroundTime == 12080 || undergroundTime == 12100 || undergroundTime == 12120 || undergroundTime == 12140 || undergroundTime == 12160 || undergroundTime == 12180){
  Player.setHealth(Entity.getHealth(getPlayerEnt())-2)
 }
 if(undergroundTime == 12200){
  Player.setHealth(0)
  for(i=0;i<=37;i++){
   Player.clearInventorySlot(i)
  }
 }

 currentHealth = Entity.getHealth(getPlayerEnt())
 if(currentHealth > lastHealth){
  if(lastCarriedItemId == 360 || lastCarriedItemId == 365 || lastCarriedItemId == 357) Player.setHealth(lastHealth+1)
  if(lastCarriedItemId == 363 || lastCarriedItemId == 319) Player.setHealth(lastHealth+2)
  if(lastCarriedItemId == 260 || lastCarriedItemId == 391) Player.setHealth(lastHealth+2)
  if(lastCarriedItemId == 393 || lastCarriedItemId == 366) Player.setHealth(lastHealth+3)
  if(lastCarriedItemId == 459 || lastCarriedItemId == 364 || lastCarriedItemId == 320 || lastCarriedItemId == 282) Player.setHealth(lastHealth+4)
  if(lastCarriedItemId == 297) Player.setHealth(lastHealth+3)
  if(Entity.getHealth(getPlayerEnt()) > 20) Player. setHealth(20)
 }
 if(lastHealth > currentHealth){
  Player.setHealth(Math.floor(lastHealth-((lastHealth-currentHealth)*1.25)))
 }
 lastHealth = Entity.getHealth(getPlayerEnt())
 lastCarriedItemId = Player.getCarriedItem()
}

function procCmd(command){
 if(command == "air" && undergroundTime < 10800 && underground == 1){
  clientMessage("You can be underground for " + Math.round((12000-undergroundTime)/1200) + " more minute(s)")
 }
 if(command == "air" && undergroundTime >= 10800){
  clientMessage("§c[WARNING] §fYou can only be underground for " + Math.round((12000-undergroundTime)/20) + " more seconds!")
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
  if(mx < px-1.5 || mx > px+2){
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
  else if(my < py-2.5 || my > py+3) {
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
  else if(mz < pz-1.5 || mz > pz+2) {
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
 }
 itemId = Player.getCarriedItem()
 if(itemId == 284 || itemId == 285 || itemId == 286 || itemId == 269 || itemId == 270 || itemId == 271 || itemId == 273 || itemId == 274 || itemId == 275 || itemId == 256 || itemId == 257 || itemId == 258 || itemId == 277 || itemId == 278 || itemId == 279 || itemId == 283 || itemId == 268 || itemId == 272 || itemId == 267 || itemId == 276 || itemId == 294 || itemId == 290 || itemId == 291 || itemId == 292 || itemId == 293){
  addRandomDamage()
 }
}

var explodingChancePercentageIron = 20
var explodingChancePercentageGold = 20
var explodingChancePercentageDiamond = 20
var explodingChancePercentageRedstone = 20
var explodingChancePercentageLapis = 20
var explodingChancePercentageCoal = 20

var explodingRadiusIron = 4
var explodingRadiusGold = 4
var explodingRadiusDiamond = 4
var explodingRadiusRedstone = 4
var explodingRadiusLapis = 4
var explodingRadiusCoal = 4

var cI = Math.pow(explodingChancePercentageIron/100, -1)
var cG = Math.pow(explodingChancePercentageGold/100, -1)
var cD = Math.pow(explodingChancePercentageDiamond/100, -1)
var cL = Math.pow(explodingChancePercentageLapis/100, -1)
var cR = Math.pow(explodingChancePercentageRedstone/100, -1)
var cC = Math.pow(explodingChancePercentageCoal/100, -1)

function destroyBlock(x,y,z,shouldDrop){
 b = getTile(x,y,z)
 if(b == 15){
  e = Math.floor((Math.random() * cI) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusIron)
 }}

 if(b == 16){
  e = Math.floor((Math.random() * cC) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusCoal)
 }}

 if(b == 21){
  e = Math.floor((Math.random() * cL) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusLapis)
 }}

 if(b == 56){
  e = Math.floor((Math.random() * cD) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusDiamond)
 }}

 if(b == 73 || b == 74){
  e = Math.floor((Math.random() * cR) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusRedstone)
  }}

 if(b == 14){
  e = Math.floor((Math.random() * cG) + 1)
  if(e == 1){
   Level.explode(x,y,z,explodingRadiusGold)
 }}

 rnd = Math.floor((Math.random() * 50) + 1)
 if(rnd == 1 || rnd == 2){
  preventDefault()
  setTile(x,y,z,0)
 }
 itemId = Player.getCarriedItem()
 if(itemId == 284 || itemId == 285 || itemId == 286 || itemId == 269 || itemId == 270 || itemId == 271 || itemId == 273 || itemId == 274 || itemId == 275 || itemId == 256 || itemId == 257 || itemId == 258 || itemId == 277 || itemId == 278 || itemId == 279 ){
  addRandomDamage()
 }
 if(itemId == 283 || itemId == 268 || itemId == 272 || itemId == 267 || itemId == 276){
  addRandomDamage()
  addRandomDamage()
 }
}

function deathHook(murderer, victim){
 if(victim == getPlayerEnt()){
  preventDefault()
  Player.setHealth(0)
  for(i=0;i<=37;i++){
   Player.clearInventorySlot(i)
}}}

function entityRemovedHook(v){
 if(Entity.getEntityTypeId(v) == 33){
  mx = Entity.getX(v)
  my = Entity.getY(v)
  mz = Entity.getZ(v)
  px = Player.getX()
  py = Player.getY()
  pz = Player.getZ() 
  if(mx > px-10 || mx < px+10){
   preventDefault()
   Level.explode(mx,my,mz,5)
  }
  else if(my > py-10 || my < py+10) {
   preventDefault()
   Level.explode(mx,my,mz,5)
  }
  else if(mz > pz-10 || mz < pz+10) {
   preventDefault()
   Level.explode(mx,my,mz,5)
  }
 }
}

function useItem(x,y,z,itemId,blockId){
 itemId = Player.getCarriedItem()
 if(itemId == 294 || itemId == 290 || itemId == 291 || itemId == 292 || itemId == 293){
  addRandomDamage()
 }
rnd = Math.floor((Math.random() * 4) + 1)
 if(blockId == 26 && rnd == 2){
  nightmare = 1
 }
}

function addRandomDamage(){
 rnd = Math.floor((Math.random() * 10) + 1);
 if(rnd == 1){
  Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1)
 }
}
