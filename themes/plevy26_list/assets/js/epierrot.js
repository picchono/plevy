/* sleep the js script */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  ul.setAttribute("class", "toc");

  // Loop through the headings NodeList
  for (i = 0; i <= headings.length - 1; i++) {
    var id = headings[i].innerHTML.toLowerCase().replace(/ /g, "-"); // Set the ID to the header text, all lower case with hyphens instead of spaces.
    var level = headings[i].localName.replace("h", ""); // Getting the header a level for hierarchy
    var title = headings[i].innerHTML; // Set the title to the text of the header

    headings[i].setAttribute("id", id); // Set header ID to its text in lower case text with hyphens instead of spaces.

    var li = document.createElement("li"); // create li element.
    li.setAttribute("class", "toc__item"); // Assign a class to the li

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
      child.setAttribute("class", "toc__sublist");
      li.appendChild(a);
      child.appendChild(li);
      ul.appendChild(child);
    } else if (level == 3) {
      grandchild = document.createElement("ul");
      grandchild.setAttribute("class", "toc__sublist");
      li.appendChild(a);
      grandchild.appendChild(li);
      child.appendChild(grandchild);
    } else if (level == 4) {
      great_grandchild = document.createElement("ul");
      great_grandchild.setAttribute("class", "toc__sublist");
      li.append(a);
      great_grandchild.appendChild(li);
      grandchild.appendChild(great_grandchild);
    }
  }

  toc.appendChild(ul); // add list to the container

  // Add a class to the first list item to allow for toggling active state.
  var links = tocContainer.getElementsByClassName("toc__item");

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

function MenuToggle() {
  document.querySelectorAll("h2[class^='section-']").forEach(function (el) {
    el.addEventListener("click", function () {
      secti = el.className;
      el.classList.contains('open') ? targClosed = false : targClosed = true;
      //close everything
      document.querySelectorAll("h2[class^='section-'], .nav_item").forEach(function (clo) {
        clo.classList.remove('open');
      });
      if (targClosed) {
        // si la section était fermée, l'ouvrir
        el.classList.add('open');
        document.querySelectorAll(".nav_item").forEach(function (clo) {
          if (clo.classList.contains(secti)) {
            clo.classList.add('open');
          }
        });
        //scroll au premier bloc de cette section
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw > 768) {
          document.querySelector('section.site-content').scroll({ top: document.querySelector('div.' + secti + '.startSection').offsetTop - 42, behavior: 'smooth' });
        } else {
          window.scroll({ top: document.querySelector('div.' + secti + '.startSection').offsetTop - 42, behavior: 'smooth' });
        }
      };
    });
  });
  document.querySelectorAll('.pageTitle').forEach(function (to) {
    to.addEventListener("click", function () {
      targe = to.getAttribute('data-targslug');
      scrollTarg = document.getElementById(targe);
      mobileModal.style.display = "none";
      let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      if (vw > 768) {
        document.querySelector('section.site-content').scroll({ top: scrollTarg.offsetTop - 42, behavior: 'smooth' });
      } else {
        window.scroll({ top: scrollTarg.offsetTop - 42, behavior: 'smooth' });
      }
    });
  });
}

function indexHome() {
  document.getElementById("indexHome").addEventListener("click", (ev) => {
    document.querySelectorAll("h2[class^='section-'], .nav_item").forEach(function (clo) {
      clo.classList.remove('open');
    });
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw > 768) {
      document.querySelector('section.site-content').scroll({ top: 0, behavior: 'smooth' });
    } else {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  });
}


// Search
window.addEventListener('load', function (event) {
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: true,
    showEmptyFilters: false,
    resetStyles: false,
    debounceTimeoutMs: 0,
    autofocus: true,
    excerptLength: 100
  });

  const searchTrigger = document.querySelector(".nav-link-search");
  const modal = document.getElementById("searchmodal");
  searchTrigger.addEventListener("click", (ev) => {
    ev.preventDefault();
    // Show modal using Micromodal or similar
    MicroModal.show("searchmodal", {
      onClose: () => {
        // Optional: blur other elements
      },
      disableFocus: false,
      disableScroll: true,
      showEmptyFilters: false
    });
    // Focus the search input
    document.querySelector(".pagefind-ui__search-input").focus();
  });

  externalLinks();
  MicroModal.init({});
  if (document.getElementById("toc")) tableContent();
  if (document.querySelector("pre")) AddCopyButtons();
  if (document.querySelector(".nav_item")) MenuToggle();
  if (document.getElementById("indexHome")) indexHome();
});

/* Front menu */
document.addEventListener('DOMContentLoaded', function () {

  const specialSection = document.getElementById("navDesktop");
  const originalParent = specialSection.parentNode; // L'endroit où la section doit être sur PC

  const mobileModal = document.getElementById("mobileModal");
  const modalPlaceholder = document.getElementById("mobileModal-content-placeholder");
  const openBtn = document.getElementById("btnPhonBtn");
  const closeBtn = document.querySelector(".mobileModalCloseBtn");

  /**
   * Gère l'adaptation du contenu en fonction de la taille de l'écran.
   * @param {number} width La largeur actuelle de la fenêtre.
   */
  function handleContentAdaptation(width) {

    const isMobile = width <= 768;

    if (isMobile) {
      // --- Mode Mobile : Déplacer le contenu dans la modal ---

      // 1. Déplacer le contenu
      if (specialSection.parentNode !== modalPlaceholder) {
        modalPlaceholder.appendChild(specialSection);
      }
      // 2. Afficher le bouton d'ouverture
      openBtn.style.display = 'block';

    } else {
      // --- Mode Desktop : Remettre le contenu à sa place originale ---

      // 1. Remettre le contenu à son parent initial
      if (specialSection.parentNode !== originalParent) {
        originalParent.insertBefore(specialSection, originalParent.children[2]); // Remis avant <p>Fin du contenu...</p>
      }
      // 2. Cacher le bouton d'ouverture et la modal
      openBtn.style.display = 'none';
      mobileModal.style.display = 'none';
    }
  }

  // --- Logique d'Ouverture/Fermeture de la Modal ---

  // Ouvrir la modal
  openBtn.onclick = function () {
    mobileModal.style.display = "block";
  }

  // Fermer la modal via le bouton X
  closeBtn.onclick = function () {
    mobileModal.style.display = "none";
  }

  // Fermer la modal si l'utilisateur clique en dehors
  window.onclick = function (event) {
    if (event.target === mobileModal) {
      mobileModal.style.display = "none";
    }
  }

  // --- Écouteurs d'Événements ---

  // 1. Exécuter au chargement de la page
  handleContentAdaptation(window.innerWidth);

  // 2. Exécuter lors du redimensionnement de la fenêtre
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      handleContentAdaptation(window.innerWidth);
    }, 200); // Délais pour éviter trop d'appels pendant le redimensionnement
  });

});
