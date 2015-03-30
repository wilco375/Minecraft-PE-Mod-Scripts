/*
Focus of: 
- Portable Hole
- Harming (6 DMG)
- Harming II (10 DMG)
- Healing
- Floating
- Shielding
*/

var selectedFocus
var activeFocus = "floating";
var y;
var prevY;
var staffId = 510;
var staffButton = false;
var resourcesDownloaded = false;

//Floating Variables
var tickcount = 0
var watertickcount = 0
var floatPrevHealth
var falling = false

//Portable Hole Variables
var pHoleId = 450
var pHoleActive
var PortalOpenedTimeInTicks = 60

//Shield Variables
var shieldCountDown
var shieldCoolDown 
var shieldActive
var shieldPrevHealth

ModPE.setItem(staffId,"stick",0,"Wizard Staff");

function modTick(){
	if(Player.getCarriedItem() == staffId){
		activeFocus = selectedFocus
		if(!staffButton){
			showButton()
		}
	}
	else{
		if(staffButton){
			hideButton()
		}
		activeFocus = null
	}
	
	//Floating Focus Code
	if(activeFocus == "floating"){
		y = getPlayerY();
		if(getPlayerY != null){
			if(prevY > y){
				if(!falling){
					Entity.setVelY(getPlayerEnt(),-0.2);
					Player.setHealth(10000)
					floatPrevHealth = Entity.getHealth(getPlayerEnt())
				}
				else{
					Entity.setVelY(getPlayerEnt(),-0.2)
				}
			}
			else if(falling){
				falling = false
				Player.setHealth(floatPrevHealth)
			}
		}
	}
	prevY = getPlayerY();
	
	//Shielding Code
	if(shieldActive && shieldCountDown != 0){
		shieldCountDown--
	}
	else if(shieldCountDown == 0){
		shieldCoolDown = 600
		shieldCountDown = null
		shieldActive = false
		Player.setHealth(shieldPrevHealth)
	}
	if(shieldCoolDown != null && shieldCoolDown != 0){
		shieldCoolDown--
	}
	else if(shieldCoolDown == 0){
		shieldCoolDown = null
	}
	
	//Portable Hole Code
	if((pHoleActive == 1)){
		if(countdown != 0) countdown--;
		if(countdown == 0) {
			pHoleActive = 0;
			if(BlockSide == 2){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2, blockdata2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3, blockdata3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4, blockdata4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5, blockdata5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6, blockdata6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9), blockdata9
			}
			else if(BlockSide == 3){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2, blockdata2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3, blockdata3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4, blockdata4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5, blockdata5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6, blockdata6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)
			}
			else if(BlockSide == 4){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)
			}
			else if(BlockSide == 5){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)
			}
			else if(BlockSide == 1){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8, blockdata8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9, blockdata9)
			}
			else if(BlockSide == 0){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8, blockdata8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9, blockdata9)
			}
		}
	}
}

function useItem(x,y,z,itemId,blockId,side){
	if(!resourcesDownloaded){
		downloadResources()
	}
	//More Shielding Code
	if(activeFocus == "shielding"){
		if(shieldCoolDown > 0 && shieldCoolDown < 600){
			clientMessage("Shield is on cooldown, please wait "+Math.round(shieldCoolDown/20)+" more seconds")
		}
		else if(shieldCountDown > 0 && shieldCoolDown < 300){
			clientMessage("Shield is already active. It will last "+Math.round(shieldCountDown/20)+ " more seconds")
		}
		else{
			shieldActive = true
			clientMessage("Shield will now be active for 15 seconds")
			shieldCountDown = 300
			shieldPrevHealth = Entity.getHealth(getPlayerEnt())
			Player.setHealth(10000)
		}
	}
	
	//More Portable Hole Code
	if(activeFocus == "portableHole" && blockId != 7){
		if(pHoleActive == 1) clientMessage("Portable Hole is already active!")
		else{
			pHoleX = x
			pHoleY = y
			pHoleZ = z
			countdown = PortalOpenedTimeInTicks
			pHoleActive = 1
			BlockSide = side
			if(BlockSide == 2){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block3 = getTile(pHoleX+1,pHoleY+1,pHoleZ)
				block4 = getTile(pHoleX+1,pHoleY-1,pHoleZ)
				block5 = getTile(pHoleX-1,pHoleY,pHoleZ)
				block6 = getTile(pHoleX-1,pHoleY+1,pHoleZ)
				block7 = getTile(pHoleX-1,pHoleY-1,pHoleZ)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata3 = Level.getData(pHoleX+1,pHoleY+1,pHoleZ)
				blockdata4 = Level.getData(pHoleX+1,pHoleY-1,pHoleZ)
				blockdata5 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				blockdata6 = Level.getData(pHoleX-1,pHoleY+1,pHoleZ)
				blockdata7 = Level.getData(pHoleX-1,pHoleY-1,pHoleZ)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ,0)
				setTile(pHoleX+1,pHoleY,pHoleZ,0)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY,pHoleZ,0)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX,pHoleY+1,pHoleZ,0)
				setTile(pHoleX,pHoleY-1,pHoleZ,0)
			}
			else if(BlockSide == 3){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block3 = getTile(pHoleX+1,pHoleY+1,pHoleZ)
				block4 = getTile(pHoleX+1,pHoleY-1,pHoleZ)
				block5 = getTile(pHoleX-1,pHoleY,pHoleZ)
				block6 = getTile(pHoleX-1,pHoleY+1,pHoleZ)
				block7 = getTile(pHoleX-1,pHoleY-1,pHoleZ)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata3 = Level.getData(pHoleX+1,pHoleY+1,pHoleZ)
				blockdata4 = Level.getData(pHoleX+1,pHoleY-1,pHoleZ)
				blockdata5 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				blockdata6 = Level.getData(pHoleX-1,pHoleY+1,pHoleZ)
				blockdata7 = Level.getData(pHoleX-1,pHoleY-1,pHoleZ)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ,0)
				setTile(pHoleX+1,pHoleY,pHoleZ,0)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY,pHoleZ,0)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,0)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,0)
				setTile(pHoleX,pHoleY+1,pHoleZ,0)
				setTile(pHoleX,pHoleY-1,pHoleZ,0)
			}
			else if(BlockSide == 4){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
				block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
				block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX,pHoleY+1,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX,pHoleY-1,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX,pHoleY+1,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX,pHoleY-1,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY+1,pHoleZ+1)
				setTile(pHoleX,pHoleY-1,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ-1)
				setTile(pHoleX,pHoleY-1,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ)
				setTile(pHoleX,pHoleY-1,pHoleZ)	
			}	
			else if(BlockSide == 5){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
				block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
				block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
				block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
				block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX,pHoleY+1,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX,pHoleY-1,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX,pHoleY+1,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX,pHoleY-1,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX,pHoleY+1,pHoleZ)
				blockdata9 = Level.getData(pHoleX,pHoleY-1,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY+1,pHoleZ+1)
				setTile(pHoleX,pHoleY-1,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ-1)
				setTile(pHoleX,pHoleY-1,pHoleZ-1)
				setTile(pHoleX,pHoleY+1,pHoleZ)
				setTile(pHoleX,pHoleY-1,pHoleZ)	
			}
			else if(BlockSide == 1){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
				block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
				block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
				block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX+1,pHoleY,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX-1,pHoleY,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX+1,pHoleY,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX-1,pHoleY,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata9 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX+1,pHoleY,pHoleZ+1)
				setTile(pHoleX-1,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ-1)
				setTile(pHoleX-1,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ)
				setTile(pHoleX-1,pHoleY,pHoleZ)	
			}
			else if(BlockSide == 0){
				block1 = getTile(pHoleX,pHoleY, pHoleZ)
				block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
				block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
				block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
				block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
				block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
				block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
				block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
				block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
				blockdata1 = Level.getData(pHoleX,pHoleY, pHoleZ)
				blockdata2 = Level.getData(pHoleX,pHoleY,pHoleZ+1)
				blockdata3 = Level.getData(pHoleX+1,pHoleY,pHoleZ+1)
				blockdata4 = Level.getData(pHoleX-1,pHoleY,pHoleZ+1)
				blockdata5 = Level.getData(pHoleX,pHoleY,pHoleZ-1)
				blockdata6 = Level.getData(pHoleX+1,pHoleY,pHoleZ-1)
				blockdata7 = Level.getData(pHoleX-1,pHoleY,pHoleZ-1)
				blockdata8 = Level.getData(pHoleX+1,pHoleY,pHoleZ)
				blockdata9 = Level.getData(pHoleX-1,pHoleY,pHoleZ)
				setTile(pHoleX,pHoleY, pHoleZ)
				setTile(pHoleX,pHoleY,pHoleZ+1)
				setTile(pHoleX+1,pHoleY,pHoleZ+1)
				setTile(pHoleX-1,pHoleY,pHoleZ+1)
				setTile(pHoleX,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ-1)
				setTile(pHoleX-1,pHoleY,pHoleZ-1)
				setTile(pHoleX+1,pHoleY,pHoleZ)
				setTile(pHoleX-1,pHoleY,pHoleZ)	
			}
		}
	}
	
	//Healing Code
	if(activeFocus == "healing"){
		var newPlayerHealth = Entity.getHealth(getPlayerEnt())+1
		if(newPlayerHealth > 20){
			Player.setHealth(20)
		}
		else{
			Player.setHealth(newPlayerHealth)
		}
	}
}

function attackHook(attacker,victim){
	//Harming Code
	if(attacker == getPlayerEnt()){
		if(activeFocus == "harmingI"){
			//if(Entity.getHealth(victim)-5 <= 0){
				
			//}
			//else{
				Entity.setHealth(victim,Entity.getHealth(victim)-5)
			//}
		}
		else if(activeFocus == "harmingII"){
			//if(Entity.getHealth(victim)-9 <= 0){
				
			//}
			//else{
				Entity.setHealth(victim,Entity.getHealth(victim)-9)
			//}
		}
	}
}

//More Shielding Code
function leaveGame(){
	if(shieldActive){
		shieldActive = false
		Player.setHealth(shieldPrevHealth)
	}
	if(staffButton){
		hideButton()
	}
}

function showButton(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
			buttonWindow = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(activity);
			var button = new android.widget.Button(activity);
			button.setText("Change Focus");
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					changeFocusGUI()
				}
			}));
			layout.addView(button);
			buttonWindow.setContentView(layout);
			buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			buttonWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(problem){
          print("Button could not be displayed: " + problem);
        }
  }}));
  staffButton = true
}


function hideButton(){
	if(staffButton){
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			if(buttonWindow != null) {
			buttonWindow.dismiss();
			buttonwindow = null;
			}
		}}));
		staffButton = false
	}
}

function changeFocusGUI(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
			dialog = new android.app.Dialog(activity);
			dialog.setTitle("Pick a focus");
			linearLayout = new android.widget.LinearLayout(activity);
			linearLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
			
			imageBitmap1 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/portableHole.png");
			imageView1 = new android.widget.ImageView(activity);
			imageView1.setImageBitmap(imageBitmap1);
			linearLayout.addView(imageView1);
			
			imageBitmap2 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/harmingI.png");
			imageView2 = new android.widget.ImageView(activity);
			imageView2.setImageBitmap(imageBitmap2);
			linearLayout.addView(imageView2);
			
			imageBitmap3 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/harmingII.png");
			imageView3 = new android.widget.ImageView(activity);
			imageView3.setImageBitmap(imageBitmap3);
			linearLayout.addView(imageView3);
			
			imageBitmap4 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/healing.png");
			imageView4 = new android.widget.ImageView(activity);
			imageView4.setImageBitmap(imageBitmap4);
			linearLayout.addView(imageView4);
			
			imageBitmap5 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/floating.png");
			imageView5 = new android.widget.ImageView(activity);
			imageView5.setImageBitmap(imageBitmap5);
			linearLayout.addView(imageView5);
			
			imageBitmap6 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/shielding.png");
			imageView6 = new android.widget.ImageView(activity);
			imageView6.setImageBitmap(imageBitmap6);
			linearLayout.addView(imageView6);
			
			dialog.setContentView(linearLayout);
			dialog.show();
        }catch(problem){
			print("Dialog could not be displayed: " + problem);
        }
  }}));
}

function downloadResources(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {
		try {
			shieldingFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/shielding.png");
			if(!shieldingFile.exists()){
				filenames = ["portableHole","harmingI","harmingII","healing","floating","shielding"]
				urls = ["http://i.imgur.com/yDBOL4s.png","http://i.imgur.com/Oh3Xku8.png","http://i.imgur.com/J8jsMuH.png","http://i.imgur.com/MbM6m5j.png","http://i.imgur.com/y7vPPaa.png","http://i.imgur.com/T4NbQJz.png"]
				for(x = 0,x<6,x++){
					url = new java.net.URL(urls[x]);
					file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/wandfoci/"+filenames[x]+".png");
					urlConnection = url.openConnection();
					inputStream = urlConnection.getInputStream();
					bufferedInputStream = new java.io.BufferedInputStream(inputStream);
					byteArrayBuffer = new org.apache.http.util.ByteArrayBuffer(50);
					current = 0;
					while ((current = bufferedInputStream.read()) != -1)
					{
						byteArrayBuffer.append( current);
					}
				
					fileOutputStream = new java.io.FileOutputStream(file);
					fileOutputStream.write(byteArrayBuffer.toByteArray());
					fileOutputStream.close();
				}
			}
		}
		}catch(e){
			print(e);
		}
	}}));
}

/*
Focus of: 
- Portable Hole
- Harming (6 DMG)
- Harming II (10 DMG)
- Healing
- Floating
- Shielding
*/




