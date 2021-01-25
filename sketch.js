var cat,catImg,mouse,mouseImg;
var garden,gardenImg;
var cat2,catImg2;
var cat4,catImg4;
var mouse4,mouse4IMg

function preload() {
    //load the images here
catImg=loadImage("cat1.png");
gardenImg=loadImage("garden.png");
mouseImg=loadImage("mouse2.png");
catImg2=loadImage("cat2.png")
catImg4 = loadImage("cat4.png")
mouse4IMg = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,400)
garden.addImage("garden",gardenImg)

cat = createSprite(750,650)
cat.addImage("cat",catImg)
cat.scale = 0.1;
cat.debug = true
cat.setCollider("rectangle",0,0,700,700)
mouse = createSprite(100,650)
mouse.addImage("mouse",mouseImg)
mouse.scale = 0.1
mouse.setCollider("rectangle",0,0,700,700)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        mouse.addAnimation("mouse",mouse4IMg)   
        cat.addAnimation("cat",catImg4)
    cat.velocityX = 0
    }
    
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left") ){
cat.velocityX = -6
cat.addAnimation("cat",catImg2);
}
if( keyWentUp("up")){
cat.velocityX = 0;
cat.addAnimation("catImg")
}

}
