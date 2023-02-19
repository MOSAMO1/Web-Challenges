// var AC = document.getElementById("box1");
// var Del = document.getElementById("box2");
// var divide = document.getElementById("box3");
// var seven = document.getElementById("box4");
// var eight = document.getElementById("box5");
// var nine = document.getElementById("box6");
// var multiply = document.getElementById("box7");
// var four = document.getElementById("box8");
// var five = document.getElementById("box9");
// var six = document.getElementById("box10");
// var subtract = document.getElementById("box11");
// var one = document.getElementById("box12");
// var two = document.getElementById("box13");
// var three = document.getElementById("box14");
// var Addition = document.getElementById("box15");
// var zero = document.getElementById("box16");
// var dot = document.getElementById("box17");
// var equal = document.getElementById("box18");
var scree_output = document.getElementById("output");
var butoons = {
  Ac: document.getElementById("box1"),
  Del: document.getElementById("box2"),
  divide: document.getElementById("box3"),
  seven: document.getElementById("box4"),
  eight: document.getElementById("box5"),
  nine: document.getElementById("box6"),
  multiply: document.getElementById("box7"),
  four: document.getElementById("box8"),
  five: document.getElementById("box9"),
  six: document.getElementById("box10"),
  subtract: document.getElementById("box11"),
  one: document.getElementById("box12"),
  two: document.getElementById("box13"),
  three: document.getElementById("box14"),
  Addition: document.getElementById("box15"),
  zero: document.getElementById("box16"),
  dot: document.getElementById("box17"),
  equal: document.getElementById("box18"),
};

function screen_print() {
  scree_output.innerHTML += this.innerHTML;
}
