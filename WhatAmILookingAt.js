var textview;
var ctx;
var simpleGUI;
var enabled

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
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 10, 50);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}
}

function modTick() {
	getBlock();
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
