//Less tools durability mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/sSrkt

function destroyBlock(){
 itemId = Player.getCarriedItem()
 if(itemId == 284 || itemId == 285 || itemId == 286 || itemId == 269 || itemId == 270 || itemId == 271 || itemId == 273 || itemId == 274 || itemId == 275 || itemId == 256 || itemId == 257 || itemId == 258 || itemId == 277 || itemId == 278 || itemId == 279 ){
  addRandomDamage()
 }
 if(itemId == 283 || itemId == 268 || itemId == 272 || itemId == 267 || itemId == 276){
  addRandomDamage()
  addRandomDamage()
 }
}

function useItem(){
 itemId = Player.getCarriedItem()
 if(itemId == 294 || itemId == 290 || itemId == 291 || itemId == 292 || itemId == 293){
  addRandomDamage()
 }
}

function attackHook(){
 itemId = Player.getCarriedItem()
 if(itemId == 284 || itemId == 285 || itemId == 286 || itemId == 269 || itemId == 270 || itemId == 271 || itemId == 273 || itemId == 274 || itemId == 275 || itemId == 256 || itemId == 257 || itemId == 258 || itemId == 277 || itemId == 278 || itemId == 279 || itemId == 283 || itemId == 268 || itemId == 272 || itemId == 267 || itemId == 276 || itemId == 294 || itemId == 290 || itemId == 291 || itemId == 292 || itemId == 293){
  addRandomDamage()
 }
}

function addRandomDamage(){
 rnd = Math.floor((Math.random() * 10) + 1);
 if(rnd == 1){
  Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1)
 }
}
