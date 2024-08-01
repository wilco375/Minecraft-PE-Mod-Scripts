//DecoLights Mod V2 - Added option to color lights
//By wilco375
//Do not claim your own or re-upload. For permissions see http://wilco375.github.io/permissions.html

var colors = [0xffffff, 0xff8000, 0xff80ff, 0x4040ff, 0xffff00, 0x00ff00, 0xff0080, 0x404040,0xc4c4c4, 0x0080c8, 0x800080, 0x000080, 0x804000, 0x008000, 0x800000, 0x000000];

var light1 = 410;
ModPE.setItem(light1,"blaze_rod",0,"Lantern");
Item.addCraftRecipe(light1,1,0,[1,1,0,50,1,0,1,2,0,50,1,0,1,4,0]);

var light2 = 411;
ModPE.setItem(light2,"blaze_rod",0,"Ceiling Light");
Item.addCraftRecipe(light2,1,0,[50,3,0]);

var light3 = 412;
ModPE.setItem(light3,"blaze_rod",0,"Modern Street Light");
Item.addCraftRecipe(light3,1,0,[50,1,0,1,2,0]);

var light4 = 413;
ModPE.setItem(light4,"blaze_rod",0,"Old Street Light");
Item.addCraftRecipe(light4,1,0,[50,3,0,1,2,0]);

Block.defineBlock(237,"ceiling_light",[["stained_clay",0]],4,false);
Block.setShape(237,0.25,0.875,0.25,0.75,1,0.75);
Block.setLightLevel(237,15);
Block.setRenderLayer(237,1);
Block.setColor(237,colors);

Block.defineBlock(232,"street_light_2",[["stained_clay",0]],4,false);
Block.setShape(232,0.25,0,0,0.75,0.25,0.75);
Block.setLightLevel(232,15);
Block.setRenderLayer(232,1);
Block.setColor(232,colors);

Block.defineBlock(233,"street_light_3",[["stained_clay",0]],4,false);
Block.setShape(233,0.25,0,0.25,0.75,0.25,1);
Block.setLightLevel(233,15);
Block.setRenderLayer(233,1);
Block.setColor(233,colors);

Block.defineBlock(234,"street_light_4",[["stained_clay",0]],4,false);
Block.setShape(234,0,0,0.25,0.75,0.25,0.75);
Block.setLightLevel(234,15);
Block.setRenderLayer(234,1);
Block.setColor(234,colors);

Block.defineBlock(235,"street_light_5",[["stained_clay",0]],4,false);
Block.setShape(235,0.25,0,0.25,1,0.25,0.75);
Block.setLightLevel(235,15);
Block.setRenderLayer(235,1);
Block.setColor(235,colors);

Block.defineBlock(250,"light",[["stained_clay",0]],4,false);
Block.setShape(250,0.25,0,0.25,0.75,1,0.75);
Block.setLightLevel(250,15);
Block.setRenderLayer(250,1);
Block.setColor(250,colors);

Block.defineBlock(251,"light_top",[["stained_clay",15]],4,false);
Block.setShape(251,0.25,0,0.25,0.75,0.125,0.75);
Block.setLightOpacity(251,0);

Block.defineBlock(240,"light_bottom_0",[["stained_clay",15]],4,false);
Block.setShape(240,0.25,0.875,0.25,0.75,1,0.75);
Block.setLightOpacity(240,0);

Block.defineBlock(252,"light_bottom_2",[["stained_clay",15]],4,false);
Block.setShape(252,0.25,0.875,0.25,0.75,1,1);
Block.setLightOpacity(252,0);

Block.defineBlock(253,"light_bottom_3",[["stained_clay",15]],4,false);
Block.setShape(253,0.25,0.875,0,0.75,1,0.75);
Block.setLightOpacity(253,0);

Block.defineBlock(254,"light_bottom_4",[["stained_clay",15]],4,false);
Block.setShape(254,0.25,0.875,0.25,1,1,0.75);
Block.setLightOpacity(254,0);

Block.defineBlock(242,"light_bottom_5",[["stained_clay",15]],4,false);
Block.setShape(242,0,0.875,0.25,0.75,1,0.75);
Block.setLightOpacity(242,0);

Block.defineBlock(241,"light_pole",[["stained_clay",15]],4,false);
Block.setShape(241,0.375,0,0.375,0.625,1,0.625);
Block.setLightOpacity(241,0);

function newLevel(){
	var out=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/DecoLights_Mod_Update_Checker_V2.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
}

function useItem(x,y,z,itemId,blockId,side){
	if(itemId == 351){
		if(blockId == 237 || blockId == 232 || blockId == 233 || blockId == 234 || blockId == 235 || blockId == 250){
			theColor = 15-Player.getCarriedItemData();
			setTile(x,y,z,blockId,theColor);
		}
	}
	else if(itemId == light4){
		preventDefault();
		if(side == 1){
			if(Player.getCarriedItemCount() > 1)
				Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,Player.getCarriedItemData());
			else Player.clearInventorySlot(Player.getSelectedSlotId());
			
			Level.setTile(x,y+1,z,241);
			Level.setTile(x,y+2,z,241);
			Level.setTile(x,y+3,z,250);
			Level.setTile(x,y+4,z,251);
		}
	}
	else if(itemId == light3){
		preventDefault();
		if(side == 2 || side == 3 || side == 4 || side == 5){
			if(Player.getCarriedItemCount() > 1)
				Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,Player.getCarriedItemData());
			else Player.clearInventorySlot(Player.getSelectedSlotId());
			
			if(side == 2){
				Level.setTile(x,y,z-1,241);
				Level.setTile(x,y+1,z-1,241);
				Level.setTile(x,y+2,z-1,241);
				Level.setTile(x,y+3,z-1,232);
			}else if(side == 3){
				Level.setTile(x,y,z+1,241);
				Level.setTile(x,y+1,z+1,241);
				Level.setTile(x,y+2,z+1,241);
				Level.setTile(x,y+3,z+1,233);
			}else if(side == 4){
				Level.setTile(x-1,y,z,241);
				Level.setTile(x-1,y+1,z,241);
				Level.setTile(x-1,y+2,z,241);
				Level.setTile(x-1,y+3,z,234);
			}else if(side == 5){
				Level.setTile(x+1,y,z,241);
				Level.setTile(x+1,y+1,z,241);
				Level.setTile(x+1,y+2,z,241);
				Level.setTile(x+1,y+3,z,235);
			}
		}
	}
	else if(itemId == light2){
		preventDefault();
		if(side == 0){
			if(Player.getCarriedItemCount() > 1)
				Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,Player.getCarriedItemData());
			else Player.clearInventorySlot(Player.getSelectedSlotId());
			
			Level.setTile(x,y-1,z,237);
		}
	}
	else if(itemId == light1){
		preventDefault();
		if(Player.getCarriedItemCount() > 1)
			Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,Player.getCarriedItemData());
		else Player.clearInventorySlot(Player.getSelectedSlotId());
		
		if(side == 2){
			Level.setTile(x,y,z-1,250);
			Level.setTile(x,y+1,z-1,251);
			Level.setTile(x,y-1,z-1,252);
		}else if(side == 3){
			Level.setTile(x,y,z+1,250);
			Level.setTile(x,y+1,z+1,251);
			Level.setTile(x,y-1,z+1,253);
		}else if(side == 4){
			Level.setTile(x-1,y,z,250);
			Level.setTile(x-1,y+1,z,251);
			Level.setTile(x-1,y-1,z,254);
		}else if(side == 5){
			Level.setTile(x+1,y,z,250);
			Level.setTile(x+1,y+1,z,251);
			Level.setTile(x+1,y-1,z,242);
		}else if(side == 1){
			Level.setTile(x,y+1,z,241);
			Level.setTile(x,y+2,z,250);
			Level.setTile(x,y+3,z,251);
		}else if(side == 0){
			Level.setTile(x,y-1,z,241);
			Level.setTile(x,y-2,z,250);
			Level.setTile(x,y-3,z,240);
		}
	}
}

function destroyBlock(x,y,z){
	id = getTile(x,y,z);
	if(id == 250){
		preventDefault();
		setTile(x,y,z,0);
		setTile(x,y-1,z,0);
		setTile(x,y+1,z,0);
		if(getTile(x,y-2,z) == 241){
			setTile(x,y-2,z,0);
			Level.dropItem(x,y,z,0.5,light4,1,0);
		} 
		else{
			Level.dropItem(x,y,z,0.5,light1,1,0);			
		}
	}else if(id == 252 || id == 253 || id == 254 || id == 240 || id == 242){
		preventDefault();
		setTile(x,y,z,0);
		setTile(x,y+1,z,0);
		setTile(x,y+2,z,0);
		Level.dropItem(x,y+1,z,0.5,light1,1,0);
	}else if(id == 251){
		preventDefault();
		setTile(x,y,z,0);
		setTile(x,y-1,z,0);
		setTile(x,y-2,z,0);
		if(getTile(x,y-3,z) == 241){
			setTile(x,y-3,z,0);
			Level.dropItem(x,y-1,z,0.5,light4,1,0);
		} 
		else{
			Level.dropItem(x,y-1,z,0.5,light1,1,0);			
		}
	}else if(id == 241){
		preventDefault();
		if(getTile(x,y+1,z) == 250){
			setTile(x,y,z,0);
			setTile(x,y+1,z,0);
			setTile(x,y+2,z,0);
			if(getTile(x,y-1,z) == 241 && getTile(x,y+1,z) != 241){
				setTile(x,y-1,z,0);
				Level.dropItem(x,y+1,z,0.5,light4,1,0);
			}
			else{
				Level.dropItem(x,y+1,z,0.5,light1,1,0);
			}
		}else if(getTile(x,y-1,z) == 250){
			setTile(x,y,z,0);
			setTile(x,y-1,z,0);
			setTile(x,y-2,z,0);
			Level.dropItem(x,y-1,z,0.5,light1,1,0);
		}else if(getTile(x,y+1,z) == 241 && getTile(x,y+2,z) == 250){
			setTile(x,y,z,0);
			setTile(x,y+1,z,0);
			setTile(x,y+2,z,0);
			setTile(x,y+3,z,0);
			Level.dropItem(x,y+2,z,0.5,light4,1,0);
		}else if(getTile(x,y+1,z) == 241 && getTile(x,y+2,z) == 241){
			setTile(x,y,z,0);
			setTile(x,y+1,z,0);
			setTile(x,y+2,z,0);
			setTile(x,y+3,z,0);
			Level.dropItem(x,y+2,z,0.5,light3,1,0);
		}else if(getTile(x,y+1,z) == 241 && getTile(x,y-1,z) == 241){
			setTile(x,y-1,z,0);
			setTile(x,y,z,0);
			setTile(x,y+1,z,0);
			setTile(x,y+2,z,0);
			Level.dropItem(x,y+1,z,0.5,light3,1,0);
		}else if(getTile(x,y-1,z) == 241 && getTile(x,y-2,z) == 241){
			setTile(x,y-2,z,0);
			setTile(x,y-1,z,0);
			setTile(x,y,z,0);
			setTile(x,y+1,z,0);
			Level.dropItem(x,y+1,z,0.5,light3,1,0);
		}
	}else if(id == 232 || id == 233 || id == 234 || id == 235){
			setTile(x,y-3,z,0);
			setTile(x,y-2,z,0);
			setTile(x,y-1,z,0);
			setTile(x,y,z,0);
			Level.dropItem(x,y-1,z,0.5,light3,1,0);		
	}
	
	else if(id == 237){
		preventDefault();
		setTile(x,y,z,0);
		Level.dropItem(x,y,z,0.5,light2,1,0);
	}
}










