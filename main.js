

var z = document.getElementById("z");
var x = document.getElementById("x");

function clicked(){
  z.style.opacity = "0";
  setTimeout(function(){
    z.style.display = "none";
    location.replace("indeed.html");
  },500)
}
