img="";
status="";

function setup(){
 canvas= createCanvas(640,420);
 canvas.center();
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML= "Object is detected";
}
function preload(){
    img= loadImage("dog_cat.jpg"); 
}
function draw(){
    image(img, 0,0, 640,420); 
    fill('#FF0000');
    text("Dog", 45, 70);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 400, 320);

    fill('#002BFF');
    text("Cat", 350, 110);
    noFill();
    stroke('#002BFF')
    rect(300, 90, 300, 300);
}

function modelLoaded(){
console.log('Model Loaded');
status= true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
  if(error){
    console.log(error);
  }
  else{
  console.log(results);
  }
}