//Died means stuff gone mod 
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: 

function deathHook(murderer, victim){
 if(victim == getPlayerEnt()){
  preventDefault()
  Player.setHealth(0)
  for(i=0;i<=37;i++){
   Player.clearInventorySlot(i)
}}}
