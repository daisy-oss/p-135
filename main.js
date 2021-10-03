video="";
status="";
object=[];
 function preload()
 { 
  
 } 
 function setup()
  {
     canvas = createCanvas(480, 380); 
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    }
function draw(){
  image(video,0,0,480,380);
  r=255;
  b=255;
  g=255;
  if(status != ""){
    objectDetector.detect(video, gotresults);
    for(i=0;i<object.length;i++){
      document.getElementById("status").innerHTML="status : detected object";
      document.getElementById("number_of_objects").innerHTML="number of object detected are :"+object.length;
      fill(r,b,g);
      percent=floor(object[i].confidence*100);
      text(object[i].label+ " "+percent+"%",object[i].x+15,object[i].y+15);
      noFill();
      stroke(r,b,g);
      rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
function start(){
  object= ml5.objectDetector('cocossd',modelLoaded());
  document.getElementById("status").innerHTML="status = detecting object";
}
function modelLoaded(){
  console.log('done');
  status=true;
}
function gotresults(error,results){
  if(error){
  console.log(error);
}
console.log(results);
object=results;
}
}