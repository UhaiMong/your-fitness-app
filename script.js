document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.querySelector(".header-small-device .nav-list");

  // Toggle menu on icon click
  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent bubbling
    navList.style.marginLeft =
      navList.style.marginLeft === "0px" ? "-9999999px" : "0px";
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", function () {
    navList.style.marginLeft = "-9999999px";
  });

  // Close menu when clicking any nav item
  const navItems = navList.querySelectorAll("li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navList.style.marginLeft = "-9999999px";
    });
  });
});
