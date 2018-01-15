var css = document.querySelector("h3");
var color1 ="blue";
var color2 ="green";
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");

function getStyle(){
  css.innerHTML="";
  var ap = window.getComputedStyle(document.body);
  var style = ap.getPropertyValue("background");
  var texte = document.createTextNode(style);
  css.appendChild(texte);
};

function setGradient(){
  document.body.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")";
}

getStyle();

input1.addEventListener("input", function(){
  setGradient();
  getStyle();
});

input2.addEventListener("input", function(){
  setGradient();
  getStyle();
});
