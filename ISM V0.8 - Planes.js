//Instant Structure Mod V0.8.1 - Planes
//By wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github or Dropbox link without permission. Instead, use the adf.ly link.

var structureSelectorId = 500
var structureBuilderId = 505
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var structure
var firstStructure

ModPE.setItem(structureSelectorId,"dye_powder",10,"Structure Selector - Planes")
ModPE.setItem(structureBuilderId,"dye_powder",9,"Structure Builder")
Player.addItemCreativeInv(structureSelectorId,1,0)
Player.addItemCreativeInv(structureBuilderId,1,0)

//Check for updates
function newLevel(){
	try{
		var out=new java.io.ByteArrayOutputStream();
		var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/ISM_V0.8_update_checker.txt")).getEntity().writeTo(out);
		out.close();
		clientMessage(String(out.toString()))
	}
	catch(e){
		clientMessage("[ISM] Failed update check: no internet connection.")
	}
}

//Check for an item being used
function useItem(x,y,z,itemId,blockId,side){
	if(itemId == structureSelectorId){
		planesGUI()
	}
	if(itemId == structureBuilderId){
		if(firstStructure == null && structure != null){
			var X=[x]
			var X2=[x]
			var Y=[y]
			var Y2=[y]
			var Z=[z]
			var Z2=[z]
			var I=[getTile(x,y,z)]
			var D=[Level.getData(x,y,z)]
			for(n=0;n<1+1;n++){
				setTile(X[n], Y[n], Z[n], 2);
			}
			setTile(X2[0],Y2[0],Z2[0],I[0],D[0])
			firstStructure = 1
		}
		if(structure == null) clientMessage("Please select a structure using the Structure Selector")
		else if(structure == 1) smallRewardTreeGUI(x,y,z)
		else if(structure == 2) treeHouseGUI(x,y,z)
		else if(structure == 3) parkGUI(x,y,z)
		else if(structure == 4) cobbleGenGUI(x,y,z)
		else if(structure == 5) smallHouseGUI(x,y,z)
		else if(structure == 6) mansionGUI(x,y,z)
		else if(structure == 7) houseGUI(x,y,z)
		else if(structure == 8) bigRewardTreeGUI(x,y,z)
		else if(structure == 9) poorMensHouseGUI(x,y,z)
		else if(structure == 10) volcanoGUI(x,y,z)
		else if(structure == 11) ruinsGUI(x,y,z)
		else if(structure == 12) blackSportsCarGUI(x,y,z)
		else if(structure == 13) blueSportsCarGUI(x,y,z)
		else if(structure == 14) graySportsCarGUI(x,y,z)
		else if(structure == 15) orangeSportsCarGUI(x,y,z)
		else if(structure == 16) whiteSportsCarGUI(x,y,z)
		else if(structure == 17) blueTruckGUI(x,y,z)
		else if(structure == 18) diamondTruckGUI(x,y,z)
		else if(structure == 19) ironTruckGUI(x,y,z)
		else if(structure == 20) oldTruckGUI(x,y,z)
		else if(structure == 21) redTruckGUI(x,y,z)
		else if(structure == 22) bigTruckGUI(x,y,z)
		else if(structure == 23) forkliftGUI(x,y,z)
		else if(structure == 24) jeepGUI(x,y,z)
		else if(structure == 25) militaryTruckGUI(x,y,z)
		else if(structure == 26) duneBuggyGUI(x,y,z)
		else if(structure == 27) redCarGUI(x,y,z)
		else if(structure == 28) fighterJetGUI(x,y,z)
		else if(structure == 29) oldPlaneGUI(x,y,z)
		else if(structure == 30) oldWoodenPlaneGUI(x,y,z)
		else if(structure == 31) parachuteJumperPlaneGUI(x,y,z)
		else if(structure == 32) beanStalkGUI(x,y,z)
		else if(structure == 33) wellGUI(x,y,z)
		else if(structure == 34) furnaceRoomGUI(x,y,z)
		else if(structure == 35) sandstoneTempleGUI(x,y,z)
		else if(structure == 36) birthdayCakeGUI(x,y,z)
		else if(structure == 37) noobsHouseGUI(x,y,z)
		else if(structure == 38) swampGUI(x,y,z)
		else if(structure == 39) a10GUI(x,y,z)
		else if(structure == 40) cityTankGUI(x,y,z)
		else if(structure == 41) militaryHaulerGUI(x,y,z)
		else if(structure == 42) parachuteJumperHelicopterGUI(x,y,z)
		else if(structure == 43) passengerPlaneGUI(x,y,z)
		else if(structure == 44) redBusGUI(x,y,z)
		else if(structure == 45) scoutHelicopterGUI(x,y,z)
		else if(structure == 46) x15GUI(x,y,z)
		else if(structure == 47) bigMilitaryTankGUI(x,y,z)
		else if(structure == 48) cakeGUI(x,y,z)
		else if(structure == 49) chickenGUI(x,y,z)
		else if(structure == 50) creeperHeadStatueGUI(x,y,z)
		else if(structure == 51) house2GUI(x,y,z)
		else if(structure == 52) bigMushroomGUI(x,y,z)
		else if(structure == 53) pvpArenaGUI(x,y,z)
		else if(structure == 54) mysteriousMerchantHouseGUI(x,y,z)
		else if(structure == 55) sixBarreledTankGUI(x,y,z)
		else if(structure == 56) blackbirdGUI(x,y,z)
		else if(structure == 57) submersibleGUI(x,y,z)
		else if(structure == 58) swingWingPlaneGUI(x,y,z)
		else if(structure == 59) tankWithTwoGunsGUI(x,y,z)
		else if(structure == 60) grayHumveeGUI(x,y,z)
		else if(structure == 61) helicopterGUI(x,y,z)
		else if(structure == 62) humveeGUI(x,y,z)
		else if(structure == 63) humveeWithMachineGunGUI(x,y,z)
		else if(structure == 64) humveeWithTrailerGUI(x,y,z)
		else if(structure == 65) militaryPersonnelCarrierGUI(x,y,z)
		else if(structure == 66) smallMilitaryHaulerGUI(x,y,z)
		else if(structure == 67) tourBusGUI(x,y,z)
 	}
}

function planesGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Select a plane")
				var  FighterJet = new android.widget.Button(ctx); 
				FighterJet.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 28
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				FighterJet.setText("Fighter Jet - Ender_Pe")
				FighterJet.setTextSize(textsize)
				menu.addView(FighterJet);
				
				var  A10 = new android.widget.Button(ctx); 
				A10.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 39
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				A10.setText("A10 Warthog - Ender_Pe")
				A10.setTextSize(textsize)
				menu.addView(A10);
				
				var  X15 = new android.widget.Button(ctx); 
				X15.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 46
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				X15.setText("X15 - Ender_Pe")
				X15.setTextSize(textsize)
				menu.addView(X15);
				
				var  Blackbird = new android.widget.Button(ctx); 
				Blackbird.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 56
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Blackbird.setText("Blackbird - Ender_Pe")
				Blackbird.setTextSize(textsize)
				menu.addView(Blackbird);
				
				var  SwingWingPlane = new android.widget.Button(ctx); 
				SwingWingPlane.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 58
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SwingWingPlane.setText("Swing Wing Plane - Ender_Pe")
				SwingWingPlane.setTextSize(textsize)
				menu.addView(SwingWingPlane);
				
				var  OldPlane = new android.widget.Button(ctx); 
				OldPlane.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 29
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				OldPlane.setText("Old Plane - Ender_Pe")
				OldPlane.setTextSize(textsize)
				menu.addView(OldPlane);
				
				var  OldWoodenPlane = new android.widget.Button(ctx); 
				OldWoodenPlane.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 30
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				OldWoodenPlane.setText("Old Wooden Plane - Ender_Pe")
				OldWoodenPlane.setTextSize(textsize)
				menu.addView(OldWoodenPlane);
				
				var  PassengerPlane = new android.widget.Button(ctx); 
				PassengerPlane.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 43
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				PassengerPlane.setText("Passenger Plane - Ender_Pe")
				PassengerPlane.setTextSize(textsize)
				menu.addView(PassengerPlane);
				
				var  ParachuteJumperPlane = new android.widget.Button(ctx); 
				ParachuteJumperPlane.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 31
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ParachuteJumperPlane.setText("Parachute Jumper Plane - Ender_Pe")
				ParachuteJumperPlane.setTextSize(textsize)
				menu.addView(ParachuteJumperPlane);
				
				var  ParachuteJumperHelicopter = new android.widget.Button(ctx); 
				ParachuteJumperHelicopter.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 42
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ParachuteJumperHelicopter.setText("Parachute Jumper Helicopter - Ender_Pe")
				ParachuteJumperHelicopter.setTextSize(textsize)
				menu.addView(ParachuteJumperHelicopter);
				
				var  ScoutHelicopter = new android.widget.Button(ctx); 
				ScoutHelicopter.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 45
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				ScoutHelicopter.setText("Scout Helicopter - Ender_Pe")
				ScoutHelicopter.setTextSize(textsize)
				menu.addView(ScoutHelicopter);
				
				var  Helicopter = new android.widget.Button(ctx); 
				Helicopter.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 61
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Helicopter.setText("Helicopter - Ender_Pe")
				Helicopter.setTextSize(textsize)
				menu.addView(Helicopter);
				
				}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function fighterJetGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Fighter Jet in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Fighter Jet to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Fighter Jet behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Fighter Jet to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Fighter Jet in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							fighterJet(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function fighterJet(x,y,z){
	var X=[x-7,x-7,x-7,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+7,x+7,x+7];
	var Y=[y+1,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+4,y+1,y+2,y+4,y+2,y+4,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+2,y+2,y+3,y+2,y+3,y+4,y+2,y+2,y+2,y+1,y+2,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+2,y+2,y+3,y+2,y+3,y+4,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+4,y+1,y+2,y+4,y+2,y+4,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+2,y+4];
	var Z=[z,z+11,z+12,z+10,z+11,z+12,z+9,z+10,z+11,z+12,z+13,z+8,z+9,z+10,z+11,z+12,z+13,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+17,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+17,z+18,z+18,z+18,z+19,z,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+18,z+18,z+19,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+15,z+16,z+17,z+17,z+18,z+18,z+18,z+19,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+17,z+8,z+9,z+10,z+11,z+12,z+13,z+9,z+10,z+11,z+12,z+13,z+10,z+11,z+12,z+11,z+12,z+19];
	var I=[0,44,159,44,159,159,44,159,159,159,159,44,159,159,159,159,159,44,159,159,159,159,159,159,159,96,43,43,159,159,159,159,159,159,159,159,43,173,159,159,159,159,44,43,159,159,159,159,159,159,44,159,44,159,44,159,44,159,44,159,44,159,159,159,43,159,43,44,159,44,159,173,159,159,20,159,20,159,20,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,44,43,159,159,159,159,159,159,44,159,44,159,44,159,44,159,44,159,44,159,159,159,43,159,43,44,159,96,43,43,159,159,159,159,159,159,159,159,43,173,159,159,159,159,44,159,159,159,159,159,159,159,44,159,159,159,159,159,44,159,159,159,159,44,159,159,44,159,0];
	var D=[0,0,9,0,9,9,0,9,9,9,9,0,9,9,9,9,9,0,9,9,9,9,9,9,9,4,0,0,9,9,9,9,9,9,9,9,0,0,9,9,9,9,0,0,9,9,9,9,9,9,0,9,0,9,0,9,0,9,0,9,0,9,9,9,0,9,0,0,9,0,9,0,9,9,0,9,0,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,9,9,9,9,9,9,0,9,0,9,0,9,0,9,0,9,0,9,9,9,0,9,0,0,9,4,0,0,9,9,9,9,9,9,9,9,0,0,9,9,9,9,0,9,9,9,9,9,9,9,0,9,9,9,9,9,0,9,9,9,9,0,9,9,0,9,0];
	for(n=0;n<1200+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldPlaneGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place an Old Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place an Old Plane to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place an Old Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place an Old Plane to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place an Old Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							oldPlane(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function oldPlane(x,y,z){
	var X=[x-9,x-9,x-9,x-9,x-8,x-8,x-8,x-7,x-7,x-7,x-6,x-6,x-6,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+6,x+6,x+6,x+7,x+7,x+7,x+8,x+8,x+8,x+9,x+9,x+9,x+9];
	var Y=[y+2,y+3,y+2,y+6,y+2,y+2,y+2,y+2,y+3,y+2,y+2,y+3,y+2,y+2,y+3,y+2,y+2,y+2,y+2,y+2,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+3,y+4,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+2,y+2,y+2,y+4,y+4,y+4,y+2,y+2,y+2,y+2,y+4,y+2,y+3,y+2,y+2,y+3,y+2,y+2,y+3,y+2,y+2,y+2,y+2,y+1,y+2,y+3,y+2];
	var Z=[z+6,z+6,z+7,z+15,z+5,z+6,z+7,z+5,z+6,z+7,z+5,z+6,z+7,z+5,z+6,z+7,z+5,z+6,z+7,z+8,z+14,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+1,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+5,z+6,z+7,z+8,z+13,z+14,z+15,z+5,z+6,z+7,z+8,z+14,z+5,z+6,z+7,z+5,z+6,z+7,z+5,z+6,z+7,z+5,z+6,z+7,z+1,z+6,z+6,z+7];
	var I=[44,171,44,0,44,44,44,44,44,44,44,44,44,44,44,44,44,43,44,44,44,44,43,44,44,44,44,44,44,43,44,44,44,44,44,43,43,43,43,44,44,44,139,173,139,155,44,155,155,44,173,155,155,44,155,155,20,155,155,20,155,155,20,155,155,44,155,155,44,155,155,44,173,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,43,43,43,43,44,44,44,44,43,44,44,44,44,44,44,43,44,44,44,44,44,44,43,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,0,44,171,44];
	var D=[8,14,8,0,8,8,8,8,0,8,8,0,8,8,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,8,8,0,0,0,0,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,8,8,0,0,0,0,0,0,8,0,0,0,0,0,8,0,8,8,0,8,8,0,8,8,8,8,0,8,14,8];
	for(n=0;n<1710+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldWoodenPlaneGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place an Old Wooden Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place an Old Wooden Plane to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place an Old Wooden Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place an Old Wooden Plane to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place an Old Wooden Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							oldWoodenPlane(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function oldWoodenPlane(x,y,z){
	var X=[x-9,x-9,x-8,x-7,x-7,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+7,x+7,x+8,x+9,x+9];
	var Y=[y+3,y+6,y+3,y+3,y+3,y+3,y+3,y+2,y+3,y+4,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+3,y+3,y+3,y+3,y+4,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+4,y+4,y+3,y+2,y+3,y+4,y+1,y+2,y+3,y+2,y+3,y+4,y+2,y+3,y+2,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+4,y+4,y+3,y+3,y+3,y+3,y+4,y+4,y+3,y+3,y+3,y+3,y+4,y+3,y+3,y+3,y+2,y+3,y+4,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+1,y+3];
	var Z=[z+7,z+13,z+7,z+6,z+7,z+6,z+7,z+4,z+4,z+4,z+5,z+6,z+7,z+5,z+6,z+7,z+4,z+5,z+6,z+7,z+13,z+4,z+5,z+6,z+7,z+12,z+13,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+12,z+13,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+12,z+13,z+4,z+5,z+6,z+7,z+12,z+13,z+4,z+5,z+6,z+7,z+13,z+5,z+6,z+7,z+4,z+4,z+4,z+5,z+6,z+7,z+6,z+7,z+6,z+7,z+7,z,z+7];
	var I=[158,0,158,158,5,158,5,139,173,139,5,5,5,158,5,5,158,5,5,158,158,158,5,5,158,158,158,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,158,158,5,53,5,53,173,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,173,5,5,5,5,5,5,53,53,5,5,5,158,5,5,5,53,5,5,5,5,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,53,5,53,158,158,158,5,5,158,158,158,158,5,5,158,158,158,5,5,139,173,139,5,5,5,158,5,158,5,158,0,158];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,4,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4,0,0,4,0,0,7,0,3,0,0,0,6,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,7,0,0,0,8,0,0,0,2,0,0,0,0,6,0,2,5,0,1,5,0,1,5,0,1,5,0,1,5,0,1,5,0,1,5,0,1,5,0,1,7,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<1596+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function parachuteJumperPlaneGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place an Old Wooden Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place an Old Wooden Plane to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place an Old Wooden Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place an Old Wooden Plane to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place an Old Wooden Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							parachuteJumperPlane(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function parachuteJumperPlane(x,y,z){
	var X=[x-12,x-12,x-12,x-11,x-11,x-10,x-10,x-10,x-9,x-9,x-9,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+9,x+9,x+9,x+10,x+10,x+10,x+11,x+11,x+12,x+12,x+12];
	var Y=[y+3,y+3,y+1,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+6,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+5,y+6,y+2,y+3,y+1,y+2,y+3,y+2,y+3,y+3,y+2,y+2,y+3,y+3,y+3,y+3,y+5,y+4,y+5,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+4,y+5,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+5,y+4,y+5,y+3,y+4,y+5,y+2,y+3,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+1,y+2,y+3,y+5,y+2,y+3,y+4,y+5,y+3,y+5,y+4,y+5,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+4,y+5,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+5,y+6,y+2,y+3,y+1,y+2,y+3,y+2,y+3,y+3,y+2,y+2,y+3,y+3,y+3,y+3,y+6,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+4,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+6,y+3,y+3];
	var Z=[z-10,z-9,z,z-10,z-9,z-10,z-9,z-8,z-10,z-9,z-8,z-10,z-9,z-8,z-10,z-9,z-8,z-7,z-16,z-15,z-10,z-9,z-8,z-7,z-17,z-16,z-15,z-10,z-9,z-8,z-7,z-17,z-16,z-15,z-14,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-20,z-17,z-16,z-15,z-14,z-10,z-9,z-8,z-7,z-20,z-20,z-17,z-17,z-16,z-16,z-16,z-15,z-15,z-14,z-13,z-12,z-10,z-9,z-8,z-7,z-20,z-19,z-19,z-18,z-18,z-18,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-20,z-19,z-19,z-18,z-18,z-18,z-17,z-17,z-17,z-16,z-16,z-15,z-15,z-14,z-14,z-13,z-13,z-12,z-12,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z-20,z-19,z-19,z-18,z-18,z-18,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-20,z-20,z-17,z-17,z-16,z-16,z-16,z-15,z-15,z-14,z-13,z-12,z-10,z-9,z-8,z-7,z-20,z-17,z-16,z-15,z-14,z-10,z-9,z-8,z-7,z-17,z-16,z-15,z-14,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-17,z-16,z-15,z-10,z-9,z-8,z-7,z-16,z-15,z-10,z-9,z-8,z-7,z-10,z-9,z-8,z-7,z-10,z-9,z-8,z-10,z-9,z-8,z-10,z-9,z-8,z-10,z-9,z-20,z-10,z-9];
	var I=[159,44,0,159,44,159,159,44,159,159,44,159,159,44,159,159,159,44,159,44,159,159,159,44,159,159,44,44,159,159,44,159,159,159,44,1,171,1,171,1,171,1,171,96,159,159,159,159,44,44,159,159,44,159,159,159,159,173,159,159,159,159,44,65,65,44,159,159,44,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,50,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,20,159,159,159,159,159,159,159,159,159,159,159,20,159,159,159,159,159,159,159,159,159,159,20,44,159,159,159,159,159,159,159,54,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,173,159,50,159,159,159,20,44,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,50,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,20,159,159,159,159,159,159,159,159,159,159,159,20,159,159,159,159,159,159,159,159,159,159,20,44,159,159,159,159,173,159,159,159,159,44,65,65,44,159,159,44,159,159,159,159,44,44,159,159,44,159,159,159,44,1,171,1,171,1,171,1,171,96,159,159,44,44,159,159,44,159,44,159,159,159,44,159,159,159,44,159,159,44,159,159,44,159,159,44,159,44,0,159,44];
	var D=[13,0,0,5,0,5,13,0,5,5,0,5,13,0,13,5,13,0,5,0,13,5,5,0,13,13,0,0,13,5,0,13,13,5,0,6,13,6,13,6,13,6,13,5,5,5,13,13,0,0,13,5,0,13,13,13,13,0,13,5,13,5,0,4,4,0,13,13,0,13,5,5,5,13,5,13,13,13,5,13,13,13,13,13,5,13,13,13,5,5,13,5,3,5,13,13,13,13,13,5,13,13,5,5,13,13,13,13,13,13,0,13,5,13,13,13,5,13,13,13,13,13,0,5,13,5,5,13,5,5,13,13,13,0,0,5,13,5,5,13,13,13,3,5,13,13,13,5,5,13,5,5,13,13,5,13,5,13,13,5,13,13,13,13,5,5,5,5,5,13,13,5,0,13,4,13,13,5,0,0,13,5,13,13,13,13,13,5,13,13,5,13,13,5,5,13,5,5,13,13,13,13,13,13,3,5,13,5,13,13,13,5,13,13,5,5,13,13,13,13,13,13,0,5,13,13,13,13,13,5,5,13,5,13,0,13,13,5,13,5,13,13,13,13,5,0,0,13,13,13,13,0,13,5,13,13,0,5,5,0,5,13,0,13,13,13,13,0,0,13,5,0,5,5,13,0,6,13,6,13,6,13,6,13,5,13,5,0,0,5,13,0,13,0,13,5,13,0,5,5,13,0,5,13,0,5,13,0,13,5,0,13,0,0,13,0];
	for(n=0;n<3150+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function a10GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place an A10 Warthog behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place an A10 Warthog to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place an A10 Warthog in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place an A10 Warthog to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place an A10 Warthog behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							a10(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function a10(x,y,z){
	var X=[x-7,x-7,x-7,x-6,x-6,x-5,x-5,x-5,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+5,x+5,x+5,x+6,x+6,x+7,x+7,x+7];
	var Y=[y+3,y+3,y+1,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+5,y+6,y+5,y+6,y+3,y+3,y+3,y+3,y+4,y+4,y+4,y+4,y+4,y+3,y+3,y+3,y+3,y+3,y+4,y+4,y+3,y+4,y+1,y+2,y+3,y+3,y+3,y+5,y+3,y+4,y+5,y+3,y+5,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+4,y+2,y+4,y+2,y+4,y+2,y+3,y+3,y+3,y+3,y+4,y+4,y+3,y+4,y+1,y+2,y+3,y+3,y+3,y+5,y+3,y+4,y+5,y+3,y+5,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+4,y+4,y+4,y+4,y+4,y+3,y+3,y+3,y+3,y+3,y+4,y+5,y+6,y+5,y+6,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+6,y+3,y+3];
	var Z=[z-11,z-10,z,z-11,z-10,z-11,z-10,z-9,z-11,z-10,z-9,z-20,z-20,z-20,z-19,z-19,z-11,z-10,z-9,z-8,z-20,z-19,z-15,z-14,z-13,z-11,z-10,z-9,z-8,z-5,z-20,z-19,z-18,z-18,z-17,z-17,z-17,z-16,z-15,z-15,z-14,z-14,z-14,z-13,z-13,z-12,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-3,z-20,z-19,z-19,z-18,z-18,z-18,z-17,z-17,z-17,z-16,z-16,z-16,z-15,z-15,z-15,z-14,z-14,z-14,z-13,z-13,z-13,z-12,z-12,z-11,z-11,z-11,z-10,z-10,z-10,z-9,z-9,z-9,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-1,z,z-20,z-19,z-18,z-18,z-17,z-17,z-17,z-16,z-15,z-15,z-14,z-14,z-14,z-13,z-13,z-12,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-3,z-20,z-19,z-15,z-14,z-13,z-11,z-10,z-9,z-8,z-5,z-20,z-20,z-20,z-19,z-19,z-11,z-10,z-9,z-8,z-11,z-10,z-9,z-11,z-10,z-9,z-11,z-10,z-20,z-11,z-10];
	var I=[159,44,0,159,44,159,159,44,159,159,44,159,159,44,159,44,159,159,159,44,159,159,159,159,159,159,159,159,44,44,159,159,159,44,173,44,159,159,159,159,159,1,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,1,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,173,159,159,159,159,20,159,20,159,20,159,159,159,139,139,159,159,159,44,173,44,159,159,159,159,159,1,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,44,44,159,159,44,159,44,159,159,159,44,159,159,44,159,159,44,159,44,0,159,44];
	var D=[13,0,6,5,0,5,5,0,13,13,0,13,13,0,13,0,13,5,13,0,5,5,5,5,13,13,5,13,0,0,5,13,13,0,0,0,5,5,13,13,5,6,13,13,5,13,5,13,13,13,13,5,5,13,13,13,5,5,5,6,13,13,13,13,13,13,5,5,13,13,5,13,5,13,13,5,13,13,5,13,13,5,13,13,5,13,13,13,13,5,0,13,13,13,5,0,5,0,13,0,13,5,13,0,0,13,5,13,0,0,0,13,5,13,13,13,6,5,13,13,5,5,13,13,13,5,13,13,5,5,13,13,13,13,5,5,5,13,0,0,5,13,0,5,0,13,13,13,0,5,13,0,5,13,0,13,0,6,13,0];
	for(n=0;n<1890+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function parachuteJumperHelicopterGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Parachute Jumper Helicopter in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Parachute Jumper Helicopter to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Parachute Jumper Helicopter behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Parachute Jumper Helicopter to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Parachute Jumper Helicopter in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							parachuteJumperHelicopter(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function parachuteJumperHelicopter(x,y,z){
	var X=[x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7];
	var Y=[y+1,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+3,y+4,y+3,y+4,y+1,y+2,y+3,y+4,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+7,y+3,y+6,y+7,y+3,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+4,y+5,y+6,y+5,y+6,y+5,y+5,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+6,y+7,y+2,y+3,y+6,y+7,y+2,y+3,y+4,y+6,y+7,y+2,y+3,y+6,y+7,y+2,y+3,y+4,y+6,y+2,y+3,y+6,y+3,y+4,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+4,y+4,y+6,y+7,y+2,y+5,y+6,y+5,y+4,y+5,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+6,y+2,y+3,y+4,y+6,y+2,y+3,y+6,y+2,y+3,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+6,y+2,y+3,y+6,y+7,y+2,y+3,y+6,y+7,y+2,y+3,y+6,y+7,y+2,y+3,y+6,y+2,y+3,y+6,y+2,y+3,y+6,y+2,y+3,y+4,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+6,y+1,y+2,y+3,y+4,y+5,y+6,y+4,y+5,y+6,y+7,y+5,y+6,y+7,y+8,y+6,y+7,y+8,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+6,y+2,y+3,y+6,y+7,y+2,y+3,y+4,y+6,y+7,y+2,y+3,y+6,y+7,y+2,y+3,y+4,y+6,y+7,y+2,y+3,y+6,y+3,y+4,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+4,y+4,y+2,y+4,y+4,y+3,y+4,y+3,y+4,y+1,y+2,y+3,y+4,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+3,y+6,y+7,y+3,y+6,y+7,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+7,y+4,y+5,y+6,y+5,y+6,y+5,y+5,y+4,y+4,y+7,y+7,y+7,y+7,y+4,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+7,y+8];
	var Z=[z,z+2,z+15,z+16,z+2,z+3,z+14,z+15,z+3,z+4,z+13,z+14,z+4,z+5,z+12,z+13,z+5,z+6,z+11,z+12,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+23,z+25,z+25,z+26,z+26,z+26,z+27,z+28,z+28,z+29,z+29,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+20,z+20,z+21,z+21,z+21,z+22,z+22,z+22,z+23,z+23,z+23,z+24,z+24,z+24,z+25,z+25,z+25,z+25,z+25,z+26,z+26,z+26,z+26,z+26,z+26,z+27,z+27,z+27,z+27,z+28,z+28,z+28,z+28,z+29,z+29,z+29,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+17,z+23,z+26,z+26,z+27,z+1,z+1,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+15,z+16,z+26,z+27,z+6,z+7,z+12,z+13,z+27,z+5,z+6,z+13,z+14,z+4,z+5,z+14,z+15,z+3,z+4,z+15,z+16,z+2,z+3,z+16,z+29];
	var I=[0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,24,128,24,128,173,44,24,128,24,24,128,24,24,128,24,24,24,44,44,24,44,44,24,44,24,24,24,44,24,24,20,44,44,24,24,24,44,44,24,24,44,24,24,44,24,44,24,101,44,24,128,128,24,128,24,24,128,20,44,24,24,128,20,44,24,24,128,24,44,24,24,114,44,24,24,24,24,44,24,24,44,44,24,24,44,128,24,24,114,24,128,24,24,44,128,24,24,114,44,24,24,44,24,114,44,24,24,24,44,24,24,24,44,24,24,1,24,44,109,109,44,109,109,1,109,109,109,109,44,24,128,24,24,128,20,44,24,24,44,24,24,114,44,24,24,44,24,24,44,24,24,71,71,44,24,24,44,24,24,24,128,24,24,24,1,24,24,24,128,24,24,44,24,24,44,24,24,44,24,24,114,44,24,24,24,44,24,24,24,44,24,24,24,24,24,24,128,24,24,44,24,24,44,24,24,44,24,128,44,24,44,128,24,128,128,24,24,24,44,173,24,128,24,24,128,24,24,24,128,24,24,24,128,24,24,24,44,24,128,128,24,128,24,24,128,20,44,24,24,128,20,44,24,24,128,24,44,24,24,114,44,24,24,24,24,44,24,24,44,24,24,44,128,24,24,114,24,128,24,24,44,128,24,24,114,44,44,24,24,44,24,114,44,24,24,24,44,24,24,24,44,24,24,1,24,44,44,44,44,24,128,24,128,173,44,24,128,24,24,128,24,24,128,24,24,24,44,24,44,44,24,44,44,24,24,24,44,24,24,20,44,24,24,24,44,44,24,24,44,44,24,24,44,24,44,24,101,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,0];
	var D=[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,0,0,0,2,0,2,2,2,2,2,0,2,2,2,1,8,2,1,8,2,1,2,2,2,1,2,2,0,1,8,2,2,2,1,8,2,2,1,2,2,1,2,1,2,0,9,2,2,4,2,0,2,2,7,0,1,2,2,5,0,1,2,2,7,2,1,2,2,1,1,2,2,2,2,1,2,2,1,8,2,2,1,4,2,2,2,2,4,2,2,1,4,2,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,2,1,2,2,6,2,8,6,3,0,6,3,6,6,3,6,3,9,2,2,2,2,7,0,1,2,2,1,2,2,2,1,2,2,1,2,2,1,2,2,3,8,1,2,2,1,2,2,2,6,2,2,2,6,2,2,2,7,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,7,2,2,9,2,2,9,2,2,9,2,3,9,2,1,6,2,2,6,2,2,2,1,0,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,5,2,1,2,2,7,0,1,2,2,4,0,1,2,2,7,2,1,2,2,0,1,2,2,2,2,1,2,2,1,2,2,1,5,2,2,2,2,5,2,2,1,5,2,2,2,1,8,2,2,1,2,2,1,2,2,2,1,2,2,2,1,2,2,6,2,8,0,8,8,2,2,2,1,0,0,2,1,2,2,2,2,2,1,2,2,2,1,2,1,8,2,1,8,2,2,2,1,2,2,0,1,2,2,2,1,8,2,2,1,8,2,2,1,2,1,2,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6];
	for(n=0;n<3600+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function passengerPlaneGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Passenger Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Passenger Plane to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Passenger Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Passenger Plane to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Passenger Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							passengerPlane(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function passengerPlane(x,y,z){
	var X=[x-10,x-9,x-8,x-8,x-7,x-7,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+7,x+7,x+8,x+8,x+9,x+9];
	var Y=[y+8,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+5,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+5,y+6,y+4,y+5,y+6,y+4,y+5,y+6,y+1,y+2,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+4,y+5,y+6,y+5,y+6,y+7,y+8,y+4,y+5,y+6,y+7,y+8,y+4,y+5,y+6,y+7,y+8,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+6,y+3,y+6,y+3,y+4,y+6,y+3,y+6,y+3,y+6,y+3,y+4,y+6,y+3,y+6,y+3,y+6,y+3,y+4,y+6,y+3,y+6,y+3,y+6,y+3,y+4,y+6,y+1,y+2,y+3,y+6,y+3,y+6,y+3,y+6,y+3,y+6,y+3,y+4,y+6,y+3,y+6,y+3,y+4,y+5,y+6,y+4,y+5,y+6,y+4,y+5,y+6,y+4,y+5,y+6,y+1,y+2,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+4,y+5,y+6,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+5,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+1];
	var Z=[z-25,z-11,z-11,z-10,z-11,z-10,z-11,z-10,z-9,z-20,z-11,z-10,z-9,z-20,z-19,z-11,z-10,z-9,z-8,z-21,z-20,z-19,z-11,z-10,z-9,z-8,z-7,z-7,z-7,z-21,z-20,z-19,z-18,z-11,z-10,z-9,z-8,z-22,z-22,z-21,z-21,z-21,z-20,z-20,z-20,z-19,z-19,z-19,z-19,z-19,z-18,z-18,z-18,z-18,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-25,z-25,z-25,z-25,z-24,z-24,z-24,z-24,z-24,z-23,z-23,z-23,z-23,z-23,z-22,z-22,z-22,z-22,z-22,z-21,z-21,z-21,z-21,z-21,z-20,z-20,z-20,z-20,z-19,z-19,z-19,z-19,z-18,z-18,z-17,z-17,z-17,z-16,z-16,z-15,z-15,z-14,z-14,z-14,z-13,z-13,z-12,z-12,z-11,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-1,z-1,z-1,z-1,z,z-22,z-22,z-21,z-21,z-21,z-20,z-20,z-20,z-19,z-19,z-19,z-19,z-19,z-18,z-18,z-18,z-18,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-21,z-20,z-19,z-18,z-11,z-10,z-9,z-8,z-21,z-20,z-19,z-11,z-10,z-9,z-8,z-7,z-7,z-7,z-20,z-19,z-11,z-10,z-9,z-8,z-20,z-11,z-10,z-9,z-11,z-10,z-9,z-11,z-10,z-11,z-10,z-11,z];
	var I=[0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,43,43,139,173,139,44,44,44,44,44,44,44,44,156,44,44,43,44,156,43,44,173,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,71,71,44,44,159,43,44,44,159,43,44,159,20,44,156,43,43,44,44,43,159,159,44,43,159,159,43,44,44,43,159,43,43,44,43,159,43,44,43,43,43,43,43,43,156,44,43,44,43,156,44,43,44,43,44,43,156,44,43,44,43,44,43,156,44,43,44,43,44,43,156,44,173,43,43,44,43,44,43,44,43,44,44,156,44,44,44,44,159,20,44,159,156,44,44,43,44,156,43,44,173,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,20,44,44,159,43,44,44,159,43,44,44,159,43,44,44,159,43,44,44,159,43,44,159,20,44,44,44,44,44,44,44,44,44,44,44,44,44,44,43,43,139,173,139,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,0];
	var D=[6,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,6,6,0,0,0,14,14,14,14,14,14,14,14,6,6,14,6,6,6,6,6,0,0,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,0,8,6,14,14,6,6,14,14,6,6,14,0,6,6,6,6,6,14,6,14,14,6,6,14,14,6,6,14,6,14,6,6,14,6,14,6,6,6,6,6,6,0,6,3,6,6,6,6,3,6,6,6,6,6,6,3,6,6,6,6,6,6,3,6,6,6,6,6,6,3,6,0,0,6,6,6,6,6,6,6,6,14,3,6,14,6,14,14,0,6,14,6,6,14,6,6,6,6,6,0,0,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,0,6,14,14,6,6,14,14,6,6,14,14,6,6,14,14,6,6,14,14,6,6,14,0,6,14,14,14,14,14,14,14,14,14,14,14,14,14,6,6,0,0,0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,6];
	for(n=0;n<4160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function x15GUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place an X15 behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place an X15 to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place an X15 in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place an X15 to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place an X15 behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							x15(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function x15(x,y,z){
	var X=[x-4,x-4,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+4,x+4];
	var Y=[y+5,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+3,y+3,y+3,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+1];
	var Z=[z-14,z-11,z-14,z-11,z-10,z-14,z-13,z-11,z-10,z-9,z-14,z-13,z-12,z-12,z-12,z-11,z-11,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-3,z-2,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-12,z-12,z-12,z-11,z-11,z-11,z-10,z-10,z-10,z-9,z-9,z-9,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-1,z,z-14,z-13,z-12,z-12,z-12,z-11,z-11,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-3,z-2,z-14,z-13,z-11,z-10,z-9,z-14,z-11,z-10,z-11,z];
	var I=[0,173,173,173,173,173,173,173,173,173,173,173,109,44,173,109,44,173,173,173,173,173,173,173,173,173,173,44,1,173,173,44,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,43,173,173,173,43,173,173,171,43,173,173,171,173,173,20,171,173,173,173,173,173,109,44,173,109,44,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,8,6,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,0,0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6];
	for(n=0;n<675+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function scoutHelicopterGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Scout Helicopter in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Scout Helicopter to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Scout Helicopter behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Scout Helicopter to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Scout Helicopter in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							scoutHelicopter(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function scoutHelicopter(x,y,z){
	var X=[x-5,x-5,x-5,x-4,x-4,x-3,x-3,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+3,x+3,x+4,x+4,x+5,x+5,x+5];
	var Y=[y+1,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+3,y+3,y+3,y+1,y+2,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+5,y+3,y+4,y+3,y+4,y+5,y+3,y+3,y+3,y+2,y+3,y+2,y+4,y+2,y+4,y+2,y+4,y+2,y+4,y+2,y+4,y+2,y+4,y+2,y+5,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+1,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+2,y+3,y+3,y+4,y+3,y+3,y+3,y+1,y+2,y+3,y+3,y+4,y+3,y+4,y+3,y+4,y+5,y+3,y+4,y+3,y+4,y+5,y+3,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+5,y+5];
	var Z=[z,z+4,z+14,z+5,z+13,z+6,z+12,z+7,z+11,z+2,z+3,z+4,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+18,z+18,z+19,z+19,z+20,z+20,z+2,z+3,z+4,z+5,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+10,z+10,z+10,z+11,z+7,z+11,z+6,z+12,z+5,z+13,z+4,z+14,z+20];
	var I=[0,44,44,44,44,44,44,44,44,159,159,159,173,44,159,159,44,159,159,159,1,44,159,159,159,1,44,159,159,159,159,159,159,20,159,20,159,20,159,159,159,159,159,159,159,1,159,159,159,159,159,159,159,159,44,159,159,173,159,44,159,44,159,44,159,44,159,159,159,159,159,159,159,159,159,173,44,159,159,44,159,159,159,1,44,159,159,159,1,44,159,44,44,44,44,44,44,44,44,0];
	var D=[6,8,8,8,8,8,8,8,8,13,5,5,0,0,5,5,0,13,5,13,6,8,13,13,13,6,8,13,13,13,13,13,5,0,5,0,13,0,13,13,13,13,5,13,5,6,13,13,13,5,13,13,5,5,0,13,5,0,13,0,13,0,13,0,13,0,5,5,13,13,13,5,13,13,5,0,0,5,5,0,13,5,13,6,8,13,5,5,6,8,13,8,8,8,8,8,8,8,8,6];
	for(n=0;n<1155+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blackbirdGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Blackbird in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Blackbird to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Blackbird behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Blackbird to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Blackbird in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							blackbird(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function blackbird(x,y,z){
	var X=[x-8,x-8,x-8,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+8,x+8,x+8];
	var Y=[y+4,y+4,y+7,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+1,y+2,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+4,y+4,y+4,y+3,y+4,y+2,y+3,y+5,y+6,y+2,y+3,y+5,y+6,y+1,y+2,y+3,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+2,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+1,y+2,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+5,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+5,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+3,y+4,y+5,y+6,y+7,y+3,y+4,y+5,y+6,y+7,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+1,y+4,y+4];
	var Z=[z+15,z+16,z+17,z+14,z+15,z+16,z+13,z+14,z+15,z+16,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+11,z+12,z+13,z+14,z+15,z+16,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z-2,z-1,z,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z,z+1,z+2,z+3,z+4,z+5,z+5,z+6,z+6,z+7,z+7,z+8,z+8,z+9,z+9,z+10,z+10,z+11,z+11,z+12,z+12,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+16,z+16,z+17,z+17,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+10,z+11,z+12,z+13,z+14,z+15,z+16,z+11,z+12,z+13,z+14,z+15,z+16,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+13,z+14,z+15,z+16,z+14,z+15,z+16,z-2,z+15,z+16];
	var I=[44,173,0,44,173,173,44,173,173,173,44,1,171,44,173,173,171,44,173,173,171,44,173,173,173,171,44,173,173,173,171,44,173,173,173,173,173,44,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,43,173,171,173,171,173,171,173,173,173,173,173,173,44,173,20,171,44,173,20,171,173,43,173,173,171,44,173,173,173,171,173,173,173,171,173,173,173,171,173,173,173,171,173,173,173,171,173,173,173,171,173,173,173,171,173,173,173,171,44,173,173,173,171,44,173,173,173,171,44,173,173,173,171,173,173,173,171,173,173,173,173,173,173,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,171,173,43,173,171,173,171,173,171,173,171,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,173,44,173,173,173,173,173,173,44,173,173,173,173,173,44,1,171,44,173,173,171,44,173,173,171,44,173,173,173,171,44,173,173,173,171,44,173,173,173,44,173,173,0,44,173];
	var D=[0,0,6,0,0,0,0,0,0,0,8,6,15,8,0,0,15,8,0,0,15,8,0,0,0,15,8,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,0,0,15,0,15,0,15,0,0,0,0,0,0,8,0,0,15,8,0,0,15,0,0,0,0,15,8,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,15,0,0,0,15,8,0,0,0,15,8,0,0,0,15,8,0,0,0,15,0,0,0,15,0,0,0,0,0,0,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,15,0,0,0,15,0,15,0,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,15,8,0,0,15,8,0,0,15,8,0,0,0,15,8,0,0,0,15,0,0,0,0,0,0,0,6,0,0];
	for(n=0;n<2380+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function swingWingPlaneGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Swing Wing Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Swing Wing Plane to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Swing Wing Plane behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Swing Wing Plane to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Swing Wing Plane in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							swingWingPlane(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function swingWingPlane(x,y,z){
	var X=[x-7,x-7,x-7,x-6,x-6,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+6,x+6,x+7,x+7,x+7];
	var Y=[y+1,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+3,y+3,y+1,y+2,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+2,y+3,y+4,y+2,y+4,y+1,y+2,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+5,y+4,y+5,y+4,y+5,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+2,y+3,y+4,y+2,y+3,y+4,y+2,y+3,y+4,y+3,y+3,y+3,y+1,y+2,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+3,y+5];
	var Z=[z-1,z+9,z+10,z+9,z+10,z+9,z+10,z+11,z+8,z+9,z+10,z+11,z+8,z+9,z+10,z+11,z+16,z+17,z+7,z+8,z+9,z+10,z+11,z+12,z+15,z+16,z+17,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+13,z+14,z+15,z+15,z+15,z+16,z+17,z-1,z,z+1,z+2,z+3,z+3,z+3,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+8,z+8,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+12,z+12,z+13,z+13,z+13,z+14,z+14,z+14,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+19,z+19,z+19,z+20,z+20,z+21,z+21,z+1,z+2,z+3,z+4,z+5,z+6,z+7,z+8,z+9,z+9,z+9,z+10,z+10,z+10,z+11,z+11,z+11,z+12,z+13,z+14,z+15,z+15,z+15,z+16,z+17,z+7,z+8,z+9,z+10,z+11,z+12,z+15,z+16,z+17,z+8,z+9,z+10,z+11,z+16,z+17,z+8,z+9,z+10,z+11,z+9,z+10,z+11,z+9,z+10,z+9,z+10,z+21];
	var I=[0,44,159,44,159,44,159,159,44,159,159,159,44,159,159,159,44,159,44,159,159,159,159,159,44,159,159,44,159,159,159,159,159,159,159,44,159,44,44,159,44,44,159,44,159,159,159,173,44,159,159,159,44,159,159,159,159,159,20,159,20,173,159,20,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,159,44,159,159,159,44,159,159,159,159,159,159,159,159,159,159,44,159,159,159,159,159,159,159,44,159,44,44,159,44,44,159,44,159,159,159,173,44,159,159,159,44,159,159,159,159,159,44,159,159,44,159,159,159,44,159,44,159,159,159,44,159,159,44,159,44,159,0];
	var D=[6,0,9,0,9,0,9,9,0,9,9,9,0,9,9,9,0,9,0,9,9,9,9,9,0,9,9,0,9,9,9,9,9,9,9,8,9,0,8,9,0,8,9,0,9,9,9,0,0,9,9,9,0,9,9,9,9,9,0,9,0,0,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9,9,0,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,9,9,8,9,0,8,9,0,8,9,0,9,9,9,0,0,9,9,9,0,9,9,9,9,9,0,9,9,0,9,9,9,0,9,0,9,9,9,0,9,9,0,9,0,9,6];
	for(n=0;n<1725+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function helicopterGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				yaw = getYaw()
				while(yaw > 360){
					yaw = yaw-360
				}
				while(yaw < 0){
					yaw = yaw+360
				}
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Helicopter behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Helicopter to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Helicopter in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Helicopter to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Helicopter behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							helicopter(x,y,z)
						}
						catch(e){
							clientMessage("Error: "+e)
						}
				}});
				popup.setNegativeButton("No", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						//do nothing
				}});
			}
			catch(e){
				print ("Error: "+e)
			}	
			popup.show()
		}
	});
}

function helicopter(x,y,z){
	var X=[x-5,x-5,x-5,x-4,x-4,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+4,x+4,x+5,x+5,x+5];
	var Y=[y+6,y+6,y+1,y+6,y+6,y+6,y+6,y+1,y+1,y+6,y+1,y+1,y+2,y+1,y+1,y+6,y+1,y+3,y+3,y+4,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+5,y+6,y+2,y+5,y+2,y+5,y+6,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+2,y+3,y+2,y+3,y+4,y+5,y+3,y+4,y+5,y+3,y+4,y+3,y+3,y+3,y+2,y+3,y+4,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+6,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+4,y+2,y+3,y+2,y+3,y+3,y+4,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+5,y+6,y+2,y+5,y+2,y+5,y+6,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+2,y+3,y+2,y+1,y+1,y+6,y+1,y+1,y+2,y+1,y+1,y+6,y+1,y+6,y+6,y+6,y+6,y+6,y+6,y+6];
	var Z=[z-11,z-1,z,z-10,z-2,z-9,z-3,z-9,z-8,z-8,z-7,z-6,z-6,z-5,z-4,z-4,z-3,z-16,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-1,z-17,z-17,z-17,z-16,z-16,z-16,z-15,z-15,z-14,z-13,z-12,z-11,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z,z-16,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-1,z-9,z-8,z-8,z-7,z-6,z-6,z-5,z-4,z-4,z-3,z-9,z-3,z-10,z-2,z-17,z-11,z-1];
	var I=[44,44,0,44,44,44,44,44,43,44,44,44,65,44,43,44,44,159,159,159,159,159,159,44,159,159,159,44,159,44,44,159,44,159,44,44,159,159,159,44,159,159,20,159,20,159,109,159,159,159,159,109,159,109,159,159,159,159,159,109,159,44,159,44,159,44,159,44,159,1,44,159,44,159,44,159,44,159,20,159,20,159,159,159,159,159,159,159,44,159,159,159,44,159,44,44,159,44,159,44,44,159,159,159,44,159,159,20,159,20,159,44,43,44,44,44,65,44,43,44,44,44,44,44,44,0,44,44];
	var D=[0,0,6,0,0,0,0,0,0,0,0,0,4,0,0,0,0,9,9,9,9,9,9,5,9,9,9,5,9,5,0,9,5,9,5,0,9,9,9,5,9,9,0,9,0,9,6,9,9,9,9,3,9,3,9,9,9,9,9,2,9,5,9,5,9,5,9,5,9,6,0,9,5,9,5,9,0,9,0,9,0,9,9,9,9,9,9,9,5,9,9,9,5,9,5,0,9,5,9,5,0,9,9,9,5,9,9,0,9,0,9,0,0,0,0,0,5,0,0,0,0,0,0,0,0,6,0,0];
	for(n=0;n<1188+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}
