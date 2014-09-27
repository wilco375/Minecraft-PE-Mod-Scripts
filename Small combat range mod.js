//Small combat range mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/rpGIz

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
 //clientMessage("This mob is too far away to hit")
}
else if(my < py-3 || my > py+3) {
 preventDefault()
 //clientMessage("This mob is too far away to hit")
}
else if(mz < pz-2 || mz > pz+2) {
 preventDefault()
 //clientMessage("This mob is too far away to hit")
}
}
}
