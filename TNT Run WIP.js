var MaxPlayers = 10
var SecondsBeforeStarting = 30//whats the variable for when the game starts in seconds again?

var playersJoined
var counter

function Player(){
	return Server.getAllPlayers()
}

function useItem(x,y,z,itemId,blockId){
	if(blockId == 63 || blockId == 68){
		if(Level.getSignText(x,y,z,3) == "Join"){
			p = Level.getNearestPlayer(x,y,z)
			Entity.setPos(p,arenax,arenay,arenaz)
			if(playersJoined == null || playersJoined == 0){
				playersJoined == 1
				var PlayerEntsJoined = []
				PlayerEntsjoined[0]=p
				var joinSignX = x
				var joinSignY = y
				var joinSignZ = z
			} 
			else{
				playersJoined++
				PlayerEntsJoined[PlayerEntsJoined.length]=p
			}
			Block.setSignLign(x,y,z,2,playersjoined+"/"+MaxPlayers)
		}
	}
	else if(cmdstage == 1){
		var arenax = x
		var arenay = y
		var arenaz = z
		cmdstage = 2
	}
	else if(cmdstage == 2){
		if(y == arenay){
			setArena(arenax,arenay,arenaz,x,y,z)
			cmdstage = null			
		}
		else clientMessage("ERROR: The y coordinates of the two selected points are different!")
	}
}
 
function Level.getNearestPlayer(x,y,z){ 
	var XPlayerDistance = []
	var YPlayerDistance = []
	var ZPlayerDistance = []
	var PlayerDistance = []
	var NearestPlayer = null
	var NearestDistance = null 
	for(i = 0;i<=Players.length;i++){
		XPlayerDistance[i] = x- Entity.getX(Player()[i])
		if(XPlayerDistance[i] < 0){
			XPlayerDistance[i] *= -1
		}
		YPlayerDistance[i] = y-Entity.getY(Player()[i])
		if(YPlayerDistance[i] < 0){
			YPlayerDistance *= -1
		}
		ZPlayerDistance[i] = z-Entity.getZ(Player()[i])
		if(ZPlayerDistance[i] < 0){ 
			ZPlayerDistance *= -1
		}
		PlayerDistance[i] = Math.round(Math.sqrt(YPlayerDistance[i] * YPlayerDistance[i] + Math.sqrt(XPlayerDistance[i] * XPlayerDistance[i] + ZPlayerDistance[i] * ZPlayerDistance[i]) * Math.sqrt(XPlayerDistance[i] * XPlayerDistance[i] + ZPlayerDistance[i] * ZPlayerDistance[i])) * 100) / 100 
		if(NearestDistance == null){
			NearestDistance == PlayerDistance[i] 
			NearestPlayer = i
		}
		else if(PlayerDistance[i] < NearestDistance){
			NearestDistance = PlayerDistance[i]
			NearestPlayer = i
		}
		return NearestPlayer
	}
}

function procCmd(command){
	var cmdstage 
	if(command == arena){
		if(cmdstage = null){
			clientMessage("First select one corner of the arena, then the opposite corner")
			cmdstage = 1
		}
	}
}
 
function setArena(x1,y1,z1,x2,y2,z2){
	if(x1 >= x2){
		var t
		x1 = t
		x1 = x2
		x2 = t
		z1 = t
		z1 = z2
		z2 = t
	}
	if(getTile(0,0,0) != 54){
		setTile(0,0,0,54)
		setTile(1,0,0,54)
		if(getTile(0,1,0) != 7) setTile(0,1,0,7)
		if(getTile(1,1,0) != 7) setTile(0,1,0,7)
		if(getTile(0,0,1) != 7) setTile(0,1,0,7)
		if(getTile(1,0,1) != 7) setTile(0,1,0,7)
		if(getTile(2,0,0) != 7) setTile(0,1,0,7)
	}
	else{
		for(i = 0; i <= 27; i++){
			Level.setChestSlot(0,0,0,i,0,0);
			Level.setChestSlot(1,0,0,i,0,0);
		}
	}
	//x1
		Level.setChestSlot(0,0,0,i,0,0);
		Level.setChestSlot(1,0,0,i,0,0);
		Level.setChestSlot(0,0,0,i,0,0);
			Level.setChestSlot(1,0,0,i,0,0);
			Level.setChestSlot(0,0,0,i,0,0);
			Level.setChestSlot(1,0,0,i,0,0);
}

function newLevel(){
	
	else{
		clientMessage("This world does not have an arena set. Type /arena to register one")	
	}
}

function modTick(){
	if(joinedPlayers >= 1){
		if(counter == null) counter = 1
		else counter++
	}
	if(counter >= SecondsBeforeStarting*20){ 
	startGame()
	counter = null
	}
	if(joinedPlayers >= MaxPlayers) startGame()
}

function startGame(){
	Level.setSignText(JoinSignX,JoinSignY,JoinSignZ,3,"Started") 
	gameStarted = 1
}

var toBinary = function(decNum){
    return parseInt(decNum,10).toString(2);
}

var toDecimal = function(binary) {
    return parseInt(binary,2).toString(10);
}
