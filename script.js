// Sticky header functionality
window.onscroll = function() { stickyHeader() };

var header = document.querySelector('header');
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
