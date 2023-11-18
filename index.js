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

const swiper = new Swiper(".card_container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  loopFillGroupWithBlank: true,
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// ------question accordin ----

var questionAcc = document.querySelectorAll(".question_wrapper");

questionAcc.forEach((item) => {
  var questionTitle = item.querySelector(".question_title");

  questionTitle.addEventListener("click", () => {
    for (var i = 0; i < questionAcc.length; i++) {
      if (questionAcc[i] !== item) {
        questionAcc[i].classList.remove("show");
      } else {
        item.classList.toggle("show");
      }
    }
  });

  // console.log(item);
});
