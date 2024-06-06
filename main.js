leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(150,165);

    canvas = createCanvas(800,400);
    canvas.position(600,175);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("white");
    document.getElementById("font_size").innerHTML = "Font-size of the text will be = " + floor(difference) + " px";
    textSize(difference);
    fill("red");
    text('OmWani',50,400);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = leftWrist_x - rightWrist_x;

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}