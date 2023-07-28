
var i = 0;
var txt = 'Turhan Gezer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const body = document.querySelector('body');

body.onload = typeWriter;