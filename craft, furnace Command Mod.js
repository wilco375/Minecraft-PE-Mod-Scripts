function procCmd(command)
{
var cmd = command.split(" ");
if(cmd[0] == "craft" && Level.getGameMode() == "1")
{
Level.setGameMode(0)
clientMessage(ChatColor.GOLD + "Changed gamemode to survival")
Level.setTile(Player.getX()+1,Player.getY()-1,Player.getZ(),58);
clientMessage(ChatColor.GOLD + "Spawned crafting table!");
setRot(getPlayerEnt(),-90,70);
}

else if(cmd[0] == "craft" && Level.getGameMode() == "0")
{
Level.setTile(Player.getX()+1,Player.getY()-1,Player.getZ(),58);
clientMessage(ChatColor.GOLD + "Spawned crafting table!");
setRot(getPlayerEnt(),-90,70);
}

else if(cmd[0] == "furnace" && Level.getGameMode() == "1")
{
Level.setGameMode(0)
clientMessage(ChatColor.GOLD + "Changed gamemode to survival") 
Level.setTile(Player.getX()+1,Player.getY()-1,Player.getZ(),61);
clientMessage(ChatColor.GOLD + "Spawned furnace!");
setRot(getPlayerEnt(),-90,70);
}

else if(cmd[0] == "furnace" && Level.getGameMode() == "0")
{ 
Level.setTile(Player.getX()+1,Player.getY()-1,Player.getZ(),61);
clientMessage(ChatColor.GOLD + "Spawned furnace!");
setRot(getPlayerEnt(),-90,70);
}

}
