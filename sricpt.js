// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 30px";
    document.getElementById("logo").style.width = "30px";
    document.getElementById("jojo").style.height = "50px";
  } else {
    document.getElementById("navbar").style.padding = "80px 90px";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("jojo").style.height = "80px";
  }   
}       


