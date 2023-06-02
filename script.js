/* Declare variables below to save the different sections (divs) of your story*/
let paragraph=document.querySelector("p");
paragraph.onmouseover=function(){
   paragraph.innerHTML="You're going on an adventure with the buttons below. Choose wisely";
};


let firstButton= document.querySelector(".first-button");
let firstAnswer=document.querySelector(".answer-one");
firstButton.onclick= function(){
    firstAnswer.style.display= "block";
};


let secondButton= document.querySelector(".second-button");
let secondAnswer= document.querySelector(".answer-two");
secondButton.onclick= function(){
    secondAnswer.style.display= "block";
};

let thirdButton= document.querySelector(".third-button");
let thirdAnswer= document.querySelector(".answer-three");
thirdButton.onclick= function(){
    thirdAnswer.style.display= "block";
};

let fourthButton= document.querySelector(".fourth-button");
let fourthAnswer= document.querySelector(".answer-four");
fourthButton.onclick= function(){
    fourthAnswer.style.display= "block";
};

let fifthButton= document.querySelector(".fifth-button");
let fifthAnswer= document.querySelector(".answer-five");
fifthButton.onclick= function(){
    fifthAnswer.style.display="block";
    
};

let sixthButton= document.querySelector (".sixth-button");
let sixthAnswer= document.querySelector (".answer-six");
sixthButton.onclick= function(){
    sixthAnswer.style.display= "block";
};

setTimeout(() => {paragraph.innerHTML="goodluck!";},3000);  