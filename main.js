Webcam.set({
    width:350,
    height:300,
    Image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src ="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + predition_1;
    speak_data_2 = "The second prediction is " + predition_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResut);
}

function gotResut(error,result) {
    if(error) {
        console.error(error);
    
    } else {

    console.log(result);
    document.getElementById("result_emotion_name").innerHTML = result[0].label;
    document.getElementById("result_emotion_name2").innerHTML = result[1].label;
    predition_1 = result[0].label;
    predition_1 = result[0].label;
    speak();
    if(result[0].label == "happy")
    {
        document.getElementById("update_emoji").innerHTML = "&#128522;"
    }
    if(result[0].label == "sad")
    {
        document.getElementById("update_emoji").innerHTML = "&#128532;"
    }
    if(result[0].label == "angyr")
    {
        document.getElementById("update_emoji").innerHTML = "&#128548;"
    }

    if(result[1].label == "happy")
    {
        document.getElementById("update_emoji").innerHTML = "&#128522;"
    }
    if(result[1].label == "sad")
    {
        document.getElementById("update_emoji").innerHTML = "&#128532;"
    }
    if(result[1].label == "angyr")
    {
        document.getElementById("update_emoji").innerHTML = "&#128548;"
    }

   


    }
}