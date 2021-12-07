class Form{


constructor()
{
//Placeholder=hints to fill input boxes
this.input=createInput("").attribute("placeholder","Enter Your Name")
this.playButton=createButton("play")
this.titleImg=createImg("assets/title.png","game title")
this.greeting=createElement("h2")
}

setElementsPosition()
{
this.input.position(width/2-110,height/2-80)  
this.playButton.position(width/2-90,height/2-20) 
this.titleImg.position(120,50)
this.greeting.position(width/2-300,height/2-100)
}
setElementsStyle()
{
//calling the elements from style.css using "class"
this.input.class("customInput")
this.playButton.class("customButton")
this.titleImg.class("gameTitle")
this.greeting.class("greeting")
}
hide()
{
this.input.hide()
this.playButton.hide()
this.greeting.hide()    
}
handleMousePressed()
{
this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    var message=`hello ${this.input.value()}`

    this.greeting.html(message)
})


}
display()
{
 this.setElementsPosition()
 this.setElementsStyle()
this.handleMousePressed()
}



}




