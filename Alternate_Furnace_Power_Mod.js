//Alternate Furnace Power Mod
//By wilco 375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

var UraniumId
var ReactorId
var SolarPanelId = 212
var ReactorX = []
var ReactorY = []
var ReactorZ = []
var ReactorFuel = []
var SolarPanelX = []
var SolarPanelY = []
var SolarPanelZ = []
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var sun

Block.defineBlock(SolarPanelId,"Solar Panel",[["iron_block",0],["lapis_block",0],["iron_block",0],["iron_block",0],["iron_block",0],["iron_block",0]],61,1,0);

function useItem(x,y,z,itemId,blockId,side){
	if(blockId == SolarPanelId){
		showSolarPanelGUI(x,y,z)
	}
}

function modTick(){
	if(SolarPanelX != []){
		for(i = 0;i < SolarPanelX.length;i++){
			x = SolarPanelX[i]
			y = SolarPanelY[i]
			z = SolarPanelZ[i]
			sun = 1
			for(Y = 1;Y < 20;Y++){
				if(getTile(x,y+Y,z) != 0 && getTile(x,y+Y,z) != 20){
					sun = 0
				}
			}
			if(sun = 1){
				if(getTile(x-1,y,z) == 61){
					fuelFurnace(x-1,y,z)
				}
				else if(getTile(x+1,y,z) == 61){
					fuelFurnace(x+1,y,z)
				}
				else if(getTile(x,y-1,z) == 61){
					fuelFurnace(x,y-1,z)
				}
				else if(getTile(x,y,z-1) == 61){
					fuelFurnace(x,y,z-1)
				}
				else if(getTile(x,y,z+1) == 61){
					fuelFurnace(x,y,z+1)
				}
			}
		}	
	}
}

function fuelFurnace(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 1){
		Level.setFurnaceSlot(x,y,z,1,173,0,1)
	}
}

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
							enableSolarPanel(x,y,z)
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
						dialog.dismiss();
						disableSolarPanel(x,y,z)
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
