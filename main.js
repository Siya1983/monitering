
var status ="";
objects= [];
song=""
function preload(){
     song=loadSound("alert_alert.mp3")
    }
    function setup(){
        canvas= createCanvas(380, 380);
        canvas.center();
        video= createCapture(VIDEO);
        video.hide();
        
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status1").innerHTML = "Status : Detecting objects";
        }
        function modelLoaded(){
            console.log("Model Loaded");
             status= true;
            
    
        }

        function gotResult(error, results){
            if(error){
                console.log(error);
            }else{  console.log(results);
                objects = results; }
          
        }

    function draw()
    {
    image(video, 0, 0, 380, 380);
    if( status != ""){
         
       r = random(255);
       g = random(255);
       b = random(255);
       objectDetector.detect(video, gotResult);
        for(i =0 ; i< objects.length; i++){
            
       document.getElementById("status1").innerHTML = "Status : object Detected";
       document.getElementById("number_of_objects").innerHTML= ' Object Detected : ' + objects.length;
        
       fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
        text(objects[i].label+ "" + percent + "%", objects[i].x+15, objects[i].y+15 );
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
        if(objects[i].label=="person"){
           document.getElementById("detect").innerHTML="Baby found";
           console.log("stop");
           song.stop();

        }else{
            document.getElementById("detection").innerHTML="Baby not found";
            console.log("Play");
            song.play();
        } if(objects.lenght==0){
            document.getElementById("detection").innerHTML="Baby not found";
            console.log("play");
            song.play();
 
        }
    }
}

    

function start(){
    objectDetector= objectDetector('cocossd ' , modelLoaded);
    document.getElementById('status').innerHTML="Status = Detecting Objects";
}
    }




  
