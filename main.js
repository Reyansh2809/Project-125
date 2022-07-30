leftwristX=0;
rightwrist=0;
difference=0;
function setup()
{
canvas = createCanvas(550,500);
canvas.position(560,150);    
video = createCapture(VIDEO);
video.size(550,500); 
poseNet = ml5.poseNet(video , modelloaded); 
poseNet.on('pose' , gotPoses);
}
function modelloaded()
{
console.log("Posenet is intialized ");    
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftwristX= results[0].pose.leftWrist.x;
rightwristX= results[0].pose.rightWrist.x;
difference = floor(leftwristX - rightwristX);
console.log("leftwristx = " + leftwristX + "rightwistx = " + rightwristX)
}
}
function draw() 
{
    background('#FFFF00');
    textSize(difference);
    document.getElementById("m_font_size").innerHTML = " size of font = " + difference + "px";
    fill('#000009');
    text("Reyansh" , 50 , 400);     
}
