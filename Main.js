Peter_pan_theme="";
Hedwigs_theme="";
scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function preload(){
    Peter_pan_theme = loadSound("Peter pan theme.mp3");
    Hedwigs_theme = loadSound("Hedwigs theme.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
