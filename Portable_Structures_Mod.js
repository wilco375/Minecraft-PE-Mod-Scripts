//Portable Structures Mod
//By wilco375

var structureX1;
var structureY1;
var structureZ1;
var structureX2;
var structureY2;
var structureZ2;
var structureX = [];
var structureY = [];
var structureZ = [];
var structureId = [];
var structureData = [];
var structureName;
var structureNames = [];
var step = 0;

var prevCarriedItemId;
var prevCarriedItemData;

var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var pStructureIdEmpty = 177;
var pStructureId = 178;
var colors = [];

for(i = 0;i<= 2048;i++){
	colors.push(0xffffff);
}

Block.defineBlock(pStructureIdEmpty,"Portable Structure Block",["piston_top_normal",0],20,0,0);
Item.addCraftRecipe(pStructureIdEmpty,1,0,[265,1,0,42,1,0,265,1,0,42,1,0,264,1,0,42,1,0,265,1,0,42,1,0,265,1,0]);
Block.defineBlock(pStructureId,"Portable Structure Block",["piston_top_normal",0],20,0,0);
Block.setColor(pStructureId,colors);

function useItem(x,y,z,itemId,blockId,side){
	data = Player.getCarriedItemData();
	if(itemId == pStructureIdEmpty){
		preventDefault();
		if(step == 0){
			structureX1 = x;
			structureY1 = y;
			structureZ1 = z;
			printToast("First block selected");
			step = 1;
			
		}
		else if(step == 1){
			structureX2 = x;
			structureY2 = y;
			structureZ2 = z;
			printToast("Second block selected. Please give the structure a name");
			showNameGUI();
		}
	}
	else if(itemId == pStructureId && data > 0){
		//clientMessage("Data = "+data);
		preventDefault();
		context.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var popup = new android.app.AlertDialog.Builder(context); 
				popup.setTitle("Are you sure?")
				popup.setMessage("Are you sure you want to place the structure here?")
				popup.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg){
						try{
							placeStructure(data,x,y,z);
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
}

function printToast(string){
	context.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				android.widget.Toast.makeText(context,string,android.widget.Toast.LENGTH_LONG).show();
			}
			catch (e){
				print ("Error: "+e)
			}
		}
	});
}

function showNameGUI(){
	context.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(context);
				var scroll = new android.widget.ScrollView(context);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(context); 
				dialog.setContentView(scroll);
				dialog.setTitle("Enter a name");
				
				var editText = new android.widget.EditText(context);
				menu.addView(editText);
				
				var okButton = new android.widget.Button(context); 
				okButton.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							structureName = editText.getText().toString();
							for(i=0;i<structureNames.length;i++){
								if(structureNames[i] == structureName) var exists = true;
							}
							if(structureName != null && structureName != "" && !exists && structureName.indexOf(",") <= -1){
								clientMessage("Saving structure...")
								step = 0;
								dialog.dismiss();
								saveStructure();
							}
							else if(structureName.indexOf(",") > -1){
								android.widget.Toast.makeText(context,"Please enter a name without a comma (,)",android.widget.Toast.LENGTH_LONG).show();
							}
							else if(exists){
								android.widget.Toast.makeText(context,"This structure already exists. Please enter a different name",android.widget.Toast.LENGTH_LONG).show();
							}
							else{
								android.widget.Toast.makeText(context,"Please enter a name",android.widget.Toast.LENGTH_LONG).show();
							}
						}
						catch(e){
							clientMessage("Error: "+e)
						}
					}
				})
				okButton.setText("Ok")
				menu.addView(okButton); 
			}
			catch (e){
				print ("Error: "+e)
			}	
			dialog.show()
		}
	});
}

function newLevel(){
	var text = readFromDocInWorld("structureNames.txt");
	//clientMessage("Text in structureNames.txt = "+text)
	if(text != null && text != ""){
		if(text.indexOf(",") > -1){
			structureNames = text.split(",");
			//clientMessage("Splitted at ,");
		}
		else{
			structureNames[0] = text;
			//clientMessage("[0] = text");
		}
	}
	structureNamesString = "";
	for(i = 0;i<structureNames.length;i++){
		structureNamesString = structureNamesString+","+structureNames[i];
	}
	//clientMessage("structureNames is now "+ structureNamesString+" and has a length of "+structureNames.length);
}

function placeStructure(id,x,y,z){
	clientMessage("Placing structure...");
	//clientMessage("structureNames = "+structureNames);
	nameOfStructureToPlace = structureNames[id-1];
	//clientMessage("nameOfStructureToPlace = "+nameOfStructureToPlace);
	structureNames[id-1]="";
	var structureNamesString = "";
	for(i = 0;i<structureNames.length;i++){
		structureNamesString = structureNamesString+","+structureNames[i];
	}
	saveToDocInWorld("structureNames.txt",structureNamesString);
	structureX = readFromDocInWorld(nameOfStructureToPlace+".x").split(",");
	structureY = readFromDocInWorld(nameOfStructureToPlace+".y").split(",");
	structureZ = readFromDocInWorld(nameOfStructureToPlace+".z").split(",");
	structureId = readFromDocInWorld(nameOfStructureToPlace+".id").split(",");
	structureData = readFromDocInWorld(nameOfStructureToPlace+".data").split(",");
	//clientMessage("structureX.length = "+structureX.length);
	for(i = 0; i< structureX.length; i++){
		setTile(parseInt(structureX[i])+x,parseInt(structureY[i])+y,parseInt(structureZ[i])+z,parseInt(structureId[i]),parseInt(structureData[i]));
		//clientMessage("Tile at "+parseInt(structureX[i])+x+","+parseInt(structureY[i])+y+","+parseInt(structureZ[i])+z+" set to "+parseInt(structureId[i])+":"+parseInt(structureData[i]));
	}
	Entity.setCarriedItem(getPlayerEnt(),pStructureIdEmpty,1,0);
	clientMessage("Structure placed!");
}

function saveStructure(id,x,y,z){
	structureX = [];
	structureY = [];
	structureZ = [];
	structureId = [];
	structureData = [];
	if(structureX1 > structureX2){
		temp = structureX1;
		structureX1 = structureX2;
		structureX2 = temp;
	}
	if(structureY1 > structureY2){
		temp = structureY1;
		structureY1 = structureY2;
		structureY2 = temp;
	}
	if(structureZ1 > structureZ2){
		temp = structureZ1;
		structureZ1 = structureZ2;
		structureZ2 = temp;
	}
	for(x = 0; x<= structureX2-structureX1; x++){
		for(y = 0; y<= structureY2-structureY1; y++){
			for(z = 0; z<= structureZ2-structureZ1; z++){
				tile = getTile(x+structureX1,y+structureY1,z+structureZ1);
				if(tile != 54 && tile != 61 && tile != 62){
					structureX.push(x);
					structureY.push(y);
					structureZ.push(z);
					structureId.push(tile);
					structureData.push(Level.getData(x,y,z));
					setTile(x+structureX1,y+structureY1,z+structureZ1,0);
				}
			}
		}
	}
	saveStructureToFile();
	//clientMessage("structureNames.length = "+ structureNames.length);
	//clientMessage("Setting carried item to "+pStructureId+":"+structureNames.length);
	var count = Player.getCarriedItemCount();
	Entity.setCarriedItem(getPlayerEnt(),pStructureId,1,structureNames.length);
	if(count > 1)
		Player.addItemInventory(pStructureIdEmpty,count-1,0);
	clientMessage("Save complete!")
}

function saveStructureToFile(){
	var structureXstring = "";
	var structureYstring = "";
	var structureZstring = "";
	var structureIdString = "";
	var structureDataString = "";
	var structureNamesString = "";
	for(i = 0;i<structureX.length;i++){
		structureXstring = structureXstring+","+structureX[i];
		structureYstring = structureYstring+","+structureY[i];
		structureZstring = structureZstring+","+structureZ[i];
		structureIdString = structureIdString+","+structureId[i];
		structureDataString = structureDataString+","+structureData[i];
	}
	saveToDocInWorld(structureName+".x",structureXstring);
	saveToDocInWorld(structureName+".y",structureYstring);
	saveToDocInWorld(structureName+".z",structureZstring);
	saveToDocInWorld(structureName+".id",structureIdString);
	saveToDocInWorld(structureName+".data",structureDataString);
	//clientMessage("Pushing structureName");
	var temp = [];
	for(i = 0;i<structureNames.length;i++){
		temp.push(structureNames[i]);
	}
	temp.push(structureName);
	structureNames = temp;
	//clientMessage("structureNames.length = "+structureNames.length);
	for(i = 0;i<structureNames.length;i++){
		//clientMessage("i = "+i);
		structureNamesString = structureNamesString+","+structureNames[i];
	}
	saveToDocInWorld("structureNames.txt",structureNamesString);
}

function modTick(){
	carriedItemId = Player.getCarriedItem();
	carriedItemData = Player.getCarriedItemData();
	if(carriedItemId != prevCarriedItemId || carriedItemData != prevCarriedItemData){
		if(carriedItemId == pStructureId){
			if(structureNames[carriedItemData-1] != null && structureNames[carriedItemData-1] != "")
				ModPE.showTipMessage(structureNames[carriedItemData-1]);
		}
	}
	prevCarriedItemId = Player.getCarriedItem();
	prevCarriedItemData = Player.getCarriedItemData();
}

//Set stack size to 1!!!

function saveToDocInWorld(filename,string){
	//if(string.charAt(0)==",") 
		string = string.replace(",","");
	//clientMessage("Saving "+ string);
	//clientMessage("To "+filename);
	var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PortableStructures/"+filename;
	var file = new java.io.File(filePath);
	file.mkdirs();
	if(string != null){
		if(file.exists()){
			file.delete();
		}
		file.createNewFile();
		var outputStream = new java.io.BufferedWriter(new java.io.FileWriter(filePath));
		outputStream.write(string);
		outputStream.flush();
	}
}

function readFromDocInWorld(filename){
	var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PortableStructures/"+filename;
	var file = new java.io.File(filePath);
	//clientMessage("File exists? "+file.exists());
	//clientMessage("File path = "+filePath);
	if(file.exists()){
		var inputStream = new java.io.BufferedReader(new java.io.FileReader(filePath));
		var returnText = inputStream.readLine();
		//clientMessage("returnText = "+returnText)
		return returnText;
	}
	else{
		return null;
	}
}









