class Player{
//define players node with "" (to assign multiple values)
constructor()
{
this.name=null
this.index=null
this.positionX=0
this.positionY=0
}

addPlayer()
{
//player names are player1,player2...
var playerIndex="players/player"+this.index
if(this.index==1)
{
this.positionX=width/2-100
}
else{
this.positionX=width/2+100
}
database.ref(playerIndex).set({
    name:this.name,
    positionX=this.positionX,
    positionY=this.positionY
})
}

getCount()
{
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",data=>{
    playerCount=data.val()
})
}

updateCount(count)
{
database.ref("/").update({
    playerCount:count
})
}

getPlayersInfo()
{
var playerInfoRef=database.ref("players")
playerInfoRef.on("value",data=>{
allPlayers=data.val()
})
}
}