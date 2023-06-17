(function () {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector(".scroll-to-top");

  if (scrollToTop) {
    // Scroll to top button appear
    window.addEventListener("scroll", function () {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    });
  }

  var mainNav = document.querySelector("#mainNav");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }
})(); // End of use strict

/////////
/*
// Add an event listener to the button
document.getElementById("downloadBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Create a new jsPDF instance
  const doc = new jsPDF();

  console.log("dddd");

  // Get the HTML content of your portfolio website
  const html = document.querySelector("html").outerHTML;

  // Convert HTML to PDF
  doc.fromHTML(html, 15, 15, {
    width: 190,
  });

  // Download the PDF file
  doc.save("portfolio.pdf");
});
*/
