//NoMoreCreepers Mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/rw0qU

function entityAddedHook(entity){
if(Entity.getEntityTypeId(entity)== 33){
Entity.remove(entity)
}
}
