//Wizard Staff ModPE
//By wilco375
//Do not re-upload, only share using the minecraftforum and/or adf.ly link

var selectedFocus
var activeFocus = "floating";
var y;
var prevY;
var staffButton = false;
var resourcesDownloaded = false;
var GUIButtonImageView

//Ids
var staffId = 510;
var staffDurability
var portableHoleId = 410
var harmingIId = 411
var harmingIIId = 412
var healingId = 413
var floatingId = 414
var shieldingId = 415

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
Item.addShapedRecipe(staffId, 1, 0, [
"  d",
" s ",
"d  "
], 
["d", 264, 0, "s", 280, 0]); 
Item.setMaxDamage(staffId,4096)
ModPE.setItem(portableHoleId,"dye_powder",4,"Portable Hole Focus");
Item.addCraftRecipe(portableHoleId,1,0,[265,4,0,57,1,0,265,4,0])
ModPE.setItem(harmingIId,"dye_powder",7,"Harming I Focus");
Item.addCraftRecipe(harmingIId,1,0,[265,4,0,42,1,0,265,4,0])
ModPE.setItem(harmingIIId,"dye_powder",8,"Harming II Focus");
Item.addCraftRecipe(harmingIIId,1,0,[264,1,0,265,1,0,264,1,0,265,1,0,42,1,0,265,1,0,264,1,0,265,1,0,264,1,0])
ModPE.setItem(healingId,"dye_powder",1,"Healing Focus");
Item.addCraftRecipe(healingId,1,0,[266,1,0,264,1,0,266,2,0,360,1,0,266,2,0,264,1,0,266,1,0])
ModPE.setItem(floatingId,"dye_powder",9,"Floating Focus");
Item.addCraftRecipe(floatingId,1,0,[288,1,0,264,1,0,288,1,0,264,1,0,42,1,0,264,1,0,288,1,0,264,1,0,288,1,0])
ModPE.setItem(shieldingId,"dye_powder",11,"Shielding Focus");
Item.addCraftRecipe(shieldingId,1,0,[265,1,0,306,1,0,265,1,0,307,1,0,57,1,0,308,1,0,265,1,0,309,1,0,265,1,0])

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
	
	//Floating Code
	if(activeFocus == "floating"){
		y = getPlayerY();
		if(getPlayerY != null){
			if(prevY > y){
				if(!falling){
					Entity.setVelY(getPlayerEnt(),-0.2);
					Player.setHealth(10000)
					floatPrevHealth = Entity.getHealth(getPlayerEnt())
					falling = true
				}
				else{
					Entity.setVelY(getPlayerEnt(),-0.2)
					for(i = 0;i<=10;i++){
						Level.addParticle(ParticleType.cloud,getPlayerX()+Math.random() * 2-1,getPlayerY()-2,getPlayerZ()+Math.random() * 2-1,0,0,0,1)
						//clientMessage("particle")
					}
					removeDurability(2)
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
		for(i = 0;i<=5;i++){
			Level.addParticle(ParticleType.flame,getPlayerX()+Math.random() * 2-1,getPlayerY()+Math.random() * 2-2,getPlayerZ()+Math.random() * 2-1,0,0,0,1)
		}
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
			if(BlockSide == 2 || BlockSide == 3){
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
			else if(BlockSide == 4 || BlockSide == 5){
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
			else if(BlockSide == 1 || BlockSide == 0){
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
	//if(!resourcesDownloaded){
	//	downloadResources()
	//}
	
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
			removeDurability(256)
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
			removeDurability(64)
			if(BlockSide == 2 || BlockSide == 3){
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
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
			}
			else if(BlockSide == 4 || BlockSide == 5){
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
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY-1+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
			}	
			else if(BlockSide == 1 || BlockSide == 0){
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
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ-1+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX+1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
				Level.addParticle(ParticleType.lava,pHoleX-1+Math.random()-0.5,pHoleY+Math.random()-0.5,pHoleZ+Math.random()-0.5,0,0,0,5)
			}
		}
	}
	
	//Healing Code
	if(activeFocus == "healing"){
		var newPlayerHealth = Entity.getHealth(getPlayerEnt())+1
		if(newPlayerHealth > 20){
			Player.setHealth(20)
			removeDurability(128)
		}
		else{
			Player.setHealth(newPlayerHealth)
		}
		for(i = 0;i<=64;i++){
			Level.addParticle(ParticleType.heart,getPlayerX()+Math.random() * 2-1,getPlayerY()+Math.random() * 2-2,getPlayerZ()+Math.random() * 2-1,0,0.2,0,1)
		}
	}
}

function newLevel(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
			shieldingFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/shielding.png");
			if(!shieldingFile.exists()){
				android.widget.Toast.makeText(activity,"Couldn't find image files. Have you put the necessary files in Local Storage/games/com.mojang/WizardStaffMod ?",android.widget.Toast.LENGTH_LONG).show();
			}	
		}catch(e){
			print(e)
		}
	}}));
	var out=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/Wizard_Staff_Mod_V1.0_update_checker")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()))
}

function attackHook(attacker,victim){
	//Harming Code
	if(attacker == getPlayerEnt()){
		if(activeFocus == "harmingI"){
			//if(Entity.getHealth(victim)-5 <= 0){
				
			//}
			//else{
			Entity.setHealth(victim,Entity.getHealth(victim)-6)
			removeDurability(12)
			//}
		}
		else if(activeFocus == "harmingII"){
			//if(Entity.getHealth(victim)-9 <= 0){
				
			//}
			//else{
			Entity.setHealth(victim,Entity.getHealth(victim)-10)
			removeDurability(16)
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
			var layout = new android.widget.LinearLayout(activity);
			layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
			
			GUIButtonImageView = new android.widget.ImageView(activity);
			imageBitmapEmpty = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/empty.png");
			imageBitmap1 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/portableHole.png");
			imageBitmap2 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/harmingI.png");
			imageBitmap3 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/harmingII.png");
			imageBitmap4 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/healing.png");
			imageBitmap5 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/floating.png");
			imageBitmap6 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/shielding.png");
			if(selectedFocus == "portableHole")
				GUIButtonImageView.setImageBitmap(imageBitmap1)
			else if(selectedFocus == "harmingI")
				GUIButtonImageView.setImageBitmap(imageBitmap2)
			else if(selectedFocus == "harmingII")
				GUIButtonImageView.setImageBitmap(imageBitmap3)
			else if(selectedFocus == "healing")
				GUIButtonImageView.setImageBitmap(imageBitmap4)
			else if(selectedFocus == "floating")
				GUIButtonImageView.setImageBitmap(imageBitmap5)
			else if(selectedFocus == "shielding")
				GUIButtonImageView.setImageBitmap(imageBitmap6)
			else{
				GUIButtonImageView.setImageBitmap(imageBitmapEmpty);
			}
			GUIButtonImageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
			GUIButtonImageView.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					changeFocusGUI()
				}
			}));
			layout.addView(GUIButtonImageView);
			
			buttonWindow.setContentView(layout);
			buttonWindow.setWidth(100);
			buttonWindow.setHeight(100);
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
			dialog.getWindow().setFlags(android.view.WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,android.view.WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE);
			dialog.setTitle("Pick a focus");
			linearLayout = new android.widget.LinearLayout(activity);
			linearLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
			
			if(itemInInventory(portableHoleId)){
				imageBitmap1 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/portableHole.png");
				imageView1 = new android.widget.ImageView(activity);
				imageView1.setImageBitmap(imageBitmap1);
				imageView1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "portableHole";
						GUIButtonImageView.setImageBitmap(imageBitmap1);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView1);
			}
			if(itemInInventory(harmingIId)){
				imageBitmap2 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/harmingI.png");
				imageView2 = new android.widget.ImageView(activity);
				imageView2.setImageBitmap(imageBitmap2);
				imageView2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "harmingI";
						GUIButtonImageView.setImageBitmap(imageBitmap2);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView2);
			}
			if(itemInInventory(harmingIIId)){
				imageBitmap3 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/harmingII.png");
				imageView3 = new android.widget.ImageView(activity);
				imageView3.setImageBitmap(imageBitmap3);
				imageView3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "harmingII";
						GUIButtonImageView.setImageBitmap(imageBitmap3);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView3);
			}
			if(itemInInventory(healingId)){
				imageBitmap4 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/healing.png");
				imageView4 = new android.widget.ImageView(activity);
				imageView4.setImageBitmap(imageBitmap4);
				imageView4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "healing";
						GUIButtonImageView.setImageBitmap(imageBitmap4);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView4);
			}
			if(itemInInventory(floatingId)){
				imageBitmap5 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/floating.png");
				imageView5 = new android.widget.ImageView(activity);
				imageView5.setImageBitmap(imageBitmap5);
				imageView5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "floating";
						GUIButtonImageView.setImageBitmap(imageBitmap5);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView5);
			}
			if(itemInInventory(shieldingId)){
				imageBitmap6 = android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/shielding.png");
				imageView6 = new android.widget.ImageView(activity);
				imageView6.setImageBitmap(imageBitmap6);
				imageView6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						selectedFocus = "shielding";
						GUIButtonImageView.setImageBitmap(imageBitmap6);
						dialog.dismiss();
					}
				}));
				linearLayout.addView(imageView6);
			}
			if(linearLayout.getChildCount()==0){
				textView = new android.widget.TextView(activity)
				textView.setTextColor(android.graphics.Color.WHITE)
				textView.setText("Please craft a focus to use the staff")
				textView.setPadding(10,10,10,10)
				linearLayout.addView(textView)
			}
			dialog.setContentView(linearLayout);
			dialog.show();
			dialog.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE);
        }catch(problem){
			print("Dialog could not be displayed: " + problem);
        }
  }}));
}

function itemInInventory(id){
	var inInventory = false
	for(i = 0;i<43;i++){
		if(Player.getInventorySlot(i) == id){
			return true
			inInventory = true
			break
		}
	}
	if(!inInventory) return false
}

function removeDurability(damage){
	if(Player.getCarriedItemData()+damage<4096)
		Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+damage)
	else{
		Entity.setCarriedItem(getPlayerEnt(),0)
	}
}

/*
function downloadResources(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {
		try {
			shieldingFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/shielding.png");
			if(!shieldingFile.exists()){
				filenames = ["portableHole","harmingI","harmingII","healing","floating","shielding"]
				urls = ["http://i.imgur.com/yDBOL4s.png","http://i.imgur.com/Oh3Xku8.png","http://i.imgur.com/J8jsMuH.png","http://i.imgur.com/MbM6m5j.png","http://i.imgur.com/y7vPPaa.png","http://i.imgur.com/T4NbQJz.png"]
				for(x = 0;x<6;x++){
					url = new java.net.URL(urls[x]);
					file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/WizardStaffMod/"+filenames[x]+".png");
					urlConnection = url.openConnection();
					inputStream = urlConnection.getInputStream();
					bufferedInputStream = new java.io.BufferedInputStream(inputStream);
					byteArrayBuffer = new org.apache.http.util.ByteArrayBuffer(50);
					current = 0;
					while ((current = bufferedInputStream.read()) != -1){
						byteArrayBuffer.append( current);
					}
					fileOutputStream = new java.io.FileOutputStream(file);
					fileOutputStream.write(byteArrayBuffer.toByteArray());
					fileOutputStream.close();
				}
			}
		}catch(e){
			print(e);
		}
	}}));
}
*/

/*
Focus of: 
- Portable Hole
- Harming (6 DMG)
- Harming II (10 DMG)
- Healing
- Floating
- Shielding
*/




