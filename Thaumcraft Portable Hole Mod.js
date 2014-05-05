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
		BlockSide = side
		clientMessage("You clicked at " + x + " " + y + " " + z + " " + side);
		if(BlockSide == 2){
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
		setTile(pHoleX,pHoleY-1,pHoleZ,0)}
		else if(BlockSide == 3){
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
		setTile(pHoleX,pHoleY-1,pHoleZ,0)}
		else if(BlockSide == 4){
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
		block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
		block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
		block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
		block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
		block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
		block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
		block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ)
		setTile(pHoleX,pHoleY,pHoleZ+1)
		setTile(pHoleX,pHoleY+1,pHoleZ+1)
		setTile(pHoleX,pHoleY-1,pHoleZ+1)
		setTile(pHoleX,pHoleY,pHoleZ-1)
		setTile(pHoleX,pHoleY+1,pHoleZ-1)
		setTile(pHoleX,pHoleY-1,pHoleZ-1)
		setTile(pHoleX,pHoleY+1,pHoleZ)
		setTile(pHoleX,pHoleY-1,pHoleZ)	}	
		else if(BlockSide == 5){
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
		block3 = getTile(pHoleX,pHoleY+1,pHoleZ+1)
		block4 = getTile(pHoleX,pHoleY-1,pHoleZ+1)
		block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
		block6 = getTile(pHoleX,pHoleY+1,pHoleZ-1)
		block7 = getTile(pHoleX,pHoleY-1,pHoleZ-1)
		block8 = getTile(pHoleX,pHoleY+1,pHoleZ)
		block9 = getTile(pHoleX,pHoleY-1,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ)
		setTile(pHoleX,pHoleY,pHoleZ+1)
		setTile(pHoleX,pHoleY+1,pHoleZ+1)
		setTile(pHoleX,pHoleY-1,pHoleZ+1)
		setTile(pHoleX,pHoleY,pHoleZ-1)
		setTile(pHoleX,pHoleY+1,pHoleZ-1)
		setTile(pHoleX,pHoleY-1,pHoleZ-1)
		setTile(pHoleX,pHoleY+1,pHoleZ)
		setTile(pHoleX,pHoleY-1,pHoleZ)	}
		else if(BlockSide == 1){
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
		block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
		block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
		block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
		block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
		block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
		block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
		block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ)
		setTile(pHoleX,pHoleY,pHoleZ+1)
		setTile(pHoleX+1,pHoleY,pHoleZ+1)
		setTile(pHoleX-1,pHoleY,pHoleZ+1)
		setTile(pHoleX,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ-1)
		setTile(pHoleX-1,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ)
		setTile(pHoleX-1,pHoleY,pHoleZ)	}
		else if(BlockSide == 6){
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
		block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
		block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
		block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
		block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
		block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
		block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
		block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ)
		setTile(pHoleX,pHoleY,pHoleZ+1)
		setTile(pHoleX+1,pHoleY,pHoleZ+1)
		setTile(pHoleX-1,pHoleY,pHoleZ+1)
		setTile(pHoleX,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ-1)
		setTile(pHoleX-1,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ)
		setTile(pHoleX-1,pHoleY,pHoleZ)	}
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
				if(BlockSide == 2){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9)}
				else if(BlockSide == 3){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9)}
				else if(BlockSide == 4){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9)}
				else if(BlockSide == 5){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9)}
				else if(BlockSide == 1){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9)}
				else if(BlockSide == 6){
				setTile(pHoleX,pHoleY, pHoleZ,block1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9)}
				}
		}
	
}
