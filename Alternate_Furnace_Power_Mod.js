//Alternate Furnace Power Mod
//By wilco 375
//Don't re-upload this code, nor share or redistribute this mod using the Github link without permission. Instead, use this link: 

var SolarPanelId = 212
var SolarPanelX = []
var SolarPanelY = []
var SolarPanelZ = []
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var sun

Block.defineBlock(SolarPanelId,"Solar Panel",[["iron_block",0],["lapis_block",0],["iron_block",0],["iron_block",0],["iron_block",0],["iron_block",0]],20,1,0)
Item.addCraftRecipe(SolarPanelId,1,0,[22,3,0,265,6,0])

function startDestroyBlock(x,y,z){
 if(getTile(x,y,z) == SolarPanelId){
  preventDefault()
  setTile(x,y,z,0)
  Level.dropItem(x,y,z,0.5,SolarPanelId)
 }
}

function useItem(x,y,z,itemId,blockId,side){
 //clientMessage(x+","+y+","+z+","+getTile(x,y,z))
	if(blockId == SolarPanelId){
   preventDefault()
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
}

function fuelFurnace(x,y,z){
	//Slot 0: Input; Slot 1: Fuel; Slot 2: Output
	if(Level.getFurnaceSlot(x,y,z,1) == 0 && Level.getFurnaceSlot(x,y,z,0) != 0 && sun != 0){
		Level.setFurnaceSlot(x,y,z,1,263,0,1)
   //clientMessage(sun+","+"fueled")
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
