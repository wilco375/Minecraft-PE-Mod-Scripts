function newLevel(){
	var out = new java.io.ByteArrayOutputStream();
	var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("url")).getEntity().writeTo(out);
	out.close();
	clientMessage(String(out.toString()));
}
