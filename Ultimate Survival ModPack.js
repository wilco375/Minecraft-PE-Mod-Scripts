//Ultimate Survival ModPack
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/sPOI1

var underground, undergroundTime
var lastHealth, lastCarriedItemId

function modTick(){
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
 lastHealth = Entity.getHealth(getPlayerEnt())
 lastCarriedItemId = Player.getCarriedItem()
}

function procCmd(command){
 if(command == "air" && undergroundTime < 10800 && underground == 1){
  clientMessage("You can be underground for " + Math.round((12000-undergroundTime)/1200) + " more minute(s)")
 }
 if(command == "air" && undergroundTime >= 10800){
  clientMessage("[WARNING] You can only be underground for " + Math.round((12000-undergroundTime)/20) + " more seconds!")
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
  if(mx < px-1.5 || mx > px+1.5){
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
  else if(my < py-2.5 || my > py+2.5) {
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
  else if(mz < pz-1.5 || mz > pz+1.5) {
   preventDefault()
   //clientMessage("This mob is too far away to hit")
  }
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
}

function deathHook(murderer, victim){
 if(victim == getPlayerEnt()){
  preventDefault()
  Player.setHealth(0)
  for(i=0;i<=37;i++){
   Player.clearInventorySlot(i)
}}}
