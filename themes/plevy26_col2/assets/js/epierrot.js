/* image loading */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

function showPic() {
  setTimeout(function () {
    var elmt = document.getElementsByClassName("imag");
    for (var count = 0; count < elmt.length; count++) {
      if (isInViewport(elmt[count]) && elmt[count].getAttribute("data-toset")) {
        elmt[count].src = elmt[count].dataset.toset;
        delete elmt[count].dataset.toset;
      }
    }
  }, 100);
}

//headListes change background
function chgmainbckg(bckimg) {
  document.getElementById("mainbckgimg").classList.add("blac");
  setTimeout(() => {
    document.getElementById("mainbckgimg").src = bckimg;
    document.getElementById("mainbckgimg").classList.add("opaci");
    document.getElementById("mainbckgimg").classList.remove("blac");
  }, 200);
}

function returnmainbckg() {
  document.getElementById("mainbckgimg").classList.add("blac");
  setTimeout(() => {
    document.getElementById("mainbckgimg").src = document
      .getElementById("mainbckgimg")
      .getAttribute("data-ref");
    document.getElementById("mainbckgimg").classList.remove("opaci");
    document.getElementById("mainbckgimg").classList.remove("blac");
  }, 200);
}

//click copyright
document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".credphoto")) return;
    event.preventDefault();
    window.open(event.target.getAttribute("data-target"), "_blank").focus();
  },
  false
);


//open external link in new tab
function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank") &&
      (b.rel = "noreferrer");
  }
}

//create a table of content if #toc exists
function tableContent() {
  //Get all headings only from the actual contents.
  var contentContainer = document.getElementById("content"); // Add this div to the html
  var headings = contentContainer.querySelectorAll("h2,h3,h4"); // You can do as many or as few headings as you need.

  var tocContainer = document.getElementById("toc"); // Add this div to the HTML
  // create ul element and set the attributes.
  var ul = document.createElement("ul");

  ul.setAttribute("id", "tocList");
  ul.setAttribute("class", "sidenav");

  // Loop through the headings NodeList
  for (i = 0; i <= headings.length - 1; i++) {
    var id = headings[i].innerHTML.toLowerCase().replace(/ /g, "-"); // Set the ID to the header text, all lower case with hyphens instead of spaces.
    var level = headings[i].localName.replace("h", ""); // Getting the header a level for hierarchy
    var title = headings[i].innerHTML; // Set the title to the text of the header

    headings[i].setAttribute("id", id); // Set header ID to its text in lower case text with hyphens instead of spaces.

    var li = document.createElement("li"); // create li element.
    li.setAttribute("class", "sidenav__item"); // Assign a class to the li

    var a = document.createElement("a"); // Create a link
    a.setAttribute("href", "#" + id); // Set the href to the heading ID
    a.innerHTML = title; // Set the link text to the heading text

    // Creeate the hierarchy
    // add a class for css
    if (level == 1) {
      li.appendChild(a); // Append the link to the list item
      ul.appendChild(li); // append li to ul.
    } else if (level == 2) {
      child = document.createElement("ul"); // Create a sub-list
      child.setAttribute("class", "sidenav__sublist");
      li.appendChild(a);
      child.appendChild(li);
      ul.appendChild(child);
    } else if (level == 3) {
      grandchild = document.createElement("ul");
      grandchild.setAttribute("class", "sidenav__sublist");
      li.appendChild(a);
      grandchild.appendChild(li);
      child.appendChild(grandchild);
    } else if (level == 4) {
      great_grandchild = document.createElement("ul");
      great_grandchild.setAttribute("class", "sidenav__sublist");
      li.append(a);
      great_grandchild.appendChild(li);
      grandchild.appendChild(great_grandchild);
    }
  }

  toc.appendChild(ul); // add list to the container

  // Add a class to the first list item to allow for toggling active state.
  var links = tocContainer.getElementsByClassName("sidenav__item");

  links[0].classList.add("current");

  // Loop through the links and add the active class to the current/clicked link
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("current");
      current[0].className = current[0].className.replace(" current", "");
      this.className += " current";
    });
  }

  //console.log(links);
}

/* copy button in pre fields */
function subAddCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach(function (codeBlock) {
    var button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", function () {
      clipboard.writeText(codeBlock.innerText).then(
        function () {
          /* Chrome doesn't seem to blur automatically,
                 leaving the button in a focused state. */
          button.blur();

          button.innerText = "Copied!";

          setTimeout(function () {
            button.innerText = "Copy";
          }, 2000);
        },
        function (error) {
          button.innerText = "Error";
        }
      );
    });

    var pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains("highlight")) {
      var highlight = pre.parentNode;
      highlight.parentNode.insertBefore(button, highlight);
    } else {
      pre.parentNode.insertBefore(button, pre);
    }
  });
}

function AddCopyButtons(clipboard) {
  if (navigator && navigator.clipboard) {
    subAddCopyButtons(navigator.clipboard);
  } else {
    var script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
    script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
    script.crossOrigin = "anonymous";
    script.onload = function () {
      subAddCopyButtons(clipboard);
    };
    document.body.appendChild(script);
  }
}

/* scrolling progression bar 
function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled.toString()  + "%";
}
window.onscroll = function() {progressBar()};
*/

/* light dark */
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
    document.getElementById('slider').checked = true;
  } else if (localStorage.getItem('theme') === 'light') {
    setTheme('light');
    document.getElementById('slider').checked = false;
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark');
      document.getElementById('slider').checked = true;
    } else {
      setTheme('light');
      document.getElementById('slider').checked = false;
    }
  }
})();


//Swiper
function setSwiper() {
  var swiperCat = new Swiper(".swiperCat", {
    slidesPerView: 1,
    autoHeight: false,
    pagination: {
      el: ".swiper-paginationh",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      2048: {
        slidesPerView: 8,
      }
    }
  });

  var swiperBox = new Swiper(".swiperBox", {
    slidesPerView: 1,
    direction: "vertical",
    autoHeight: false,
    effect: 'fade',
    mousewheel: {
      invert: false,
    },
    fadeEffect: {
      crossFade: true
    },
    hashNavigation: {
      replaceState: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoHeight: true,
    pagination: {
      el: ".swiper-paginationv",
      clickable: true,
      dynamicBullets: true,
    },
  });
};


window.addEventListener('load', function (event) {
  externalLinks();
  setSwiper();
  if (document.getElementById("toc")) tableContent();
  if (document.querySelector("pre")) AddCopyButtons();
});
