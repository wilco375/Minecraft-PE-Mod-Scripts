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

var pStructureId = 178;
var colors = [];

for(i = 0;i<= 2048;i++){
	colors.push(0xffffff);
}
Block.defineBlock(pStructureId,"Portable Structure Block",["piston_top_normal",0],20,0,0);
Item.addCraftRecipe(pStructureId,1,0,[265,1,0,42,1,0,265,1,0,42,1,0,264,1,0,42,1,0,265,1,0,42,1,0,265,1,0]);
Block.setColor(pStructureId,colors);

function useItem(x,y,z,itemId,blockId,side){
	data = Player.getCarriedItemData();
	if(itemId == pStructureId && data == 0){
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
			step = 0;
		}
	}
	else if(itemId == pStructureId && data > 0){
		preventDefault();
		placeStructure(data,x,y,z);
	}
}

function printToast(string){
	ctx.runOnUiThread(new java.lang.Runnable(){
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
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			try{
				var menu = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.ScrollView(ctx);
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				scroll.addView(menu);
				var dialog = new android.app.Dialog(ctx); 
				dialog.setContentView(scroll);
				dialog.setTitle("Enter a name");
				
				var editText = new android.widget.EditText(ctx);
				menu.addView(editText);
				
				var okButton = new android.widget.Button(ctx); 
				okButton.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(){ 
						try{
							structureName = editText.getText.toString();
							if(structureName != null && structureName != ""){
								clientMessage("Saving structure...")
								dialog.dismiss();
								saveStructure();
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
	if(readFromDocInWorld("structureNames.txt") != null)
		structureNames = readFromDocInWorld("structureNames.txt").split("|");
}

function placeStructure(id,x,y,z){
	clientMessage("Placing structure...");
	nameOfStructureToPlace = structureNames[id+1];
	structureX = readFromDocInWorld(nameOfStructureToPlace+".x").split("|");
	structureY = readFromDocInWorld(nameOfStructureToPlace+".y").split("|");
	structureZ = readFromDocInWorld(nameOfStructureToPlace+".z").split("|");
	structureId = readFromDocInWorld(nameOfStructureToPlace+".id").split("|");
	structureData = readFromDocInWorld(nameOfStructureToPlace+".data").split("|");
	for(i = 0; i< structureX.length; i++){
		setTile(structureX[i]+x,structureY[i]+y,structureZ[i]+z,structureId[i],structureData[i]);
	}
	Entity.setCarriedItem(getPlayerEnt,pStructureId,1,0);
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
			for(z = 0; z<= structureZ2-structureY1; z++){
				tile = getTile(x,y,z);
				if(tile != 54 && tile != 61 && tile != 62){
					structureX.push(x);
					structureY.push(y);
					structureZ.push(z);
					structureId.push(tile);
					structureData.push(Level.getData(x,y,z));
					setTile(x,y,z,0);
				}
			}
		}
	}
	saveStructureToFile();
	Entity.setCarriedItem(getPlayerEnt,pStructureId,1,structureNames.length);
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
		structureXstring = structureXstring+"|"+structureX[i];
		structureYstring = structureYstring+"|"+structureY[i];
		structureZstring = structureZstring+"|"+structureZ[i];
		structureIdString = structureIdstring+"|"+structureId[i];
		structureDataString = structureDatastring+"|"+structureData[i];
	}
	saveToDocInWorld(structureName+".x",structureXstring);
	saveToDocInWorld(structureName+".y",structureYstring);
	saveToDocInWorld(structureName+".z",structureZstring);
	saveToDocInWorld(structureName+".id",structureIdstring);
	saveToDocInWorld(structureName+".data",structureDatastring);
	structureNames.push(structureName);
	for(i = 0;i<structureNames.length;i++){
		structureNamesString = structureNamesString+"|"+structureNames[i];
	}
	saveToDocInWorld("structureNames.txt",structureNamesString);
}

function modTick(){
	carriedItemId = Player.getCarriedItem();
	carriedItemData = Player.getCarriedItemData();
	if(carriedItemId != prevCarriedItemId || carriedItemData != prevCarriedItemData){
		if(structureNames[carriedItemData] != null && structureNames[carriedItemData] != "")
			ModPE.showTipMessage(structureNames[carriedItemData]);
	}
	prevCarriedItemId = Player.getCarriedItem();
	prevCarriedItemData = Player.getCarriedItemData();
}

function saveToDocInWorld(filename,string){
	var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PortableStructures/"+filename;
	var file = new java.io.File(filePath);
	file.mkdirs();
	if(string != null && string != []){
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
	var filePath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+filename;
	var file = new java.io.File(filePath);
	if(file.exists()){
		var inputStream = new java.io.BufferedReader(new java.io.FileReader(filePath));
		return inputStream.readLine().toString();
	}
	else{
		return null;
	}
}









