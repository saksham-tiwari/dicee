var num1= Math.floor((Math.random()*6)+1);
var num2= Math.floor((Math.random()*6)+1);
var randomImageSource1 = "images/dice" + num1 + ".png";
var randomImageSource2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(num1>num2){
  document.querySelector("h1").innerHTML="Player 1 win!!";
}
else if(num2>num1){
  document.querySelector("h1").innerHTML="Player 2 win!!";
}
else{
  document.querySelector("h1").innerHTML="Tie!!"
}
