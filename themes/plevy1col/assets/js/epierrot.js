/* switch burger */
function switchBurger() {
  if (document.getElementById("navbox-btn")) {
    let element = document.getElementById("navbox-btn");
    let target = document.getElementById('target');
    element.addEventListener('click', () => {
      element.classList.toggle('open');
      target.classList.toggle('hidden');
    })
  }
}

/* place menu at the top when phone for muuri */
var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 500);
};
function resizedw() {
    const vwid = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var allItems = muugrid.getItems();
      var toShow = [];
      for (let i = 0; i < allItems.length; i++) {
        var inqu = allItems[i]["_element"]["classList"];
        if (Object.values(inqu).indexOf('navmenu') > -1) {
          if (vwid < 768) muugrid.move(i, 0);
          else muugrid.move(i, 3);
          console.log(i);
          break;
        }
      }
};


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
    const muuCheck = document.getElementsByClassName('muugrid').length > 0;
    if (muuCheck) muugrid.layout(true);
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

/* IRREGULARITY 1

//add <div class="bgirreg1">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
 after <body>

/* IRREGULARITY 2 : bg dots */
/*
* File Name / glitteringSea.js
* Created Date / Aug 14, 2020
* Aurhor / Toshiya Marukubo

//add <div id="bgirreg2"><canvas id="bgirreg2in"></canvas></div> after <body>

(function () {
    'use strict';
    window.addEventListener('load', function () {
      var canvas = document.getElementById('bgirreg2in');
      if (!canvas || !canvas.getContext) {
        return false;
      }
  
      //Random Number  
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      /Var
      var ctx = canvas.getContext('2d');
      var X = canvas.width = window.innerWidth;
      var Y = canvas.height = window.innerHeight;
      var mouseX = null;
      var mouseY = null;
      var shapeNum = 20;
      var shapes = [];
  
      /Animation
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(cb) {
          setTimeout(cb, 170);
        };
  
      /Shape
      function Shape(ctx, x, y) {
        this.ctx = ctx;
        this.init(x, y);
      }
      
      Shape.prototype.init = function(x, y) {
        this.x = x;
        this.y = y;
        this.r = rand(1, 10);
        this.ga = Math.random() * Math.random() * Math.random() * Math.random();
        this.v = {
          x: Math.random(),
          y: -1
        };
        this.l = rand(0, 200);
        this.sl = this.l;
      };
  
      Shape.prototype.updateParams = function() {
        var ratio = this.l / this.sl;
        //this.r *= ratio;
        this.l -= 1;
        if (this.l < 0) {
          this.init(X * (Math.random() + Math.random()) / 2, rand(0, Y));
        }
      };
  
      Shape.prototype.updatePosition = function() {
        this.x += Math.random();
        this.y += -Math.random();
      };
      
      Shape.prototype.draw = function() {
        var ctx  = this.ctx;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.ga;
        ctx.fillStyle = 'rgb(231, 229, 228)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      };
  
      Shape.prototype.render = function(i) {
        this.updatePosition();
        this.updateParams();
        this.draw();
      };
  
      for (var i = 0; i < shapeNum; i++) {
        var s = new Shape(ctx, X * (Math.random() + Math.random()) / 2, rand(0, Y));
        shapes.push(s);
      }
  
      /Render
      
      function render() {
        ctx.clearRect(0, 0, X, Y);
        for (var i = 0; i < shapes.length; i++) {
          shapes[i].render(i);
        }
        requestAnimationFrame(render);
      }
  
      render();
  
      /Event
      function onResize() {
        X = canvas.width = window.innerWidth;
        Y = canvas.height = window.innerHeight;
      }
  
      window.addEventListener('resize', function() {
        onResize();
      });
  
      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, false);
  
    });
  })();
*/


/*
// IRREGULARITY 3
//front title moving irregularity
(function () {
        document.onmousemove = handleMouseMove;
        function handleMouseMove(event) {
            var eventDoc, doc, body;
            event = event || window.event; // IE-ism
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }
            var marLeft = 0.03 + 0.015 * (event.pageX / Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
            var marTop = (event.pageY / Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
            //document.getElementById("FrontTitle").style.marginLeft = marLeft + "px";
            document.getElementById("FrontTitle").style.paddingTop = marTop + "px";
            document.getElementById("FrontTitle").style.letterSpacing = marLeft + "rem";
        }
})();
*/

window.addEventListener('scroll', function () {
  showPic();
  const muuCheck = document.getElementsByClassName('muugrid').length > 0;
  if (muuCheck) muugrid.layout(true);
});

showPic();
