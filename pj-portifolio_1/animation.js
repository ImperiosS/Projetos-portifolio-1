var i = 0;
var tag = document.getElementById("name-nav");
var html = document.getElementById("name-nav").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("name-nav").innerHTML = txt.slice(0 , i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }

}

typeWriter();