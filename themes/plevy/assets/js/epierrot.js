/* image loading */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (rect.top < (window.innerHeight || document.documentElement.clientHeight));
}

function showPic() {
  setTimeout(function () {
    var elmt = document.getElementsByClassName('imag');
    for (var count = 0; count < elmt.length; count++) {
      if (isInViewport(elmt[count]) && (elmt[count].getAttribute("data-toset"))) {
        elmt[count].src = elmt[count].dataset.toset;
        delete elmt[count].dataset.toset;
      };
    };
  }, 100);
};

//headListes change background
function chgmainbckg(bckimg) {
  document.getElementById("mainbckgimg").classList.add("blac");
  setTimeout(() => {
    document.getElementById("mainbckgimg").src = bckimg;
    document.getElementById("mainbckgimg").classList.add("opaci");
    document.getElementById("mainbckgimg").classList.remove("blac");
  }, 200);
};

function returnmainbckg() {
  document.getElementById("mainbckgimg").classList.add("blac");
  setTimeout(() => {
    document.getElementById("mainbckgimg").src = document.getElementById("mainbckgimg").getAttribute("data-ref");
    document.getElementById("mainbckgimg").classList.remove("opaci");
    document.getElementById("mainbckgimg").classList.remove("blac");
  }, 200);
};

//click copyright
document.addEventListener('click', function (event) {
  if (!event.target.matches('.credphoto')) return;
  event.preventDefault();
  window.open(event.target.getAttribute("data-target"), '_blank').focus();
}, false);

window.addEventListener('scroll', function () {
  showPic();
});

//open external link in new tab
function externalLinks() {
  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") && (b.rel = "noreferrer")
  }
}
;

externalLinks();
showPic();
