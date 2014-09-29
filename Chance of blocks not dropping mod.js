//Chance of blocks not dropping mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: 

function destroyBlock(x,y,z){
 rnd = Math.floor((Math.random() * 50) + 1)
 if(rnd == 1 || rnd == 2){
  preventDefault()
  setTile(x,y,z,0)
 }
}
