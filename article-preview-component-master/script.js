/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
let share = document.getElementsByClassName("share")[0];
share.addEventListener("click", () => {
  if (document.getElementsByClassName("active")[0].style.visibility === "visible") {
    document.getElementsByClassName("active")[0].style.visibility = "hidden";
    share.classList.toggle("cliked");
  } else {
    share.classList.toggle("cliked");
    document.getElementsByClassName("active")[0].style.visibility = "visible";
  }
})
