class Game{

constructor()
{}
//to go to the database to collect the values
getState()
{
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val()
})
}
//to go to the databse to update the values from the game
//state is a var of the game i.e keeping the track of gameState in the game
//"/"is used when we are not sure to which node  we need to go
update(state)
{
database.ref("/").update({
    gameState:state
})
}
//to start the game
start()
{
form=new Form()
form.display()
player=new Player()
car1=createSprite(width/2-50,height-100)
car2=createSprite(width/2+100,height-100)
car1.addImage("carImage",car1_img)
car2.addImage("carImage2",car2_img)
car1.scale=0.07
car2.scale=0.07
cars=[car1,car2]
}
//items of the form file to be handled
handleElements()
{
form.hide()
form.titleImg.position(40,50)
form.titleImg.class("gameTitleAfterEffect")
}
//to start playing the game
play()
{
this.handleElements()


}



}