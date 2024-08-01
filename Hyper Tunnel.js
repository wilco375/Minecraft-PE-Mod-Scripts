var topBlocks = [];
var bottomBlocks = [];
var gameX, gameY, gameZ;
var gameProgress = 0;
var gameStarted = 0;
var counter = 0;
var countDown = 0;

function newLevel(){
	generateGame();
}

//Generate random game
function generateGame(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
 	activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
 		try{ 
 			while(topBlocks.length < 5000){
				//Blocks directly after each other
				if(!separate()){
					//Define length
					if(topBlocks.length==0) var isTop = true
					else var isTop = onTop();
					for(i=0;i<=random(5,15);i++){
						if(isTop){
							topBlocks.push("1");
							bottomBlocks.push("0");
						} 
						else{
							bottomBlocks.push("1");
							topBlocks.push("0");
						} 
					}
					//Add room at end
					for(i=0;i<=random(3,6);i++){
						topBlocks.push("0");
						bottomBlocks.push("0");
					}
				}else{
					if(topBlocks.length==0) var currentTop = true
					else var currentTop = onTop();
					for(i=0;i<=random(5,15);i++){
						//1 out of 3 chance to change from top to bottom / bottom to top
						if(currentTop){
							topBlocks.push("1");
							bottomBlocks.push("0");
						}else{
							topBlocks.push("0");
							bottomBlocks.push("1");
						}
						//Add room at end
						for(i=0;i<=random(3,5);i++){
							topBlocks.push("0");
							bottomBlocks.push("0");
						}
						//Define top/bottom for next run
						var randomNr = random(1,5);
						if(randomNr == 1 || randomNr == 2)  currentTop = !currentTop
					}
				}
			}
 		}catch(e){ 
 			print(e) 
 		} 
 	}})); 
}

function procCmd(command){
	if(command == "hypertunnel start"){
		countDown = 1;
	} 
	else if(command == "hypertunnel stop") resetGame();
}

function startGame(){
	gameProgress = 0;
	gameStarted = 1;
	gameX = Math.floor(Player.getX());
	gameY = Math.round(Player.getY());
	gameY = gameY-2;
	gameZ = Math.floor(Player.getZ());
	Entity.setPosition(getPlayerEnt(),gameX+0.5,getPlayerY(),gameZ+0.5);
	Entity.setRot(getPlayerEnt(),270,-15);
	for(i = gameZ-7;i<=gameZ+7;i++){
		for(j = gameY;j<=gameY+6;j++){
			setTile(gameX+7,j,i,49);
		}
	}
	for(i = gameZ-7;i<=gameZ+7;i++){
		setTile(gameX+6,gameY,i,1);
		setTile(gameX+6,gameY+6,i,1);
	}
	for(j = gameY;j<=gameY+6;j++){
		setTile(gameX+6,j,gameZ+7,1);
		setTile(gameX+6,j,gameZ-7,1);
	}
	setTile(gameX+6,gameY+1,gameZ-4,41);
	updateGame();
}

function updateGame(){
	if(gameProgress+7>=5000){
		gameProgress = 5004;
	}
	for(i=gameProgress-6;i<=gameProgress+6;i++){
		if(i>=0){
			if(bottomBlocks[i]=="1"){
				if(getTile(gameX+6,gameY+1,gameZ+i-gameProgress) == 41) resetGame();
				else{
					setTile(gameX+6,gameY+2,gameZ+i-gameProgress,1);
					setTile(gameX+6,gameY+1,gameZ+i-gameProgress,1);
				}
			}else{
				if(getTile(gameX+6,gameY+2,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+2,gameZ+i-gameProgress,0);
				if(getTile(gameX+6,gameY+1,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+1,gameZ+i-gameProgress,0);
			}
			if(topBlocks[i]=="1"){
				if(getTile(gameX+6,gameY+5,gameZ+i-gameProgress) == 41) resetGame();
				else{
					setTile(gameX+6,gameY+4,gameZ+i-gameProgress,1);
					setTile(gameX+6,gameY+5,gameZ+i-gameProgress,1);
				}
			}else{
				if(getTile(gameX+6,gameY+4,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+4,gameZ+i-gameProgress,0);
				if(getTile(gameX+6,gameY+5,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+5,gameZ+i-gameProgress,0);
			}
		}
	}
	gameProgress++;
}

function modTick(){
	if(countDown>0){
		if(countDown != 101){
			countDown++;
			ModPE.showTipMessage("Starting in: "+(Math.round((101-countDown)/20)));
		}
		else{
			startGame();
			countDown = 0;
			ModPE.showTipMessage("GO!");
		}
	}
	if(gameStarted == 1){
		if(getPlayerX()>gameX+0.5){
			if(getTile(gameX+6,gameY+1,gameZ-4) == 41){
				setTile(gameX+6,gameY+1,gameZ-4,0);
				setTile(gameX+6,gameY+5,gameZ-4,41);
			}	
		}
		else if(getPlayerX()<gameX+0.5){
			if(getTile(gameX+6,gameY+5,gameZ-4) == 41){
				setTile(gameX+6,gameY+1,gameZ-4,41);
				setTile(gameX+6,gameY+5,gameZ-4,0);
			}
		}
		Entity.setPosition(getPlayerEnt(),gameX+0.5,getPlayerY(),gameZ+0.5);
		Entity.setRot(getPlayerEnt(),270,-15);
		
		if(counter >= 5){
			updateGame();
			counter = 0;
		}else if(counter >= 4 && gameProgress>=100){
			updateGame();
			counter = 0;
		}else if(counter >= 3 && gameProgress>=200){
			updateGame();
			counter = 0;
		}else if(counter >= 2 && gameProgress>=300){
			updateGame();
			counter = 0;
		}else if(counter >= 1 && gameProgress>=500){
			updateGame();
			counter = 0;
		}else counter++;
		if(gameProgress-4>0) ModPE.showTipMessage("Score: "+(gameProgress-4));
		else ModPE.showTipMessage("Score: 0");
		Level.setTime(2000);
	}
}

function resetGame(){
	if(gameProgress-4 == 5000) clientMessage("Game over. You got to the end :O Your score is 5000")
	else clientMessage("Game over. Your score is "+(gameProgress-4));
	gameProgress = 0;
	gameStarted = 0;
	topBlocks = [];
	bottomBlocks = [];
	generateGame();
	
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
 	activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
 		try{ 
			for(x = gameX+6;x<=gameX+7;x++){
				for(y = gameY;y<=gameY+6;y++){
					for(z = gameZ-7;z<=gameZ+7;z++){
						setTile(x,y,z,0);
					}
				}
			}
 		}catch(e){ 
 			print(e) 
 		} 
 	}})); 
}

//Generate random number between first and last
function random(first,last){
	if(first > last){
		var temp = last;
		last = first;
		first = temp;
	}
	return Math.floor((Math.random() * last) + first); 
}

function onTop(){
	if(random(0,1) == 0){
		return true;
	}else{
		return false;
	} 
}

function separate(){
	if(random(0,4) == 0){
		return false;
	}else{
		return true;
	}
}