//VoxelSniper Mod
//By wilco375
//Do not re-upload without permission or share with the direct download link instead of the adf.ly link

var voxelEnabled = false;
var voxelBlockId = 1;
var voxelBlockData = 0;
var voxelDiameter = 1;
var voxelMode = "Sphere";
var voxelReplaceMode = "Add and Replace";

var paintingEnabled = false;
var paintingBlockId = 1;
var paintingBlockData = 0;
var paintingDiameter = 7;

var arrowEntities = []
var arrowEntitiesX = []
var arrowEntitiesY = []
var arrowEntitiesZ = []
var modtick = 0

function modTick(){
	modtick++
	for(var q = 0;q<arrowEntities.length;q++){
		//clientMessage("q = "+q)
		if(Entity.getX(arrowEntities[q]) == arrowEntitiesX[q] && Entity.getY(arrowEntities[q]) == arrowEntitiesY[q] && Entity.getZ(arrowEntities[q]) == arrowEntitiesZ[q]){
			//clientMessage(modtick)
			applyVoxel(Entity.getX(arrowEntities[q]),Entity.getY(arrowEntities[q]) ,Entity.getZ(arrowEntities[q]) )
			//clientMessage("arrowEntities before splice: "+arrowEntities+" , q="+q)
			if(q == 0 && arrowEntities.length == 1){
				arrowEntities = []
				arrowEntitiesX = []
				arrowEntitiesY = []
				arrowEntitiesZ = []
			}else{
				arrowEntities.splice(q,1)
				arrowEntitiesX.splice(q,1)
				arrowEntitiesY.splice(q,1)
				arrowEntitiesZ.splice(q,1)
			}
			//clientMessage("arrowEntities after splice: "+arrowEntities)
			//Entity.setHealth(0)
			//clientMessage("Arrow has stopped moving")
		}else{
			arrowEntitiesX[q] = Entity.getX(arrowEntities[q])
			arrowEntitiesY[q] = Entity.getY(arrowEntities[q])
			arrowEntitiesZ[q] = Entity.getZ(arrowEntities[q])
		}
	}
	
	if(paintingEnabled){
		paint();
	}
}

function paint(){
	//clientMessage("paint")
	x = parseInt(Math.ceil(Player.getX()))
	y = parseInt(Math.ceil(Player.getY()))
	z = parseInt(Math.ceil(Player.getZ()))
	radius = parseInt(Math.ceil((paintingDiameter-1)/2))
	//clientMessage("radius: "+radius)
	for(r = x-radius;r<=x+radius;r++){
		for(s = y-radius;s<=y+radius;s++){
			for(t = z-radius;t<=z+radius;t++){
				//clientMessage("checking block at "+r+","+s+","+t)
				cBlock = getTile(r-1,s-1,t-1)
				cData = Level.getData(r-1,s-1,t-1)
				if(cBlock != 0){
					if(cBlock != paintingBlockId){
						setTile(r-1,s-1,t-1,paintingBlockId,paintingBlockData)
					}else if(cData != paintingBlockData){
						setTile(r-1,s-1,t-1,paintingBlockId,paintingBlockData)
					}
				}
			}
		}
	}
}

function entityAddedHook(ent){
	if(Entity.getEntityTypeId(ent) == 80 && Player.getCarriedItem() == 261 && voxelEnabled){
		//clientMessage("Arrow is shot")
		arrowEntities.push(ent)
		arrowEntitiesX.push(0);
		arrowEntitiesY.push(0);
		arrowEntitiesZ.push(0);
	}
}

function applyVoxel(x,y,z){
	if(voxelEnabled){
		if(voxelMode == "Sphere") sphere(x,y,z)
		else if(voxelMode == "Hollow Sphere") hSphere(x,y,z)
		else if(voxelMode == "Disk") disk(x,y,z)
		else if(voxelMode == "Cube") cube(x,y,z)
		else if(voxelMode == "Hollow Cube") hCube(x,y,z)
		else if(voxelMode == "Platform") platform(x,y,z)
	}
}

function cube(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			radius = (voxelDiameter-1)/2
			for(var i=0;i<=radius;i++){
				for(var j=0;j<=radius;j++){
					for(var k=0;k<=radius;k++){
						if(voxelReplaceMode == "Add and Replace"){
							setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
							setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
							setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
							setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
							setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
							setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
							setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
							setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
						}else if(voxelReplaceMode == "Replace Only"){
							if(getTile(x+i,y+j,z+k)!=0)
								setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y-j,z+k)!=0)
								setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y+j,z-k)!=0)
								setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y+j,z+k)!=0)
								setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y-j,z-k)!=0)
								setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y-j,z-k)!=0)
								setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y+j,z-k)!=0)
								setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y-j,z+k)!=0)
								setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
						}else if(voxelReplaceMode == "Add Only"){
							if(getTile(x+i,y+j,z+k)==0)
								setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y-j,z+k)==0)
								setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y+j,z-k)==0)
								setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y+j,z+k)==0)
								setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y-j,z-k)==0)
								setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y-j,z-k)==0)
								setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y+j,z-k)==0)
								setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y-j,z+k)==0)
								setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
						}
					}
				}
			}
		//}catch(e){
		//	print("Error: " + e);
        //}
 // }}));	
}

function platform(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			radius = (voxelDiameter-1)/2
			radius++
			for(var i=0;i<=radius;i++){
				for(var k=0;k<=radius;k++){
					if(voxelReplaceMode == "Add and Replace"){
						setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
						setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
						setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
						setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
					}else if(voxelReplaceMode == "Replace Only"){
						if(getTile(x+i,y,z+k)!=0)
							setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
						if(getTile(x+i,y,z-k)!=0)
							setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
						if(getTile(x-i,y,z+k)!=0)
							setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
						if(getTile(x-i,y,z-k)!=0)
							setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
					}else if(voxelReplaceMode == "Add Only"){
						if(getTile(x+i,y,z+k)==0)
							setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
						if(getTile(x+i,y,z-k)==0)
							setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
						if(getTile(x-i,y,z+k)==0)
							setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
						if(getTile(x-i,y,z-k)==0)
							setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
					}
				}
			}
		//}catch(e){
		//	print("Error: " + e);
        //}
  //}}));	
}

function hCube(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			radius = (voxelDiameter-1)/2
			radius = Math.ceil(radius)
			for(var i=0;i<=radius;i++){
				for(var j=0;j<=radius;j++){
					for(var k=0;k<=radius;k++){
						if(i == radius || j== radius || k== radius){
							if(voxelReplaceMode == "Add and Replace"){
								setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Replace Only"){
								if(getTile(x+i,y+j,z+k)!=0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)!=0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)!=0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)!=0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)!=0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)!=0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)!=0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)!=0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Add Only"){
								if(getTile(x+i,y+j,z+k)==0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)==0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)==0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)==0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)==0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)==0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)==0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)==0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}
						}
					}
				}
			}
		//}catch(e){
		//	print("Error: " + e);
        //}
  //}}));	
}

function disk(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			radius = (voxelDiameter-1)/2
			radius++
			for(var i=0;i<radius;i++){
				for(var k=0;k<radius;k++){
					blockRadius = Math.sqrt(i*i+k*k)					
					//blockRadius = Math.sqrt(hBlockRadius*hBlockRadius+j*j)
					if(blockRadius<=radius){
						if(voxelReplaceMode == "Add and Replace"){
							setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
							setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
							setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
							setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
						}else if(voxelReplaceMode == "Replace Only"){
							if(getTile(x+i,y,z+k)!=0)
								setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y,z-k)!=0)
								setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y,z+k)!=0)
								setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y,z-k)!=0)
								setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
						}else if(voxelReplaceMode == "Add Only"){
							if(getTile(x+i,y,z+k)==0)
								setTile(x+i,y,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x+i,y,z-k)==0)
								setTile(x+i,y,z-k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y,z+k)==0)
								setTile(x-i,y,z+k,voxelBlockId,voxelBlockData)
							if(getTile(x-i,y,z-k)==0)
								setTile(x-i,y,z-k,voxelBlockId,voxelBlockData)
						}
					}
				}
			}
		//}catch(e){
		//	print("Error: " + e);
        //}
  //}}));	
}

function sphere(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			//clientMessage("setting sphere")
			radius = (voxelDiameter-1)/2
			radius++
			for(var i=0;i<radius;i++){
				for(var j=0;j<radius;j++){
					for(var k=0;k<radius;k++){
						hBlockRadius = Math.sqrt(i*i+k*k)					
						blockRadius = Math.sqrt(hBlockRadius*hBlockRadius+j*j)
						if(blockRadius<=radius){
							if(voxelReplaceMode == "Add and Replace"){
								setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Replace Only"){
								if(getTile(x+i,y+j,z+k)!=0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)!=0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)!=0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)!=0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)!=0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)!=0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)!=0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)!=0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Add Only"){
								if(getTile(x+i,y+j,z+k)==0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)==0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)==0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)==0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)==0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)==0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)==0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)==0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}
						}
					}
				}
			}
		//}catch(e){
		//	print("Error: " + e);
        //}
  //}}));	
}

function hSphere(x,y,z){
	//var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    //activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        //try{
			radius = (voxelDiameter-1)/2
			radius++
			for(var i=0;i<radius;i++){
				for(var j=0;j<radius;j++){
					for(var k=0;k<radius;k++){
						hBlockRadius = Math.sqrt(i*i+k*k)					
						blockRadius = Math.sqrt(hBlockRadius*hBlockRadius+j*j)
						if(Math.ceil(blockRadius)==Math.round(radius)){
							if(voxelReplaceMode == "Add and Replace"){
								setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Replace Only"){
								if(getTile(x+i,y+j,z+k)!=0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)!=0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)!=0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)!=0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)!=0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)!=0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)!=0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)!=0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}else if(voxelReplaceMode == "Add Only"){
								if(getTile(x+i,y+j,z+k)==0)
									setTile(x+i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z+k)==0)
									setTile(x+i,y-j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y+j,z-k)==0)
									setTile(x+i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z+k)==0)
									setTile(x-i,y+j,z+k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z-k)==0)
									setTile(x-i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x+i,y-j,z-k)==0)
									setTile(x+i,y-j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y+j,z-k)==0)
									setTile(x-i,y+j,z-k,voxelBlockId,voxelBlockData)
								if(getTile(x-i,y-j,z+k)==0)
									setTile(x-i,y-j,z+k,voxelBlockId,voxelBlockData)
							}
						}
					}
				}
			}
			radius = Math.round(radius)
			setTile(x,y-1+radius,z,voxelBlockId,voxelBlockData)
			setTile(x,y+1-radius,z,voxelBlockId,voxelBlockData)
			setTile(x,y,z-1+radius,voxelBlockId,voxelBlockData)
			setTile(x,y,z+1-radius,voxelBlockId,voxelBlockData)
			setTile(x-1+radius,y,z,voxelBlockId,voxelBlockData)
			setTile(x+1-radius,y,z,voxelBlockId,voxelBlockData)
	//	}catch(e){
	//		print("Error: " + e);
    //    }
	//}}));	
}

function newLevel(){
	//print("newLevel")
	showButton();
	try{
		var out=new java.io.ByteArrayOutputStream();
		var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/wilco375/Minecraft-PE-Mod-Scripts/master/voxelsniper_v1_update.txt")).getEntity().writeTo(out);
		out.close();
		clientMessage(String(out.toString()))
	}catch(e){
		//No internet
	}
	
	
}

function leaveGame(){
	dismissButton()
}

function showButton(){
    var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
            buttonWindow = new android.widget.PopupWindow();
            var layout = new android.widget.LinearLayout(activity);
            layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
			var rLayout1 = new android.widget.RelativeLayout(activity);
			var rLayout2 = new android.widget.RelativeLayout(activity);
			 
			GUIButton = new android.widget.Button(activity);
            GUIButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    showPaintingGUI()
                }
            }));
			GUIButton.setText("P")
			//GUIButton.setBackgroundColor(android.graphics.Color.DKGRAY);
            rLayout1.addView(GUIButton);
			 
            GUIButton2 = new android.widget.Button(activity);
            GUIButton2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    showGUI()
                }
            }));
			GUIButton2.setText("V")
			//GUIButton2.setBackgroundColor(android.graphics.Color.DKGRAY);
            rLayout2.addView(GUIButton2);
			
			layout.addView(rLayout1)
			layout.addView(rLayout2)
             
            buttonWindow.setContentView(layout);
            buttonWindow.setWidth(200);
            buttonWindow.setHeight(100);
            buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
			//clientMessage("Button displayed")
             
			rLayout1.getLayoutParams().width = 100
			//rLayout1.getLayoutParams().heigth = 100
			rLayout1.invalidate()
			rLayout2.getLayoutParams().width = 100
			//rLayout2.getLayoutParams().heigth = 100
			rLayout2.invalidate()
			
        }catch(e){
			clientMessage("Button could not be displayed: " + e);
        }
  }}));
}

function dismissButton(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();    
    activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
            if(buttonWindow != null) {
				buttonWindow.dismiss();
            }
		}catch(e){
			print("Error while trying to dismiss button: "+e)
		}
  }}));
}

function showPaintingGUI(){
	var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();   
	context.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
			var linearLayout = new android.widget.LinearLayout(context);
			linearLayout.setPadding(10,10,10,10);
			var scrollView = new android.widget.ScrollView(context);
			linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
			scrollView.addView(linearLayout);
			var dialog = new android.app.Dialog(context);
			dialog.setContentView(scrollView);
			dialog.setTitle("Painting Settings");
			
			var paintingToggleButton = new android.widget.ToggleButton(context);
			paintingToggleButton.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener( {
				onCheckedChanged: function(buttonView, isChecked) {
					if(isChecked) paintingEnabled = true;
					else paintingEnabled = false;
				}
			}));
			paintingToggleButton.setTextOff("Off");
			paintingToggleButton.setTextOn("On");
			if(paintingEnabled) paintingToggleButton.setChecked(true);
			linearLayout.addView(paintingToggleButton);
			
			var voxelDiameterTextView = new android.widget.TextView(context);
			voxelDiameterTextView.setText("Painting Diameter:");
			linearLayout.addView(voxelDiameterTextView);
			
			var paintingDiameterEditText = new android.widget.EditText(context);
			paintingDiameterEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			paintingDiameterEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					paintingDiameter = parseInt(paintingDiameterEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			if(paintingDiameter != 1){
				paintingDiameterEditText.setText(paintingDiameter.toString())
			}
			linearLayout.addView(paintingDiameterEditText);
			
			var idTextView = new android.widget.TextView(context);
			idTextView.setText("Painting Block ID:");
			linearLayout.addView(idTextView);
			
			var idEditText = new android.widget.EditText(context);
			idEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			idEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					paintingBlockId = parseInt(idEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			idEditText.setText(paintingBlockId.toString())
			linearLayout.addView(idEditText);
			
			var dataTextView = new android.widget.TextView(context);
			dataTextView.setText("Painting Block Data:");
			linearLayout.addView(dataTextView);
			
			var dataEditText = new android.widget.EditText(context);
			dataEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			dataEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					paintingBlockData = parseInt(dataEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			dataEditText.setText(paintingBlockData.toString())
			linearLayout.addView(dataEditText);
			
			var okButton = new android.widget.Button(context);
			okButton.setText("Ok");
			okButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    dialog.dismiss();
					clientMessage("Settings applied")
					if(paintingEnabled){
						clientMessage("Painting is now enabled")
						clientMessage("Painting Diameter: "+paintingDiameter)
						clientMessage("Painting Block: "+paintingBlockId+":"+paintingBlockData)
					}else{
						clientMessage("Painting is now disabled")
					}
                }
            }));
			linearLayout.addView(okButton);
			
			dialog.show();
		}catch(e){
          clientMessage("GUI could not be displayed: " + e);
        }
  }}));
}

function showGUI(){
	var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();   
	context.runOnUiThread(new java.lang.Runnable({ run: function() {
        try{
			var linearLayout = new android.widget.LinearLayout(context);
			linearLayout.setPadding(10,10,10,10);
			var scrollView = new android.widget.ScrollView(context);
			linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
			scrollView.addView(linearLayout);
			var dialog = new android.app.Dialog(context);
			dialog.setContentView(scrollView);
			dialog.setTitle("VoxelSniper Settings");
			
			var voxelToggleButton = new android.widget.ToggleButton(context);
			voxelToggleButton.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener( {
				onCheckedChanged: function(buttonView, isChecked) {
					if(isChecked) voxelEnabled = true;
					else voxelEnabled = false;
				}
			}));
			voxelToggleButton.setTextOff("Off");
			voxelToggleButton.setTextOn("On");
			if(voxelEnabled) voxelToggleButton.setChecked(true);
			linearLayout.addView(voxelToggleButton);
			
			var modeTextView = new android.widget.TextView(context);
			modeTextView.setText("VoxelSniper Mode:");
			linearLayout.addView(modeTextView);
			
			var modeSpinner = new android.widget.Spinner(context);
			var modeList = [];
			modeList.push("Sphere");
			modeList.push("Hollow Sphere");
			modeList.push("Disk");
			modeList.push("Cube");
			modeList.push("Hollow Cube");
			modeList.push("Platform");
			var modeAdapter = new android.widget.ArrayAdapter(context,android.R.layout.simple_spinner_item, modeList);
			modeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
			modeSpinner.setAdapter(modeAdapter);
			modeSpinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener( {
				onItemSelected: function(parent, view, position, id) {
					if (position == 0) {
						voxelMode = "Sphere";
					} else if (position == 1) {
						voxelMode = "Hollow Sphere";
					} else if (position == 2) {
						voxelMode = "Disk";
					} else if (position == 3) {
						voxelMode = "Cube";
					} else if (position == 4) {
						voxelMode = "Hollow Cube";
					} else if (position == 5) {
						voxelMode = "Platform";
					}
				}
				//onNothingSelected: function(parent) {
				//	//Do nothing
				//}
			}));
			if (voxelMode == "Sphere") {
				modeSpinner.setSelection(0);
			} else if (voxelMode == "Hollow Sphere") {
				modeSpinner.setSelection(1);
			} else if (voxelMode == "Disk") {
				modeSpinner.setSelection(2);
			} else if (voxelMode == "Cube") {
				modeSpinner.setSelection(3);
			} else if (voxelMode == "Hollow Cube") {
				modeSpinner.setSelection(4);
			} else if (voxelMode == "Platform") {
				modeSpinner.setSelection(5);
			}
			linearLayout.addView(modeSpinner);
			
			var replaceModeTextView = new android.widget.TextView(context);
			replaceModeTextView.setText("VoxelSniper Replace Mode:");
			linearLayout.addView(replaceModeTextView);
			
			var replaceModeSpinner = new android.widget.Spinner(context);
			var replaceModeList = [];
			replaceModeList.push("Add and Replace");
			replaceModeList.push("Replace Only");
			replaceModeList.push("Add Only");
			var replaceModeAdapter = new android.widget.ArrayAdapter(context,android.R.layout.simple_spinner_item, replaceModeList);
			replaceModeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
			replaceModeSpinner.setAdapter(replaceModeAdapter);
			replaceModeSpinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener( {
				onItemSelected: function(parent, view, position, id) {
					if (position == 0) {
						voxelReplaceMode = "Add and Replace";
					} else if (position == 1) {
						voxelReplaceMode = "Replace Only";
					} else if (position == 2) {
						voxelReplaceMode = "Add Only";
					}
				}
				//onNothingSelected: function(parent) {
				//	//Do nothing
				//}
			}));
			if (voxelReplaceMode == "Add and Replace") {
				replaceModeSpinner.setSelection(0)
			} else if (voxelReplaceMode == "Replace Only") {
				replaceModeSpinner.setSelection(1)
			} else if (voxelReplaceMode == "Add Only") {
				replaceModeSpinner.setSelection(2)
			}
			linearLayout.addView(replaceModeSpinner);
			
			var voxelDiameterTextView = new android.widget.TextView(context);
			voxelDiameterTextView.setText("VoxelSniper Diameter:");
			linearLayout.addView(voxelDiameterTextView);
			
			var voxelDiameterEditText = new android.widget.EditText(context);
			voxelDiameterEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			voxelDiameterEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					voxelDiameter = parseInt(voxelDiameterEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			if(voxelDiameter != 1){
				voxelDiameterEditText.setText(voxelDiameter.toString())
			}
			linearLayout.addView(voxelDiameterEditText);
			
			var idTextView = new android.widget.TextView(context);
			idTextView.setText("VoxelSniper Block ID:");
			linearLayout.addView(idTextView);
			
			var idEditText = new android.widget.EditText(context);
			idEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			idEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					voxelBlockId = parseInt(idEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			idEditText.setText(voxelBlockId.toString())
			linearLayout.addView(idEditText);
			
			var dataTextView = new android.widget.TextView(context);
			dataTextView.setText("VoxelSniper Block Data:");
			linearLayout.addView(dataTextView);
			
			var dataEditText = new android.widget.EditText(context);
			dataEditText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			dataEditText.addTextChangedListener(new android.text.TextWatcher( {
				afterTextChanged: function(s) {
					voxelBlockData = parseInt(dataEditText.getText().toString());
				}
				//beforeTextChanged: function(s, start, count, after) {}
				//onTextChanged: function(s, start, before, count) {}
			}));
			dataEditText.setText(voxelBlockData.toString())
			linearLayout.addView(dataEditText);
			
			var okButton = new android.widget.Button(context);
			okButton.setText("Ok");
			okButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    dialog.dismiss();
					clientMessage("Settings applied")
					if(voxelEnabled){
						clientMessage("VoxelSniper is now enabled")
						clientMessage("Voxel Mode: "+voxelMode)
						clientMessage("Replace Mode: "+voxelReplaceMode)
						clientMessage("Voxel Diameter: "+voxelDiameter)
						clientMessage("Voxel Block: "+voxelBlockId+":"+voxelBlockData)
					}else{
						clientMessage("VoxelSniper is now disabled")
					}
                }
            }));
			linearLayout.addView(okButton);
			
			dialog.show();
		}catch(e){
          clientMessage("GUI could not be displayed: " + e);
        }
  }}));
}


