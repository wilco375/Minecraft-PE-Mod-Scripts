function newLevel(){
 var out=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/Alternate_Furnace_Mod_V1.2.1_Update_Checker.txt")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()))
}
