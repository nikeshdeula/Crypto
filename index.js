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
