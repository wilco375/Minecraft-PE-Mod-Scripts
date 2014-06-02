//Exploding Ores Mod
//by wilco375

var explodingChancePercentageIron = 20
var explodingChancePercentageGold = 20
var explodingChancePercentageDiamond = 20
var explodingChancePercentageRedstone = 20
var explodingChancePercentageLapis = 20
var explodingChancePercentageCoal = 20

var explodingRadiusIron = 4
var explodingRadiusGold = 4
var explodingRadiusDiamond = 4
var explodingRadiusRedstone = 4
var explodingRadiusLapis = 4
var explodingRadiusCoal = 4

var cI = Math.pow(explodingChancePercentageIron/100, -1)
var cG = Math.pow(explodingChancePercentageGold/100, -1)
var cD = Math.pow(explodingChancePercentageDiamond/100, -1)
var cL = Math.pow(explodingChancePercentageLapis/100, -1)
var cR = Math.pow(explodingChancePercentageRedstone/100, -1)
var cC = Math.pow(explodingChancePercentageCoal/100, -1)

function destroyBlock(x,y,z,shouldDrop){
b = getTile(x,y,z)
if(b == 15){
e = Math.floor((Math.random() * cI) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusIron)
}}

if(b == 16){
e = Math.floor((Math.random() * cC) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusCoal)
}}

if(b == 21){
e = Math.floor((Math.random() * cL) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusLapis)
}}

if(b == 56){
e = Math.floor((Math.random() * cD) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusDiamond)
}}

if(b == 73 || b == 74){
e = Math.floor((Math.random() * cR) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusRedstone)
}}



if(b == 14){
e = Math.floor((Math.random() * cG) + 1)
if(e == 1){
Level.explode(x,y,z,explodingRadiusGold)
}}
}



