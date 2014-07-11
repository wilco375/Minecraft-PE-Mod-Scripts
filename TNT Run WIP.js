var MaxPlayers = 10
var SecondsBeforeStarting = 30
var arenax1
var arenay1
var arenaz1
var arenax2
var arenay2
var arenaz2

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
		var firstx = x
		var firsty = y
		var firstz = z
		cmdstage = 2
	}
	else if(cmdstage == 2){
		if(y == firsty){
			setArena(firstx,firsty,firstz,x,y,z)
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
	arenax1 = toBinary(x1) 
	arenay1 = toBinary(y1)
	arenaz1 = toBinary(z1)
	arenax2 = toBinary(x2)
	arenay2 = toBinary(y2)
	arenaz2 = toBinary(z2)
	//x1
	x1 = x1.toString()
	if(parseInt(x1.charAt(0) >= 0) Level.setChestSlot(0,0,0,0,parseInt(x1.charAt(0)),1);
	if(parseInt(x1.charAt(1) >= 0) Level.setChestSlot(0,0,0,1,parseInt(x1.charAt(1)),1);
	if(parseInt(x1.charAt(2) >= 0) Level.setChestSlot(0,0,0,2,parseInt(x1.charAt(2)),1);
	if(parseInt(x1.charAt(3) >= 0) Level.setChestSlot(0,0,0,3,parseInt(x1.charAt(3)),1);
	if(parseInt(x1.charAt(4) >= 0) Level.setChestSlot(0,0,0,4,parseInt(x1.charAt(4)),1);
	if(parseInt(x1.charAt(5) >= 0) Level.setChestSlot(0,0,0,5,parseInt(x1.charAt(5)),1);
	if(parseInt(x1.charAt(6) >= 0) Level.setChestSlot(0,0,0,6,parseInt(x1.charAt(6)),1);
	if(parseInt(x1.charAt(7) >= 0) Level.setChestSlot(0,0,0,7,parseInt(x1.charAt(7)),1);
	//y1
	y1 = y1.toString()
	if(parseInt(y1.charAt(9) >= 0) Level.setChestSlot(0,0,0,0,parseInt(y1.charAt(9)),1);
	if(parseInt(y1.charAt(10) >= 0) Level.setChestSlot(0,0,0,1,parseInt(y1.charAt(10)),1);
	if(parseInt(y1.charAt(11) >= 0) Level.setChestSlot(0,0,0,2,parseInt(y1.charAt(11)),1);
	if(parseInt(y1.charAt(12) >= 0) Level.setChestSlot(0,0,0,3,parseInt(y1.charAt(12)),1);
	if(parseInt(y1.charAt(13) >= 0) Level.setChestSlot(0,0,0,4,parseInt(y1.charAt(13)),1);
	if(parseInt(y1.charAt(14) >= 0) Level.setChestSlot(0,0,0,5,parseInt(y1.charAt(14)),1);
	if(parseInt(y1.charAt(15) >= 0) Level.setChestSlot(0,0,0,6,parseInt(y1.charAt(15)),1);
	if(parseInt(y1.charAt(16) >= 0) Level.setChestSlot(0,0,0,7,parseInt(y1.charAt(16)),1);
	//z1
	z1 = z1.toString()
	if(parseInt(z1.charAt(18) >= 0) Level.setChestSlot(0,0,0,0,parseInt(z1.charAt(18)),1);
	if(parseInt(z1.charAt(19) >= 0) Level.setChestSlot(0,0,0,1,parseInt(z1.charAt(19)),1);
	if(parseInt(z1.charAt(20) >= 0) Level.setChestSlot(0,0,0,2,parseInt(z1.charAt(20)),1);
	if(parseInt(z1.charAt(21) >= 0) Level.setChestSlot(0,0,0,3,parseInt(z1.charAt(21)),1);
	if(parseInt(z1.charAt(22) >= 0) Level.setChestSlot(0,0,0,4,parseInt(z1.charAt(22)),1);
	if(parseInt(z1.charAt(23) >= 0) Level.setChestSlot(0,0,0,5,parseInt(z1.charAt(23)),1);
	if(parseInt(z1.charAt(24) >= 0) Level.setChestSlot(0,0,0,6,parseInt(z1.charAt(24)),1);
	if(parseInt(z1.charAt(25) >= 0) Level.setChestSlot(0,0,0,7,parseInt(z1.charAt(25)),1);
	//x2
	x2 = x2.toString()
	if(parseInt(x2.charAt(0) >= 0) Level.setChestSlot(1,0,0,0,parseInt(x2.charAt(0)),1);
	if(parseInt(x2.charAt(1) >= 0) Level.setChestSlot(1,0,0,1,parseInt(x2.charAt(1)),1);
	if(parseInt(x2.charAt(2) >= 0) Level.setChestSlot(1,0,0,2,parseInt(x2.charAt(2)),1);
	if(parseInt(x2.charAt(3) >= 0) Level.setChestSlot(1,0,0,3,parseInt(x2.charAt(3)),1);
	if(parseInt(x2.charAt(4) >= 0) Level.setChestSlot(1,0,0,4,parseInt(x2.charAt(4)),1);
	if(parseInt(x2.charAt(5) >= 0) Level.setChestSlot(1,0,0,5,parseInt(x2.charAt(5)),1);
	if(parseInt(x2.charAt(6) >= 0) Level.setChestSlot(1,0,0,6,parseInt(x2.charAt(6)),1);
	if(parseInt(x2.charAt(7) >= 0) Level.setChestSlot(1,0,0,7,parseInt(x2.charAt(7)),1);
	//y2
	y2 = y2.toString()
	if(parseInt(y2.charAt(9) >= 0) Level.setChestSlot(1,0,0,0,parseInt(y2.charAt(9)),1);
	if(parseInt(y2.charAt(10) >= 0) Level.setChestSlot(1,0,0,1,parseInt(y2.charAt(10)),1);
	if(parseInt(y2.charAt(11) >= 0) Level.setChestSlot(1,0,0,2,parseInt(y2.charAt(11)),1);
	if(parseInt(y2.charAt(12) >= 0) Level.setChestSlot(1,0,0,3,parseInt(y2.charAt(12)),1);
	if(parseInt(y2.charAt(13) >= 0) Level.setChestSlot(1,0,0,4,parseInt(y2.charAt(13)),1);
	if(parseInt(y2.charAt(14) >= 0) Level.setChestSlot(1,0,0,5,parseInt(y2.charAt(14)),1);
	if(parseInt(y2.charAt(15) >= 0) Level.setChestSlot(1,0,0,6,parseInt(y2.charAt(15)),1);
	if(parseInt(y2.charAt(16) >= 0) Level.setChestSlot(1,0,0,7,parseInt(y2.charAt(16)),1);
	//z2
	z2 = z2.toString()
	if(parseInt(z2.charAt(18) >= 0) Level.setChestSlot(1,0,0,0,parseInt(z2.charAt(18)),1);
	if(parseInt(z2.charAt(19) >= 0) Level.setChestSlot(1,0,0,1,parseInt(z2.charAt(19)),1);
	if(parseInt(z2.charAt(20) >= 0) Level.setChestSlot(1,0,0,2,parseInt(z2.charAt(20)),1);
	if(parseInt(z2.charAt(21) >= 0) Level.setChestSlot(1,0,0,3,parseInt(z2.charAt(21)),1);
	if(parseInt(z2.charAt(22) >= 0) Level.setChestSlot(1,0,0,4,parseInt(z2.charAt(22)),1);
	if(parseInt(z2.charAt(23) >= 0) Level.setChestSlot(1,0,0,5,parseInt(z2.charAt(23)),1);
	if(parseInt(z2.charAt(24) >= 0) Level.setChestSlot(1,0,0,6,parseInt(z2.charAt(24)),1);
	if(parseInt(z2.charAt(25) >= 0) Level.setChestSlot(1,0,0,7,parseInt(z2.charAt(25)),1);
}

function newLevel(){
	if(getTile(0,0,0)==54){
		arenax1 = toDecimal(parseFloat(Level.getChestSlot(0,0,0,0).toString()+Level.getChestSlot(0,0,0,1).toString()+Level.getChestSlot(0,0,0,2).toString()+Level.getChestSlot(0,0,0,3).toString()+Level.getChestSlot(0,0,0,4).toString()+Level.getChestSlot(0,0,0,5).toString()+Level.getChestSlot(0,0,0,6).toString()+Level.getChestSlot(0,0,0,7).toString()))
		arenay1 = toDecimal(parseFloat(Level.getChestSlot(0,0,0,9).toString()+Level.getChestSlot(0,0,0,10).toString()+Level.getChestSlot(0,0,0,11).toString()+Level.getChestSlot(0,0,0,12).toString()+Level.getChestSlot(0,0,0,13).toString()+Level.getChestSlot(0,0,0,14).toString()+Level.getChestSlot(0,0,0,15).toString()+Level.getChestSlot(0,0,0,16).toString()))
		arenaz1 = toDecimal(parseFloat(Level.getChestSlot(0,0,0,18).toString()+Level.getChestSlot(0,0,0,19).toString()+Level.getChestSlot(0,0,0,20).toString()+Level.getChestSlot(0,0,0,21).toString()+Level.getChestSlot(0,0,0,22).toString()+Level.getChestSlot(0,0,0,23).toString()+Level.getChestSlot(0,0,0,24).toString()+Level.getChestSlot(0,0,0,25).toString()))
		arenax2 = toDecimal(parseFloat(Level.getChestSlot(1,0,0,0).toString()+Level.getChestSlot(1,0,0,1).toString()+Level.getChestSlot(1,0,0,2).toString()+Level.getChestSlot(1,0,0,3).toString()+Level.getChestSlot(1,0,0,4).toString()+Level.getChestSlot(1,0,0,5).toString()+Level.getChestSlot(1,0,0,6).toString()+Level.getChestSlot(1,0,0,7).toString()))
		arenay2 = toDecimal(parseFloat(Level.getChestSlot(1,0,0,9).toString()+Level.getChestSlot(1,0,0,10).toString()+Level.getChestSlot(1,0,0,11).toString()+Level.getChestSlot(1,0,0,12).toString()+Level.getChestSlot(1,0,0,13).toString()+Level.getChestSlot(1,0,0,14).toString()+Level.getChestSlot(1,0,0,15).toString()+Level.getChestSlot(1,0,0,16).toString()))
		arenaz2 = toDecimal(parseFloat(Level.getChestSlot(1,0,0,18).toString()+Level.getChestSlot(1,0,0,19).toString()+Level.getChestSlot(1,0,0,20).toString()+Level.getChestSlot(1,0,0,21).toString()+Level.getChestSlot(1,0,0,22).toString()+Level.getChestSlot(1,0,0,23).toString()+Level.getChestSlot(1,0,0,24).toString()+Level.getChestSlot(1,0,0,25).toString()))
	}
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
