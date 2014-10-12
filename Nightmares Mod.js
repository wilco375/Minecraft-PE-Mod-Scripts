//Nightmares mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: 

var nightmare
var counter

function useItem(x,y,z,itemId,blockId){
 rnd = Math.floor((Math.random() * 4) + 1)
 if(blockId == 26 && rnd == 2){
  nightmare = 1
 }
}

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
}
