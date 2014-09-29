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
