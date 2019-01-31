//delay code till HTML loads
$(document).ready(function() {

// Generate a random number for the Beast
var beastNumber = Math.floor(Math.random() * 102) + 19;
$("#beastNumber").text("Number Of The Beast: " + beastNumber);

console.log (beastNumber);
//****if time change photo based on random number generate for beast****
var image = new Array ();
image[0] = "assets/images/blueDragon.jpeg";
image[1] = "assets/images/bronzeDragon.jpeg";
image[2] = "assets/images/lizardMonster.jpg";
image[3] = "assets/images/skeletonKnight.png";
image[4] = "assets/images/turtleFighter.png";
image[5] = "assets/images/undeadDragon.jpg";
var monster = image.length
console.log (image.length);
var m = Math.floor(monster*Math.random())
$('#beastPic').attr('src',image[m]);


//assign numbers to the weapon buttons
var button1 = Math.floor(Math.random() * 12) + 1;
var button2 = Math.floor(Math.random() * 12) + 1;
var button3 = Math.floor(Math.random() * 12) + 1;
var button4 = Math.floor(Math.random() * 12) + 1;
console.log (button1, button2, button3, button4);
 

// variables
var totalScore = 0;
var wins = 0;
var losses = 0;



//add wins and losses
$("#wins").text(wins);
$("#losses").text(losses);

//onclick for the weapons
function reset(){
totalScore = 0;
$("#totalScoreDiv").text("Your Total Score Is: " + totalScore);//displays score
beastNumber = Math.floor(Math.random() * 102) + 19;
$("#beastNumber").text("Number Of The Beast: " + beastNumber);
console.log (beastNumber);
button1 = Math.floor(Math.random() * 12) + 1;
button2 = Math.floor(Math.random() * 12) + 1;
button3 = Math.floor(Math.random() * 12) + 1;
button4 = Math.floor(Math.random() * 12) + 1;
console.log (button1, button2, button3, button4);
var m = Math.floor(monster*Math.random())
$('#beastPic').attr('src',image[m]);
}

function winner(){
    wins++;
    $("#wins").text(wins);
    reset()
}

function loser(){
    losses++;
    $("#losses").text(losses);
    reset()
}

$("#buttonPic1").on("click", function() {
    totalScore += button1;
    console.log("clicked 1 - Total Score: " + totalScore)
    $("#totalScoreDiv").text("Your Total Score Is: " + totalScore);//displays score
    if (totalScore === beastNumber) {
        winner()
      }
    else if (totalScore >= beastNumber) {
        loser();
      }
      
  })
$("#buttonPic2").on("click", function() {
    totalScore += button2;
    console.log("clicked 2 - Total Score: " + totalScore)
    $("#totalScoreDiv").text("Your Total Score Is: " + totalScore);//displays score
    if (totalScore === beastNumber) {
        winner()
      }
    else if (totalScore >= beastNumber) {
        loser();
      }
  })
$("#buttonPic3").on("click", function() {
    totalScore += button3;
    console.log("clicked 3 - Total Score: " + totalScore)
    $("#totalScoreDiv").text("Your Total Score Is: " + totalScore);//displays score
    if (totalScore === beastNumber) {
        winner()
      }
    else if (totalScore >= beastNumber) {
        loser();
      }
  })
$("#buttonPic4").on("click", function() {
    totalScore += button4;
    console.log("clicked 4 - Total Score: " + totalScore)
    $("#totalScoreDiv").text("Your Total Score Is: " + totalScore); //displays score
    if (totalScore === beastNumber) {
        winner()
      }
    else if (totalScore >= beastNumber) {
        loser();
      }
  })



});
