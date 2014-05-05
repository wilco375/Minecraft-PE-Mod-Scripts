// portable hole mod
// made by wilco375

var pHoleActive
//var countdown = 100

ModPE.setItem(450,"ruby",0,"Portable Hole");
Item.addCraftRecipe(450, 1, 0, [264, 4, 0, 266, 4, 0, 332,1,0]);

function useItem(x,y,z,itemId,blockId, side) 
{
	if((itemId == 450) && (blockId != 7))
	{
		if(pHoleActive == 1) {
		clientMessage("Portable Hole is already active!")
		}
		else{
		pHoleX = x
		pHoleY = y
		pHoleZ = z
		countdown = 100
		pHoleActive = 1
		clientMessage("You clicked at " + x + " " + y + " " + z + " " + side);
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX+1,pHoleY,pHoleZ)
		block3 = getTile(pHoleX+1,pHoleY+1,pHoleZ)
		block4 = getTile(pHoleX+1,pHoleY-1,pHoleZ)
		block5 = getTile(pHoleX-1,pHoleY,pHoleZ)
		block6 = getTile(pHoleX-1,pHoleY+1,pHoleZ)
		block7 = getTile(pHoleX-1,pHoleY-1,pHoleZ)
		block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
		block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ,0)
		setTile(pHoleX+1,pHoleY,pHoleZ,0)
		setTile(pHoleX+1,pHoleY+1,pHoleZ,0)
		setTile(pHoleX+1,pHoleY-1,pHoleZ,0)
		setTile(pHoleX-1,pHoleY,pHoleZ,0)
		setTile(pHoleX-1,pHoleY+1,pHoleZ,0)
		setTile(pHoleX-1,pHoleY-1,pHoleZ,0)
		setTile(pHoleX,pHoleY+1,pHoleZ,0)
		setTile(pHoleX,pHoleY-1,pHoleZ,0)
		
		}
	}
}

//function procCmd(command)
//{
//var cmd = command.split(" ");
//if(cmd[0] == "xyz")
//	{
//	clientMessage("You selected " + pHoleX  + " " + pHoleY + " " + pHoleZ);
//	}
//}

function modTick()
{
if((pHoleActive == 1))
		{
		if(countdown != 0) {
			countdown--;
			} if(countdown == 0) {
				clientMessage("Done!");
				pHoleActive = 0;
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9)
		
				}
		}
	
}
