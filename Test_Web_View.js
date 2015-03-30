function newLevel(){
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			popupWindow = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			
			size = new android.graphics.Point();
			((android.app.Activity) ctx).getWindowManager().getDefaultDisplay().getSize(size);
			width = size.x;
			height = size.y;
		
			webView = new android.widget.WebView(ctx);
			
			webSettings = webView.getSettings();
			webSettings.setJavaScriptEnabled(true);
			webSettings.setBuiltInZoomControls(true);
			webSettings.setSupportZoom(true);
			
			webView.loadUrl("http://www.google.com/");
			webView.reload();
			layout.addView(webView);
			popupWindow.setContentView(layout);
			popupWindow.setWidth(width-50);
			popupWindow.setHeight(height-50);
			popupWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 25, 25);
			
		} catch(err) {
			print("Error: "+err);
		}
	} }));
}
