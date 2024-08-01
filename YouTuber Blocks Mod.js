//Youtuber Blocks Mod
//By wilco375
//Original mod by 314owen

var essenceId = 420;
var oreId = 254;
var oreGenCheckerId = 253;
var oldPx, worldGenerated, starterTick;
var setFov = 0;

//All youtuber block ids
var youtuberBlocks = [75,76,77,88,90,93,94,113,115,116,117,118,119,122,123,124,125,126,130,131,132,137,138,140,143,144,145,146,147,148,149,150,151,153,154,160,165,166,167,168,169,176,177,178,179];

//Define youtube essence
ModPE.setItem(essenceId,"yt_essence",0,"Youtube Essence");

//Define youtube ore, set hardness to iron, add furnace recipe
Block.defineBlock(oreId,"Youtube Ore",["ytore",0],15,false,0);
Block.setDestroyTime(oreId,3);
Item.addFurnaceRecipe(oreId,essenceId,oreId);

//Block thats placed in chunks as a checker that there are ores generated in that chunk
Block.defineBlock(oreGenCheckerId,"OreGenCheckerBlock",["bedrock",0],7,1,0);



defineYoutuberBlocks();

//Define all Youtuber blocks
function defineYoutuberBlocks(){
	Block.defineBlock(75,"PopularMMOs Block",["popularmmos",0],20,false,0);
	defYTCR(75,57);
	Block.defineBlock(76,"SkyDoesMinecraft Block",["skydoesminecraft",0],20,false,0);
	defYTCR(76,41);
	Block.defineBlock(77,"Yogscast Simon Block",["ycsimon",0],20,false,0);
	defYTCR(77,357);
	Block.defineBlock(88,"Yogscast Lewis Block",["yclewis",0],20,false,0);
	defYTCR(88,340);
	Block.defineBlock(90,"Yogscast Sips Block",["ycsips",0],20,false,0);
	defYTCR(90,3);
	Block.defineBlock(93,"Yogscast Sjin Block",["ycsjin",0],20,false,0);
	defYTCR(93,293);
	Block.defineBlock(94,"Yogscast Duncan Block",["ycduncan",0],20,false,0);
	defYTCR(94,391);
	Block.defineBlock(113,"Munchingbrotato Block",["munchingbrotato",0],20,false,0);
	defYTCR(113,392);
	Block.defineBlock(115,"TheDiamondMinecart Block",["tdm",0],20,false,0);
	defYTCR(115,328);
	Block.defineBlock(116,"CaptainSparklez Block",["captainsparklez",0],20,false,0);
	defYTCR(116,388);
	Block.defineBlock(117,"Deadlox Block",["deadlox",0],20,false,0);
	defYTCR(117,352);
	Block.defineBlock(118,"MinecraftUniverse Block",["mcuniverse",0],20,false,0);
	defYTCR(118,319);
	Block.defineBlock(119,"Sethbling Block",["sethbling",0],20,false,0);
	defYTCR(119,152);
	Block.defineBlock(122,"AntVenom Block",["antvenom",0],20,false,0);
	defYTCR(122,287)
	Block.defineBlock(123,"ASFJerome Block",["asfjerome",0],20,false,0);
	Item.addCraftRecipe(123,1,0,[35,4,12,essenceId,1,0,35,4,12]);
	Block.defineBlock(124,"BajanCanadian Block",["bajancanadian",0],20,false,0);
	defYTCR(124,261);
	Block.defineBlock(125,"Bashur Block",["bashur",0],20,false,0);
	defYTCR(125,360);
	Block.defineBlock(126,"CavemanFilms Block",["cavemanfilms",0],20,false,0);
	defYTCR(126,1);
	Block.defineBlock(130,"Notch Block",["notch",0],20,false,0);
	defYTCR(130,314);
	Block.defineBlock(131,"Sarc Block",["sarc",0],20,false,0);
	defYTCR(131,27);
	Block.defineBlock(132,"SSundee Block",["ssundee",0],20,false,0);
	defYTCR(132,267);
	Block.defineBlock(137,"Stampy Block",["stampy",0],20,false,0);
	defYTCR(137,278);
	Block.defineBlock(138,"ThnxCya Block",["thnxcya",0],20,false,0);
	defYTCR(138,263);
	Block.defineBlock(140,"Tobuscus Block",["tobuscus",0],20,false,0);
	defYTCR(140,276);
	Block.defineBlock(143,"Dartron Block",["dartron",0],20,false,0);
	defYTCR(143,331);
	Block.defineBlock(144,"TCTNGaming Block",["tctngaming",0],20,false,0);
	defYTCR(144,332);
	Block.defineBlock(145,"ChimneySwift Block",["chimneyswift",0],20,false,0);
	defYTCR(145,45);
	Block.defineBlock(146,"Bodil40 Block",["bodil",0],20,false,0);
	defYTCR(146,18);
	Block.defineBlock(147,"PauseUnPause Block",["pauseunpause",0],20,false,0);
	defYTCR(147,333);
	Block.defineBlock(148,"Hypixel Block",["hypixel",0],20,false,0);
	defYTCR(148,98);
	Block.defineBlock(149,"AviatorGaming Block",["aviatorgaming",0],20,false,0);
	defYTCR(149,289);
	Block.defineBlock(150,"NoahCraftFTW Block",["noahcraftftw",0],20,false,0);
	defYTCR(150,259);
	Block.defineBlock(151,"Gizzy14Gazza Block",["gizzygazza",0],20,false,0);
	defYTCR(151,363);
	Block.defineBlock(153,"BebopVox Block",["bebopvox",0],20,false,0);
	defYTCR(153,264);
	Block.defineBlock(154,"SeaNanners Block",["seananners",0],20,false,0);
	Item.addCraftRecipe(154,1,0,[325,4,8,essenceId,1,0,325,4,8]);
	Block.defineBlock(160,"IHasCupquake Block",["ihascupquake",0],20,false,0);
	defYTCR(160,354);
	Block.defineBlock(165,"Yogscast Martyn Block",["ycmartyn",0],20,false,0);
	defYTCR(165,6);
	Block.defineBlock(166,"Annoying Orange Block",["annoyingorange",0],20,false,0);
	defYTCR(166,260);
	Block.defineBlock(167,"iBallisticSquid Block",["iballisticsquid",0],20,false,0);
	defYTCR(167,325);
	Block.defineBlock(168,"Etho Block",["etho",0],20,false,0);
	defYTCR(168,367);
	Block.defineBlock(169,"Dragnoz Block",["dragnoz",0],20,false,0);
	defYTCR(169,331);
	Block.defineBlock(176,"Lanceypooh Block",["lanceypooh",0],20,false,0);
	defYTCR(176,257);
	Block.defineBlock(177,"SuperGirleyGamer Block",["supergirleygamer",0],20,false,0);
	defYTCR(177,364)
	Block.defineBlock(178,"Gold Solace Block",["goldsolace",0],20,false,0);
	defYTCR(178,266);
	Block.defineBlock(179,"TheAtlanticCraft Block",["theatlanticcraft",0],20,false,0);
	defYTCR(179,80);
	
	//Loop trough blocks to set hardness (same as glass)
	for(i=0;i<youtuberBlocks.length;i++){
		Block.setDestroyTime(youtuberBlocks[i],0.3);
	}
}

function newLevel(){
	//Check for new update using java code
	try{
		var out = new java.io.ByteArrayOutputStream();
		var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/Youtuber_Blocks_Mod_V1_update_checker.txt")).getEntity().writeTo(out);
		out.close();
		clientMessage(String(out.toString()));
	}catch(e){
		print("Error while checking for updates: could not connect to raw.githubusercontent.io");
	}
}

//Get chunk, if not genrated, spawn ores
function oreModTick(){
	if(starterTick == null) starterTick = 0
	if(starterTick < 200) starterTick++
	Px = Player.getX()
	Pz = Player.getZ()
	chunkX = 0
	chunkZ = 0
	if(oldPx != null && Px != oldPx){
		worldGenerated = 1
	}
	//16 to 32 -> 1 
	while(Px > 0){
		Px = Px - 16
		chunkX++
	}
	//-1 to - 16 -> -1 
	while(Px < 0){
		Px = Px + 16
		chunkX--
	}
	//16 to 32 -> 1 
	while(Pz > 0){
		Pz = Pz - 16
		chunkZ++
	}
	//-1 to - 16 -> -1 
	while(Pz < 0){
		Pz = Pz + 16
		chunkZ--
	}
	if(getTile(chunkX*16,1,chunkZ*16) != oreGenCheckerId && worldGenerated == 1 && starterTick > 199){
		setTile(chunkX*16,1,chunkZ*16,oreGenCheckerId)
		var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
		activity.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				generateOres()
			}catch(e){
				print(e)
			}
		}}));
	}
	oldPx = getPlayerX()
}

//Short function to define Youtuber block crafting recipe (1 Youtube Essence surrounded by specified id)
function defYTCR(blockId,itemId){
  Item.addCraftRecipe(blockId,1,0,[itemId,4,0,essenceId,1,0,itemId,4,0]);
}

//Called when block is toched or walked on
function blockTouched(id){
	//Give appropriate effect
	if(id == 75){
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 30*20, 1, false, true);
	}
	else if(id == 76){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 30*20, 2, false, true);
	}
	else if(id == 77){
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*20, 3, false, true);
	}
	else if(id == 88){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 30*20, 1, false, true);
	}
	else if(id == 90){
		Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30*20, 3, false, true);
	}
	else if(id == 93){
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 30*20, 10, false, true);
	}
	else if(id == 94){
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 30*20, 0, false, true);
	}
	else if(id == 113){
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 30*20, 0, false, true);
	}
	else if(id == 115){
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*20, 3, false, true);
	}
	else if(id == 116){
		Entity.addEffect(getPlayerEnt(), MobEffect.heal, 30*20, 0, false, true);
	}
	else if(id == 117){
		Entity.addEffect(getPlayerEnt(), MobEffect.harm, 30*20, 3, false, true);
	}
	else if(id == 118){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 30*20, 2, false, true);
	}
	else if(id == 119){
		Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 1, false, true);
	}
	else if(id == 122){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 30*20, 1, false, true);
	}
	else if(id == 123){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 30*20, 3, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 2, false, true);	
	}
	else if(id == 124){
		Entity.addEffect(getPlayerEnt(), MobEffect.saturation, 30*20, 2, false, true);
	}
	else if(id == 125){
		Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30*20, 10, false, true);
	}
	else if(id == 126){
		Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, 30*20, 3, false, true);
	}
	else if(id == 130){
		Entity.addEffect(getPlayerEnt(), MobEffect.absorption, 30*20, 3, false, true);
	}
	else if(id == 131){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 15*20, 5, false, true);
	}
	else if(id == 132){
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 30*20, 1, false, true);
	}
	else if(id == 137){
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*20, 2, false, true);
	}
	else if(id == 138){
		Entity.addEffect(getPlayerEnt(), MobEffect.blindness, 30*20, 2, false, true);
	}
	else if(id == 140){
		Entity.addEffect(getPlayerEnt(), MobEffect.wither, 30*20, 2, false, true);
	}
	else if(id == 143){
		Entity.addEffect(getPlayerEnt(), MobEffect.weakness, 30*20, 1, false, true);
	}
	else if(id == 144){
		Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 30*20, 2, false, true);
	}
	else if(id == 145){
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 30*20, 2, false, true);
	}
	else if(id == 146){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 30*20, 2, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.jump, 30*20, 2, false, true);
	}
	else if(id == 148){
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*20, 25, false, true);
	}
	else if(id == 149){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 30*20, 3, false, true);
	}
	else if(id == 150){
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 30*20, 2, false, true);
	}
	else if(id == 151){
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 30*20, 0, false, true);
	}
	else if(id == 153){
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 30*20, 2, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.blindness, 30*20, 2, false, true);
	}
	else if(id == 154){
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 30*20, 2, false, true);
	}
	else if(id == 160){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 30*20, 25, false, true);
		ModPE.setFov(140);
		setFov = 1;
	}
	else if(id == 165){
		Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 30*20, 3, false, true);
	}
	else if(id == 166){
		Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 30*20, 3, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.harm, 30*20, 3, false, true);
	}
	else if(id == 167){
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 30*20, 3, false, true);
	}
	else if(id == 168){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 30*20, 2, false, true);
	}
	else if(id == 169){
		Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 0, false, true);
	}
	else if(id == 176){
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 30*20, 2, false, true);
	}
	else if(id == 177){
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 30*20, 3, false, true);
	}
	else if(id == 178){
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 30*20, 0, false, true);
	}
	else if(id == 179){
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 30*20, 0, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 30*20, 3, false, true);
	}
}

//On block touched hook 
function useItem(x,y,z,itemId,blockId){
	//Prevent normal event (placing block) if youtuber block
	if(checkForYoutuberBlock(blockId)) preventDefault()
	blockTouched(blockId);
	if(blockId==147){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 30*20, 0, false, true);
	}
}

//Called every tick (1/20th of a second)
function modTick(){
	if(setFov>0){
		setFov++
	}if(setFov == 30*20+1){
		ModPE.setFov(80);
		setFov = 0;
	}
	
	var x = Player.getX();
	var y = Player.getY();
	var z = Player.getZ();
	x = parseInt(Math.floor(x));
	y = parseInt(Math.floor(y))-2;
	z = parseInt(Math.floor(z));
	//Calls blockTouched on block below player
	blockTouched(Level.getTile(x,y,z))
	if(Level.getTile(x,y,z) == 147){
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 30*20, 0, false, true);
	}
	oreModTick();
}

function checkForYoutuberBlock(id){
	//Loop through blocks
	for(i=0;i<youtuberBlocks.length;i++){
		if(youtuberBlocks[i] == id){
			return true;
		}
	}
	return false;
}

function generateOres(){
	//Generate random ore cluster in random location
	for(i = 0;i < 16; i++){
		oreX = chunkX*16 + Math.floor((Math.random() * 16) + 1)
		oreY = Math.floor((Math.random() * 96) + 1)
		oreZ = chunkZ*16 + Math.floor((Math.random() * 16) + 1)
		cluster = Math.floor((Math.random() * 4) + 1)
		if(cluster == 1){
			cluster1(oreX,oreY,oreZ,oreId)
		}
		if(cluster == 2){
			cluster2(oreX,oreY,oreZ,oreId)
		}
		if(cluster == 3){
			cluster3(oreX,oreY,oreZ,oreId)
		}
		if(cluster == 4){
			cluster4(oreX,oreY,oreZ,oreId)
		}
	}
}

function cluster1(x,y,z,ore){
	var X=[x+1,x+2,x+2,x+2,x+2,x+3,x+3]
	var Y=[y+2,y+2,y+3,y+2,y+2,y+1,y+2]
	var Z=[z+-3,z+-3,z+-3,z+-2,z+-1,z+-3,z+-3]
	var success
	for(n=0;n<125+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster2(x,y,z,ore){
	var X=[x+1,x+1,x+2,x+2,x+2,x+3]
	var Y=[y+1,y+2,y+2,y+3,y+2,y+2]
	var Z=[z+-1,z+-1,z+-2,z+-2,z+-1,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster3(x,y,z,ore){
	var X=[x+1,x+1,x+1,x+2]
	var Y=[y+1,y+2,y+1,y+1]
	var Z=[z+-2,z+-2,z+-1,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster4(x,y,z,ore){
	var X=[x+1,x+1,x+1,x+2,x+2]
	var Y=[y+1,y+2,y+1,y+2,y+3]
	var Z=[z+-2,z+-2,z+-1,z+-2,z+-2]
	var success
	for(n=0;n<100+1;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], ore)
			success = 1
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

//Cheat command for all heads
function procCmd(cmd){
	if(cmd == "giveAllHeads 1"){
		for(i=0;i<30;i++){
			addItemInventory(youtuberBlocks[i],64,0)
		}
	}
	if(cmd == "giveAllHeads 2"){
		for(i=30;i<youtuberBlocks.length;i++){
			addItemInventory(youtuberBlocks[i],64,0)
		}
	}
}


























