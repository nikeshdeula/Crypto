// isopen = false;
const toggle = () => {
  var openIcon = document.querySelector(".fa-bars");
  // var closeIcon = document.querySelector(".fa-xmark");
  var menu = document.querySelector(".menu");

  menu.classList.toggle("open");
  openIcon.classList.toggle("fa-xmark");

  // isopen = !isopen;
  // if (isopen) {
  //   openIcon.style.display = "block";
  //   closeIcon.style.display = "none";
  // } else {
  //   openIcon.style.display = "none";
  //   closeIcon.style.display = "block";
  // }
};

// ----accordin------------

var accordin = document.querySelectorAll(".accordin");

accordin.forEach((item) => {
  // var arrowUp = item.querySelector(".fa-angle-up");
  var title = item.querySelector(".accordin_title");

  title.addEventListener("click", () => {
    for (var i = 0; i < accordin.length; i++) {
      if (accordin[i] !== item) {
        accordin[i].classList.remove("acc");
      }
      item.classList.toggle("acc");

      var content = item.querySelector(".accordin_para");

      if (item.classList.contains("acc")) {
        item.querySelector("i").classList.replace("fa-angle-down", "fa-minus");
      } else {
        item.querySelector("i").classList.replace("fa-minus", "fa-angle-down");
      }
    }

    // var optAccordin = accordin[i];
    // var optArrowDown = optAccordin.querySelector(".fa-angle-down");
    // var optArrowUp = optAccordin.querySelector(".fa-angle-up");
    // if (accordin[i] !== item) {
    //   accordin[i].classList.remove("acc");
    //   // optArrowDown.style.display = "block";
    //   // optArrowUp.style.display = "none";
    // }
    // item.classList.toggle("acc");
    // if (item.classList.contains("acc")) {
    //   arrowDown.style.display = "none";
    //   arrowUp.style.display = "block";
    // } else {
    //   // item.style.display = "none";
    //   arrowDown.style.display = "block";
    //   arrowUp.style.display = "none";
    // }
  });
});
