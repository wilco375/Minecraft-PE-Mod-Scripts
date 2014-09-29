//More damage mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link:

var lastHealth

function modTick(){
 currentHealth = Entity.getHealth(getPlayerEnt())
 if(lastHealth > currentHealth){
  Player.setHealth(Math.floor(lastHealth-((lastHealth-currentHealth)*1.25)))
 }
 lastHealth = Entity.getHealth(getPlayerEnt())
}
