//Less healing from food mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link:

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
