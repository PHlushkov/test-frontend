"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-button");
  const scrollButton = document.getElementById("scroll-button");
  let popupShown = false;

  window.addEventListener("scroll", function () {
    const commentsSection = document.querySelector(".comment");
    if (
      !popupShown &&
      commentsSection.getBoundingClientRect().top <= window.innerHeight
    ) {
      popup.style.display = "flex";
      popupShown = true;
    }
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
