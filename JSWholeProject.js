
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

// main.js file
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
/*========================PROGRESS BAR=============================*/

var child = document.getElementsByClassName("child")[0],
    clkBut = document.getElementsByClassName("clk")[0],
    progSpan = document.getElementsByClassName("prog")[0];

//*************************

var q = (function () {
    var width = 0;

    return function () {
        var x = setInterval(function () {
            if (width === 100) {
                clearInterval(x);
            } else {
                width++;
                child.style.width = width + "%";
                progSpan.innerHTML = width + "%";
            }
        }, 15);
    }
})();
clkBut.onclick = q;