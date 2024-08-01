//Instant Structure Mod V0.8.1 - Cars and Trucks
//By wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github or Dropbox link without permission. Instead, use the adf.ly link.

var structureSelectorId = 502
var structureBuilderId = 501
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textsize = 15
var structure
var firstStructure

ModPE.setItem(structureSelectorId,"dye_powder",10,"Structure Selector - Cars and Trucks")
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
		carsAndTrucksGUI()
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

function sportsCarsGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Select a model")
				var  BlackSportsCar = new android.widget.Button(ctx); 
				BlackSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 12
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BlackSportsCar.setText("Black Sports Car - Ender_Pe")
				BlackSportsCar.setTextSize(textsize)
				menu.addView(BlackSportsCar); 

				var  BlueSportsCar = new android.widget.Button(ctx); 
				BlueSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 13
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BlueSportsCar.setText("Blue Sports Car - Ender_Pe")
				BlueSportsCar.setTextSize(textsize)
				menu.addView(BlueSportsCar); 	

				var  GreySportsCar = new android.widget.Button(ctx); 
				GreySportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 14
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				GreySportsCar.setText("Grey Sports Car - Ender_Pe")
				GreySportsCar.setTextSize(textsize)
				menu.addView(GreySportsCar); 
				
				var  OrangeSportsCar = new android.widget.Button(ctx); 
				OrangeSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 15
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				OrangeSportsCar.setText("Orange Sports Car - Ender_Pe")
				OrangeSportsCar.setTextSize(textsize)
				menu.addView(OrangeSportsCar); 
				
				var  WhiteSportsCar = new android.widget.Button(ctx); 
				WhiteSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 16
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				WhiteSportsCar.setText("White Sports Car - Ender_Pe")
				WhiteSportsCar.setTextSize(textsize)
				menu.addView(WhiteSportsCar); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function carsAndTrucksGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Select a car or truck")
				var  SportsCars = new android.widget.Button(ctx); 
				SportsCars.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							sportsCarsGUI()
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SportsCars.setText("Sports Cars - Ender_Pe")
				SportsCars.setTextSize(textsize)
				menu.addView(SportsCars);	

				var  RedCar = new android.widget.Button(ctx); 
				RedCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 27
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				RedCar.setText("Red Car - Ender_Pe")
				RedCar.setTextSize(textsize)
				menu.addView(RedCar);
				
				var  Trucks = new android.widget.Button(ctx); 
				Trucks.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							trucksGUI()
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Trucks.setText("Trucks - Ender_Pe")
				Trucks.setTextSize(textsize)
				menu.addView(Trucks);
				
				var  BigTruck = new android.widget.Button(ctx); 
				BigTruck.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 22
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BigTruck.setText("Big Truck - Ender_Pe")
				BigTruck.setTextSize(textsize)
				menu.addView(BigTruck);
				
				var  Forklift = new android.widget.Button(ctx); 
				Forklift.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 23
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Forklift.setText("Forklift - Ender_Pe")
				Forklift.setTextSize(textsize)
				menu.addView(Forklift);
				
				
				
				var  Jeep = new android.widget.Button(ctx); 
				Jeep.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 24
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Jeep.setText("Jeep - Ender_Pe")
				Jeep.setTextSize(textsize)
				menu.addView(Jeep);
				
				var  Humvees = new android.widget.Button(ctx); 
				Humvees.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							humveesGUI()
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Humvees.setText("Humvees - Ender_Pe")
				Humvees.setTextSize(textsize)
				menu.addView(Humvees);
				
				var  MilitaryTruck = new android.widget.Button(ctx); 
				MilitaryTruck.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 25
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				MilitaryTruck.setText("Military Truck - Ender_Pe")
				MilitaryTruck.setTextSize(textsize)
				menu.addView(MilitaryTruck);
				
				var  DuneBuggy = new android.widget.Button(ctx); 
				DuneBuggy.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 26
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				DuneBuggy.setText("Navy SEAL Dune Buggy - Ender_Pe")
				DuneBuggy.setTextSize(textsize)
				menu.addView(DuneBuggy);
				
				var  CityTank = new android.widget.Button(ctx); 
				CityTank.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 40
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				CityTank.setText("City Tank - Ender_Pe")
				CityTank.setTextSize(textsize)
				menu.addView(CityTank);
				
				var  BigMilitaryTank = new android.widget.Button(ctx); 
				BigMilitaryTank.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 47
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BigMilitaryTank.setText("Big Military Tank - Ender_Pe")
				BigMilitaryTank.setTextSize(textsize)
				menu.addView(BigMilitaryTank);
				
				var  SixBarreledTank = new android.widget.Button(ctx); 
				SixBarreledTank.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 55
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SixBarreledTank.setText("Six Barreled Tank - Ender_Pe")
				SixBarreledTank.setTextSize(textsize)
				menu.addView(SixBarreledTank);
				
				var  TankWithTwoGuns = new android.widget.Button(ctx); 
				TankWithTwoGuns.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 59
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				TankWithTwoGuns.setText("Tank With Two Guns - Ender_Pe")
				TankWithTwoGuns.setTextSize(textsize)
				menu.addView(TankWithTwoGuns);
			
				var  MilitaryHauler = new android.widget.Button(ctx); 
				MilitaryHauler.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 41
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				MilitaryHauler.setText("Military Hauler - Ender_Pe")
				MilitaryHauler.setTextSize(textsize)
				menu.addView(MilitaryHauler);
				
				var  SmallMilitaryHauler = new android.widget.Button(ctx); 
				SmallMilitaryHauler.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 66
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				SmallMilitaryHauler.setText("Small Military Hauler - Ender_Pe")
				SmallMilitaryHauler.setTextSize(textsize)
				menu.addView(SmallMilitaryHauler);
				
				var  MilitaryPersonnelCarrier = new android.widget.Button(ctx); 
				MilitaryPersonnelCarrier.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 65
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				MilitaryPersonnelCarrier.setText("Military Personnel Carrier - Ender_Pe")
				MilitaryPersonnelCarrier.setTextSize(textsize)
				menu.addView(MilitaryPersonnelCarrier);
				
				var  RedBus = new android.widget.Button(ctx); 
				RedBus.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 44
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				RedBus.setText("Red Bus - Ender_Pe")
				RedBus.setTextSize(textsize)
				menu.addView(RedBus);
				
				var  TourBus = new android.widget.Button(ctx); 
				TourBus.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 67
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				TourBus.setText("Tour Bus - Ender_Pe")
				TourBus.setTextSize(textsize)
				menu.addView(TourBus);
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function trucksGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Select a model")
				var  BlackSportsCar = new android.widget.Button(ctx); 
				BlackSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 17
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BlackSportsCar.setText("Blue Truck - Ender_Pe")
				BlackSportsCar.setTextSize(textsize)
				menu.addView(BlackSportsCar); 

				var  BlueSportsCar = new android.widget.Button(ctx); 
				BlueSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 18
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				BlueSportsCar.setText("Diamond Truck - Ender_Pe")
				BlueSportsCar.setTextSize(textsize)
				menu.addView(BlueSportsCar); 	

				var  GreySportsCar = new android.widget.Button(ctx); 
				GreySportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 19
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				GreySportsCar.setText("Iron Truck - Ender_Pe")
				GreySportsCar.setTextSize(textsize)
				menu.addView(GreySportsCar); 
				
				var  OrangeSportsCar = new android.widget.Button(ctx); 
				OrangeSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 20
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				OrangeSportsCar.setText("Old Truck - Ender_Pe")
				OrangeSportsCar.setTextSize(textsize)
				menu.addView(OrangeSportsCar); 
				
				var  WhiteSportsCar = new android.widget.Button(ctx); 
				WhiteSportsCar.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 21
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				WhiteSportsCar.setText("Red Truck - Ender_Pe")
				WhiteSportsCar.setTextSize(textsize)
				menu.addView(WhiteSportsCar); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function humveesGUI(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Select a model")
				
				var  Humvee = new android.widget.Button(ctx); 
				Humvee.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 62
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				Humvee.setText("Humvee - Ender_Pe")
				Humvee.setTextSize(textsize)
				menu.addView(Humvee); 
				
				var  GrayHumvee = new android.widget.Button(ctx); 
				GrayHumvee.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 60
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				GrayHumvee.setText("Gray Humvee - Ender_Pe")
				GrayHumvee.setTextSize(textsize)
				menu.addView(GrayHumvee); 

				var  HumveeWithMachineGun = new android.widget.Button(ctx); 
				HumveeWithMachineGun.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 63
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				HumveeWithMachineGun.setText("Humvee With Machine Gun - Ender_Pe")
				HumveeWithMachineGun.setTextSize(textsize)
				menu.addView(HumveeWithMachineGun); 
				
				var  HumveeWithTrailer = new android.widget.Button(ctx); 
				HumveeWithTrailer.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							dialog.dismiss();
							structure = 64
							clientMessage("Structure selected")
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				HumveeWithTrailer.setText("Humvee With Trailer - Ender_Pe")
				HumveeWithTrailer.setTextSize(textsize)
				menu.addView(HumveeWithTrailer); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function blackSportsCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Black Sports Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) blackSportsCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) blackSportsCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) blackSportsCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) blackSportsCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) blackSportsCar1(x,y,z)
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

function blackSportsCar1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6];
	var I=[114,0,173,171,114,171,114,171,114,171,173,171,114,0,112,0,158,0,112,171,112,171,114,171,114,0,173,171,114,171,114,171,114,171,173,171];
	var D=[0,0,0,15,4,15,4,15,6,15,0,15,2,0,0,0,5,0,0,15,0,15,7,15,1,0,0,15,7,15,5,15,5,15,0,15];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blackSportsCar2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[173,171,114,171,173,171,114,171,112,171,114,171,114,171,112,171,114,171,114,171,158,0,114,171,173,171,112,0,173,171,114,0,114,0,114,0];
	var D=[0,15,4,15,0,15,5,15,0,15,5,15,6,15,0,15,7,15,6,15,5,0,7,15,0,15,0,0,0,15,2,0,1,0,3,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blackSportsCar3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1];
	var I=[173,171,114,171,114,171,114,171,173,171,114,0,114,171,112,171,112,171,158,0,112,0,114,0,173,171,114,171,114,171,114,171,173,171,114,0];
	var D=[0,15,7,15,4,15,4,15,0,15,0,0,6,15,0,15,0,15,5,0,0,0,3,0,0,15,7,15,5,15,5,15,0,15,1,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blackSportsCar4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[114,0,114,0,114,0,173,171,112,0,173,171,114,171,158,0,114,171,114,171,112,171,114,171,114,171,112,171,114,171,173,171,114,171,173,171];
	var D=[2,0,0,0,3,0,0,15,0,0,0,15,6,15,5,0,3,15,6,15,0,15,3,15,4,15,0,15,3,15,0,15,5,15,0,15];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueSportsCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Blue Sports Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) blueSportsCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) blueSportsCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) blueSportsCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) blueSportsCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) blueSportsCar1(x,y,z)
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

function blueSportsCar1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6];
	var I=[109,0,173,171,159,171,159,171,159,171,173,44,109,0,159,0,44,0,159,44,159,44,159,44,109,0,173,171,159,171,159,171,159,171,173,44];
	var D=[0,0,0,15,11,15,11,15,11,15,0,5,2,0,11,0,5,0,11,5,11,5,11,5,1,0,0,15,11,15,11,15,11,15,0,5];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueSportsCar2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[173,44,159,44,173,44,159,171,159,44,159,171,159,171,159,44,159,171,159,171,44,0,159,171,173,171,159,0,173,171,109,0,109,0,109,0];
	var D=[0,5,11,5,0,5,11,15,11,5,11,15,11,15,11,5,11,15,11,15,5,0,11,15,0,15,11,0,0,15,2,0,1,0,3,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueSportsCar3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1];
	var I=[173,44,159,171,159,171,159,171,173,171,109,0,159,44,159,44,159,44,44,0,159,0,109,0,173,44,159,171,159,171,159,171,173,171,109,0];
	var D=[0,5,11,15,11,15,11,15,0,15,0,0,11,5,11,5,11,5,5,0,11,0,3,0,0,5,11,15,11,15,11,15,0,15,1,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueSportsCar4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[109,0,109,0,109,0,173,171,159,0,173,171,159,171,44,0,159,171,159,171,159,44,159,171,159,171,159,44,159,171,173,44,159,44,173,44];
	var D=[2,0,0,0,3,0,0,15,11,0,0,15,11,15,5,0,11,15,11,15,11,5,11,15,11,15,11,5,11,15,0,5,11,5,0,5];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function graySportsCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Gray Sports Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) graySportsCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) graySportsCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) graySportsCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) graySportsCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) graySportsCar1(x,y,z)
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

function graySportsCar1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6];
	var I=[109,0,173,0,109,0,109,0,109,0,173,44,109,0,159,0,44,0,159,44,159,44,109,44,109,0,173,0,109,0,109,0,109,0,173,44];
	var D=[0,0,0,0,4,0,4,0,6,0,0,0,2,0,9,0,0,0,9,0,9,0,7,0,1,0,0,0,5,0,5,0,6,0,0,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function graySportsCar2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[173,44,109,44,173,44,109,0,159,44,109,0,109,0,159,44,109,0,109,0,44,0,109,0,173,0,159,0,173,0,109,0,109,0,109,0];
	var D=[0,0,4,0,0,0,6,0,9,0,5,0,6,0,9,0,7,0,6,0,0,0,7,0,0,0,9,0,0,0,2,0,1,0,3,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function graySportsCar3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1];
	var I=[173,44,109,0,109,0,109,0,173,0,109,0,109,44,159,44,159,44,44,0,159,0,109,0,173,44,109,0,109,0,109,0,173,0,109,0];
	var D=[0,0,7,0,4,0,4,0,0,0,0,0,6,0,9,0,9,0,0,0,9,0,3,0,0,0,7,0,5,0,5,0,0,0,1,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function graySportsCar4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[109,0,109,0,109,0,173,0,159,0,173,0,109,0,44,0,109,0,109,0,159,44,109,0,109,0,159,44,109,0,173,44,109,44,173,44];
	var D=[2,0,0,0,3,0,0,0,9,0,0,0,6,0,0,0,7,0,6,0,9,0,7,0,4,0,9,0,4,0,0,0,5,0,0,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function orangeSportsCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Orange Sports Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) orangeSportsCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) orangeSportsCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) orangeSportsCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) orangeSportsCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) orangeSportsCar1(x,y,z)
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

function orangeSportsCar1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6];
	var I=[163,0,173,171,163,171,163,171,163,171,173,158,163,0,159,0,158,0,159,158,159,158,159,158,163,0,173,171,163,171,163,171,163,171,173,158];
	var D=[0,0,0,1,0,1,0,1,2,1,0,4,2,0,1,0,4,0,1,4,1,4,1,4,1,0,0,1,5,1,5,1,6,1,0,4];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function orangeSportsCar2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[173,158,159,158,173,158,163,171,159,158,163,171,163,171,159,158,163,171,163,171,158,0,163,171,173,171,159,0,173,171,163,0,163,0,163,0];
	var D=[0,4,1,4,0,4,5,1,1,4,5,1,6,1,1,4,7,1,6,1,4,0,7,1,0,1,1,0,0,1,2,0,1,0,3,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function orangeSportsCar3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1];
	var I=[173,158,163,171,163,171,163,171,173,171,163,0,163,158,159,158,159,158,158,0,159,0,163,0,173,158,163,171,163,171,163,171,173,171,163,0];
	var D=[0,4,3,1,0,1,0,1,0,1,0,0,6,4,1,4,1,4,4,0,1,0,3,0,0,4,3,1,1,1,1,1,0,1,1,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function orangeSportsCar4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[163,0,163,0,163,0,173,171,159,0,173,171,163,171,158,0,163,171,163,171,159,158,163,171,163,171,159,158,163,171,173,158,163,158,173,158];
	var D=[2,0,0,0,3,0,0,1,1,0,0,1,6,1,4,0,7,1,6,1,1,4,7,1,6,1,1,4,7,1,0,4,5,4,0,4];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function whiteSportsCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a White Sports Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) whiteSportsCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) whiteSportsCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) whiteSportsCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) whiteSportsCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) whiteSportsCar1(x,y,z)
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

function whiteSportsCar1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6,z+1,z+1,z+2,z+2,z+3,z+3,z+4,z+4,z+5,z+5,z+6,z+6];
	var I=[156,0,173,171,156,171,156,171,156,171,173,44,156,0,155,0,44,0,155,44,155,44,156,44,156,0,173,171,156,171,156,171,156,171,173,44];
	var D=[0,0,0,0,4,0,4,0,6,0,0,6,2,0,0,0,6,0,0,6,0,6,7,6,1,0,0,0,5,0,5,0,6,0,0,6];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function whiteSportsCar2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[173,44,156,44,173,44,156,171,155,44,156,171,156,171,155,44,156,171,156,171,44,0,156,171,173,171,155,0,173,171,156,0,156,0,156,0];
	var D=[0,6,4,6,0,6,5,0,0,6,5,0,6,0,0,6,7,0,6,0,6,0,7,0,0,0,0,0,0,0,2,0,1,0,3,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function whiteSportsCar3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-1,z-1];
	var I=[173,44,156,171,156,171,156,171,173,171,156,0,156,44,155,44,155,44,44,0,155,0,156,0,173,44,156,0,156,0,156,0,173,171,156,0];
	var D=[0,6,7,0,4,0,4,0,0,0,0,0,6,6,0,6,0,6,6,0,0,0,3,0,0,6,7,0,5,0,5,0,0,0,1,0];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function whiteSportsCar4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2];
	var Z=[z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1,z-1,z-1,z,z,z+1,z+1];
	var I=[156,0,156,0,156,0,173,171,155,0,173,171,156,171,44,0,156,171,156,171,155,44,156,171,156,171,155,44,156,171,173,44,156,44,173,44];
	var D=[2,0,0,0,3,0,0,0,0,0,0,0,6,0,6,0,7,0,6,0,0,6,7,0,4,0,0,6,4,0,0,6,5,6,0,6];
	for(n=0;n<36+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Blue Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) blueTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) blueTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) blueTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) blueTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) blueTruck1(x,y,z)
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

function blueTruck1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,44,0,173,109,44,0,44,159,44,0,0,65,0,0,44,61,171,0,44,159,171,0,44,159,20,44,44,0,0,44,44,159,159,44,44,54,0,0,44,54,0,0,44,0,0,0,0,0,0,0,173,109,0,0,44,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,44,0,173,109,44,0,44,159,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,8,11,0,0,8,11,0,0,8,11,0,0,8,11,11,0,8,11,0,0,0,4,0,0,8,11,0,0,0,2,0,0,8,2,7,0,8,11,7,0,8,11,0,0,8,0,0,0,8,11,11,0,8,5,0,0,8,5,0,0,8,0,0,0,0,0,0,0,0,2,0,0,8,11,0,0,8,11,0,0,8,11,0,0,8,11,11,0,8,11,0,0,0,5,0,0,8,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,44,159,44,0,44,0,0,0,44,159,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,159,44,0,44,54,0,0,44,159,44,0,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,0,0,44,159,171,0,44,159,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,171,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,8,11,0,0,8,0,0,0,8,11,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,3,0,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,11,0,8,11,11,0,8,11,11,0,0,0,0,0,0,0,0,0,8,11,0,0,8,0,0,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,11,0,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,11,7,0,8,11,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,5,7,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,44,159,44,0,173,109,44,0,44,159,44,0,44,159,159,44,44,159,102,44,44,159,20,44,44,159,0,0,173,109,0,0,0,0,0,0,44,0,0,0,44,54,0,0,44,54,0,0,44,159,159,44,44,159,0,44,44,159,20,44,44,159,171,0,44,61,171,0,0,65,0,0,44,159,44,0,173,109,44,0,44,159,44,0,44,159,159,44,44,159,102,44,44,159,20,44,44,159,0,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,11,0,0,0,4,0,0,8,11,0,0,8,11,11,0,8,11,0,0,8,11,0,0,8,11,0,0,0,3,0,0,0,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,11,11,0,8,11,0,0,8,11,0,0,8,11,7,0,8,3,7,0,0,3,0,0,8,11,0,0,0,5,0,0,8,11,0,0,8,11,11,0,8,11,0,0,8,11,0,0,8,11,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function blueTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,171,0,173,109,0,0,0,0,0,0,0,0,0,0,44,159,0,0,44,159,171,0,44,159,0,0,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,44,0,44,54,0,0,44,159,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,159,44,0,44,0,0,0,44,159,44,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,7,0,0,0,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,11,7,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,11,0,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,0,0,0,8,11,0,0,0,0,0,0,0,0,0,0,8,11,11,0,8,11,11,0,8,11,11,0,0,0,0,0,0,0,0,0,8,11,0,0,8,2,0,0,8,11,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,11,0,0,8,0,0,0,8,11,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function diamondTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Diamond Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) diamondTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) diamondTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) diamondTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) diamondTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) diamondTruck1(x,y,z)
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

function diamondTruck1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,57,0,0,44,57,20,44,44,57,102,44,44,57,57,44,44,57,44,0,173,109,44,0,44,57,44,0,0,65,0,0,44,61,0,0,44,57,0,0,44,57,20,44,44,0,0,44,44,57,57,44,44,54,0,0,44,54,0,0,44,0,0,0,0,0,0,0,173,109,0,0,44,57,0,0,44,57,20,44,44,57,102,44,44,57,57,44,44,57,44,0,173,109,44,0,44,57,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,4,0,0,8,0,0,0,0,2,0,0,8,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,5,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function diamondTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,44,57,44,0,44,0,0,0,44,57,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,57,44,0,44,54,0,0,44,57,44,0,0,0,0,0,0,0,0,0,44,57,57,44,44,57,57,44,44,57,57,44,0,0,0,0,0,0,0,0,44,57,102,44,44,0,0,44,44,57,102,44,0,0,0,0,0,0,102,0,44,57,20,44,44,57,20,44,44,57,20,44,0,0,102,0,0,0,0,0,44,57,0,0,44,57,0,0,44,57,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,0,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,3,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function diamondTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,44,57,44,0,173,109,44,0,44,57,44,0,44,57,57,44,44,57,102,44,44,57,20,44,44,57,0,0,173,109,0,0,0,0,0,0,44,0,0,0,44,54,0,0,44,54,0,0,44,57,57,44,44,0,0,44,44,57,20,44,44,57,0,0,44,61,0,0,0,65,0,0,44,57,44,0,173,109,44,0,44,57,44,0,44,57,57,44,44,57,102,44,44,57,20,44,44,57,0,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,4,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,3,0,0,0,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,3,0,0,0,3,0,0,8,0,0,0,0,5,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function diamondTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,0,0,173,109,0,0,0,0,0,0,0,0,0,0,44,57,0,0,44,57,0,0,44,57,0,0,0,0,0,0,0,0,102,0,44,57,20,44,44,57,20,44,44,57,20,44,0,0,102,0,0,0,0,0,44,57,102,44,44,0,0,44,44,57,102,44,0,0,0,0,0,0,0,0,44,57,57,44,44,57,57,44,44,57,57,44,0,0,0,0,0,0,0,0,44,57,44,0,44,54,0,0,44,57,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,57,44,0,44,0,0,0,44,57,44,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,2,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function ironTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Iron Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) ironTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) ironTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) ironTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) ironTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) ironTruck1(x,y,z)
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

function ironTruck1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,156,0,0,44,42,0,0,44,42,20,44,44,42,102,44,44,42,42,44,44,42,44,0,173,156,44,0,44,42,44,0,0,65,0,0,44,61,0,0,44,42,0,0,44,42,20,44,44,0,0,44,44,42,42,44,44,54,0,0,44,54,0,0,44,0,0,0,0,0,0,0,173,156,0,0,44,42,0,0,44,42,20,44,44,42,102,44,44,42,42,44,44,42,44,0,173,156,44,0,44,42,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,4,0,0,8,0,0,0,0,2,0,0,8,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,5,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function ironTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,44,42,44,0,44,0,0,0,44,42,44,0,0,0,0,0,0,0,0,0,173,156,44,0,44,54,0,0,173,156,44,0,0,0,0,0,0,0,0,0,44,42,44,0,44,54,0,0,44,42,44,0,0,0,0,0,0,0,0,0,44,42,42,44,44,42,42,44,44,42,42,44,0,0,0,0,0,0,0,0,44,42,102,44,44,0,0,44,44,42,102,44,0,0,0,0,0,0,102,0,44,42,20,44,44,42,20,44,44,42,20,44,0,0,102,0,0,0,0,0,44,42,0,0,44,42,0,0,44,42,0,0,0,0,0,0,0,0,0,0,173,156,0,0,44,61,0,0,173,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,3,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function ironTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,44,42,44,0,173,156,44,0,44,42,44,0,44,42,42,44,44,42,102,44,44,42,20,44,44,42,0,0,173,156,0,0,0,0,0,0,44,0,0,0,44,54,0,0,44,54,0,0,44,42,42,44,44,0,0,44,44,42,20,44,44,42,0,0,44,61,0,0,0,65,0,0,44,42,44,0,173,156,44,0,44,42,44,0,44,42,42,44,44,42,102,44,44,42,20,44,44,42,0,0,173,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,4,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,3,0,0,0,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,3,0,0,0,3,0,0,8,0,0,0,0,5,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function ironTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,156,0,0,44,61,0,0,173,156,0,0,0,0,0,0,0,0,0,0,44,42,0,0,44,42,0,0,44,42,0,0,0,0,0,0,0,0,102,0,44,42,20,44,44,42,20,44,44,42,20,44,0,0,102,0,0,0,0,0,44,42,102,44,44,0,0,44,44,42,102,44,0,0,0,0,0,0,0,0,44,42,42,44,44,42,42,44,44,42,42,44,0,0,0,0,0,0,0,0,44,42,44,0,44,54,0,0,44,42,44,0,0,0,0,0,0,0,0,0,173,156,44,0,44,54,0,0,173,156,44,0,0,0,0,0,0,0,0,0,44,42,44,0,44,0,0,0,44,42,44,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,3,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place an Old Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) oldTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) oldTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) oldTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) oldTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) oldTruck1(x,y,z)
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

function oldTruck1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,53,0,0,44,5,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,5,85,0,173,53,85,0,44,5,85,0,0,65,0,0,44,61,171,0,44,159,171,0,44,159,20,44,44,0,0,44,44,159,159,44,44,54,0,0,44,54,0,0,44,0,0,0,0,0,0,0,173,53,0,0,44,5,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,5,85,0,173,53,85,0,44,5,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,9,0,0,8,9,0,0,8,9,9,0,8,0,1,0,0,4,1,0,8,0,1,0,0,2,0,0,8,2,7,0,8,9,7,0,8,9,0,0,8,0,0,0,8,9,9,0,8,4,0,0,8,4,0,0,8,0,0,0,0,0,0,0,0,2,0,0,8,0,0,0,8,9,0,0,8,9,0,0,8,9,9,0,8,0,1,0,0,5,1,0,8,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,44,5,85,0,44,0,0,0,44,5,85,0,0,0,0,0,0,0,0,0,173,53,85,0,44,54,0,0,173,53,85,0,0,0,0,0,0,0,0,0,44,5,85,0,44,54,0,0,44,5,85,0,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,5,0,0,44,159,171,0,44,5,0,0,0,0,0,0,0,0,0,0,173,53,0,0,44,61,171,0,173,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,8,0,1,0,8,0,0,0,8,0,1,0,0,0,0,0,0,0,0,0,0,6,1,0,8,2,0,0,0,7,1,0,0,0,0,0,0,0,0,0,8,0,1,0,8,2,0,0,8,0,1,0,0,0,0,0,0,0,0,0,8,9,9,0,8,9,9,0,8,9,9,0,0,0,0,0,0,0,0,0,8,9,0,0,8,0,0,0,8,9,0,0,0,0,0,0,0,0,0,0,8,9,0,0,8,9,0,0,8,9,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,9,7,0,8,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,5,7,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,44,5,85,0,173,53,85,0,44,5,85,0,44,159,159,44,44,159,102,44,44,159,20,44,44,5,0,0,173,53,0,0,0,0,0,0,44,0,0,0,44,0,0,0,44,0,0,0,44,159,102,44,44,0,0,44,44,159,20,44,44,159,171,0,44,61,171,0,0,65,0,0,44,5,85,0,173,53,85,0,44,5,85,0,44,159,159,44,44,159,102,44,44,159,20,44,44,5,0,0,173,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,1,0,0,4,1,0,8,0,1,0,8,9,9,0,8,9,0,0,8,9,0,0,8,0,0,0,0,3,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,9,0,0,8,0,0,0,8,9,0,0,8,9,7,0,8,3,7,0,0,3,0,0,8,0,1,0,0,5,1,0,8,0,1,0,8,9,9,0,8,9,0,0,8,9,0,0,8,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function oldTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,53,0,0,44,61,171,0,173,53,0,0,0,0,0,0,0,0,0,0,44,5,0,0,44,159,171,0,44,5,0,0,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,5,85,0,44,54,0,0,44,5,85,0,0,0,0,0,0,0,0,0,173,53,85,0,44,54,0,0,173,53,85,0,0,0,0,0,0,0,0,0,44,5,85,0,44,0,0,0,44,5,85,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,7,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,9,7,0,8,0,0,0,0,0,0,0,0,0,0,0,8,9,0,0,8,9,0,0,8,9,0,0,0,0,0,0,0,0,0,0,8,9,0,0,8,0,0,0,8,9,0,0,0,0,0,0,0,0,0,0,8,9,9,0,8,9,9,0,8,9,9,0,0,0,0,0,0,0,0,0,8,0,1,0,8,3,0,0,8,0,1,0,0,0,0,0,0,0,0,0,0,6,1,0,8,3,0,0,0,7,1,0,0,0,0,0,0,0,0,0,8,0,1,0,8,0,0,0,8,0,1,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Red Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) redTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) redTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) redTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) redTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) redTruck1(x,y,z)
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

function redTruck1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,44,0,173,109,44,0,44,159,44,0,0,65,0,0,44,61,0,0,44,159,0,0,44,159,20,44,44,0,0,44,44,159,159,44,44,54,0,0,44,54,0,0,44,0,0,0,0,0,0,0,173,109,0,0,44,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,44,0,173,109,44,0,44,159,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,8,14,0,0,8,14,0,0,8,14,0,0,8,14,14,0,8,14,0,0,0,4,0,0,8,14,0,0,0,2,0,0,8,2,0,0,8,14,0,0,8,14,0,0,8,0,0,0,8,14,14,0,8,4,0,0,8,4,0,0,8,0,0,0,0,0,0,0,0,2,0,0,8,14,0,0,8,14,0,0,8,14,0,0,8,14,14,0,8,14,0,0,0,5,0,0,8,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,44,159,44,0,44,0,0,0,44,159,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,159,44,0,44,54,0,0,44,159,44,0,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,0,0,44,159,0,0,44,159,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,0,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,8,14,0,0,8,0,0,0,8,14,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,2,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,14,0,8,14,14,0,8,14,14,0,0,0,0,0,0,0,0,0,8,14,0,0,8,0,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,14,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,14,0,0,8,14,0,0,0,0,0,0,0,0,0,0,0,1,0,0,8,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,44,159,44,0,173,109,44,0,44,159,44,0,44,159,159,44,44,159,102,44,44,159,20,44,44,159,0,0,173,109,0,0,0,0,0,0,44,0,0,0,44,54,0,0,44,54,0,0,44,159,159,44,44,0,0,44,44,159,20,44,44,159,171,0,44,61,171,0,0,65,0,0,44,159,44,0,173,109,44,0,44,159,44,0,44,159,159,44,44,159,102,44,44,159,20,44,44,159,0,0,173,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,14,0,0,0,4,0,0,8,14,0,0,8,14,14,0,8,14,0,0,8,14,0,0,8,14,0,0,0,3,0,0,0,0,0,0,8,0,0,0,8,4,0,0,8,4,0,0,8,14,14,0,8,0,0,0,8,14,0,0,8,14,14,0,8,3,14,0,0,3,0,0,8,14,0,0,0,5,0,0,8,14,0,0,8,14,14,0,8,14,0,0,8,14,0,0,8,14,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,109,0,0,44,61,0,0,173,109,0,0,0,0,0,0,0,0,0,0,44,159,0,0,44,159,0,0,44,159,0,0,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,44,0,44,54,0,0,44,159,44,0,0,0,0,0,0,0,0,0,173,109,44,0,44,54,0,0,173,109,44,0,0,0,0,0,0,0,0,0,44,159,44,0,44,0,0,0,44,159,44,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,14,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,14,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,0,0,0,8,14,0,0,0,0,0,0,0,0,0,0,8,14,14,0,8,14,14,0,8,14,14,0,0,0,0,0,0,0,0,0,8,14,0,0,8,3,0,0,8,14,0,0,0,0,0,0,0,0,0,0,0,6,0,0,8,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,8,14,0,0,8,0,0,0,8,14,0,0,0,0,0,0];
	for(n=0;n<180+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Big Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) bigTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) bigTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) bigTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) bigTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) bigTruck1(x,y,z)
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

function bigTruck1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9];
	var I=[0,0,0,0,0,173,173,156,0,0,173,173,156,0,0,0,44,155,20,44,0,44,155,102,156,0,44,155,155,139,0,44,155,156,0,173,173,155,0,0,173,173,155,0,0,0,156,155,0,0,0,0,65,0,0,0,44,61,171,0,0,44,155,171,0,0,44,0,20,44,0,44,0,0,44,0,44,155,102,44,0,44,0,0,0,0,44,0,0,0,0,44,0,0,0,0,44,0,0,0,0,0,0,0,0,173,173,156,0,0,173,173,156,0,0,0,44,155,20,44,0,44,155,102,156,0,44,155,155,139,0,44,155,156,0,173,173,155,0,0,173,173,155,0,0,0,156,155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,2,0,0,0,0,4,0,0,0,0,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,2,0,0,0,14,2,0,0,0,14,0,0,0,0,14,0,0,6,0,14,0,0,6,0,14,0,0,6,0,14,0,0,0,0,14,0,0,0,0,14,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,5,0,0,0,0,0,0,6,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<200+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigTruck2(x,y,z){
	var X=[x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2];
	var I=[0,156,155,0,0,0,44,0,0,0,0,156,155,0,0,0,0,0,0,0,173,173,155,0,0,0,44,0,0,0,173,173,155,0,0,0,0,0,0,0,173,173,155,0,0,0,44,0,0,0,173,173,155,0,0,0,0,0,0,0,0,44,155,156,0,0,44,0,0,0,0,44,155,156,0,0,0,0,0,0,0,44,155,155,139,0,44,155,102,44,0,44,155,155,139,0,0,0,0,0,0,44,155,102,156,0,44,0,44,44,0,44,155,102,156,0,0,0,0,0,0,44,155,20,44,0,44,155,20,44,0,44,155,20,44,0,0,0,102,0,173,173,155,0,0,0,44,155,171,0,173,173,155,0,0,0,0,0,0,0,173,173,155,0,0,0,44,61,171,0,173,173,155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,4,0,0,0,0,14,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,14,0,14,6,0,0,0,0,1,0,0,0,0,0,0,0,0,0,6,0,14,0,0,6,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<200+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigTruck3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-9,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-9,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-9,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-9,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,156,155,0,0,173,173,155,0,0,173,173,155,0,0,0,44,155,156,0,0,44,155,155,139,0,44,155,102,156,0,44,155,20,44,173,173,155,0,0,173,173,155,0,0,0,0,0,0,0,0,44,0,0,0,0,44,0,0,0,0,44,0,0,0,0,44,0,0,0,0,44,155,102,44,0,44,0,0,44,0,44,155,20,44,0,44,155,171,0,0,44,61,171,0,0,0,65,0,0,0,156,155,0,0,173,173,155,0,0,173,173,155,0,0,0,44,155,156,0,0,44,155,155,139,0,44,155,102,156,0,44,155,20,44,173,173,155,0,0,173,173,155,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,14,0,0,0,0,14,0,0,0,0,14,0,0,0,0,14,0,0,6,0,14,0,0,6,0,14,0,0,6,0,14,0,0,0,0,14,3,0,0,0,0,3,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<200+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,173,173,155,0,0,0,44,61,171,0,173,173,155,0,0,0,0,0,0,0,173,173,155,0,0,0,44,155,171,0,173,173,155,0,0,0,0,0,102,0,0,44,155,20,44,0,44,155,20,44,0,44,155,20,44,0,0,0,0,0,0,44,155,102,156,0,44,0,0,44,0,44,155,102,156,0,0,0,0,0,0,44,155,155,139,0,44,155,102,44,0,44,155,155,139,0,0,0,0,0,0,44,155,156,0,0,44,0,0,0,0,44,155,156,0,0,0,0,0,0,173,173,155,0,0,0,44,0,0,0,173,173,155,0,0,0,0,0,0,0,173,173,155,0,0,0,44,0,0,0,173,173,155,0,0,0,0,0,0,0,0,156,155,0,0,0,44,0,0,0,0,156,155,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,14,0,0,6,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,14,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,14,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,14,0,0,0,0,5,0,0,0];
	for(n=0;n<200+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function forkliftGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Forklift in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) forklift1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) forklift2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) forklift3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) forklift4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) forklift1(x,y,z)
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

function forklift1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6];
	var I=[44,0,0,0,44,0,0,0,44,0,0,0,173,35,35,171,159,20,20,171,159,35,35,171,173,159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,159,20,20,171,159,109,20,171,159,20,20,171,159,159,0,0,0,0,0,0,44,0,0,0,44,0,0,0,173,35,35,171,159,20,20,171,159,35,35,171,173,159,0,0];
	var D=[8,0,0,0,8,0,0,0,8,0,0,0,0,15,15,15,4,0,0,15,4,15,15,15,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,15,4,2,0,15,4,0,0,15,4,4,0,0,8,0,0,0,8,0,0,0,8,0,0,0,0,15,15,15,4,0,0,15,4,15,15,15,0,4,0,0];
	for(n=0;n<84+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function forklift2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1];
	var I=[173,159,0,0,159,159,0,0,173,159,0,0,159,35,35,171,159,20,20,171,159,35,35,171,159,20,20,171,159,109,20,171,159,20,20,171,173,35,35,171,159,20,20,171,173,35,35,171,44,0,0,0,0,0,0,0,44,0,0,0,44,0,0,0,0,0,0,0,44,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,4,0,0,4,4,0,0,0,4,0,0,4,15,15,15,4,0,0,15,4,15,15,15,4,0,0,15,4,1,0,15,4,0,0,15,0,15,15,15,4,0,0,15,0,15,15,15,8,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0];
	for(n=0;n<84+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function forklift3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[173,159,0,0,159,35,35,171,159,20,20,171,173,35,35,171,44,0,0,0,44,0,0,0,0,0,0,0,159,159,0,0,159,20,20,171,159,109,20,171,159,20,20,171,0,0,0,0,0,0,0,0,0,0,0,0,173,159,0,0,159,35,35,171,159,20,20,171,173,35,35,171,44,0,0,0,44,0,0,0,44,0,0,0];
	var D=[0,4,0,0,4,15,15,15,4,0,0,15,0,15,15,15,8,0,0,0,8,0,0,0,8,0,0,0,4,4,0,0,4,0,0,15,4,3,0,15,4,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,15,15,15,4,0,0,15,0,15,15,15,8,0,0,0,8,0,0,0,8,0,0,0];
	for(n=0;n<84+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function forklift4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1];
	var I=[0,0,0,0,0,0,0,0,44,0,0,0,44,0,0,0,0,0,0,0,44,0,0,0,44,0,0,0,0,0,0,0,44,0,0,0,173,35,35,171,159,20,20,171,173,35,35,171,159,20,20,171,159,109,20,171,159,20,20,171,159,35,35,171,159,20,20,171,159,35,35,171,173,159,0,0,159,159,0,0,173,159,0,0];
	var D=[8,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,15,15,15,4,0,0,15,0,15,15,15,4,0,0,15,4,0,0,15,4,0,0,15,4,15,15,15,4,0,0,15,4,15,15,15,0,4,0,0,4,4,0,0,0,4,0,0];
	for(n=0;n<84+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function jeepGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Jeep in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) jeep1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) jeep2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) jeep3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) jeep4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) jeep1(x,y,z)
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

function jeep1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6];
	var I=[0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,0,173,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,159,44,173,159,159,0,0,65,0,0,44,61,0,0,44,159,20,44,44,0,0,44,44,159,0,44,44,159,159,44,44,159,159,0,0,96,0,0,173,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,159,44,173,159,159,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,13,0,0,8,13,0,0,8,13,0,0,8,13,13,0,8,13,13,0,0,13,13,0,0,2,0,0,8,2,0,0,8,13,0,0,8,0,0,0,8,13,0,0,8,13,13,0,8,13,13,0,0,4,0,0,0,13,0,0,8,13,0,0,8,13,0,0,8,13,13,0,8,13,13,0,0,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6];
	for(n=0;n<140+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function jeep2(x,y,z){
	var X=[x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,173,159,159,0,44,159,159,0,173,159,159,0,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,0,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,173,159,0,0,44,61,0,0,173,159,0,0,0,0,0,0,0,0,0,0,0,96,0,0,0,65,0,0,0,96,0,0,0,0,0,0];
	var D=[0,0,0,0,0,13,13,0,8,13,13,0,0,13,13,0,0,0,0,6,0,0,0,0,8,13,13,0,8,13,13,0,8,13,13,0,0,0,0,0,0,0,0,0,8,13,13,0,8,13,0,0,8,13,13,0,0,0,0,0,0,0,0,0,8,13,0,0,8,0,0,0,8,13,0,0,0,0,0,0,0,0,0,0,8,13,0,0,8,13,0,0,8,13,0,0,0,0,0,0,0,0,0,0,0,13,0,0,8,5,0,0,0,13,0,0,0,0,0,0,6,0,0,0,0,7,0,0,0,5,0,0,0,7,0,0,0,0,0,0];
	for(n=0;n<140+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function jeep3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,173,159,159,0,44,159,159,44,44,159,159,44,44,159,102,44,44,159,20,44,173,159,0,0,0,96,0,0,44,159,159,0,44,159,159,44,44,159,0,44,44,0,0,44,44,159,20,44,44,61,0,0,0,65,0,0,173,159,159,0,44,159,159,44,44,159,159,44,44,159,102,44,44,159,20,44,173,159,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,0,8,13,13,0,8,13,13,0,8,13,0,0,8,13,0,0,0,13,0,0,0,5,0,0,8,13,13,0,8,13,13,0,8,13,0,0,8,0,0,0,8,13,0,0,8,3,0,0,0,3,0,0,0,13,13,0,8,13,13,0,8,13,13,0,8,13,0,0,8,13,0,0,0,13,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0];
	for(n=0;n<140+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function jeep4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,96,0,0,0,65,0,0,0,96,0,0,0,0,0,0,0,0,0,0,173,159,0,0,44,61,0,0,173,159,0,0,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,0,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,159,44,44,159,159,44,0,0,0,0,0,0,0,0,173,159,159,0,44,159,159,0,173,159,159,0,0,0,0,0];
	var D=[0,0,0,0,0,6,0,0,0,4,0,0,0,14,0,0,6,0,0,0,0,0,0,0,0,13,0,0,8,4,0,0,0,13,0,0,0,0,0,0,0,0,0,0,8,13,0,0,8,13,0,0,8,13,0,0,0,0,0,0,0,0,0,0,8,13,0,0,8,0,0,0,8,13,0,0,0,0,0,0,0,0,0,0,8,13,13,0,8,13,0,0,8,13,13,0,0,0,0,0,0,0,0,0,8,13,13,0,8,13,13,0,8,13,13,0,0,0,0,0,0,0,0,6,0,13,13,0,8,13,13,0,0,13,13,0,0,0,0,0];
	for(n=0;n<140+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryTruckGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Military Truck in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) militaryTruck1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) militaryTruck2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) militaryTruck3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) militaryTruck4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) militaryTruck1(x,y,z)
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

function militaryTruck1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8];
	var I=[0,0,0,0,0,173,173,128,0,0,173,173,24,20,44,0,128,24,102,44,0,128,24,24,44,173,173,24,24,44,173,173,24,102,44,0,128,24,24,44,0,0,0,0,0,0,0,65,0,0,0,44,61,0,0,0,44,24,20,44,0,44,0,0,44,0,44,0,0,44,0,44,0,0,44,0,44,0,0,44,0,24,64,64,44,0,65,0,0,0,0,0,0,0,0,173,173,128,0,0,173,173,24,20,44,0,128,24,102,44,0,128,24,24,44,173,173,24,24,44,173,173,24,102,44,0,128,24,24,44,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,4,0,0,1,0,4,0,0,1,0,0,0,0,1,0,0,0,0,1,0,7,0,0,1,0,0,0,0,0,0,0,2,0,0,0,9,2,0,0,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,0,3,8,1,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,5,0,0,1,0,5,0,0,1,0,0,0,0,1,0,0,0,0,1,0,7,0,0,1,0,0,0,0,0];
	for(n=0;n<135+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryTruck2(x,y,z){
	var X=[x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1];
	var I=[0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,128,24,24,44,0,24,64,64,44,0,128,24,24,44,173,173,24,102,44,0,44,0,0,44,173,173,24,102,44,173,173,24,24,44,0,44,0,0,44,173,173,24,24,44,0,128,24,24,44,0,44,0,0,44,0,128,24,24,44,0,128,24,102,44,0,44,0,0,44,0,128,24,102,44,173,173,24,20,44,0,44,24,20,44,173,173,24,20,44,173,173,128,0,0,0,44,61,0,0,173,173,128,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,1,0,0,0,8,1,0,4,0,0,1,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,6,0,0,1,0,9,0,0,1,0,7,0,0,1,0,6,0,0,1,0,9,0,0,1,0,7,0,0,1,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,0,1,0,0,0,9,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0];
	for(n=0;n<135+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryTruck3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z];
	var I=[0,0,0,0,0,0,128,24,24,44,173,173,24,102,44,173,173,24,24,44,0,128,24,24,44,0,128,24,102,44,173,173,24,20,44,173,173,128,0,0,0,0,0,0,0,0,65,0,0,0,0,24,64,64,44,0,44,0,0,44,0,44,0,0,44,0,44,0,0,44,0,44,0,0,44,0,44,24,20,44,0,44,61,0,0,0,0,65,0,0,0,0,0,0,0,0,128,24,24,44,173,173,24,102,44,173,173,24,24,44,0,128,24,24,44,0,128,24,102,44,173,173,24,20,44,173,173,128,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,6,0,0,1,0,0,0,0,1,0,0,0,0,1,0,4,0,0,1,0,4,0,0,1,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,8,1,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,9,0,0,1,0,9,3,0,0,0,0,3,0,0,0,0,0,0,0,0,6,0,0,1,0,0,0,0,1,0,0,0,0,1,0,5,0,0,1,0,5,0,0,1,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0];
	for(n=0;n<135+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryTruck4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1];
	var I=[0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,173,173,128,0,0,0,44,61,0,0,173,173,128,0,0,173,173,24,20,44,0,44,24,20,44,173,173,24,20,44,0,128,24,102,44,0,44,0,0,44,0,128,24,102,44,0,128,24,24,44,0,44,0,0,44,0,128,24,24,44,173,173,24,24,44,0,44,0,0,44,173,173,24,24,44,173,173,24,102,44,0,44,0,0,44,173,173,24,102,44,0,128,24,24,44,0,24,64,64,44,0,128,24,24,44,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,9,4,0,0,0,0,0,0,0,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,6,0,0,1,0,9,0,0,1,0,7,0,0,1,0,6,0,0,1,0,9,0,0,1,0,7,0,0,1,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,0,0,0,1,0,9,0,0,1,0,0,0,0,1,0,5,0,0,1,0,0,2,8,1,0,5,0,0,1,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0];
	for(n=0;n<135+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function duneBuggyGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Navy SEAL Dune Buggy in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) duneBuggy1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) duneBuggy2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) duneBuggy3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) duneBuggy4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) duneBuggy1(x,y,z)
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

function duneBuggy1(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7];
	var I=[173,0,0,109,0,0,43,101,0,44,101,101,43,1,101,173,44,101,44,101,101,139,0,0,1,0,139,1,0,139,44,0,139,43,109,1,1,0,0,109,1,44,173,0,0,109,0,0,43,101,0,44,101,101,43,1,101,173,44,101,44,101,101];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,6,0,0,6,0,0,0,0,0,0,3,6,6,0,0,7,6,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
	for(n=0;n<63+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function duneBuggy2(x,y,z){
	var X=[x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1];
	var I=[44,101,101,109,1,44,44,101,101,173,44,101,1,0,0,173,44,101,43,1,101,43,109,1,43,1,101,44,101,101,44,0,139,44,101,101,43,101,0,1,0,139,43,101,0,109,0,0,1,0,139,109,0,0,173,0,0,139,0,0,173,0,0];
	var D=[8,0,0,4,6,0,8,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,2,0,0,6,0,0,3,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<63+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function duneBuggy3(x,y,z){
	var X=[x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1];
	var I=[44,101,101,173,44,101,43,1,101,44,101,101,43,101,0,109,0,0,173,0,0,109,1,44,1,0,0,43,109,43,44,0,139,1,0,139,1,0,139,139,0,0,44,101,101,173,44,101,43,1,101,44,101,101,43,101,0,109,0,0,173,0,0];
	var D=[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,0,6,0,0,0,2,0,0,0,0,6,0,0,6,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
	for(n=0;n<63+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function duneBuggy4(x,y,z){
	var X=[x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1];
	var I=[173,0,0,139,0,0,173,0,0,109,0,0,1,0,139,109,0,0,43,101,0,1,0,139,43,101,0,44,101,101,44,0,139,44,101,101,43,1,101,43,109,1,43,1,101,173,44,101,1,0,0,173,44,101,44,101,101,109,1,44,44,101,101];
	var D=[0,0,0,0,0,0,0,0,0,2,0,0,6,0,0,3,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,0,0,0,0,0,0,6,0,0,0,0,0,8,0,0,5,6,0,8,0,0];
	for(n=0;n<63+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redCarGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Red Car in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) redCar1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) redCar2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) redCar3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) redCar4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) redCar1(x,y,z)
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

function redCar1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7];
	var I=[0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,0,173,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,159,44,173,159,109,0,0,0,0,0,0,65,0,0,44,159,0,0,44,159,20,44,44,0,44,44,44,0,0,44,44,0,0,44,44,44,109,0,0,96,0,0,0,96,0,0,173,159,0,0,44,159,20,44,44,159,102,44,44,159,159,44,44,159,159,44,173,159,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,14,0,0,8,14,0,5,8,14,0,5,8,14,14,5,8,14,14,5,0,14,3,0,0,0,0,0,0,2,0,0,8,14,0,0,8,14,0,5,8,0,13,0,8,0,0,0,8,0,0,5,8,0,3,0,0,5,0,0,0,4,0,0,0,14,0,0,8,14,0,5,8,14,0,5,8,14,14,5,8,14,14,5,0,14,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redCar2(x,y,z){
	var X=[x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,159,109,0,44,44,109,0,173,159,109,0,0,0,0,0,0,0,0,0,44,159,159,44,44,0,0,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,159,44,44,0,0,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,173,159,0,0,44,159,0,0,173,159,0,0,0,0,0,0,0,0,0,0,0,96,0,0,0,65,0,0,0,96,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,8,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,8,14,14,5,8,0,0,5,8,14,14,5,0,0,0,0,0,0,0,0,8,14,14,5,8,0,0,0,8,14,14,5,0,0,0,0,0,0,0,0,8,14,0,5,8,0,0,0,8,14,0,5,0,0,0,0,0,0,0,0,8,14,0,5,8,14,0,5,8,14,0,5,0,0,0,0,0,0,0,0,0,14,0,0,8,14,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,5,0,0,0,15,0,0,0,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redCar3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,173,159,109,0,44,159,159,44,44,159,159,44,44,159,102,44,44,159,20,44,173,159,0,0,0,96,0,0,0,96,0,0,44,44,109,0,44,0,0,44,44,0,0,44,44,0,0,44,44,159,20,44,44,159,0,0,0,65,0,0,0,0,0,0,173,159,109,0,44,159,159,44,44,159,159,44,44,159,102,44,44,159,20,44,173,159,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,2,0,8,14,14,5,8,14,14,5,8,14,0,5,8,14,0,5,0,14,0,0,0,5,0,0,0,4,0,0,8,0,2,0,8,0,0,5,8,0,0,0,8,0,0,0,8,14,0,5,8,14,0,0,0,3,0,0,0,0,0,0,0,14,2,0,8,14,14,5,8,14,14,5,8,14,0,5,8,14,0,5,0,14,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redCar4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,96,0,0,0,65,0,0,0,96,0,0,0,0,0,0,0,0,0,0,173,159,0,0,44,159,0,0,173,159,0,0,0,0,0,0,0,0,102,0,44,159,20,44,44,159,20,44,44,159,20,44,0,0,102,0,0,0,0,0,44,159,102,44,44,0,0,44,44,159,102,44,0,0,0,0,0,0,0,0,44,159,159,44,44,0,0,44,44,159,159,44,0,0,0,0,0,0,0,0,44,159,159,44,44,0,0,44,44,159,159,44,0,0,0,0,0,0,0,0,173,159,109,0,44,44,109,0,173,159,109,0,0,0,0,0];
	var D=[1,0,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,14,0,0,8,14,0,0,0,14,0,0,0,0,0,0,0,0,0,0,8,14,0,5,8,14,0,5,8,14,0,5,0,0,0,0,0,0,0,0,8,14,0,5,8,0,0,0,8,14,0,5,0,0,0,0,0,0,0,0,8,14,14,5,8,0,0,0,8,14,14,5,0,0,0,0,0,0,0,0,8,14,14,5,8,0,0,5,8,14,14,5,0,0,0,0,0,0,0,0,0,14,1,0,8,0,1,0,0,14,1,0,0,0,0,1];
	for(n=0;n<140+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function cityTankGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a City Tank in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) cityTank1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) cityTank2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) cityTank3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) cityTank4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) cityTank1(x,y,z)
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

function cityTank1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z+3,z+3,z+3,z+4,z+4,z+4,z+5,z+5,z+5,z+6,z+6,z+6,z+7,z+7,z+7];
	var I=[0,0,0,114,44,0,112,109,0,112,1,0,112,43,0,112,43,0,112,43,0,114,1,0,0,0,0,44,0,0,44,44,0,44,1,109,44,1,109,44,1,109,44,1,109,0,109,44,0,0,139,44,109,139,44,1,139,44,0,1,44,0,44,44,0,44,44,0,44,0,109,109,0,0,0,44,0,0,44,44,0,44,1,109,44,1,109,44,1,109,44,1,109,0,109,44,0,0,0,114,44,0,112,109,0,112,1,0,112,43,0,112,43,0,112,43,0,114,1,0];
	var D=[0,0,0,6,5,0,0,2,0,0,6,0,0,0,0,0,0,0,0,0,0,7,6,6,0,0,0,13,0,0,13,5,0,8,6,0,8,6,0,8,6,0,8,6,0,0,7,5,0,0,0,13,2,0,13,6,0,8,0,6,8,0,8,8,0,8,8,0,8,0,7,3,0,0,0,13,0,0,13,5,0,8,6,1,8,6,1,8,6,1,8,6,1,0,7,5,6,0,0,6,5,0,0,2,0,0,6,0,0,0,0,0,0,0,0,0,0,7,6,0];
	for(n=0;n<120+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function cityTank2(x,y,z){
	var X=[x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2];
	var I=[114,1,0,0,109,44,0,109,109,0,109,44,114,1,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,112,1,0,44,1,109,44,0,1,44,1,109,112,1,0,112,109,0,44,44,0,44,1,139,44,44,0,112,109,0,114,44,0,44,0,0,44,109,139,44,0,0,114,44,0,0,0,0,0,0,0,0,0,139,0,0,0,0,0,0];
	var D=[4,6,6,0,4,5,0,4,0,0,4,5,4,6,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,0,6,0,8,6,2,8,0,6,8,6,3,0,6,0,0,1,0,13,5,0,13,6,0,13,5,0,0,1,0,5,5,0,13,0,0,13,1,0,13,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0];
	for(n=0;n<120+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function cityTank3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z];
	var I=[114,1,0,112,43,0,112,43,0,112,43,0,112,1,0,112,109,0,114,44,0,0,0,0,0,109,44,44,1,109,44,1,109,44,1,109,44,1,109,44,44,0,44,0,0,0,0,0,0,109,109,44,0,44,44,0,44,44,0,44,44,1,1,44,1,139,44,109,139,0,0,139,0,109,44,44,1,109,44,1,109,44,1,109,44,1,109,44,44,0,44,0,0,0,0,0,114,1,0,112,43,0,112,43,0,112,43,0,112,1,0,112,109,0,114,44,0,0,0,0];
	var D=[6,6,0,0,0,0,0,0,0,0,0,0,0,6,0,0,3,0,7,5,0,6,0,0,0,6,5,8,6,0,8,6,0,8,6,0,8,6,0,13,5,0,13,0,0,0,0,0,0,6,2,8,0,8,8,0,8,8,0,8,8,6,6,13,6,0,13,3,0,0,0,0,0,6,5,8,6,1,8,6,1,8,6,1,8,6,1,13,5,0,13,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,6,0,0,3,0,7,5,0,0,0,0];
	for(n=0;n<120+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function cityTank4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z+1,z+1,z+1,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,139,0,0,0,0,0,0,114,44,0,44,0,0,44,109,139,44,0,0,114,44,0,112,109,0,44,44,0,44,1,139,44,44,0,112,109,0,112,1,0,44,1,109,44,0,1,44,1,109,112,1,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,112,43,0,44,1,109,44,0,44,44,1,109,112,43,0,114,1,0,0,109,44,0,109,109,0,109,44,114,1,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,13,0,0,13,0,0,13,0,0,4,5,0,0,0,0,13,5,0,13,6,0,13,5,0,0,0,0,0,6,0,8,6,2,8,0,6,8,6,3,0,6,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,0,0,0,8,6,2,8,0,8,8,6,3,0,0,0,5,6,0,0,5,5,0,5,1,0,5,5,5,6,6];
	for(n=0;n<120+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryHaulerGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Military Hauler in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Military Hauler to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Military Hauler behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Military Hauler to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Military Hauler in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							militaryHauler(x,y,z)
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

function militaryHauler(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21,z,z,z,z,z,z+1,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z+13,z+14,z+14,z+14,z+14,z+14,z+15,z+15,z+15,z+15,z+15,z+16,z+16,z+16,z+16,z+16,z+17,z+17,z+17,z+17,z+17,z+18,z+18,z+18,z+18,z+18,z+19,z+19,z+19,z+19,z+19,z+20,z+20,z+20,z+20,z+20,z+21,z+21,z+21,z+21,z+21];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,68,0,0,0,173,44,0,0,0,44,159,0,0,0,44,159,20,44,0,44,159,102,159,0,44,159,159,159,0,44,159,159,159,139,44,139,44,0,0,44,159,159,159,44,173,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,173,159,159,159,44,44,159,159,159,44,173,159,159,159,44,0,65,0,0,0,44,61,44,0,0,44,159,44,0,0,44,159,20,44,0,44,0,0,159,0,44,0,0,159,0,44,159,102,159,0,0,0,0,0,0,44,159,102,159,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,0,0,0,44,44,71,71,159,44,0,68,0,0,0,173,44,0,0,0,44,159,0,0,0,44,159,20,44,0,44,159,102,159,0,44,159,159,159,0,44,159,159,159,139,44,139,44,0,0,44,159,159,159,44,173,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,44,159,159,159,44,173,159,159,159,44,44,159,159,159,44,173,159,159,159,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,0,0,0,0,0,0,0,8,5,0,0,0,8,13,0,0,0,8,5,0,5,0,8,13,5,13,0,8,13,5,5,0,8,0,0,0,0,8,13,13,5,0,0,13,5,13,0,8,5,13,5,0,8,5,13,13,0,8,13,13,5,0,8,13,13,5,0,8,5,13,13,0,8,13,5,13,0,8,13,5,13,0,8,13,5,5,0,8,13,13,13,0,0,5,5,13,0,8,13,13,5,0,0,13,13,5,0,0,2,0,0,0,8,2,0,0,0,8,5,0,0,0,8,13,0,0,0,8,0,0,13,0,8,0,0,5,0,8,13,0,13,0,0,0,0,0,0,8,13,0,5,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,0,0,0,0,8,3,8,13,0,0,2,0,0,0,0,0,0,0,0,8,5,0,0,0,8,13,0,0,0,8,13,0,5,0,8,13,5,5,0,8,13,5,13,0,8,0,0,0,0,8,13,13,5,0,0,13,5,5,0,8,5,5,13,0,8,13,5,13,0,8,13,13,13,0,8,13,5,13,0,8,13,5,13,0,8,13,5,5,0,8,13,13,5,0,8,5,5,13,0,8,5,13,13,0,0,5,5,13,0,8,13,13,5,0,0,5,13,5,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<550+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
		if(I[n] == 63 || I[n] == 68){
			Level.setSignText(X[n],Y[n],Z[n],0,"==============")
			Level.setSignText(X[n],Y[n],Z[n],1,"()  ()")
			Level.setSignText(X[n],Y[n],Z[n],2,"()  ()")
			Level.setSignText(X[n],Y[n],Z[n],3,"==============")
		}
	}
}

function redBusGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Red Bus in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) redBus1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) redBus2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) redBus3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) redBus4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) redBus1(x,y,z)
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

function redBus1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z+11,z+11,z+11,z+11,z+12,z+12,z+12,z+12,z+13,z+13,z+13,z+13];
	var I=[0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,155,20,20,44,173,159,20,44,155,159,159,44,155,159,20,44,156,159,159,44,156,159,20,44,156,159,159,44,156,159,20,44,156,159,20,44,156,159,159,44,156,159,20,44,173,159,20,44,44,159,159,44,65,0,0,0,155,20,20,44,44,0,0,44,44,156,0,44,44,0,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,156,0,44,44,159,20,44,65,0,0,0,155,20,20,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,159,20,44,0,0,0,0,155,20,20,44,173,159,20,44,155,159,159,44,155,64,64,44,156,159,159,44,156,159,159,44,156,159,159,44,156,159,20,44,156,159,20,44,156,159,159,44,156,159,20,44,173,159,20,44,44,159,159,44,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,14,0,6,0,14,14,6,0,14,0,6,7,14,14,6,4,14,0,6,4,14,14,6,4,14,0,6,4,14,0,6,4,14,14,6,6,14,0,6,0,14,0,6,14,14,14,6,2,0,0,0,0,0,0,6,14,0,0,6,14,2,0,6,14,0,0,6,14,0,0,6,14,2,0,6,14,0,0,6,14,2,0,6,14,0,0,6,14,2,0,6,14,0,0,6,14,2,0,6,14,14,0,6,2,0,0,0,0,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,14,0,6,0,0,0,0,0,0,0,6,0,14,0,6,0,14,14,6,0,2,8,6,7,14,14,6,5,14,14,6,5,14,14,6,5,14,0,6,5,14,0,6,5,14,14,6,6,14,0,6,0,14,0,6,14,14,14,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6];
	for(n=0;n<336+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redBus2(x,y,z){
	var X=[x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-13,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-12,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-11,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-10,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-9,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-8,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3];
	var I=[0,0,0,0,44,159,159,44,44,159,20,44,44,159,20,44,44,159,159,44,0,0,0,0,0,0,0,0,173,159,20,44,44,156,0,44,44,0,0,44,173,159,20,44,0,0,0,0,0,0,0,0,156,159,20,44,44,0,0,44,44,0,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,159,44,44,156,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,20,44,44,0,0,44,44,0,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,20,44,44,156,0,44,44,0,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,20,44,44,156,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,155,159,20,44,44,0,0,44,44,0,0,44,155,64,64,44,0,0,0,0,0,0,0,0,155,159,159,44,44,156,0,44,44,0,0,44,155,159,159,44,0,0,0,0,0,102,0,0,173,159,20,44,44,0,0,44,44,0,0,44,173,159,20,44,0,102,0,0,0,0,0,0,155,20,20,44,155,20,20,44,155,20,20,44,155,20,20,44,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,14,14,14,6,14,14,0,6,14,14,0,6,14,14,14,6,0,0,0,6,0,0,0,0,0,14,0,6,14,1,0,6,14,0,0,6,0,14,0,6,0,0,0,0,0,0,0,0,5,14,0,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,14,6,14,1,0,6,14,0,0,6,7,14,14,6,0,0,0,0,0,0,0,0,6,14,0,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,0,6,14,1,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,14,6,14,0,0,6,14,0,0,6,7,14,14,6,0,0,0,0,0,0,0,0,6,14,0,6,14,1,0,6,14,0,0,6,7,14,14,6,0,0,0,0,0,0,0,0,4,14,14,6,14,0,0,6,14,0,0,6,4,14,14,6,0,0,0,0,0,0,0,0,0,14,0,6,14,0,0,6,14,0,0,6,0,3,8,6,0,0,0,0,0,0,0,0,0,14,14,6,14,1,0,6,14,0,0,6,0,14,14,6,0,0,0,0,0,0,0,0,0,14,0,6,14,0,0,6,14,0,0,6,0,14,0,6,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,6,0,0,0,0,0,0,0,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<336+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redBus3(x,y,z){
	var X=[x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0,44,159,159,44,173,159,20,44,156,159,20,44,156,159,159,44,156,159,20,44,156,159,20,44,156,159,159,44,156,159,159,44,156,159,159,44,155,64,64,44,155,159,159,44,173,159,20,44,155,20,20,44,0,0,0,0,44,159,20,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,155,20,20,44,65,0,0,0,44,159,20,44,44,156,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,156,0,44,44,0,0,44,44,0,0,44,44,156,0,44,44,0,0,44,155,20,20,44,65,0,0,0,44,159,159,44,173,159,20,44,156,159,20,44,156,159,159,44,156,159,20,44,156,159,20,44,156,159,159,44,156,159,20,44,156,159,159,44,155,159,20,44,155,159,159,44,173,159,20,44,155,20,20,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,14,14,6,0,14,0,6,7,14,0,6,4,14,14,6,4,14,0,6,4,14,0,6,4,14,14,6,4,14,14,6,6,14,14,6,0,0,8,6,0,14,14,6,0,14,0,6,0,0,0,6,0,0,0,0,14,14,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,14,0,0,6,0,0,0,6,3,0,0,0,14,14,0,6,14,3,0,6,14,0,0,6,14,3,0,6,14,0,0,6,14,3,0,6,14,0,0,6,14,3,0,6,14,0,0,6,14,0,0,6,14,3,0,6,14,0,0,6,0,0,0,6,3,0,0,0,14,14,14,6,0,14,0,6,7,14,0,6,5,14,14,6,5,14,0,6,5,14,0,6,5,14,14,6,5,14,0,6,6,14,14,6,0,14,0,6,0,14,14,6,0,14,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0];
	for(n=0;n<336+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function redBus4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+8,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+9,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+10,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+11,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+12,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13,x+13];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,65,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,155,20,20,44,155,20,20,44,155,20,20,44,155,20,20,44,0,0,0,0,0,102,0,0,173,159,20,44,44,0,0,44,44,0,0,44,173,159,20,44,0,102,0,0,0,0,0,0,155,159,159,44,44,0,0,44,44,156,0,44,155,159,159,44,0,0,0,0,0,0,0,0,155,64,64,44,44,0,0,44,44,0,0,44,155,159,20,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,156,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,0,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,20,44,44,0,0,44,44,156,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,20,44,44,0,0,44,44,0,0,44,156,159,20,44,0,0,0,0,0,0,0,0,156,159,159,44,44,0,0,44,44,156,0,44,156,159,159,44,0,0,0,0,0,0,0,0,156,159,20,44,44,0,0,44,44,0,0,44,156,159,20,44,0,0,0,0,0,0,0,0,173,159,20,44,44,0,0,44,44,156,0,44,173,159,20,44,0,0,0,0,0,0,0,0,44,159,159,44,44,159,20,44,44,159,20,44,44,159,159,44,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,14,0,6,14,0,0,6,14,0,0,6,0,14,0,6,0,0,0,0,0,0,0,0,0,14,14,6,14,0,0,6,14,0,0,6,0,14,14,6,0,0,0,0,0,0,0,0,0,1,8,6,14,0,0,6,14,0,0,6,0,14,0,6,0,0,0,0,0,0,0,0,5,14,14,6,14,0,0,6,14,0,0,6,5,14,14,6,0,0,0,0,0,0,0,0,6,14,14,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,14,6,14,0,0,6,14,0,0,6,7,14,14,6,0,0,0,0,0,0,0,0,6,14,0,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,0,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,6,14,14,6,14,0,0,6,14,0,0,6,7,14,14,6,0,0,0,0,0,0,0,0,4,14,0,6,14,0,0,6,14,0,0,6,7,14,0,6,0,0,0,0,0,0,0,0,0,14,0,6,14,0,0,6,14,0,0,6,0,14,0,6,0,0,0,0,0,0,0,6,14,14,14,6,14,14,0,6,14,14,0,6,14,14,14,6,0,0,0,0];
	for(n=0;n<336+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigMilitaryTankGUI(x,y,z){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(ctx); 
				popup.setTitle("Are you sure?")
				popup.setMessage("This will place a Big Military Tank in the direction you're looking.")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							yaw = getYaw()
							while(yaw > 360){
								yaw = yaw-360
							}
							while(yaw < 0){
								yaw = yaw+360
							}
							if(yaw >= 0 && yaw <= 45) bigMilitaryTank1(x,y,z)
							else if(yaw >= 45 && yaw <= 135) bigMilitaryTank2(x,y,z)
							else if(yaw >= 135 && yaw <= 225) bigMilitaryTank3(x,y,z)
							else if(yaw >= 225 && yaw <= 315) bigMilitaryTank4(x,y,z)
							else if(yaw >= 315 && yaw <= 360) bigMilitaryTank1(x,y,z)
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

function bigMilitaryTank1(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7];
	var I=[0,0,0,0,114,159,44,0,112,159,44,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,109,0,114,159,44,0,0,0,0,0,0,159,44,0,0,159,159,0,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,109,0,0,0,0,139,0,159,44,139,0,159,159,139,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,109,0,0,0,0,0,0,159,44,0,0,159,159,0,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,109,0,0,0,0,0,114,159,44,0,112,159,44,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,109,0,114,159,44,0];
	var D=[6,0,0,0,6,5,5,0,0,13,5,0,0,5,0,0,0,5,0,0,0,13,0,0,0,13,0,0,7,5,5,0,0,0,0,0,0,13,5,0,0,13,5,0,0,5,13,5,0,13,13,5,0,13,13,13,0,13,13,5,0,13,3,0,0,0,0,0,0,5,5,0,0,13,13,0,0,5,13,13,0,5,13,13,0,13,13,13,0,13,13,5,0,5,3,0,0,0,0,0,0,5,5,0,0,13,13,0,0,13,13,13,0,13,13,5,0,13,13,5,0,13,13,13,0,5,3,0,0,0,0,0,6,13,5,0,0,13,5,0,0,5,1,0,0,5,1,0,0,13,1,0,0,5,1,0,7,13,5,6];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigMilitaryTank2(x,y,z){
	var X=[x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-7,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-6,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-5,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[114,159,44,0,0,159,109,0,0,159,109,0,0,159,109,0,114,159,44,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,44,0,0,159,159,0,0,159,159,139,0,159,159,0,112,159,44,0,114,159,44,0,0,159,44,0,0,159,44,139,0,159,44,0,114,159,44,0,0,0,0,0,0,0,0,0,0,0,0,139,0,0,0,0,0,0,0,0];
	var D=[4,5,5,0,0,13,0,0,0,5,0,0,0,5,0,0,4,13,5,6,0,13,2,0,0,13,13,5,0,13,13,5,0,13,13,13,0,5,3,0,0,13,2,0,0,13,13,13,0,13,13,13,0,13,13,5,0,13,3,0,0,5,2,0,0,13,13,5,0,5,13,13,0,13,13,5,0,5,3,0,0,5,2,0,0,5,13,5,0,5,13,13,0,13,13,13,0,5,3,0,0,13,5,0,0,13,5,0,0,13,13,0,0,13,13,0,0,13,5,0,5,5,5,0,0,13,5,0,0,5,5,0,0,5,5,0,5,13,5,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigMilitaryTank3(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[114,159,44,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,44,0,114,159,44,0,0,0,0,0,0,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,0,0,159,44,0,0,0,0,0,0,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,139,0,159,44,139,0,0,0,139,0,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,159,0,159,159,0,0,159,44,0,0,0,0,0,114,159,44,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,109,0,112,159,44,0,114,159,44,0,0,0,0,0];
	var D=[6,13,5,0,0,5,0,0,0,13,0,0,0,5,0,0,0,5,0,0,0,13,5,0,7,13,5,0,6,0,0,0,0,5,2,0,0,13,13,13,0,13,13,5,0,13,13,5,0,13,13,13,0,13,13,0,0,5,5,0,0,0,0,0,0,5,2,0,0,13,13,5,0,13,13,13,0,5,13,13,0,5,13,13,0,13,13,0,0,5,5,0,0,0,0,0,0,13,2,0,0,13,13,5,0,13,13,13,0,13,13,5,0,5,13,5,0,13,5,0,0,13,5,0,0,0,0,0,6,5,5,6,0,13,1,0,0,13,1,0,0,5,1,0,0,5,1,0,0,13,5,0,7,5,5,0,0,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function bigMilitaryTank4(x,y,z){
	var X=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+5,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+6,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7,x+7];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2];
	var I=[0,0,0,0,0,0,0,0,0,0,0,139,0,0,0,0,0,0,0,0,114,159,44,0,0,159,44,0,0,159,44,139,0,159,44,0,114,159,44,0,112,159,44,0,0,159,159,0,0,159,159,139,0,159,159,0,112,159,44,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,112,159,109,0,0,159,159,159,0,159,159,159,0,159,159,159,112,159,109,0,114,159,44,0,0,159,109,0,0,159,109,0,0,159,109,0,114,159,44,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,13,5,0,0,5,5,0,0,5,5,0,0,13,5,0,4,5,5,0,0,13,5,0,0,13,5,0,0,13,13,0,0,13,13,0,0,13,5,0,0,5,2,0,0,13,13,13,0,5,13,13,0,5,13,5,0,5,3,0,0,5,2,0,0,13,13,5,0,5,13,13,0,13,13,5,0,5,3,0,0,13,2,0,0,13,13,5,0,13,13,13,0,13,13,13,0,13,3,0,0,5,2,0,0,13,13,13,0,13,13,5,0,13,13,5,0,13,3,0,5,13,5,0,0,5,1,0,0,5,1,0,0,13,1,0,5,5,5,6];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function sixBarreledTankGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Six Barreled Tank in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Six Barreled Tank to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Six Barreled Tank behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Six Barreled Tank to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Six Barreled Tank in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							sixBarreledTank(x,y,z)
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

function sixBarreledTank(x,y,z){
	var X=[x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7];
	var I=[0,0,0,139,0,0,0,139,0,0,0,139,0,0,109,159,0,0,109,109,0,0,0,0,0,0,0,0,114,44,139,0,112,109,139,0,112,159,139,0,112,159,159,109,112,159,159,109,112,159,159,44,114,159,109,0,44,109,0,139,44,159,0,139,44,159,109,139,44,0,159,159,44,0,0,109,44,0,0,44,44,159,109,0,44,109,0,0,44,159,0,0,44,159,109,0,44,0,159,109,44,0,0,109,44,0,0,44,44,159,109,0,44,109,0,139,44,159,0,139,44,159,109,139,44,0,159,159,44,0,0,109,44,0,0,44,44,159,109,0,114,44,139,0,112,109,139,0,112,159,139,0,112,159,159,109,112,159,159,109,112,159,159,44,114,159,109,0,0,0,0,139,0,0,0,139,0,0,0,139,0,0,109,159,0,0,109,109,0,0,0,0,0,0,0,0];
	var D=[6,0,0,0,0,0,0,0,0,0,0,0,0,0,4,9,0,0,7,3,0,0,0,0,0,0,0,0,6,5,0,0,0,2,0,0,0,9,0,0,0,9,9,2,0,9,9,3,0,9,9,5,7,9,3,0,8,0,0,0,8,9,0,0,8,9,2,0,8,0,9,9,8,0,0,3,8,0,0,5,8,9,3,0,8,2,0,0,8,9,0,0,8,9,2,0,8,0,9,2,8,0,0,3,8,0,0,5,8,9,3,0,8,1,0,0,8,9,0,0,8,9,2,0,8,0,9,9,8,0,0,3,8,0,0,5,8,9,3,0,6,5,0,0,0,2,0,0,0,9,0,0,0,9,9,2,0,9,9,3,0,9,9,5,7,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,9,0,0,7,3,0,0,0,0,0,0,0,6];
	for(n=0;n<196+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function tankWithTwoGunsGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Tank With Two Guns in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Tank With Two Guns to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Tank With Two Guns behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Tank With Two Guns to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Tank With Two Guns in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							tankWithTwoGuns(x,y,z)
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

function tankWithTwoGuns(x,y,z){
	var X=[x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-4,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+3,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4,x+4];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10,z,z,z,z,z+1,z+1,z+1,z+1,z+2,z+2,z+2,z+2,z+3,z+3,z+3,z+3,z+4,z+4,z+4,z+4,z+5,z+5,z+5,z+5,z+6,z+6,z+6,z+6,z+7,z+7,z+7,z+7,z+8,z+8,z+8,z+8,z+9,z+9,z+9,z+9,z+10,z+10,z+10,z+10];
	var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,0,0,101,101,0,0,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,186,0,0,0,186,0,0,44,159,101,0,44,0,0,0,109,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,114,109,0,0,112,159,44,0,112,159,109,101,112,159,43,101,112,159,43,101,112,159,43,0,112,159,43,0,114,159,109,0,0,0,0,0,0,0,0,0,0,0,0,0,44,109,0,0,44,159,44,0,44,159,43,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,159,109,0,0,0,139,0,0,0,139,0,0,0,139,0,44,44,139,0,44,159,139,0,44,159,159,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,159,109,0,0,0,0,0,0,0,0,0,0,0,0,0,44,109,0,0,44,159,44,0,44,159,43,44,44,0,0,44,44,0,0,44,44,0,0,44,44,0,0,44,44,159,109,0,0,0,0,0,0,0,0,0,0,0,0,0,114,109,0,0,112,159,44,0,112,159,109,101,112,109,43,101,112,159,43,101,112,159,43,0,112,159,43,0,114,159,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,186,0,0,0,186,0,0,44,159,101,0,109,0,0,0,44,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,0,0,101,101,0,0,101,101,0,0,0,0,0,0,0,0,0,0,0,0];
	var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,13,9,0,0,13,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,0,0,0,9,5,0,0,9,2,0,0,9,5,0,0,9,5,0,0,9,5,0,0,9,5,0,7,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,8,2,0,0,8,9,5,0,8,9,5,5,8,0,0,5,8,0,0,5,8,0,0,5,8,0,0,5,8,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,8,5,0,0,8,9,0,0,8,9,9,5,8,0,0,5,8,0,0,5,8,0,0,5,8,0,0,5,8,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,8,2,0,0,8,9,5,0,8,9,5,5,8,0,0,5,8,0,0,5,8,0,0,5,8,0,0,5,8,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,0,0,0,9,5,0,0,9,2,0,0,5,5,0,0,9,5,0,0,9,5,0,0,9,5,0,7,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,13,9,0,0,5,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<396+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function grayHumveeGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Gray Humvee behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Gray Humvee to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Gray Humvee in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Gray Humvee to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Gray Humvee behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							grayHumvee(x,y,z)
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

function grayHumvee(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z];
	var I=[173,109,0,44,159,44,44,159,1,44,159,44,44,159,109,44,109,0,173,109,0,0,96,0,44,54,109,44,109,44,44,0,44,44,0,44,44,159,44,44,159,171,44,61,171,0,65,0,44,54,109,44,109,44,44,0,44,44,0,44,44,159,44,44,159,171,44,61,171,0,65,0,173,109,109,44,159,44,44,159,1,44,159,44,44,159,109,44,109,0,173,109,0,0,96,0];
	var D=[0,6,2,8,9,13,8,9,6,8,9,13,8,9,5,8,7,0,0,6,0,0,5,0,8,2,2,8,3,8,8,0,8,8,0,8,8,9,13,8,9,7,8,3,7,0,3,0,8,2,2,8,3,8,8,0,8,8,0,8,8,9,13,8,9,7,8,3,7,0,3,0,0,6,2,8,9,13,8,9,6,8,9,13,8,9,4,8,7,0,0,6,0,6,5,0];
	for(n=0;n<96+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function humveeGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Humvee behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Humvee to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Humvee in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Humvee to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Humvee behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							humvee(x,y,z)
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

function humvee(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+3];
	var Z=[z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z];
	var I=[0,96,0,173,128,128,44,24,44,44,24,24,44,24,44,44,24,128,44,128,0,173,128,0,0,96,0,0,0,0,44,54,128,44,128,44,44,0,44,44,0,44,44,24,44,44,24,171,44,61,171,0,65,0,0,0,0,44,54,128,44,128,44,44,0,44,44,0,44,44,24,44,44,24,171,44,61,171,0,65,0,0,96,0,173,128,128,44,24,44,44,24,24,44,24,44,44,24,128,44,128,0,173,128,0,0,96,0];
	var D=[0,4,0,0,6,2,9,2,9,9,2,2,9,2,9,9,2,5,9,7,0,0,6,0,6,5,0,0,0,0,9,2,2,9,3,9,9,0,9,9,0,9,9,2,9,9,2,7,9,3,7,0,3,0,0,0,0,9,2,2,9,3,9,9,0,9,9,0,9,9,2,9,9,2,7,9,3,7,0,3,0,0,4,6,0,6,2,9,2,9,9,2,2,9,2,9,9,2,4,9,7,0,0,6,0,0,5,0];
	for(n=0;n<108+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function humveeWithMachineGunGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Humvee With Machine Gun behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Humvee With Machine Gun to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Humvee With Machine Gun in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Humvee With Machine Gun to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Humvee With Machine Gun behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							humveeWithMachineGun(x,y,z)
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

function humveeWithMachineGun(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5];
	var Z=[z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z-1,z,z,z,z,z];
	var I=[173,128,128,0,0,44,24,24,24,44,44,24,24,128,96,44,24,44,128,44,44,24,128,128,44,44,128,128,128,0,173,128,0,0,0,0,96,0,0,0,44,54,128,0,0,44,128,0,24,44,44,0,44,0,0,44,0,44,0,0,44,0,44,24,44,44,24,44,184,0,44,61,171,184,0,0,65,0,0,0,44,54,128,0,0,44,128,0,24,44,44,0,44,0,0,44,0,44,0,0,44,0,44,24,44,44,24,44,184,0,44,61,171,184,0,0,65,0,0,0,173,128,128,0,0,44,24,24,24,44,44,24,24,128,96,44,24,44,128,44,44,24,128,128,44,44,128,128,128,0,173,128,0,0,0,0,96,0,0,0];
	var D=[0,6,2,0,6,9,2,2,2,1,9,2,2,0,1,9,2,9,0,1,9,2,5,0,1,9,7,7,0,0,0,6,0,0,0,0,5,0,0,0,9,2,2,0,0,9,3,0,2,1,9,0,9,0,0,9,0,9,0,0,9,0,9,2,1,9,2,9,1,0,9,3,7,1,0,0,3,0,0,0,9,2,2,0,0,9,3,0,2,1,9,0,9,0,0,9,0,9,0,0,9,0,9,2,1,9,2,9,1,0,9,3,7,1,0,0,3,0,0,0,0,6,2,0,0,9,2,2,2,1,9,2,2,1,1,9,2,9,1,1,9,2,4,1,1,9,7,7,1,0,0,6,0,0,0,6,5,0,0,0];
	for(n=0;n<160+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function humveeWithTrailerGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Humvee With Trailer behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Humvee With Trailer to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Humvee With Trailer in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Humvee With Trailer to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Humvee With Trailer behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							humveeWithTrailer(x,y,z)
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

function humveeWithTrailer(x,y,z){
	var X=[x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1];
	var Y=[y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4];
	var Z=[z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z,z-17,z-17,z-17,z-17,z-16,z-16,z-16,z-16,z-15,z-15,z-15,z-15,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z,z,z];
	var I=[173,24,24,0,44,24,44,0,44,24,44,0,44,24,24,0,44,24,24,0,44,24,44,0,173,24,44,0,44,24,24,0,0,0,0,0,44,128,0,0,173,128,128,0,44,24,44,0,44,24,24,0,44,24,44,0,44,24,128,0,44,128,0,0,173,128,0,0,0,96,0,0,44,71,71,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,24,44,44,44,44,0,0,44,128,0,0,44,24,128,0,44,0,44,0,44,0,44,0,44,0,44,0,44,24,44,0,44,24,171,0,44,61,171,0,0,65,0,0,44,71,71,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,0,44,44,44,24,44,44,44,44,0,0,44,128,0,0,44,24,128,0,44,0,44,0,44,0,44,0,44,0,44,0,44,24,44,0,44,24,171,0,44,61,171,0,0,65,0,0,173,24,24,0,44,24,44,0,44,24,44,0,44,24,24,0,44,24,24,0,44,24,44,0,173,24,44,0,44,24,24,0,0,0,0,0,44,128,0,0,173,128,128,0,44,24,44,0,44,24,24,0,44,24,44,0,44,24,128,0,44,128,0,0,173,128,0,0,0,96,0,0];
	var D=[0,2,2,6,9,2,9,0,9,2,9,0,9,2,2,0,9,2,2,0,9,2,9,0,0,2,9,0,9,2,2,0,0,0,0,0,9,7,0,0,0,6,2,0,9,2,9,0,9,2,2,0,9,2,9,0,9,2,5,0,9,7,0,0,0,6,0,0,0,5,0,0,9,3,8,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,2,9,1,9,1,0,0,9,2,0,0,9,2,2,0,9,0,9,0,9,0,9,0,9,0,9,0,9,2,9,0,9,2,7,0,9,3,7,0,0,3,0,0,9,3,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,0,9,1,9,2,9,1,9,1,0,0,9,2,0,0,9,2,2,0,9,0,9,0,9,0,9,0,9,0,9,0,9,2,9,0,9,2,7,0,9,3,7,0,0,3,0,0,0,2,2,0,9,2,9,0,9,2,9,0,9,2,2,0,9,2,2,0,9,2,9,0,0,2,9,0,9,2,2,0,0,0,0,0,9,7,0,0,0,6,2,0,9,2,9,0,9,2,2,0,9,2,9,0,9,2,4,0,9,7,0,0,0,6,0,0,6,5,0,0];
	for(n=0;n<288+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function militaryPersonnelCarrierGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Military Personnel Carrier behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Military Personnel Carrier to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Military Personnel Carrier in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Military Personnel Carrier to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Military Personnel Carrier behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							militaryPersonnelCarrier(x,y,z)
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

function militaryPersonnelCarrier(x,y,z){
	var X=[x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-3,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2,x+2];
	var Y=[y+3,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+3,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+1,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+5,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+2,y+3,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+2,y+5,y+1,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+2,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+2,y+3,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+1,y+2,y+3,y+4,y+5,y+2,y+3,y+4,y+5,y+2,y+3,y+5,y+3,y+5,y+3,y+4,y+4,y+4,y+4,y+4,y+4,y+4,y+3,y+4];
	var Z=[z-12,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-2,z,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z,z,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z,z-14,z-12,z-11,z-10,z-9,z-8,z-7,z-6,z-5,z-4,z-2];
	var I=[139,101,101,101,101,101,101,101,139,102,0,44,159,159,44,109,159,159,44,173,173,159,44,44,173,173,159,159,44,61,43,44,44,109,43,44,44,173,173,159,159,44,173,173,43,44,44,44,139,43,44,44,109,159,159,44,173,173,159,44,44,173,173,159,159,44,98,98,20,44,139,98,44,101,44,109,44,71,71,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,71,71,43,44,44,44,109,44,159,20,44,109,109,44,68,101,44,109,44,71,71,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,43,43,43,44,164,44,44,109,44,159,20,44,109,109,44,68,101,44,159,159,44,109,159,159,44,173,173,159,44,44,173,173,159,159,44,61,43,44,44,109,43,44,44,173,173,159,159,44,173,173,43,44,44,44,139,43,44,44,109,159,159,44,173,173,159,44,44,173,173,159,159,44,98,98,20,44,139,98,44,101,0,139,101,101,101,101,101,101,101,139,102];
	var D=[0,0,0,0,0,0,0,0,0,0,6,13,9,9,5,4,9,9,5,0,0,9,8,5,0,0,9,9,5,5,0,8,5,4,0,8,5,0,0,9,9,5,0,0,0,8,5,8,0,0,8,5,4,9,9,5,0,0,9,8,5,0,0,9,9,5,0,0,0,5,0,3,5,0,13,2,8,1,9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,1,9,0,8,8,8,3,8,9,0,5,7,6,5,3,0,13,2,8,1,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,8,3,8,8,3,8,9,0,5,7,6,5,3,0,13,9,9,5,5,9,9,5,0,0,9,8,5,0,0,9,9,5,4,0,8,5,5,0,8,5,0,0,9,9,5,0,0,0,8,5,8,0,0,8,5,5,9,9,5,0,0,9,8,5,0,0,9,9,5,0,0,0,5,0,3,5,0,6,0,0,0,0,0,0,0,0,0,0];
	for(n=0;n<450+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function smallMilitaryHaulerGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Small Military Hauler behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Small Military Hauler to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Small Military Hauler in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Small Military Hauler to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Small Military Hauler behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							smallMilitaryHauler(x,y,z)
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

function smallMilitaryHauler(x,y,z){
	var X=[x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2];
	var Y=[y+3,y+1,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+1,y+2,y+1,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+2,y+3,y+4,y+2,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+1,y+2,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+2,y+4,y+3];
	var Z=[z-1,z,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z-14,z-14,z-14,z-14,z-13,z-13,z-12,z-12,z-11,z-11,z-10,z-10,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-6,z-6,z-6,z-5,z-5,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-1,z-1,z-1,z-1,z,z-14,z-14,z-14,z-14,z-13,z-13,z-13,z-13,z-12,z-12,z-12,z-12,z-11,z-11,z-11,z-11,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-2,z-1,z-1,z-1,z-1,z,z-14,z-1];
	var I=[102,0,44,159,159,44,173,159,159,44,44,159,159,44,44,159,159,44,44,159,159,44,173,159,159,44,44,159,159,44,44,44,173,44,44,44,44,159,159,44,173,159,102,44,44,159,20,44,96,44,71,71,44,44,44,44,44,44,44,44,44,44,44,44,159,159,44,44,139,44,44,98,44,44,109,44,44,159,102,44,44,44,44,159,20,44,65,44,159,159,44,173,159,159,44,44,159,159,44,44,159,159,44,44,159,159,44,173,159,159,44,44,159,159,44,44,44,173,44,44,44,44,159,159,44,173,159,102,44,44,159,20,44,96,0,102];
	var D=[0,6,8,13,13,0,0,13,13,0,8,13,13,0,8,13,13,0,8,13,13,0,0,13,13,0,8,13,13,0,8,0,0,0,8,0,8,13,13,0,0,13,0,0,8,13,0,0,5,8,1,8,0,8,0,8,0,8,0,8,0,8,0,8,13,13,0,8,0,0,8,0,0,8,3,8,8,13,0,0,8,0,8,13,0,0,3,8,13,13,0,0,13,13,0,8,13,13,0,8,13,13,0,8,13,13,0,0,13,13,0,8,13,13,0,8,0,0,0,8,0,8,13,13,0,0,13,0,0,8,13,0,0,5,6,0];
	for(n=0;n<300+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

function tourBusGUI(x,y,z){
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
				if(yaw >= 0 && yaw <= 45) popup.setMessage("This will place a Tour Bus behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 45 && yaw <= 135) popup.setMessage("This will place a Tour Bus to your right. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 135 && yaw <= 225) popup.setMessage("This will place a Tour Bus in the direction you're looking. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 225 && yaw <= 315) popup.setMessage("This will place a Tour Bus to your left. (Please stand close to the block you clicked to prevent suffocation!)")
				else if(yaw >= 315 && yaw <= 360) popup.setMessage("This will place a Tour Bus behind you. (Please stand close to the block you clicked to prevent suffocation!)")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							//popup.dismiss()
							tourBus(x,y,z)
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

function tourBus(x,y,z){
	var X=[x-2,x-2,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x-1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+1,x+2,x+2];
	var Y=[y+4,y+3,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+2,y+1,y+2,y+3,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+1,y+2,y+3,y+2,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+3,y+4,y+1,y+2,y+1,y+2,y+2,y+3,y+1];
	var Z=[z-10,z-3,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-1,z-1,z,z-10,z-10,z-10,z-10,z-9,z-9,z-8,z-8,z-7,z-7,z-6,z-6,z-5,z-5,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-2,z-1,z-1,z-1,z,z-10,z-10,z-10,z-10,z-9,z-9,z-9,z-9,z-8,z-8,z-8,z-8,z-7,z-7,z-7,z-7,z-6,z-6,z-6,z-6,z-5,z-5,z-5,z-5,z-4,z-4,z-4,z-4,z-3,z-3,z-3,z-3,z-2,z-2,z-1,z-1,z,z-3,z];
	var I=[0,102,44,159,159,44,173,109,159,44,44,159,159,44,44,159,102,44,44,159,102,44,44,159,159,44,44,159,102,44,44,159,20,44,44,159,173,44,68,44,159,102,44,44,44,44,44,44,44,44,44,44,44,44,44,44,159,20,44,44,159,44,44,61,44,65,44,159,159,44,173,109,159,44,44,159,159,44,44,159,102,44,44,159,102,44,44,159,159,44,44,159,102,44,44,159,20,44,44,159,173,44,68,102,0];
	var D=[6,0,8,4,4,0,0,4,4,0,8,4,4,0,8,4,0,0,8,4,0,0,8,4,4,0,8,4,0,0,8,4,0,0,8,4,0,0,3,8,4,0,0,8,0,8,0,8,0,8,0,8,0,8,0,8,4,0,0,8,4,0,8,3,0,3,8,4,4,0,0,5,4,0,8,4,4,0,8,4,0,0,8,4,0,0,8,4,4,0,8,4,0,0,8,4,0,0,8,4,0,0,3,0,6];
	for(n=0;n<220+1;n++){
		setTile(X[n], Y[n], Z[n], I[n], D[n]);
	}
}

