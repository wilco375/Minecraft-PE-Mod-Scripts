//Tape Measure Mod PE 0.9.0
//by wilco375
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/qIC1B

var TapeId = 440
var TapePhase

ModPE.setItem(TapeId,"fireworks_charge",0,"Tape Measure",1);
Item.addCraftRecipe(TapeId, 1, 0, [265, 1, 0, 351, 8, 11]);
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/PZokq45.png")

function useItem(x,y,z,itemId,blockId,side){
if(itemId == TapeId){
if(TapePhase == 1){
clientMessage("Measurement finshed. Calculating...")
measurex2 = x
measurey2 = y
measurez2 = z
if(measurex1 >= measurex2){
measurexdiff  =  measurex1-measurex2+1} 
else if(measurex2 > measurex1){
measurexdiff = measurex2 - measurex1+1}
if(measurey1 >= measurey2){
measureydiff = measurey1 - measurey2+1}
else if(measurey2 > measurey1){
measureydiff = measurey2 - measurey1+1}
if(measurez1 >= measurez2){
measurezdiff = measurez1 - measurez2+1}
if(measurez2 > measurez1){
measurezdiff = measurez2 - measurez1+1} 

measureabsolute = Math.round(Math.sqrt(measureydiff * measureydiff + Math.sqrt(measurexdiff * measurexdiff + measurezdiff * measurezdiff) * Math.sqrt(measurexdiff * measurexdiff + measurezdiff * measurezdiff)) * 100) / 100 
clientMessage("X: " + measurexdiff + " Y: " + measureydiff + " Z: " + measurezdiff + " Absolute: " + measureabsolute)  
TapePhase = 3
}

if(TapePhase == null || TapePhase == 0){
clientMessage("Measurement started")
measurex1 = x
measurey1 = y
measurez1 = z 
TapePhase = 1} 

if(TapePhase == 3){
TapePhase = 0}}}
 
