var webView;
var ctx;

function newLevel(){
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGUI = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			webView = new android.widget.WebView(ctx);
			layout.addView(webView);
			simpleGUI.setContentView(layout);
			simpleGUI.setWidth(1000);
			simpleGUI.setHeight(60);
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 500, 250);
			
			webView.loadUrl("http://www.google.com/").reload();
		}catch(err){
			print("Error: "+err);
		}
	} }));
}
