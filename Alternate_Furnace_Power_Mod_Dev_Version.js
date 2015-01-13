//Alternate Furnace Power Mod
//By wilco 375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: http://adf.ly/vrAPR

////////////////
//Block & Id's V
////////////////
var SolarPanelId = 212
var reactorId = 213
var oreGenCheckerId = 200
var uraniumOre = 204
var uraniumId = 510

///////////////////
//Other variables V
///////////////////
var SolarPanelX = []
var SolarPanelY = []
var SolarPanelZ = []
var ReactorX = []
var ReactorY = []
var ReactorZ = []
var fuel = []
var ReactorOn = []

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var sun
var oldPx, worldGenerated, starterTick

///////////////////////////
//Creating Blocks & Items V
///////////////////////////
Block.defineBlock(oreGenCheckerId,"OreGenCheckerBlock",["bedrock",0],7,1,0)
Block.defineBlock(uraniumOre,"Uranium Ore",["diamond_ore",0],15,1,0)
Block.defineBlock(reactorId,"Reactor",["iron_block",0],15,1,0)
Block.setColor(reactorId,[0x00FF00])
Block.setColor(uraniumOre,[0x00FF00])
Block.defineBlock(SolarPanelId,"Solar Panel",[["iron_block",0],["lapis_block",0],["iron_block",0],["iron_block",0],["iron_block",0],["iron_block",0]],20,1,0)
Item.addCraftRecipe(reactorId,1,0,[256,1,0,42,1,0,256,2,0,351,1,10,256,2,0,42,1,0,256,1,0])
Item.addCraftRecipe(SolarPanelId,1,0,[22,3,0,265,6,0])
ModPE.setItem(uraniumId,"dye_powder",10,"Uranium");

/////////////////////////////////
//Code that powers the furnaces V
/////////////////////////////////
function runEveryTick(){
	if(SolarPanelX != []){
		for(i = 0;i < SolarPanelX.length;i++){
			x = SolarPanelX[i]
			y = SolarPanelY[i]
			z = SolarPanelZ[i]
			sun = 1
			Y = y+1
			while(Y<y+20){
				//clientMessage("Block above furnace ("+x+","+Y+","+z+") = "+Level.getTile(x,Y,z))
				if(getTile(x,Y,z) != 0 && Level.getTile(x,Y,z) != 20){
					sun = 0
					//clientMessage("sun = 0")
				}
				Y++
			}
    if(Level.getTime() > 12000) sun = 0
    //clientMessage(sun)
			if(sun ){
				if(getTile(x,y-1,z) == 61){
					fuelFurnace(x,y-1,z)
				}
			}
		}	
	}
	
	if(ReactorX != []){
		for(j = 0;j < ReactorX.length;j++){
			if(ReactorOn[j] == 1){
				xR = ReactorX[j]
				yR = ReactorY[j]
				zR = ReactorZ[j]
				sun = 1
				uraniumCount = fuel[j]
				newCount = uraniumCount-1
				furnaceFueled = 0
				if(getTile(xR-1,yR,zR) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR-1,yR,zR)
					}
				}
				if(getTile(xR+1,yR,zR) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR+1,yR,zR)
					}
				}
				if(getTile(xR,yR-1,zR) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR,yR-1,zR)
					}
				}
				if(getTile(xR,yR+1,zR) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR,yR+1,zR)
					}
				}
				if(getTile(xR,yR,zR-1) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR,yR,zR-1)
					}
				}
				if(getTile(xR,yR,zR+1) == 61){
					if(uraniumCount != 0){
						furnaceFueled = 1
						fuelFurnace(xR,yR,zR+1)
					}
				}
				if(furnaceFueled == 1){
					if(newCount == 0){
						fuel[j] = 0
					}
					else{ 
						fuel[j] = newCount
					}
				}
			}
		}
	}
}

function fuelFurnace(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 0 && sun != 0){
		Level.setFurnaceSlot(x,y,z,1,263,0,1)
		//clientMessage(sun+","+"fueled")
	}
}

/////////
//GUI's V
/////////
function useItem(x,y,z,itemId,blockId,side){
	//clientMessage(x+","+y+","+z+","+getTile(x,y,z))
	if(blockId == SolarPanelId){
		preventDefault()
		showSolarPanelGUI(x,y,z)
	}
	if(blockId == reactorId && itemId != uraniumId){
		preventDefault()
		showReactorGUI(x,y,z)
	}
	////////////////
	//Fuel Reactor V
	////////////////
	if(blockId == reactorId && itemId == uraniumId){
		reactorDefined = 0
		for(i = 0;i<fuel.length;i++){
			if(x == ReactorX[i] && y == ReactorY[i] && z == ReactorZ[i]){
				reactorDefined = 1
				fuelReactor(x,y,z,i)
			}
		}
		if(reactorDefined == 0){
			ReactorX.push(x)
			ReactorY.push(y)
			ReactorZ.push(z)
			ReactorOn.push(0)
			fuel.push(0)
			fuelReactor(x,y,z,ReactorX.length-1)
		}
	}
	// ^ //
}

function fuelReactor(x,y,z,i){
	if(fuel[i]==0){
		if(Player.getCarriedItemCount() > 1){
			Entity.setCarriedItem(getPlayerEnt(),uraniumId,Player.getCarriedItemCount()-1,0)
		}
		else{
			Player.clearInventorySlot(Player.getSelectedSlotId())
		}
		fuel[i] = 50
	}
	else{ clientMessage("This reactor already contains uranium")}
}

//Reactor GUI
function showReactorGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				var reactorHasFuel = 0
				//clientMessage("Block at "+ x+",1,"+z+" = "+getTile(x,1,z))
				//clientMessage("Chest recognised, data of 1st slot is: "+Level.getChestSlotData(x,1,z,0)+" , id = "+Level.getChestSlot(x,1,z,0))
				for(i = 0;i<fuel.length;i++){
					if(x == ReactorX[i] && y == ReactorY[i] && z == ReactorZ[i]){
						if(fuel[i]!=0){
							dialog.setTitle("Fuel: "+fuel+"/50")
							reactorHasFuel = 1
						}
					}
				}
				if(reactorHasFuel != 1){
					dialog.setTitle("Fuel: 0/0");
				}
				//Add buttons
				var  ReactorOnB = new android.widget.Button(ctx); 
				ReactorOnB.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							enableReactor(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ReactorOnB.setText("On")
				ReactorOnB.setTextSize(textsize)
				menu.addView(ReactorOnB); 
				
				var  ReactorOff = new android.widget.Button(ctx); 
				ReactorOff.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							disableReactor(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ReactorOff.setText("Off")
				ReactorOff.setTextSize(textsize)
				menu.addView(ReactorOff); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function enableReactor(x,y,z){
	reactorDefined = 0
	for(i = 0;i<fuel.length;i++){
		if(x == ReactorX[i] && y == ReactorY[i] && z == ReactorZ[i]){
			ReactorOn[i] = 1
			reactorDefined = 1
		}
	}
	if(reactorDefined == 0){
		ReactorX.push(x)
		ReactorY.push(y)
		ReactorZ.push(z)
		ReactorOn.push(1)
		fuel.push(0)
	}
}

function disableReactor(x,y,z){
	for(i = 0;i < ReactorX.length;i++){
		if(ReactorX[i] == x && ReactorY[i] == y && ReactorZ[i] == z){
			ReactorOn[i] = 0
		}
   }
}

//Solar Panel GUI
function showSolarPanelGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Solar Panel");
				//Add buttons
				var  SolarPanelOn = new android.widget.Button(ctx); 
				SolarPanelOn.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							enableSolarPanel(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SolarPanelOn.setText("On")
				SolarPanelOn.setTextSize(textsize)
				menu.addView(SolarPanelOn); 
				
				var  SolarPanelOff = new android.widget.Button(ctx); 
				SolarPanelOff.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							disableSolarPanel(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SolarPanelOff.setText("Off")
				SolarPanelOff.setTextSize(textsize)
				menu.addView(SolarPanelOff); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function enableSolarPanel(x,y,z){
	SolarPanelX.push(x)
	SolarPanelY.push(y)
	SolarPanelZ.push(z)
}

function disableSolarPanel(x,y,z){
	for(i = 0;i < SolarPanelX.length;i++){
		if(SolarPanelX[i] == x && SolarPanelY[i] == y && SolarPanelZ[i] == z){
			SolarPanel.splice(i,1)
			SolarPanelX.splice(i,1)
			SolarPanelY.splice(i,1)
			SolarPanelZ.splice(i,1)
		}
   }
}

///////////////////
//Breaking Blocks V
///////////////////
function startDestroyBlock(x,y,z){
	if(getTile(x,y,z) == SolarPanelId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,SolarPanelId,1,0)
	}
	if(getTile(x,y,z) == uraniumOre){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,uraniumId,1,0)
	}
	if(getTile(x,y,z) == reactorId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,reactorId,1,0)
	}
}

function destroyBlock(x,y,z){
	if(getTile(x,y,z) == SolarPanelId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,SolarPanelId,1,0)
	}
	if(getTile(x,y,z) == uraniumOre){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,uraniumId,1,0)
	}
	if(getTile(x,y,z) == reactorId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,reactorId,1,0)
	}
}

//////////////////
//Ore Generation V
//////////////////
function leaveGame(){
 starterTick = 0
 worldGenerated = 0
}
 
function modTick(){
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
		generateOres()
	}
	oldPx = getPlayerX()
}

function generateOres(){
	oreX = chunkX*16 + Math.floor((Math.random() * 16) + 1)
	oreY = Math.floor((Math.random() * 12) + 1)
	oreZ = chunkZ*16 + Math.floor((Math.random() * 16) + 1)
	cluster = Math.floor((Math.random() * 4) + 1)
	if(cluster == 1){
		cluster1(oreX,oreY,oreZ)
	}
	if(cluster == 2){
		cluster2(oreX,oreY,oreZ)
	}
	if(cluster == 3){
		cluster3(oreX,oreY,oreZ)
	}
	if(cluster == 4){
		cluster4(oreX,oreY,oreZ)
	}
}

function cluster1(x,y,z){
	var X=[x+1,x+2,x+2,x+2,x+2,x+3,x+3]
	var Y=[y+2,y+2,y+3,y+2,y+2,y+1,y+2]
	var Z=[z+-3,z+-3,z+-3,z+-2,z+-1,z+-3,z+-3]
	var success = 0
	for(n=0;n<7;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			Level.setTile(X[n], Y[n], Z[n], uraniumOre)
			success = 1
			clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster2(x,y,z){
	var X=[x+1,x+1,x+2,x+2,x+2,x+3]
	var Y=[y+1,y+2,y+2,y+3,y+2,y+2]
	var Z=[z+-1,z+-1,z+-2,z+-2,z+-1,z+-2]
	var success = 0
	for(n=0;n<6;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			Level.setTile(X[n], Y[n], Z[n], uraniumOre)
			success = 1
			clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster3(x,y,z){
	var X=[x+1,x+1,x+1,x+2]
	var Y=[y+1,y+2,y+1,y+1]
	var Z=[z+-2,z+-2,z+-1,z+-2]
	var success = 0
	for(n=0;n<4;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], uraniumOre)
			success = 1
			clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function cluster4(x,y,z){
	var X=[x+1,x+1,x+1,x+2,x+2]
	var Y=[y+1,y+2,y+1,y+2,y+3]
	var Z=[z+-2,z+-2,z+-1,z+-2,z+-2]
	var success = 0
	for(n=0;n<5;n++){
		if(getTile(X[n],Y[n],Z[n]) == 1){
			setTile(X[n], Y[n], Z[n], uraniumOre)
			success = 1
			clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function modTick(){
	runEveryTick()
}
