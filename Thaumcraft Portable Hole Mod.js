// Thaumcraft Portable Hole Mod Script
// Made by wilco375

var pHoleId = 450
var pHoleActive
var initialized = false
var PortalOpenedTimeInTicks = 60 //(1 tick is 1/20 second, 20 ticks is 1 second)

function selectLevelHook(){
	if(!initialized){
ModPE.setItem(pHoleId,"ruby",0,"Portable Hole");
Item.addCraftRecipe(pHoleId, 1, 0, [264, 4, 0, 266, 4, 0, 332,1,0]);
ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/pl0trv0.png")
initialized = true;
}
}


function useItem(x,y,z,itemId,blockId, side) 
{
	if((itemId == pHoleId) && (blockId != 7))
	{
		if(pHoleActive == 1) {
		clientMessage("Portable Hole is already active!")
		}
		else{
		pHoleX = x
		pHoleY = y
		pHoleZ = z
		countdown = PortalOpenedTimeInTicks
		pHoleActive = 1
		BlockSide = side
		//clientMessage("You clicked at " + x + " " + y + " " + z + " " + side);
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
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX+1,pHoleY,pHoleZ)
		blockdata3 = getData(pHoleX+1,pHoleY+1,pHoleZ)
		blockdata4 = getData(pHoleX+1,pHoleY-1,pHoleZ)
		blockdata5 = getData(pHoleX-1,pHoleY,pHoleZ)
		blockdata6 = getData(pHoleX-1,pHoleY+1,pHoleZ)
		blockdata7 = getData(pHoleX-1,pHoleY-1,pHoleZ)
		blockdata8 = getData(pHoleX,pHoleY+1,pHoleZ)
		blockdata9 = getData(pHoleX,pHoleY-1,pHoleZ)
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
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX+1,pHoleY,pHoleZ)
		blockdata3 = getData(pHoleX+1,pHoleY+1,pHoleZ)
		blockdata4 = getData(pHoleX+1,pHoleY-1,pHoleZ)
		blockdata5 = getData(pHoleX-1,pHoleY,pHoleZ)
		blockdata6 = getData(pHoleX-1,pHoleY+1,pHoleZ)
		blockdata7 = getData(pHoleX-1,pHoleY-1,pHoleZ)
		blockdata8 = getData(pHoleX,pHoleY+1,pHoleZ)
		blockdata9 = getData(pHoleX,pHoleY-1,pHoleZ)
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
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX,pHoleY,pHoleZ+1)
		blockdata3 = getData(pHoleX,pHoleY+1,pHoleZ+1)
		blockdata4 = getData(pHoleX,pHoleY-1,pHoleZ+1)
		blockdata5 = getData(pHoleX,pHoleY,pHoleZ-1)
		blockdata6 = getData(pHoleX,pHoleY+1,pHoleZ-1)
		blockdata7 = getData(pHoleX,pHoleY-1,pHoleZ-1)
		blockdata8 = getData(pHoleX,pHoleY+1,pHoleZ)
		blockdata9 = getData(pHoleX,pHoleY-1,pHoleZ)
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
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX,pHoleY,pHoleZ+1)
		blockdata3 = getData(pHoleX,pHoleY+1,pHoleZ+1)
		blockdata4 = getData(pHoleX,pHoleY-1,pHoleZ+1)
		blockdata5 = getData(pHoleX,pHoleY,pHoleZ-1)
		blockdata6 = getData(pHoleX,pHoleY+1,pHoleZ-1)
		blockdata7 = getData(pHoleX,pHoleY-1,pHoleZ-1)
		blockdata8 = getData(pHoleX,pHoleY+1,pHoleZ)
		blockdata9 = getData(pHoleX,pHoleY-1,pHoleZ)
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
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX,pHoleY,pHoleZ+1)
		blockdata3 = getData(pHoleX+1,pHoleY,pHoleZ+1)
		blockdata4 = getData(pHoleX-1,pHoleY,pHoleZ+1)
		blockdata5 = getData(pHoleX,pHoleY,pHoleZ-1)
		blockdata6 = getData(pHoleX+1,pHoleY,pHoleZ-1)
		blockdata7 = getData(pHoleX-1,pHoleY,pHoleZ-1)
		blockdata8 = getData(pHoleX+1,pHoleY,pHoleZ)
		blockdata9 = getData(pHoleX-1,pHoleY,pHoleZ)
		setTile(pHoleX,pHoleY, pHoleZ)
		setTile(pHoleX,pHoleY,pHoleZ+1)
		setTile(pHoleX+1,pHoleY,pHoleZ+1)
		setTile(pHoleX-1,pHoleY,pHoleZ+1)
		setTile(pHoleX,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ-1)
		setTile(pHoleX-1,pHoleY,pHoleZ-1)
		setTile(pHoleX+1,pHoleY,pHoleZ)
		setTile(pHoleX-1,pHoleY,pHoleZ)	}
		else if(BlockSide == 0){
		block1 = getTile(pHoleX,pHoleY, pHoleZ)
		block2 = getTile(pHoleX,pHoleY,pHoleZ+1)
		block3 = getTile(pHoleX+1,pHoleY,pHoleZ+1)
		block4 = getTile(pHoleX-1,pHoleY,pHoleZ+1)
		block5 = getTile(pHoleX,pHoleY,pHoleZ-1)
		block6 = getTile(pHoleX+1,pHoleY,pHoleZ-1)
		block7 = getTile(pHoleX-1,pHoleY,pHoleZ-1)
		block8 = getTile(pHoleX+1,pHoleY,pHoleZ)
		block9 = getTile(pHoleX-1,pHoleY,pHoleZ)
		blockdata1 = getData(pHoleX,pHoleY, pHoleZ)
		blockdata2 = getData(pHoleX,pHoleY,pHoleZ+1)
		blockdata3 = getData(pHoleX+1,pHoleY,pHoleZ+1)
		blockdata4 = getData(pHoleX-1,pHoleY,pHoleZ+1)
		blockdata5 = getData(pHoleX,pHoleY,pHoleZ-1)
		blockdata6 = getData(pHoleX+1,pHoleY,pHoleZ-1)
		blockdata7 = getData(pHoleX-1,pHoleY,pHoleZ-1)
		blockdata8 = getData(pHoleX+1,pHoleY,pHoleZ)
		blockdata9 = getData(pHoleX-1,pHoleY,pHoleZ)
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
				//clientMessage("Done!");
				pHoleActive = 0;
				if(BlockSide == 2){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2, blockdata2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3, blockdata3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4, blockdata4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5, blockdata5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6, blockdata6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9), blockdata9}
				else if(BlockSide == 3){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX+1,pHoleY,pHoleZ,block2, blockdata2)
				setTile(pHoleX+1,pHoleY+1,pHoleZ,block3, blockdata3)
				setTile(pHoleX+1,pHoleY-1,pHoleZ,block4, blockdata4)
				setTile(pHoleX-1,pHoleY,pHoleZ,block5, blockdata5)
				setTile(pHoleX-1,pHoleY+1,pHoleZ,block6, blockdata6)
				setTile(pHoleX-1,pHoleY-1,pHoleZ,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)}
				else if(BlockSide == 4){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)}
				else if(BlockSide == 5){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX,pHoleY+1,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX,pHoleY-1,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX,pHoleY+1,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX,pHoleY-1,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX,pHoleY+1,pHoleZ,block8, blockdata8)
				setTile(pHoleX,pHoleY-1,pHoleZ,block9, blockdata9)}
				else if(BlockSide == 1){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8, blockdata8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9, blockdata9)}
				else if(BlockSide == 0){
				setTile(pHoleX,pHoleY, pHoleZ,block1, blockdata1)
				setTile(pHoleX,pHoleY,pHoleZ+1,block2, blockdata2)
				setTile(pHoleX+1,pHoleY,pHoleZ+1,block3, blockdata3)
				setTile(pHoleX-1,pHoleY,pHoleZ+1,block4, blockdata4)
				setTile(pHoleX,pHoleY,pHoleZ-1,block5, blockdata5)
				setTile(pHoleX+1,pHoleY,pHoleZ-1,block6, blockdata6)
				setTile(pHoleX-1,pHoleY,pHoleZ-1,block7, blockdata7)
				setTile(pHoleX+1,pHoleY,pHoleZ,block8, blockdata8)
				setTile(pHoleX-1,pHoleY,pHoleZ,block9, blockdata9)}
				}
		}
	
}
