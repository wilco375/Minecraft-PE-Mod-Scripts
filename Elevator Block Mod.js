//Elevator Block Mod
//by wilco375
//Button code thanks to Byteandahalf on the Minecraft Forums
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/pIxld

var elevatorId = 222
var onElevator
var onElevatorCounter
var elevatorUp
var elevatorDown
var buttonShowed
var buttonWindow = null;

Block.defineBlock(222,"Elevator Block","wool",20,1,0);
Block.setColor(222,[0xCCCCCC])
Block.setDestroyTime(222,0.2)
Item.addCraftRecipe(222,1,0,[265,1,0,35,8,0])
Item.setCategory(222,8)

function  modTick() {
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == elevatorId && buttonShowed != 1){
buttonShowed = 1
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
          buttonWindow = new android.widget.PopupWindow();
          var layout = new android.widget.RelativeLayout(activity);
          var button = new android.widget.Button(activity);
          button.setText("Down");
          button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
//clientMessage("you clicked tha button");
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == elevatorId){
tp = 0
//clientMessage("down")
py = getPlayerY()
for(var y = py-4; y >= py-19; y--){
//clientMessage(y)
if(getTile(getPlayerX(),y,getPlayerZ()) == elevatorId && getTile(getPlayerX(),y+1,getPlayerZ()) == 0 && getTile(getPlayerX(),y+2,getPlayerZ()) == 0 && tp == 0){
Entity.setPosition(getPlayerEnt(),getPlayerX(),y+2,getPlayerZ())
tp = 1
break;
}}}
                }
          }));
          layout.addView(button);
          buttonWindow.setContentView(layout);
          buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
          buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(problem){
          print("Button could not be displayed: " + problem);
        }
  }}));
}

if(buttonShowed == 1 && getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) != elevatorId){
buttonShowed = 0
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(buttonWindow != null) {
          buttonWindow.dismiss();
          buttonwindow = null;
        }
  }}));
}
px = getPlayerX()
py = getPlayerY()
pz = getPlayerZ()

if(getTile(px,py-2,pz) == elevatorId){
onElevatorCounter = 1}

if(onElevatorCounter >= 1 && onElevatorCounter < 20){
onElevatorCounter++
if(getTile(px,py-2,pz) == 0 && getTile(px,py-3,pz) == elevatorId){
elevatorUp = 1
onElevatorCounter = 0}}

if(onElevatorCounter == 20){
onElevatorCounter = 0}

if(elevatorUp == 1){
tp = 0
//clientMessage("up!");
for(var y=py+1; y <= py+14; y++){ 
if(getTile(px,y,pz) == elevatorId && getTile(getPlayerX(),y+1,getPlayerZ()) == 0 && getTile(getPlayerX(),y+2,getPlayerZ()) == 0 && tp == 0){
Entity.setPosition(getPlayerEnt(),getPlayerX(),y+2,getPlayerZ())
elevatorUp = 0
tp = 1
break;
}}}
}

function leaveGame() {
if(buttonShowed == 1){
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(buttonWindow != null) {
          buttonWindow.dismiss();
          buttonwindow = null;
        }
  }}));
}}
