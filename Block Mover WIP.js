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
				moveBlockData = Level.getData(x,y,z)
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

				chestSlotId9 = Level.getChestSlot(x,y,z,9);
				chestSlotCount9 = Level.getChestSlotCount(x,y,z,9);
				chestSlotData9 = Level.getChestSlotData(x,y,z,9);
				Level.setChestSlot(x,y,z,9,0,0,0)
				chestSlotId10 = Level.getChestSlot(x,y,z,10);
				chestSlotCount10 = Level.getChestSlotCount(x,y,z,10);
				chestSlotData10 = Level.getChestSlotData(x,y,z,10);
				Level.setChestSlot(x,y,z,10,0,0,0)
				chestSlotId11 = Level.getChestSlot(x,y,z,11);
				chestSlotCount11 = Level.getChestSlotCount(x,y,z,11);
				chestSlotData11 = Level.getChestSlotData(x,y,z,11);
				Level.setChestSlot(x,y,z,11,0,0,0)
				chestSlotId12 = Level.getChestSlot(x,y,z,12);
				chestSlotCount12 = Level.getChestSlotCount(x,y,z,12);
				chestSlotData12 = Level.getChestSlotData(x,y,z,12);
				Level.setChestSlot(x,y,z,12,0,0,0)
				chestSlotId13 = Level.getChestSlot(x,y,z,13);
				chestSlotCount13 = Level.getChestSlotCount(x,y,z,13);
				chestSlotData13 = Level.getChestSlotData(x,y,z,13);
				Level.setChestSlot(x,y,z,13,0,0,0)
				chestSlotId14 = Level.getChestSlot(x,y,z,14);
				chestSlotCount14 = Level.getChestSlotCount(x,y,z,14);
				chestSlotData14 = Level.getChestSlotData(x,y,z,14);
				Level.setChestSlot(x,y,z,14,0,0,0)
				chestSlotId15 = Level.getChestSlot(x,y,z,15);
				chestSlotCount15 = Level.getChestSlotCount(x,y,z,15);
				chestSlotData15 = Level.getChestSlotData(x,y,z,15);
				Level.setChestSlot(x,y,z,15,0,0,0)
				chestSlotId16 = Level.getChestSlot(x,y,z,16);
				chestSlotCount16 = Level.getChestSlotCount(x,y,z,16);
				chestSlotData16 = Level.getChestSlotData(x,y,z,16);
				Level.setChestSlot(x,y,z,16,0,0,0)
				chestSlotId17 = Level.getChestSlot(x,y,z,17);
				chestSlotCount17 = Level.getChestSlotCount(x,y,z,17);
				chestSlotData17 = Level.getChestSlotData(x,y,z,17);
				Level.setChestSlot(x,y,z,17,0,0,0)

				chestSlotId18 = Level.getChestSlot(x,y,z,18);
				chestSlotCount18 = Level.getChestSlotCount(x,y,z,18);
				chestSlotData18 = Level.getChestSlotData(x,y,z,18);
				Level.setChestSlot(x,y,z,18,0,0,0)
				chestSlotId19 = Level.getChestSlot(x,y,z,19);
				chestSlotCount19 = Level.getChestSlotCount(x,y,z,19);
				chestSlotData19 = Level.getChestSlotData(x,y,z,19);
				Level.setChestSlot(x,y,z,19,0,0,0)
				chestSlotId20 = Level.getChestSlot(x,y,z,20);
				chestSlotCount20 = Level.getChestSlotCount(x,y,z,20);
				chestSlotData20 = Level.getChestSlotData(x,y,z,20);
				Level.setChestSlot(x,y,z,20,0,0,0)
				chestSlotId21 = Level.getChestSlot(x,y,z,21);
				chestSlotCount21 = Level.getChestSlotCount(x,y,z,21);
				chestSlotData21 = Level.getChestSlotData(x,y,z,21);
				Level.setChestSlot(x,y,z,21,0,0,0)
				chestSlotId22 = Level.getChestSlot(x,y,z,22);
				chestSlotCount22 = Level.getChestSlotCount(x,y,z,22);
				chestSlotData22 = Level.getChestSlotData(x,y,z,22);
				Level.setChestSlot(x,y,z,22,0,0,0)
				chestSlotId23 = Level.getChestSlot(x,y,z,23);
				chestSlotCount23 = Level.getChestSlotCount(x,y,z,23);
				chestSlotData23 = Level.getChestSlotData(x,y,z,23);
				Level.setChestSlot(x,y,z,23,0,0,0)
				chestSlotId24 = Level.getChestSlot(x,y,z,24);
				chestSlotCount24 = Level.getChestSlotCount(x,y,z,24);
				chestSlotData24 = Level.getChestSlotData(x,y,z,24);
				Level.setChestSlot(x,y,z,24,0,0,0)
				chestSlotId25 = Level.getChestSlot(x,y,z,25);
				chestSlotCount25 = Level.getChestSlotCount(x,y,z,25);
				chestSlotData25 = Level.getChestSlotData(x,y,z,25);
				Level.setChestSlot(x,y,z,25,0,0,0)
				chestSlotId26 = Level.getChestSlot(x,y,z,26);
				chestSlotCount26 = Level.getChestSlotCount(x,y,z,26);
				chestSlotData26 = Level.getChestSlotData(x,y,z,26);
				Level.setChestSlot(x,y,z,26,0,0,0)

				setTile(x,y,z,0,0)
				//clientMessage(chestSlotId0 + " " + chestSlotData0 + " " + chestSlotCount0)
			}
		}
		else if(moveBlock == 1){
			//clientMessage("moveblock = 1")
			moveBlock = 0
			if(side == 0){ //bottom (-y)
				setTile(x,y-1,z,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x,y-1,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x,y-1,z,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x,y-1,z,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x,y-1,z,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x,y-1,z,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x,y-1,z,5,chestSlotId5,chestSlotData5,chestSlotCount5);
					Level.setChestSlot(x,y-1,z,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x,y-1,z,7,chestSlotId7,chestSlotData7,chestSlotCount7);
					Level.setChestSlot(x,y-1,z,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x,y-1,z,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x,y-1,z,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x,y-1,z,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x,y-1,z,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x,y-1,z,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x,y-1,z,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x,y-1,z,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x,y-1,z,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x,y-1,z,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x,y-1,z,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x,y-1,z,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x,y-1,z,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x,y-1,z,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x,y-1,z,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x,y-1,z,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x,y-1,z,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x,y-1,z,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x,y-1,z,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
			if(side == 1){ // top (+y)
				setTile(x,y+1,z,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x,y+1,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x,y+1,z,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x,y+1,z,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x,y+1,z,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x,y+1,z,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x,y+1,z,5,chestSlotId5,chestSlotData5,chestSlotCount5);
					Level.setChestSlot(x,y+1,z,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x,y+1,z,7,chestSlotId7,chestSlotData7,chestSlotCount7);
					Level.setChestSlot(x,y+1,z,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x,y+1,z,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x,y+1,z,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x,y+1,z,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x,y+1,z,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x,y+1,z,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x,y+1,z,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x,y+1,z,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x,y+1,z,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x,y+1,z,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x,y+1,z,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x,y+1,z,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x,y+1,z,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x,y+1,z,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x,y+1,z,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x,y+1,z,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x,y+1,z,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x,y+1,z,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x,y+1,z,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
			if(side == 2){ // -z
				setTile(x,y,z-1,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x,y,z-1,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x,y,z-1,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x,y,z-1,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x,y,z-1,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x,y,z-1,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x,y,z-1,5,chestSlotId5,chestSlotData5,chestSlotCount5);	
					Level.setChestSlot(x,y,z-1,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x,y,z-1,7,chestSlotId7,chestSlotData7,chestSlotCout7);
					Level.setChestSlot(x,y,z-1,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x,y,z-1,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x,y,z-1,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x,y,z-1,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x,y,z-1,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x,y,z-1,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x,y,z-1,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x,y,z-1,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x,y,z-1,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x,y,z-1,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x,y,z-1,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x,y,z-1,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x,y,z-1,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x,y,z-1,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x,y,z-1,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x,y,z-1,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x,y,z-1,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x,y,z-1,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x,y,z-1,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
			if(side == 3){ // +z
				setTile(x,y,z+1,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x,y,z+1,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x,y,z+1,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x,y,z+1,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x,y,z+1,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x,y,z+1,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x,y,z+1,5,chestSlotId5,chestSlotData5,chestSlotCount5);	
					Level.setChestSlot(x,y,z+1,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x,y,z+1,7,chestSlotId7,chestSlotData7,chestSlotCout7);
					Level.setChestSlot(x,y,z+1,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x,y,z+1,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x,y,z+1,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x,y,z+1,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x,y,z+1,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x,y,z+1,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x,y,z+1,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x,y,z+1,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x,y,z+1,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x,y,z+1,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x,y,z+1,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x,y,z+1,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x,y,z+1,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x,y,z+1,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x,y,z+1,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x,y,z+1,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x,y,z+1,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x,y,z+1,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x,y,z+1,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
			if(side == 4){ // -x
				setTile(x-1,y,z,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x-1,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x-1,y,z,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x-1,y,z,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x-1,y,z,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x-1,y,z,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x-1,y,z,5,chestSlotId5,chestSlotData5,chestSlotCount5);	
					Level.setChestSlot(x-1,y,z,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x-1,y,z,7,chestSlotId7,chestSlotData7,chestSlotCout7);
					Level.setChestSlot(x-1,y,z,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x-1,y,z,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x-1,y,z,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x-1,y,z,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x-1,y,z,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x-1,y,z,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x-1,y,z,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x-1,y,z,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x-1,y,z,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x-1,y,z,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x-1,y,z,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x-1,y,z,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x-1,y,z,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x-1,y,z,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x-1,y,z,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x-1,y,z,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x-1,y,z,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x-1,y,z,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x-1,y,z,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
			if(side == 5){ // +x
				setTile(x+1,y,z,moveBlockId,moveBlockData)
				if(moveBlockId == 54){
					Level.setChestSlot(x+1,y,z,0,chestSlotId0,chestSlotData0,chestSlotCount0);
					Level.setChestSlot(x+1,y,z,1,chestSlotId1,chestSlotData1,chestSlotCount1);
					Level.setChestSlot(x+1,y,z,2,chestSlotId2,chestSlotData2,chestSlotCount2);
					Level.setChestSlot(x+1,y,z,3,chestSlotId3,chestSlotData3,chestSlotCount3);
					Level.setChestSlot(x+1,y,z,4,chestSlotId4,chestSlotData4,chestSlotCount4);
					Level.setChestSlot(x+1,y,z,5,chestSlotId5,chestSlotData5,chestSlotCount5);	
					Level.setChestSlot(x+1,y,z,6,chestSlotId6,chestSlotData6,chestSlotCount6);
					Level.setChestSlot(x+1,y,z,7,chestSlotId7,chestSlotData7,chestSlotCout7);
					Level.setChestSlot(x+1,y,z,8,chestSlotId8,chestSlotData8,chestSlotCount8);

					Level.setChestSlot(x+1,y,z,9,chestSlotId9,chestSlotData9,chestSlotCount9);
					Level.setChestSlot(x+1,y,z,10,chestSlotId10,chestSlotData10,chestSlotCount10);
					Level.setChestSlot(x+1,y,z,11,chestSlotId11,chestSlotData11,chestSlotCount11);
					Level.setChestSlot(x+1,y,z,12,chestSlotId12,chestSlotData12,chestSlotCount12);
					Level.setChestSlot(x+1,y,z,13,chestSlotId13,chestSlotData13,chestSlotCount13);
					Level.setChestSlot(x+1,y,z,14,chestSlotId14,chestSlotData14,chestSlotCount14);
					Level.setChestSlot(x+1,y,z,15,chestSlotId15,chestSlotData15,chestSlotCount15);
					Level.setChestSlot(x+1,y,z,16,chestSlotId16,chestSlotData16,chestSlotCount16);
					Level.setChestSlot(x+1,y,z,17,chestSlotId17,chestSlotData17,chestSlotCount17);

					Level.setChestSlot(x+1,y,z,18,chestSlotId18,chestSlotData18,chestSlotCount18);
					Level.setChestSlot(x+1,y,z,19,chestSlotId19,chestSlotData19,chestSlotCount19);
					Level.setChestSlot(x+1,y,z,20,chestSlotId20,chestSlotData20,chestSlotCount20);
					Level.setChestSlot(x+1,y,z,21,chestSlotId21,chestSlotData21,chestSlotCount21);
					Level.setChestSlot(x+1,y,z,22,chestSlotId22,chestSlotData22,chestSlotCount22);
					Level.setChestSlot(x+1,y,z,23,chestSlotId23,chestSlotData23,chestSlotCount23);
					Level.setChestSlot(x+1,y,z,24,chestSlotId24,chestSlotData24,chestSlotCount24);
					Level.setChestSlot(x+1,y,z,25,chestSlotId25,chestSlotData25,chestSlotCount25);
					Level.setChestSlot(x+1,y,z,26,chestSlotId26,chestSlotData26,chestSlotCount26);
				}
			}
		}
	}
}

