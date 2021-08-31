///nothing#@$#@#%$%**&$%$#%%%^%///
//G##li#ch//
//GASTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR##########//
noseX=0;
noseY=0;
lWX=0;
rWX=0;
diff=0;

function setup() {
  video=createCapture(VIDEO);
  video.size(300,300);

  canvas=createCanvas(550,550);
  canvas.position(560,160);

  poseNet=ml5.poseNet(video,modelMan);
  poseNet.on('pose',gotPoses);
}

function draw() {
  background ("#969A97");
  fill("green");
  stroke("green");
  circle(noseX,noseY,diff);
  document.getElementById("changelings").innerHTML="radius of circle will be "+diff+"px";
}

function modelMan(){
  console.log("(you know what i will say)");
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("X pos. of nose ="+noseX+"Y pos.of nose"+noseY);

    rWX=results[0].pose.rightWrist.x;
    lWX=results[0].pose.leftWrist.x;
    diff=floor(lWX-rWX);
    console.log("left wrist x pos. ="+lWX+"right wrist x pos. ="+rWX+"difference of left wrist x pos. and right wrist x pos. ="+diff);
  }
}




