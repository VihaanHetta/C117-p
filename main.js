function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-22D5mCVS/model.json', modelReady);
}

function modelReady()
{

classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 254) + 1;
        random_number_g = Math.floor(Math.random() * 254) + 1;
        random_number_b = Math.floor(Math.random() * 254) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb (" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb ( " + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("cat1");
        img2 = document.getElementById("dog1");
        img3 = document.getElementById("horse1");
        img4 = document.getElementById("background1");

        if (results[0].label == "cat") {
            img1.src = 'cat.gif';
            img2.src = 'dog.png';
            img3.src = 'horse.png';
            img4.src = 'background.png';

        } else if (results[0].label == "dog") {
            img1.src = 'cat.png';
            img2.src = 'dog.gif';
            img3.src = 'horse.png';
            img4.src = 'background.png';
        } else if (results[0].label == "horse") {
            img1.src = 'cat.png';
            img2.src = 'dog.png';
            img3.src = 'horse.gif';
            img4.src = 'background.png';
        } else {
            img1.src = 'cat.png';
            img2.src = 'dog.png';
            img3.src = 'horse.png';
            img4.src = 'background.gif';

        }



    }
}