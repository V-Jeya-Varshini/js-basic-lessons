let share = document.getElementsByClassName("share")[0];
share.addEventListener("click", () => {
  if (document.getElementsByClassName("active")[0].style.visibility === "visible") {
    share.classList.toggle("clicked");
    document.getElementsByClassName("active")[0].style.visibility = "hidden";
  } else {
    share.classList.toggle("clicked");
    document.getElementsByClassName("active")[0].style.visibility = "visible";
  }
})
