//Light Bridge Mod
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/o52Pj

var LightBridgeMakerId = 150
var LightBridgeId = 151
var MaxBridgeLength = 100

Block.defineBlock(LightBridgeMakerId,"Light Bridge", [["piston_bottom",0],["piston_bottom",0],["piston_inner",0],["piston_inner",0],["piston_inner",0],["piston_inner",0]] ,20,false,0)
Block.setDestroyTime(LightBridgeMakerId, 6)
Item.addCraftRecipe(LightBridgeMakerId,1,0,[264,1,0,331,4,0,348,2,0,265,2,0])
Item.setCategory(LightBridgeMakerId,8,0);

Block.defineBlock(LightBridgeId,"Light Bridge", ["texture",0] ,1,false,0)
Block.setShape(LightBridgeId,0,0.2,0,1,0.25,1)
Block.setDestroyTime(LightBridgeId, 1000)
Block.setColor(LightBridgeId,[0x00FFFF])
Block.setLightLevel(LightBridgeId,15)


function useItem(x,y,z,itemId,blockId,side){
if(blockId == LightBridgeMakerId){
preventDefault()
xbridgemaker = x
ybridgemaker = y
zbridgemaker = z
xbridge = x
ybridge = y
zbridge = z

if(getTile(xbridgemaker + 1,ybridgemaker,zbridgemaker) == LightBridgeId){
for (var i = 0; i < MaxBridgeLength; i++) { 
xbridge++
if(getTile(xbridge,ybridge,zbridge) == LightBridgeId){
setTile(xbridge,ybridge,zbridge,0)}
else{
break;}}}

else if(getTile(xbridgemaker - 1,ybridgemaker,zbridgemaker) == LightBridgeId){
for (var i = 0; i < MaxBridgeLength; i++) { 
xbridge--
if(getTile(xbridge,ybridge,zbridge) == LightBridgeId){
setTile(xbridge,ybridge,zbridge,0)}
else{
break;}}}

else if(getTile(xbridgemaker,ybridgemaker,zbridgemaker+1) == LightBridgeId){
for (var i = 0; i < MaxBridgeLength; i++) { 
zbridge++
if(getTile(xbridge,ybridge,zbridge) == LightBridgeId){
setTile(xbridge,ybridge,zbridge,0)}
else{
break;}}}

else if(getTile(xbridgemaker,ybridgemaker,zbridgemaker-1) == LightBridgeId){
for (var i = 0; i < MaxBridgeLength; i++) { 
zbridge--
if(getTile(xbridge,ybridge,zbridge) == LightBridgeId){
setTile(xbridge,ybridge,zbridge,0)}
else{
break;}}}

else if(side == 4){
for (var i = 0; i < MaxBridgeLength; i++) { 
xbridge++
if(getTile(xbridge,ybridge,zbridge) == 0){
setTile(xbridge,ybridge,zbridge,LightBridgeId)}
else{
break;}}}

else if(side == 5){
for (var i = 0; i < MaxBridgeLength; i++) { 
xbridge--
if(getTile(xbridge,ybridge,zbridge) == 0){
setTile(xbridge,ybridge,zbridge,LightBridgeId)}
else{
break;}}}

else if(side == 2){
for (var i = 0; i < MaxBridgeLength; i++) { 
zbridge++
if(getTile(xbridge,ybridge,zbridge) == 0){
setTile(xbridge,ybridge,zbridge,LightBridgeId)}
else{
break;}}}

else if(side == 3){
for (var i = 0; i < MaxBridgeLength; i++) { 
zbridge--
if(getTile(xbridge,ybridge,zbridge) == 0){
setTile(xbridge,ybridge,zbridge,LightBridgeId)}
else{
break;}}}



}}


