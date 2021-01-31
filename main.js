noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/L5ksVvp0/clown-nose.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    VIDEO=createCapture(VIDEO);
    VIDEO.size(300,300);
    VIDEO.hide();
    poseNet=ml5.poseNet(VIDEO,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}
function draw(){
    image(VIDEO,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30)
}
function take_snapshot(){
save('my filtered image.png');
}