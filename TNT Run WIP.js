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
			clientMessage("Make sure you're standing in the middle of a circle with a diameter of ... blocks. If you are, type /arena again")
			cmdstage = 1
		}
		else if(cmdstage == 1){
			saveArena(getPlayerX(),getPlayerY(),getPlayerZ())
			cmdstage = null
		}
	}
}
 
function saveArena(x,y,z){


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
