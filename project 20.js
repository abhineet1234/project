var cat,catImg2,catImg1,catImg4
var mouse,mouseImg1,mouseImg2,mouseImg4
var bg,bgImage

function preload() {
    //load the images here
    catImg2=loadAnimation("tomThree.png,tomTwo.png")
    catImg1=loadImage("tomOne.png")
    catImg4=loadAnimation("tomFour.png")
    mouseImg1=loadImage("jerryOne.png")
    mouseImg2=loadAnimation("jerryThree.png,jerryTwo.png")
    mouseImg4=loadAnimation("jerryFour.png")
    bgImage=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(800,600,20,20)
    bg.addImage(bgImage)
    
    cat=createSprite(950,300,20,20)
    cat.addImage(catImg1)
    cat.velocityX=0

    mouse=createSprite(50,300,20,20)
    mouse.addImage(mouseImg1)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.addAnimation("catLast",cat)
     cat.changeAnimation("catlast")
     cat.velocityX=0

     mouse.addAnimation("mouseLast",mouseImg4)
     mouse.changeAnimation("mouseLast")
    }


    drawSprites();


}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
  cat.velocityX=-5
  cat.addAnimation("catRunning",catImg2)
  cat.changeAnimation("catRunning") 
  
  mouse.addAnimation("mouseTease",mouseImg2)
  mouse.changeAnimation("mouseTease")
  }

}
