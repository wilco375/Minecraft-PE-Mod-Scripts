//Trails Mod
//By wilco375
//Don't re-upload this code, nor share or redistribute this mod using the Github/Dropbox link without permission. Instead, use the adf.ly link

var trail

function modTick(){
	if(trail != null){
		x = Player.getX()
		z = Player.getZ()
		for(y=Player.getY()-1.2;y<=Player.getY()-0.3;y=y+0.1){
			if(trail == "crit"){
				Level.addParticle(ParticleType.crit,x,y,z,0,0,0,1)
			}
			if(trail == "redstone"){
				Level.addParticle(ParticleType.redstone,x,y,z,0,0,0,1)
			}
			if(trail == "cloud"){
				Level.addParticle(ParticleType.cloud,x,y,z,0,0,0,1)
			}
			if(trail == "flame"){
				Level.addParticle(ParticleType.flame,x,y,z,0,0,0,1)
			}
		}
	}
}

function procCmd(command){
	var cmd = command.split(" ");
    if(cmd[0] == "trail") {
        if(cmd[1] == "crit" || cmd[1] == "redstone" || cmd[1] == "cloud" || cmd[1] == "flame"){
			trail = cmd[1]
		}
    else if(cmd[1] == "off"){
     trail = null
    }
		else{
			clientMessage("Please use the format /trail <type>")
			clientMessage("Possible types are crit, redstone, cloud and flame, and off to remove the trail")
		}
    }
}