// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}