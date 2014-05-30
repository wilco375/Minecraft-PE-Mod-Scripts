var blockMover = 267
var moveBlock
var moveBlockId
var moveBlockData

function useItem(x,y,z,itemId,blockId,side){
	if(itemId == blockMover){
		preventDefault()
		if(moveBlock != 1){
			moveBlock = 1
			if(blockId != 54){
				moveBlockId = blockId
				moveBlockData = Level.getData(x,y,z)
				setTile(x,y,z,0,0)
			}
			else if(blockId == 54){
				moveBlockId = 54;
				moveBlockData = Level.getData(x,y,z);
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)

				moveBlockData = Level.getData(x,y,z);
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId1 = Level.getChestSlot(x,y,z,1);
				chestSlotCount1 = Level.getChestSlotCount(x,y,z,1);
				chestSlotData1 = Level.getChestSlotData(x,y,z,1);
				Level.setChestSlot(x,y,z,1,0,0,0)
				chestSlotId2 = Level.getChestSlot(x,y,z,2);
				chestSlotCount2 = Level.getChestSlotCount(x,y,z,2);
				chestSlotData2 = Level.getChestSlotData(x,y,z,2);
				Level.setChestSlot(x,y,z,2,0,0,0)
				chestSlotId3 = Level.getChestSlot(x,y,z,3);
				chestSlotCount3 = Level.getChestSlotCount(x,y,z,3);
				chestSlotData3 = Level.getChestSlotData(x,y,z,3);
				Level.setChestSlot(x,y,z,3,0,0,0)
				chestSlotId4 = Level.getChestSlot(x,y,z,4);
				chestSlotCount4 = Level.getChestSlotCount(x,y,z,4);
				chestSlotData4 = Level.getChestSlotData(x,y,z,4);
				Level.setChestSlot(x,y,z,4,0,0,0)
				chestSlotId5 = Level.getChestSlot(x,y,z,5);
				chestSlotCount5 = Level.getChestSlotCount(x,y,z,5);
				chestSlotData5 = Level.getChestSlotData(x,y,z,5);
				Level.setChestSlot(x,y,z,5,0,0,0)
				chestSlotId6 = Level.getChestSlot(x,y,z,6);
				chestSlotCount6 = Level.getChestSlotCount(x,y,z,6);
				chestSlotData6 = Level.getChestSlotData(x,y,z,6);
				Level.setChestSlot(x,y,z,6,0,0,0)
				chestSlotId7 = Level.getChestSlot(x,y,z,7);
				chestSlotCount7 = Level.getChestSlotCount(x,y,z,7);
				chestSlotData7 = Level.getChestSlotData(x,y,z,7);
				Level.setChestSlot(x,y,z,7,0,0,0)
				chestSlotId8 = Level.getChestSlot(x,y,z,8);
				chestSlotCount8 = Level.getChestSlotCount(x,y,z,8);
				chestSlotData8 = Level.getChestSlotData(x,y,z,8);
				Level.setChestSlot(x,y,z,8,0,0,0) 

				moveBlockData = Level.getData(x,y,z);
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)
				chestSlotId0 = Level.getChestSlot(x,y,z,0);
				chestSlotCount0 = Level.getChestSlotCount(x,y,z,0);
				chestSlotData0 = Level.getChestSlotData(x,y,z,0);
				Level.setChestSlot(x,y,z,0,0,0,0)

				setTile(x,y,z,0,0)
				clientMessage(chestSlotId0 + " " + chestSlotData0 + " " + chestSlotCount0)
			}
		}
		else if(moveBlock == 1){
			clientMessage("moveblock = 1")
			moveBlock = 0
			if(side == 0){
				clientMessage("side = 0")
				setTile(x,y,z,moveBlockId,moveBlockData)
				clientMessage("placed " + moveBlockId + " " + moveBlockData + " at " + x + " " + y + " " + z)
				if(moveBlockId == 54){
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,1,chestSlotId1,chestSlotData1,chestSlotCount1);
						Level.setChestSlot(x,y,z,2,chestSlotId2,chestSlotData2,chestSlotCount2);
						Level.setChestSlot(x,y,z,3,chestSlotId3,chestSlotData3,chestSlotCount3);
						Level.setChestSlot(x,y,z,4,chestSlotId4,chestSlotData4,chestSlotCount4);
						Level.setChestSlot(x,y,z,5,chestSlotId5,chestSlotData5,chestSlotCount5);
						Level.setChestSlot(x,y,z,6,chestSlotId6,chestSlotData6,chestSlotCount6);
						Level.setChestSlot(x,y,z,7,chestSlotId7,chestSlotData7,chestSlotCount7);
						Level.setChestSlot(x,y,z,8,chestSlotId8,chestSlotData8,chestSlotCount8);

						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);

						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
						Level.setChestSlot(x,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
				}
			}
			

			if(side == 1){
			}
			if(side == 2){
			}
			if(side == 3){
			}
			if(side == 4){
			}
			if(side == 5){
			}
		}
	}
}
