window.onscroll = function() {myFunction_scroll()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction_scroll() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}
