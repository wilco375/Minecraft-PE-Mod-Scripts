//SpellCraft Mod V2.1
//by wilco375
//Do not share by Dropbox link or reupload. Instead use http://adf.ly/1WoK1a or http://wilco375.github.io/mods/spellcraft.html

//////////////////////
//Constant variables//
//////////////////////
var spellCrafterId = 200;
var spellId = 470;

var dirs = [[0, -1, 0],[0, 1, 0],[0, 0, -1],[0, 0, 1],[-1, 0, 0],[1, 0, 0]]; 
var chestSlotsCount = 27;
var playerSlotsCount = 36;
var chestId = 54;
var closeChestEventType = 1;
var closeChestEventData = 0;
var spellRadius = 10;
var spells = ["Fire","Air","Projectile","Wide Projectile","Explosion","Projectile Explosion","Instakill","Jump","Rain","Speed","Craft","Grow","Water","Lava","Time","Fly"];
var spellsDesc = [
	"Sets enemies and blocks on fire\nUses 20 Essence",
	"Pushes mobs in a "+spellRadius+" block radius away\nUses 100 Essence",
	"Shoots an arrow\nUses 10 Essence",
	"Shoots 9 arrows at once\nUses 75 Essence",
	"Causes an explosion\nUses 50 Essence",
	"Shoots an exploding arrow\nUses 75 Essence",
	"Instantly kills mobs\nUses 150 Essence",
	"Makes you jump into the air\nUses 20 Essence",
	"Toggles the rain\nUses 50 Essence",
	"Makes you run faster\nUses 100 Essence",
	"Spawns a Crafting Table\nUses 20 Essence",
	"Instantly grows plants\nUses 50 Essence",
	"Spawns water\nUses 20 Essence",
	"Spawns lava\nUses 50 Essence",
	"Changes the time to day/night\nUses 50 Essence",
	"Makes you able to fly. Cast spell to enable flying, cast again to disable\nUses 20 Essence per second that you are flying"
]
var spellsItems = [
	[259,263,259,263],
	[20,288,289,288],
	[261,262,261,262],
	[261,262,264,262],
	[46,289,46,289],
	[46,261,46,262],
	[267,276,276,276],
	[288,288,309,288],
	[22,261,22,262],
	[261,263,288,353],
	[58,256,257,258],
	[353,293,352,293],
	[22,325,22,325],
	[49,325,49,325],
	[264,347,265,347],
	[57,288,264,288]
]
var texturesIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,27,30,31,32,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,60,61,62,65,66,67,73,78,79,80,81,82,85,86,87,89,91,96,97,98,99,100,101,102,103,106,107,108,109,110,111,112,114,120,121,127,128,129,133,134,135,136,139,141,142,155,156,158,159,161,162,170,171,172,173,175,243,244,245,246,247,248,249,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,323,324,325,328,329,330,331,332,334,336,337,338,339,340,341,344,345,347,348,351,352,353,354,355,357,359,360,361,362,363,364,365,366,367,388,391,392,393,405,406,407,408,409];
var nighttime = 18000;
var daytime = 6000;


/////////////////////
//Dynamic variables//
/////////////////////
var spellCrafterInvOpened = false;
var craftingAnimation = false;
var craftingTime = 0;
var craftingBg = 1;
var currentCrafter;
var entities = [];
var explodingArrow = [];
var explodingArrowCoords = [];
var essenceAmount = 200;
var maxEssence = 200;
var essenceRegenAmount = 0.25;
var flying = false;

/////////////////
//GUI variables//
/////////////////
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/spellCraftRes/";

var display = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(display);
var screenWidth = display.widthPixels;
var screenHeight = display.heightPixels;
var guiWidth = screenWidth * 0.8;
var guiHeight = screenHeight * 0.8;
var guiOffsetLeft = screenWidth * 0.1;
var guiOffsetTop = screenHeight * 0.1;
var guiActionBarHeight = 100;
var listWidth = guiWidth*(1/3);
var infoWidth = guiWidth*(2/3);
var i1;

var buttonShowed = false;
var buttonWindow;

var essenceShowed = false;
var essenceWindow;
var essenceImageView;
var essenceHeight;

var guiWindow;

var infoTitle, infoDesc, craftBg;
var craftImg1, craftImg2, craftImg3, craftImg4;
var craftBg1, craftBg2, craftBg3, craftBg4, craftBg5, craftBg6, craftBg7, craftBg8, craftBg9, craftBg10, craftBg11, craftBg12, blocks, items, quit, textures, progress;

///////////////////////////
//Define blocks and items//
///////////////////////////
Block.defineBlock(spellCrafterId, "Spell Crafter", [["crafting_table", 0],["crafting_table", 0],["chest_inventory", 2],["chest_inventory", 2],["chest_inventory", 2],["chest_inventory", 2]], 58, true, 0);
ModPE.setItem(spellId, "map_filled", 0, "Spell", 1);
Item.addCraftRecipe(spellCrafterId,1,0,[339,4,0,58,1,0,339,4,0])

//////////////////
//Hook functions//
//////////////////
function useItem(x,y,z,itemId,blockId,side){
	if(blockId == spellCrafterId){
		//Top, bottom
		if(side.in(0,1)){
			preventDefault();
			createSpellCrafterGui(x,y,z);
		}
		//Side
		else{
			openSpellCrafterInv(x,y,z);
		}
	}else if(itemId == spellId){
		switch(getCarriedItemName()){
			case "Fire Spell":
				castFireSpellBlock(x,y,z);
				break;
			case "Explosion Spell":
				castExplosionSpell(x,y,z);
				break;
			case "Craft Spell":
				castCraftSpell(x,y,z,side);
				break;
			case "Grow Spell":
				castGrowSpell(x,y,z);
				break;
			case "Water Spell":
				castWaterSpell(x,y,z,side);
				break;
			case "Lava Spell":
				castLavaSpell(x,y,z,side);
				break;
			default: 
				castSpell();
		}
	}
}

function blockEventHook(x,y,z,eventType,data) {
	//Chest closed
	if(spellCrafterInvOpened && x==currentCrafter.x && y==currentCrafter.y && z==currentCrafter.z 
		&& eventType==closeChestEventType && data==closeChestEventData){
		cloneChest(x,y,z,x,1,z);
		clearChest(x,y,z);
		setTile(x,y,z,spellCrafterId);
	}
}

function newLevel(){
	var out = new java.io.ByteArrayOutputStream();
	var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/SpellCraft_v2.1_update.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
	
	checkResources();
}

function modTick(){
	handleSpellGUI();
	handleEssenceGUI();
	
	handleCrafting();
	handleExplodingArrow();
	handleFlying();
	
	if(essenceAmount + essenceRegenAmount < maxEssence) essenceAmount += essenceRegenAmount;
	else essenceAmount = maxEssence;
}

function procCmd(cmd){
	if(cmd == "allspells"){
		var arr = [];
		for(i=0;i<spells.length;i++){
			craftSpell(0,0,0,spells[i],arr);
		}
	}
}

function attackHook(attacker, victim){
	if(Player.getCarriedItem() == spellId){
		//clientMessage(getCarriedItemName());
		switch(getCarriedItemName()){
			case "Fire Spell": 
				castFireSpellEnt(victim);
				break;
			case "Instakill Spell":
				castInstakillSpell(victim);
				break;
			case "Explosion Spell":
				castExplosionSpell(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim));
				break;
			default:
				castSpell();
		}
	}
}

function entityAddedHook(ent){
	entities.push(ent);
}

function entityRemovedHook(ent){
	entities.remove(ent);
}

function leaveGame(){
    var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    activity.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			if(buttonWindow != null) {
				buttonWindow.dismiss();
				buttonwindow = null;
				buttonShowed = false;
			}
			if(guiWindow != null){
				guiWindow.dismiss();
				guiWindow = null;
			}
			if(essenceShowed){
				essenceWindow.dismiss();
				essenceWindow = null;
				essenceeShowed = false;
			}
		}catch(e){
			print("Error dismissing GUIs: " + e);
		}
    }}));
}

///////////////////////////
//Spell Crafter functions//
///////////////////////////
function openSpellCrafterInv(x,y,z){
	cloneChest(x,1,z,x,y,z);
	spellCrafterInvOpened = true;
	currentCrafter = new coords(x,y,z);
}

function craftSpell(x,y,z,name,items){
	for(var i=0;i<items.length;i++){
		removeItemFromChest(x,1,z,items[i],1);
	}
	addItemInventory(spellId,1,0);
	for(var i=0;i<playerSlotsCount;i++){
		if(Player.getInventorySlot(i) == spellId && Player.getItemCustomName(i) == null){
			Player.setItemCustomName(i,name+" Spell");
			break;
		}
	}
	print("You have received the "+name+" Spell!");
}

/////////////////////
//General functions//
/////////////////////
function cloneChest(oldX,oldY,oldZ,newX,newY,newZ){
	if(getTile(newX,newY,newZ) != chestId) setTile(newX,newY,newZ,chestId);
	if(getTile(oldX,oldY,oldZ) != chestId) return;
	
	for(var i=0;i<chestSlotsCount;i++){
		Level.setChestSlot(newX,newY,newZ,i,
			Level.getChestSlot(oldX, oldY, oldZ, i),
			Level.getChestSlotData(oldX, oldY, oldZ, i),
			Level.getChestSlotCount(oldX, oldY, oldZ, i)
		)
	}
}

function clearChest(x,y,z){
	for(var i=0;i<chestSlotsCount;i++){
		Level.setChestSlot(x,y,z,i,0);
	}
	setTile(x,y,z,0);
}

function getItemIdsInChest(x,y,z){
	if(getTile(x,y,z) != chestId) return new Array(513).fill(0);
	
	var itemIdsInChest = new Array(513).fill(0);
	var item;
	for(var i=0;i<chestSlotsCount;i++){
		item = Level.getChestSlot(x,y,z,i);
		if(item != 0) itemIdsInChest[item] += Level.getChestSlotCount(x,y,z,i);
	}
	return itemIdsInChest;
}

function removeItemFromChest(x,y,z,id,amount){
	var item;
	var count;
	for(var i=0;i<chestSlotsCount;i++){
		item = Level.getChestSlot(x,y,z,i);
		if(item == id){
			data = Level.getChestSlotData(x,y,z,i);
			count = Level.getChestSlotCount(x,y,z,i);
			if(count > amount){
				Level.setChestSlot(x,y,z,i,item,data,count-amount);
				break;
			}else if(count == amount){
				Level.setChestSlot(x,y,z,i,0);
				break;
			}else{
				amount -= count;
				Level.setChestSlot(x,y,z,i,0);
			}
		}
	}
}

///////////////
//Cast spells//
///////////////
function castSpell(){
	//clientMessage("castSpell");
	switch(getCarriedItemName()){
		case "Air Spell":
			castAirSpell();
			break;
		case "Projectile Spell":
			castProjectileSpell();
			break;
		case "Wide Projectile Spell":
			castWideProjectileSpell();
			break;
		case "Projectile Explosion Spell":
			castProjectileExplosionSpellSpell();
			break;
		case "Jump Spell":
			castJumpSpell();
			break;
		case "Speed Spell":
			castSpeedSpell();
			break;
		case "Rain Spell":
			castRainSpell();
			break;
		case "Time Spell":
			castTimeSpell();
			break;
		case "Fly Spell":
			castFlySpell();
			break;
	}
}

function getCarriedItemName(){
	return Player.getItemCustomName(Player.getSelectedSlotId());
}

function castFireSpellEnt(ent){
	if(removeEssence(20)) Entity.setFireTicks(ent, 5);
}

function castFireSpellBlock(x,y,z){
	if(removeEssence(20)){
		if(getTile(x,y+1,z) == 0) setTile(x,y+1,z,51);
	}
}

function castAirSpell(){
	if(removeEssence(100)){
		var player = new coords(Player.getX(),Player.getY(),Player.getZ());
		for(i=0;i<entities.length;i++){
			var delta = new coords(Entity.getX(entities[i]) - player.x,
				Entity.getY(entities[i]) - player.y,
				Entity.getZ(entities[i]) - player.z);
			if(Math.abs(delta.x) < spellRadius && Math.abs(delta.y) < spellRadius && Math.abs(delta.z) < spellRadius){
				if(entities[i] != getPlayerEnt()){
					Entity.setVelX(entities[i],scaleUpTo(delta.x,delta.z,2));
					Entity.setVelY(entities[i],0.5);
					Entity.setVelZ(entities[i],scaleUpTo(delta.z,delta.x,2));
				}
			}
		}
	}
}

function castProjectileSpell(){
	if(removeEssence(10)){
		var vector = getVector(getYaw(),getPitch());
		var proj = Level.spawnMob(getPlayerX() + (vector.x * 2), getPlayerY() + (vector.y * 2.5), getPlayerZ() + (vector.z * 2), EntityType.ARROW);
		setVelX(proj,vector.x);
		setVelY(proj,vector.y);
		setVelZ(proj,vector.z);
	}
}

function castWideProjectileSpell(){
	if(removeEssence(75)){
		var yaw = getYaw();
		var pitch = getPitch();
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		for(var i=-22.5;i<=22.5;i+=5){
			var vector = getVector(yaw+i,pitch);
			var proj = Level.spawnMob(x + (vector.x * 2), y + (vector.y * 2.5), z + (vector.z * 2), EntityType.ARROW);
			setVelX(proj,vector.x);
			setVelY(proj,vector.y);
			setVelZ(proj,vector.z);
		}
	}
}

function castExplosionSpell(x,y,z){
	if(removeEssence(50)) Level.explode(x,y,z,2.5);
}

function castProjectileExplosionSpellSpell(){
	if(removeEssence(75)){
		var vector = getVector(getYaw(),getPitch());
		var proj = Level.spawnMob(getPlayerX() + (vector.x * 2),getPlayerY() + (vector.y * 2.5),getPlayerZ() + (vector.z * 2), EntityType.ARROW);
		explodingArrow.push(proj);
		explodingArrowCoords.push(new coords(0,0,0));
		setVelX(proj,vector.x);
		setVelY(proj,vector.y);
		setVelZ(proj,vector.z);
	}
}


function handleExplodingArrow(){
	for(i=0;i<explodingArrow.length;i++){
		if(explodingArrowCoords[i].x == Entity.getX(explodingArrow[i]) && 
			explodingArrowCoords[i].y == Entity.getY(explodingArrow[i]) &&
			explodingArrowCoords[i].z == Entity.getZ(explodingArrow[i]) 
		){
			Level.explode(explodingArrowCoords[i].x,explodingArrowCoords[i].y,explodingArrowCoords[i].z,2.5);
			explodingArrowCoords.splice(i,1);
			explodingArrow.splice(i,1);
			break;
		}else{
			explodingArrowCoords[i].x = Entity.getX(explodingArrow[i]);
			explodingArrowCoords[i].y = Entity.getY(explodingArrow[i]);
			explodingArrowCoords[i].z = Entity.getZ(explodingArrow[i]);
		}
	}
}

function castInstakillSpell(ent){
	if(removeEssence(150)){
		Entity.setHealth(ent,1);
		Entity.setPositionRelative(ent,0,0.2,0);
		Entity.setVelY(ent,-10);
	}
}

function castJumpSpell(){
	if(removeEssence(20)) Entity.setVelY(getPlayerEnt(),1);
}

function castRainSpell(){
	if(removeEssence(50)){
		if(Level.getRainLevel()>0) Level.setRainLevel(0);
		else Level.setRainLevel(1);
	}
}

function castSpeedSpell(){
	if(removeEssence(100)){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 20*10, 3, false, false);
		var vector = getVector(getYaw(),getPitch());
		setVelX(getPlayerEnt(),vector.x);
		setVelY(getPlayerEnt(),0.25);
		setVelZ(getPlayerEnt(),vector.z);
	}
}

function castCraftSpell(x,y,z,side){
	if(removeEssence(20)) setTile(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2],58);
}

function castGrowSpell(x,y,z){
	if(removeEssence(50)) if(getTile(x,y,z).in(59,141,142,244)) setTile(x,y,z,getTile(x,y,z),7);
}

function castWaterSpell(x,y,z,side){
	if(removeEssence(20)) setTile(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2],8);
}

function castLavaSpell(x,y,z,side){
	if(removeEssence(50)) setTile(x+dirs[side][0],y+dirs[side][1],z+dirs[side][2],10);
}

function castTimeSpell(){
	if(removeEssence(50)){
		var time = Level.getTime();
		if(Math.abs(time-nighttime) < Math.abs(time-daytime)) Level.setTime(daytime);
		else Level.setTime(nighttime);
	}
}

function castFlySpell(){
	if(flying){
		flying = false;
		Player.setCanFly(false);
	}else{
		flying = true;
		Player.setCanFly(true);
	}
}

function handleFlying(){
	if(flying && Player.isFlying()){
		if(!removeEssence(1)){
			flying = false;
			Player.setCanFly(false);
			Player.setFlying(false);
		}
	}
}

function handleSpellGUI(){
	if(!buttonShowed && Player.getCarriedItem() == spellId && getCarriedItemName().in("Projectile Spell","Projectile Explosion Spell","Wide Projectile Spell")){
        buttonShowed = true;
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
            try{
                buttonWindow = new android.widget.PopupWindow();
                var layout = new android.widget.RelativeLayout(ctx);
                var button = new android.widget.Button(ctx);
                button.setText("Fire");
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        castSpell();
                    }
                }));
                layout.addView(button);
                buttonWindow.setContentView(layout);
                buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                buttonWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                buttonWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
			}catch(problem){
                print("Button could not be displayed: " + problem);
            }
        }}));
    }else if(buttonShowed && (Player.getCarriedItem() != spellId || !getCarriedItemName().in("Projectile Spell","Projectile Explosion Spell","Wide Projectile Spell"))){
        buttonShowed = false;
        ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
            if(buttonWindow != null) {
                buttonWindow.dismiss();
                buttonwindow = null;
            }
        }}));
    }
}

///////////
//Essence//
///////////
function removeEssence(amount){
	if(essenceAmount-amount < 0){
		return false;
	}else{
		essenceAmount -= amount;
		return true;
	}
}

function handleEssenceGUI(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			if(Player.getCarriedItem() == spellId){
				if(!essenceShowed){
					essenceShowed = true;
					if(progress == null) getItemBitmaps();
					essenceWindow = new android.widget.PopupWindow();
					var layout = new android.widget.RelativeLayout(ctx);
					essenceImageView = new android.widget.ImageView(ctx);
					essenceImageView.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(screenHeight*0.40/10,screenHeight*0.40));
					essenceImageView.setImageDrawable(progress);
					essenceImageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
					layout.addView(essenceImageView);
					
					essenceHeight = screenHeight*0.40;
					
					var offset = (maxEssence-essenceAmount)*(essenceHeight/maxEssence);
					essenceImageView.setY(offset);
					
					essenceWindow.setContentView(layout);
					essenceWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
					essenceWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
					essenceWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					essenceWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 50, 150);
				}else if(essenceImageView != null){
					var offset = (maxEssence-essenceAmount)*(essenceHeight/maxEssence);
					essenceImageView.setY(offset);
				}
			}else if(essenceShowed){
				essenceWindow.dismiss();
				essenceWindow = null;
				essenceShowed = false;
			}
		}catch(e){
			print("An error occured: " + e);
		}
	}}));
}

////////////////////
//Custom functions//
////////////////////
Player.setCarriedItem = function(id,amount,data){
	Entity.setCarriedItem(getPlayerEnt(),id,amount,data);
}

ModPE.downloadFile = function(filename,url){
	new java.lang.Thread(new java.lang.Runnable({
		run: function() {
			var file = new java.io.File(path+filename);
			file.createNewFile();
			var fos = new java.io.FileOutputStream(file);
			var response = android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
			fos.close();
		}
    })).run();
}

Object.prototype.in = function(){
    for(var i=0; i<arguments.length; i++)
        if(arguments[i] == this) return true;
    return false;
}

Object.prototype.indexInArray = function(array){
    for(var i=0; i<array.length; i++)
        if(array[i] == this) return i;
	return null;
}

Array.prototype.fill = function(){
	for(var i=0;i<this.length;i++) this[i] = arguments[0];
	return this;
}

Array.prototype.remove = function(arg){
	for(var i=0;i<this.length;i++){
		if(this[i]==arg){
			this.splice(i,1);
			return this;
		} 
	} 
}

function scaleUpTo(vecX,vecZ,scale){
	var length = Math.sqrt(vecX*vecX+vecZ*vecZ);
	var multiplier = scale/length;
	return(vecX*multiplier);
}

function getVector(yaw, pitch){
	return new coords(
		-Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch)),
		-Math.sin(java.lang.Math.toRadians(pitch)),
		Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch))
	);
}

function coords(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
}

/////////////////
//GUI functions//
/////////////////
function createSpellCrafterGui(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			currentCrafter = new coords(x,y,z);
			var itemsArray = getItemIdsInChest(x,1,z);
			
			if(i1 == null) getItemBitmaps();
			
			var font = android.graphics.Typeface.createFromFile(new java.io.File(path+"minecraft.ttf"));
			guiWindow = new android.widget.PopupWindow();
			
			//Top layout
			var layout = new android.widget.RelativeLayout(ctx);
			layout.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
			
			//Action bar layout
			var actionBarLayout = new android.widget.RelativeLayout(ctx);
			var actionBarLayoutPar = new android.widget.RelativeLayout.LayoutParams(guiWidth,guiActionBarHeight);
			actionBarLayoutPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			actionBarLayoutPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
			actionBarLayout.setLayoutParams(actionBarLayoutPar);
			var quitIv = new android.widget.ImageView(ctx);
			var quitIvPar = new android.widget.RelativeLayout.LayoutParams(guiActionBarHeight,guiActionBarHeight);
			quitIvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			quitIvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			quitIv.setLayoutParams(quitIvPar);
			quitIv.setImageDrawable(quit);
			quitIv.setPadding(5,5,5,5);
			quitIv.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(view) {
					guiWindow.dismiss();
					guiWindow = null;
				}
            }));
			actionBarLayout.addView(quitIv);
			//actionBarLayout.setBackgroundColor(android.graphics.Color.GREEN);
			layout.addView(actionBarLayout);
			
			//Left layout
			var listSv = new android.widget.ScrollView(ctx);
			var listSvPar = new android.widget.RelativeLayout.LayoutParams(listWidth,guiHeight-guiActionBarHeight);
			listSvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
			listSvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
			listSv.setLayoutParams(listSvPar);
			//listSv.setBackgroundColor(android.graphics.Color.BLUE);
			
			var listLayout = new android.widget.LinearLayout(ctx);
			listLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
			listLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
			
			//List
			var listTextViews = new Array(spells.length);
			for(var i=0;i<listTextViews.length;i++){
				listTextViews[i] = new android.widget.TextView(ctx);
				listTextViews[i].setText(spells[i]);
				listTextViews[i].setPadding(10,10,10,10);
				listTextViews[i].setTextSize(20);
				listTextViews[i].setTypeface(font);
				listTextViews[i].setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(view) {
					handleListTextClick(view);
				}
            }));
				listLayout.addView(listTextViews[i]);
			}
			
			listSv.addView(listLayout);
			layout.addView(listSv);
			
			//Right layout
			var infoSv = new android.widget.ScrollView(ctx);
			var infoSvPar = new android.widget.RelativeLayout.LayoutParams(infoWidth,guiHeight-guiActionBarHeight);
			infoSvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
			infoSvPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			infoSv.setLayoutParams(infoSvPar);
			//infoSv.setBackgroundColor(android.graphics.Color.RED);
			
			var infoLayout = new android.widget.LinearLayout(ctx);
			infoLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
			infoLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
			
			infoTitle = new android.widget.TextView(ctx);
			infoTitle.setText(spells[0]);
			infoTitle.setTextSize(22);
			infoTitle.setTypeface(font);
			infoTitle.setPadding(10,10,10,10);
			infoLayout.addView(infoTitle);
			
			infoDesc = new android.widget.TextView(ctx);
			infoDesc.setText(spellsDesc[0]);
			infoDesc.setTextSize(16);
			infoDesc.setTypeface(font);
			infoDesc.setPadding(10,10,10,10);
			infoDesc.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(infoWidth,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT));
			//infoDesc.setBackgroundColor(android.graphics.Color.BLACK);
			infoLayout.addView(infoDesc);
			
			var craftLayout = new android.widget.RelativeLayout(ctx);
			craftLayout.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(infoWidth*0.875,infoWidth*0.75));
			craftLayout.setPadding(infoWidth*0.125,0,0,0);
			//craftLayout.setBackgroundColor(android.graphics.Color.BLACK);
			
			craftBg = new android.widget.ImageView(ctx);
			var craftBgPar = new android.widget.RelativeLayout.LayoutParams(infoWidth*0.75,infoWidth*0.75);
			craftBgPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			craftBgPar.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			craftBg.setLayoutParams(craftBgPar);
			//craftBg.setBackgroundColor(android.graphics.Color.BLACK);
			craftBg.setImageDrawable(craftBg1);
			craftBg.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
			craftBg.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(view) {
					var spell = infoTitle.getText().toString().indexInArray(spells)
					var itemsNotFound = 0;
					for(i=0;i<4;i++){
						if(!itemsArray[spellsItems[spell][i]]>0) itemsNotFound += 1;
					}
					if(itemsNotFound == 0) startCrafting();
					else print("You don't have the required items");
				}
            }));
			craftLayout.addView(craftBg);
			
			craftImg1 = new android.widget.ImageView(ctx);
			var craftImg1Par = new android.widget.RelativeLayout.LayoutParams(infoWidth*0.475,infoWidth*0.2);
			craftImg1Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			craftImg1Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			craftImg1.setLayoutParams(craftImg1Par);
			craftImg1.setPadding(0,infoWidth*0.05,infoWidth*0.275,0);
			//craftImg1.setBackgroundColor(android.graphics.Color.BLACK);
			craftImg1.setImageDrawable(getTexture(spellsItems[0][0]));
			craftImg1.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
			craftLayout.addView(craftImg1);
			
			craftImg2 = new android.widget.ImageView(ctx);
			var craftImg2Par = new android.widget.RelativeLayout.LayoutParams(infoWidth*0.2,infoWidth*0.475);
			craftImg2Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			craftImg2Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			craftImg2.setLayoutParams(craftImg2Par);
			craftImg2.setPadding(0,infoWidth*0.275,infoWidth*0.05,0);
			//craftImg2.setBackgroundColor(android.graphics.Color.BLACK);
			craftImg2.setImageDrawable(getTexture(spellsItems[0][1]));
			craftImg2.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
			craftLayout.addView(craftImg2);
			
			craftImg3 = new android.widget.ImageView(ctx);
			var craftImg3Par = new android.widget.RelativeLayout.LayoutParams(infoWidth*0.475,infoWidth*0.2);
			craftImg3Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
			craftImg3Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			craftImg3.setLayoutParams(craftImg3Par);
			craftImg3.setPadding(0,0,infoWidth*0.275,infoWidth*0.05);
			//craftImg3.setBackgroundColor(android.graphics.Color.BLACK);
			craftImg3.setImageDrawable(getTexture(spellsItems[0][2]));
			craftImg3.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
			craftLayout.addView(craftImg3);
			
			craftImg4 = new android.widget.ImageView(ctx);
			var craftImg4Par = new android.widget.RelativeLayout.LayoutParams(infoWidth*0.2,infoWidth*0.475);
			craftImg4Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			craftImg4Par.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
			craftImg4.setLayoutParams(craftImg4Par);
			craftImg4.setPadding(infoWidth*0.05,infoWidth*0.275,0,0);
			//craftImg4.setBackgroundColor(android.graphics.Color.BLACK);
			craftImg4.setImageDrawable(getTexture(spellsItems[0][3]));
			craftImg4.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
			craftLayout.addView(craftImg4);
				
			infoLayout.addView(craftLayout);
			infoSv.addView(infoLayout);
			layout.addView(infoSv);
			
			//Window settings
			guiWindow.setContentView(layout);
			guiWindow.setWidth(guiWidth);
			guiWindow.setHeight(guiHeight);
			guiWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.rgb(148,132,127)));
			guiWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, guiOffsetLeft, guiOffsetTop);
		}catch(e){
			print("GUI could not be displayed: " + e);
		}
	}}));
}

function getTexture(id){
	return textures[id.indexInArray(texturesIds)]
}

function checkResources(){
	if(!java.io.File(path+"progress.png").exists()){
		try{
			java.io.File(path).mkdirs();
			java.io.File(path+"craftBg/").mkdirs();
			print("Please wait, downloading resources...")
			ModPE.downloadFile("quit.png","http://wilco375.github.io/modres/quit.png");
			ModPE.downloadFile("minecraft.ttf","http://wilco375.github.io/modres/minecraft.ttf");
			ModPE.downloadFile("blocks.png","http://wilco375.github.io/modres/blocks.png");
			ModPE.downloadFile("items.png","http://wilco375.github.io/modres/items.png");
			ModPE.downloadFile("craftBg/1.png","http://wilco375.github.io/modres/craftBg/1.png");
			ModPE.downloadFile("craftBg/2.png","http://wilco375.github.io/modres/craftBg/2.png");
			ModPE.downloadFile("craftBg/3.png","http://wilco375.github.io/modres/craftBg/3.png");
			ModPE.downloadFile("craftBg/4.png","http://wilco375.github.io/modres/craftBg/4.png");
			ModPE.downloadFile("craftBg/5.png","http://wilco375.github.io/modres/craftBg/5.png");
			ModPE.downloadFile("craftBg/6.png","http://wilco375.github.io/modres/craftBg/6.png");
			ModPE.downloadFile("craftBg/7.png","http://wilco375.github.io/modres/craftBg/7.png");
			ModPE.downloadFile("progress.png","http://wilco375.github.io/modres/progress.png");
		}catch(e){
			print("An error occured while downloading resources: "+e);
		}
	}
	getItemBitmaps();
}

function handleListTextClick(view){
	var spell = view.getText().toString().indexInArray(spells);
	infoTitle.setText(spells[spell]);
	infoDesc.setText(spellsDesc[spell]);
	craftImg1.setImageDrawable(getTexture(spellsItems[spell][0]));
	craftImg2.setImageDrawable(getTexture(spellsItems[spell][1]));
	craftImg3.setImageDrawable(getTexture(spellsItems[spell][2]));
	craftImg4.setImageDrawable(getTexture(spellsItems[spell][3]));
}

function startCrafting(){
	//print("starting");
	craftingAnimation = true;
	//print("craftingAnimation "+craftingAnimation);
	craftingTime = 0;
	craftingBg = 1;
}

function handleCrafting(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			//clientMessage(craftingTime+" "+craftingAnimation);
			if(craftingAnimation){
				if(craftingTime>=72){
					craftBg.setImageDrawable(craftBg1);
					finishCrafting();
				} 
				else if(craftingTime%2 == 0){
					switch(craftingBg){
						case 1:
							craftBg.setImageDrawable(craftBg1);
							break;
						case 2:
							craftBg.setImageDrawable(craftBg2);
							break;
						case 3:
							craftBg.setImageDrawable(craftBg3);
							break;
						case 4:
							craftBg.setImageDrawable(craftBg4);
							break;
						case 5:
							craftBg.setImageDrawable(craftBg5);
							break;
						case 6:
							craftBg.setImageDrawable(craftBg6);
							break;
						case 7:
							craftBg.setImageDrawable(craftBg7);
							break;
						case 8:
							craftBg.setImageDrawable(craftBg8);
							break;
						case 9:
							craftBg.setImageDrawable(craftBg9);
							break;
						case 10:
							craftBg.setImageDrawable(craftBg10);
							break;
						case 11:
							craftBg.setImageDrawable(craftBg11);
							break;
						case 12:
							craftBg.setImageDrawable(craftBg12);
							break;
					}
					if(craftingBg<12) craftingBg+=1;
					else craftingBg = 1;
				}
				craftingTime += 1;
			}
		}catch(e){
			print("Error changing GUI: "+e);
		}
	}}));
}

function finishCrafting(){
	craftingAnimation = false;
	var spell = infoTitle.getText().toString().indexInArray(spells);
	craftSpell(currentCrafter.x,currentCrafter.y,currentCrafter.z,spells[spell],spellsItems[spell]);
}

function getItemBitmaps(){
	blocks = new android.graphics.drawable.BitmapDrawable(path+"blocks.png").getBitmap();
	items = new android.graphics.drawable.BitmapDrawable(path+"items.png").getBitmap();
	quit = new android.graphics.drawable.BitmapDrawable(path+"quit.png");
	progress = new android.graphics.drawable.BitmapDrawable(path+"progress.png");
	craftBg1 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/1.png");
	craftBg2 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/2.png");
	craftBg3 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/3.png");
	craftBg4 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/4.png");
	craftBg5 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/5.png");
	craftBg6 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/6.png");
	craftBg7 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/7.png");
	craftBg8 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/6.png");
	craftBg9 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/5.png");
	craftBg10 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/4.png");
	craftBg11 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/3.png");
	craftBg12 = new android.graphics.drawable.BitmapDrawable(path+"craftBg/2.png");
	
	textures = [];
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,12*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,12*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,8*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,12*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,12*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,12*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,13*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,13*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,14*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,14*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,14*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,14*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,14*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,8*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,8*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,12*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,8*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,12*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,2*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,3*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,5*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,4*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,6*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,13*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,7*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,9*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,10*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,11*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,14*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,0*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks,1*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,1*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,6*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,7*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,8*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,9*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,10*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,11*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,0*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,8*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,9*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,10*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,2*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,3*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,11*31,4*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,0*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,1*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,2*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,3*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,4*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,5*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,6*31,5*32,31,32)));
	textures.push(android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items,7*31,5*32,31,32)));
}



















