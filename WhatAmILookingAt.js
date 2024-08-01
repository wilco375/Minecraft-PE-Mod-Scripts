//WAILA mod
//by wilco375
//PC mod created by ProfMobius: http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1289765-waila-1-5-2
//Don't share or redistribute this mod using the Github link, instead, use this link: http://adf.ly/rhE9A

var textview;
var ctx;
var simpleGUI;
var enabled

var lastCY
var lastCYD

function getBlock() {
  if(enabled == 1){
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(textview != null) {
Id = Player.getPointedBlockId();
Data= Player.getPointedBlockData();
Tile = Item.getName(Id,Player.getPointedBlockData(),1);
if(Tile != null){
Name = Tile.split(".");
textview.setText(Name[1]+" #"+Id+":"+Data);
}
else textview.setText(" ")
				}
			}catch(err){
				//print("Error: "+err); //will cause spam of dialogue boxes because of modTick
			}
		}}));
	}
}

}

function newLevel(){
if(enabled != 1){
enabled = 1
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGUI = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			textview = new android.widget.TextView(ctx);
			textview.setTextColor(android.graphics.Color.WHITE);
			//getBlock();
			layout.addView(textview);
			simpleGUI.setContentView(layout);
			simpleGUI.setWidth(1000);
//was 400
			simpleGUI.setHeight(60);
		if(Level.getGameMode()==1){	simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 10, 10);
}
else{	simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 10, 50);
}
		}catch(err){
			print("Error: "+err);
		}
	} }));
}
}

function modTick() {
 getBlock();
 if(lastCY != Player.getCarriedItem() && Player.getCarriedItem() != 0) showId()
 if(lastCYD != Player.getCarriedItemData() && Player.getCarriedItem() != 0) showId()
 lastCY = Player.getCarriedItem()
 lastCYD = Player.getCarriedItemData()
}

function showId(){
if(Player.getCarriedItem() != 0) ModPE.showTipMessage("#"+Player.getCarriedItem()+":"+Player.getCarriedItemData())
}

function leaveGame(){
enabled = 0
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGUI != null) {
					simpleGUI.dismiss();
					simpleGUI = null;
       enabled = 0
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
}


