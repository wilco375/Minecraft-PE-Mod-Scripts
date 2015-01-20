//Alternate Furnace Power Mod V2.0 - Ender Generator and Biomass Generator Added
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
var fuelBlock = 201
var enderGenId = 209
var bioMassGenId = 208

///////////////////
//Other variables V
///////////////////
var SolarPanelX = []
var SolarPanelY = []
var SolarPanelZ = []
var ReactorX = []
var ReactorY = []
var ReactorZ = []
var EnderGenX = []
var EnderGenY = []
var EnderGenZ = []
var BioMassGenX = []
var BioMassGenY = []
var BioMassGenZ = []

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15

var counter
var sun
var oldPx, worldGenerated, starterTick

///////////////////////////
//Creating Blocks & Items V
///////////////////////////
ModPE.setItem(uraniumId,"dye_powder",10,"Uranium")
ModPE.setItem(368,"ender_pearl",0,"Ender Pearl",16)
Block.defineBlock(reactorId,"Reactor",["iron_block",0],20,1,0)
Block.setColor(reactorId,[0x00FF00])
Item.addCraftRecipe(reactorId,1,0,[265,1,0,42,1,0,265,2,0,uraniumId,1,0,265,2,0,42,1,0,265,1,0])
Block.defineBlock(enderGenId,"Ender Generator",["iron_block",0],20,1,0)
Item.addCraftRecipe(enderGenId,1,0,[265,1,0,42,1,0,265,2,0,368,1,0,265,2,0,42,1,0,265,1,0])
Block.setColor(enderGenId,[0x008866])
Block.defineBlock(bioMassGenId,"Biomass Generator",[["grass",2],["leaves",4],["leaves",4],["leaves",4],["grass",2],["grass",2]],20,1,0)
Item.addCraftRecipe(bioMassGenId,1,0,[18,4,0,6,1,0,18,4,0])
Block.defineBlock(SolarPanelId,"Solar Panel",[["iron_block",0],["lapis_block",0],["iron_block",0],["iron_block",0],["iron_block",0],["iron_block",0]],20,1,0)
Item.addCraftRecipe(SolarPanelId,1,0,[22,3,0,265,6,0])
Block.defineBlock(oreGenCheckerId,"OreGenCheckerBlock",["bedrock",0],7,1,0)
Block.defineBlock(uraniumOre,"Uranium Ore",["diamond_ore",0],15,1,0)
Block.setColor(uraniumOre,[0x00FF00])
Block.defineBlock(fuelBlock,"Fuel Block",["bedrock",0],1,1,0)
Block.setColor(fuelBlock,[0xF0F8FF,0xFAEBD7,0x00FFFF,0x7FFFD4,0xF0FFFF,0xF5F5DC,0x000000,0xFFE4C4,0xFFEBCD,0x0000FF,0x8A2BE2,0xA52A2A,0xDEB887,0x5F9EA0,0x7FFF00])

/////////////////////
//Check for updates V
/////////////////////
function newLevel(){
 var out=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/Alternate_Furnace_Power_Mod_V2.0_Update_Checker.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()))
}

/////////////////////////////////
//Code that powers the furnaces V
/////////////////////////////////
function runEveryTick(){
	if(counter == null) counter = 0
	if(counter < 5) counter++
	else if(counter == 5) counter = 0
	//Solar Panel
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
			if(sun == 1){
				if(getTile(x,y-1,z) == 61){
					fuelFurnace2(x,y-1,z)
				}
			}
		}	
	}
	//Reactor
	if(ReactorX != []){
		for(j = 0;j < ReactorX.length;j++){
			xR = ReactorX[j]
			yR = ReactorY[j]
			zR = ReactorZ[j]
			sun = 1
			uraniumCount = Level.getData(xR,1,zR)
			newCount = uraniumCount-1
			furnaceFueled = 0
			if(getTile(xR-1,yR,zR) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR-1,yR,zR)
				}
			}
			if(getTile(xR+1,yR,zR) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR+1,yR,zR)
				}
			}
			if(getTile(xR,yR-1,zR) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR,yR-1,zR)
				}
			}
			if(getTile(xR,yR+1,zR) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR,yR+1,zR)
				}
			}
			if(getTile(xR,yR,zR-1) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR,yR,zR-1)
				}
			}
			if(getTile(xR,yR,zR+1) == 61){
				if(uraniumCount != 0){
					fuelFurnace(xR,yR,zR+1)
				}
			}
			if(furnaceFueled == 1){
				if(newCount == 0){
					Level.setTile(xR,1,zR,fuelBlock,0)
				}
				else{ 
					Level.setTile(xR,1,zR,fuelBlock,newCount)
				}
			}
		}
	}
	//Ender Reactor
	if(counter == 5){
		if(EnderGenX != []){
			for(k = 0;k < EnderGenX.length;k++){
				xE = EnderGenX[k]
				yE = EnderGenY[k]
				zE = EnderGenZ[k]
				enderCount = Level.getData(xE,1,zE)
				newEnderCount = enderCount-1
				furnaceFueled = 0
				for(x = xE-3;x<=xE+3;x++){
					for(y = yE-3;y<=yE+3;y++){
						for(z = zE-3;z<=zE+3;z++){
							if(getTile(x,y,z) == 61){
								if(enderCount != 0){
									fuelFurnaceEnder(x,y,z)
								}
							}
						}
					}
				}
				if(furnaceFueled == 1){
					if(newEnderCount == 0){
						Level.setTile(xE,1,zE,fuelBlock,0)
					}
					else{ 
						Level.setTile(xE,1,zE,fuelBlock,newEnderCount)
					}
				}
			}
		}
	}
	//Biomass Generator
	if(BioMassGenX != []){
		for(l = 0;l < BioMassGenX.length;l++){
			xM = BioMassGenX[l]
			yM = BioMassGenY[l]
			zM = BioMassGenZ[l]
			sun = 1
			bioMassCount = Level.getData(xM,1,zM)
			newBioMassCount = uraniumCount-1
			furnaceFueled = 0
			if(getTile(xM-1,yM,zM) == 61){
				if(bioMassCount != 0){
					fuelFurnaceEnder(xM-1,yM,zM)
				}
			}
			if(getTile(xM+1,yM,zM) == 61){
				if(bioMassCount != 0){
					fuelFurnaceEnder(xM+1,yM,zM)
				}
			}
			if(getTile(xM,yM,zM-1) == 61){
				if(bioMassCount != 0){
					fuelFurnaceEnder(xM,yM,zM-1)
				}
			}
			if(getTile(xM,yM,zM+1) == 61){
				if(bioMassCount != 0){
					fuelFurnaceEnder(xM,yM,zM+1)
				}
			}
			if(furnaceFueled == 1){
				if(newBioMassCount == 0){
					Level.setTile(xM,1,zM,fuelBlock,0)
				}
				else{ 
					Level.setTile(xM,1,zM,fuelBlock,newBioMassCount)
				}
			}			
		}
	}
}

//Fuel furnace for Solar Panel
function fuelFurnace2(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 0 && sun != 0){
		Level.setFurnaceSlot(x,y,z,1,263,0,1)
	}
}

//Fuel furnace for Reactor
function fuelFurnace(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 0 && sun != 0){
		Level.setFurnaceSlot(x,y,z,1,173,0,1)
		furnaceFueled = 1
	}
}

//Fuel furnace for Ender Generator
function fuelFurnaceEnder(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 0){
		Level.setFurnaceSlot(x,y,z,1,263,0,1)
		furnaceFueled = 1
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
	if(blockId == enderGenId && itemId != 368){
		preventDefault()
		showEnderGUI(x,y,z)
	}
	if(blockId == bioMassGenId && itemId != 6 && itemId != 18 && itemId != 31 && itemId != 37 && itemId != 38 && itemId != 39 && itemId != 40 && itemId != 81 && itemId != 83 && itemId != 86 && itemId != 103 && itemId != 106 && itemId != 111 && itemId != 161 && itemId != 175 && itemId != 295 && itemId != 296 && itemId != 338 && itemId != 360 && itemId != 361 && itemId != 362 && itemId != 391 && itemId != 392 && itemId != 457 && itemId != 458){
		preventDefault()
		showBioMassGUI(x,y,z)
	}
	/////////////////////////////////////////////////////
	//Fuel Reactor, Biomass Generator & Ender Generator V
	/////////////////////////////////////////////////////
	if(blockId == reactorId && itemId == uraniumId){
		if(Level.getData(x,1,z)==0){
			if(Player.getCarriedItemCount() > 1){
				Entity.setCarriedItem(getPlayerEnt(),uraniumId,Player.getCarriedItemCount()-1,0)
			}
			else{
				Entity.setCarriedItem(getPlayerEnt(),0)
			}
			Level.setTile(x,1,z,fuelBlock,15)
		}
		else{ clientMessage("This reactor already contains uranium")}
	}
	if(blockId == enderGenId && itemId == 368){
		if(Level.getData(x,1,z)==0){
			if(Player.getCarriedItemCount() > 1){
				Entity.setCarriedItem(getPlayerEnt(),368,Player.getCarriedItemCount()-1,0)
			}
			else{
				Entity.setCarriedItem(getPlayerEnt(),0)
			}
			Level.setTile(x,1,z,fuelBlock,15)
		}
		else{ clientMessage("This ender generator already contains an ender pearl")}
	}
	if(blockId == bioMassGenId){
		if(itemId == 6 || itemId == 18 || itemId == 31 || itemId == 37 || itemId == 38 || itemId == 39 || itemId == 40 || itemId == 81 || itemId == 83 || itemId == 86 || itemId == 103 || itemId == 106 || itemId == 111 || itemId == 161 || itemId == 175 || itemId == 295 || itemId == 296 || itemId == 338 || itemId == 360 || itemId == 361 || itemId == 362 || itemId == 391 || itemId == 392 || itemId == 457 || itemId == 458){
			if(Level.getData(x,1,z)!=15){
				if(Player.getCarriedItemCount() > 1){
					Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,0)
				}
				else{
					Entity.setCarriedItem(getPlayerEnt(),0)
				}
				Level.setTile(x,1,z,fuelBlock,Level.getData(x,1,z)+1)
			}
			else{ clientMessage("This biomass generator is already filled up")}
		}
	}	
	
	// ^ //
	
	////////////////////////////////////////////////////////
	//Create fuel block for Reactor & Ender Generator fuel V
	////////////////////////////////////////////////////////
	if(itemId == reactorId || itemId == enderGenId || itemId == bioMassGenId){
		xC = x
		zC = z
		if(side == 2) zC--
		if(side == 3) zC++
		if(side == 4) xC--
		if(side == 5) xC++
		setTile(xC,1,zC,fuelBlock,0)
		setTile(xC,2,zC,7)
	}
	/*
	SIDES
	0 - Bottom - (y - 1)
	1 - Top - (y + 1)
	2 - Front - (z - 1)
	3 - Back - (z + 1)
	4 - Left - (x - 1)
	5 - Right - (x + 1)
	*/
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
				if(getTile(x,1,z) == fuelBlock){
					//clientMessage("Chest recognised, data of 1st slot is: "+Level.getChestSlotData(x,1,z,0)+" , id = "+Level.getChestSlot(x,1,z,0))
					if(Level.getData(x,1,z)!=0){
						dialog.setTitle("Fuel: "+Level.getData(x,1,z)+"/15")
						reactorHasFuel = 1
					}
				}
				if(reactorHasFuel != 1){
					dialog.setTitle("Fuel: 0/0");
				}
				//Add buttons
				var  ReactorOn = new android.widget.Button(ctx); 
				ReactorOn.setOnClickListener(new android.view.View.OnClickListener(){
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
				ReactorOn.setText("On")
				ReactorOn.setTextSize(textsize)
				menu.addView(ReactorOn); 
				
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
	ReactorX.push(x)
	ReactorY.push(y)
	ReactorZ.push(z)
}

function disableReactor(x,y,z){
	for(i = 0;i < ReactorX.length;i++){
		if(ReactorX[i] == x && ReactorY[i] == y && ReactorZ[i] == z){
			ReactorX.splice(i,1)
			ReactorY.splice(i,1)
			ReactorZ.splice(i,1)
		}
   }
}

//Ender GUI
function showEnderGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				var enderGenHasFuel = 0
				//clientMessage("Block at "+ x+",1,"+z+" = "+getTile(x,1,z))
				if(getTile(x,1,z) == fuelBlock){
					if(Level.getData(x,1,z)!=0){
						dialog.setTitle("Fuel: "+Level.getData(x,1,z)+"/15")
						enderGenHasFuel = 1
					}
				}
				if(enderGenHasFuel != 1){
					dialog.setTitle("Fuel: 0/0");
				}
				//Add buttons
				var  enderGenOn = new android.widget.Button(ctx); 
				enderGenOn.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							enableEnderGen(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				enderGenOn.setText("On")
				enderGenOn.setTextSize(textsize)
				menu.addView(enderGenOn); 
				
				var  enderGenOff = new android.widget.Button(ctx); 
				enderGenOff.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							disableEnderGen(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				enderGenOff.setText("Off")
				enderGenOff.setTextSize(textsize)
				menu.addView(enderGenOff); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function enableEnderGen(x,y,z){
	EnderGenX.push(x)
	EnderGenY.push(y)
	EnderGenZ.push(z)
}

function disableEnderGen(x,y,z){
	for(i = 0;i < EnderGenX.length;i++){
		if(EnderGenX[i] == x && EnderGenY[i] == y && EnderGenZ[i] == z){
			EnderGenX.splice(i,1)
			EnderGenY.splice(i,1)
			EnderGenZ.splice(i,1)
		}
   }
}

//Biomass GUI
function showBioMassGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				var bioMassHasFuel = 0
				//clientMessage("Block at "+ x+",1,"+z+" = "+getTile(x,1,z))
				if(getTile(x,1,z) == fuelBlock){
					if(Level.getData(x,1,z)!=0){
						dialog.setTitle("Fuel: "+Level.getData(x,1,z)+"/15")
						bioMassHasFuel = 1
					}
				}
				if(bioMassHasFuel != 1){
					dialog.setTitle("Fuel: 0/0");
				}
				//Add buttons
				var  bioMassOn = new android.widget.Button(ctx); 
				bioMassOn.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							enableBioMass(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				bioMassOn.setText("On")
				bioMassOn.setTextSize(textsize)
				menu.addView(bioMassOn); 
				
				var  bioMassOff = new android.widget.Button(ctx); 
				bioMassOff.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							disableBioMass(x,y,z);
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				bioMassOff.setText("Off")
				bioMassOff.setTextSize(textsize)
				menu.addView(bioMassOff); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function enableBioMass(x,y,z){
	BioMassGenX.push(x)
	BioMassGenY.push(y)
	BioMassGenZ.push(z)
}

function disableBioMass(x,y,z){
	for(i = 0;i < BioMassGenX.length;i++){
		if(BioMassGenX[i] == x && BioMassGenY[i] == y && BioMassGenZ[i] == z){
			BioMassGenX.splice(i,1)
			BioMassGenY.splice(i,1)
			BioMassGenZ.splice(i,1)
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
	if(getTile(x,y,z) == enderGenId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,enderGenId,1,0)
	}
	if(getTile(x,y,z) == bioMassGenId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,bioMassGenId,1,0)
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
	if(getTile(x,y,z) == enderGenId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,enderGenId,1,0)
	}
	if(getTile(x,y,z) == bioMassGenId){
		preventDefault()
		setTile(x,y,z,0)
		Level.dropItem(x,y,z,0.5,bioMassGenId,1,0)
	}
}

////////////////////////////////////
//Make Ender Men drop Ender Pearls V
////////////////////////////////////
function deathHook(murderer,victim){
	if(murderer == getPlayerEnt() && Entity.getEntityTypeId(victim) == 38){
		if(Math.round(Math.random()) == 1){
			Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0.5,368,1,0)
		}
	}
}

//////////////////
//Ore Generation V
//////////////////
function leaveGame(){
 starterTick = 0
 worldGenerated = 0
}
 
function oreGen(){
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
			//clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
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
			//clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
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
			//clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
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
			//clientMessage("Set "+X[n]+","+Y[n]+","+Z[n]+" to uraniumOre")
		}
	}
	if(success == 1){
		//clientMessage("Generated ore at "+x+","+y+ ","+z)
		success = 0
	}
}

function modTick(){
	runEveryTick()
	oreGen()
}
