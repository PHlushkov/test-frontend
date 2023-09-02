"use strict";

const burgerMenuEl = document.querySelector(".header__burger");
const headerMenuEl = document.querySelector(".header__menu");

burgerMenuEl.addEventListener("click", () => {
  const isActive = burgerMenuEl.classList.contains("active");

  if (isActive) {
    burgerMenuEl.classList.remove("active");
    headerMenuEl.classList.remove("active");
  } else {
    burgerMenuEl.classList.add("active");
    headerMenuEl.classList.add("active");
  }
});

const headerBtnElem = document.querySelector(".header__btn");
const logoElement = document.querySelector(".header__logo");
const header = document.querySelector(".header__body");
const headerHeight = 90;
const screenHeight1 = 1300;
const screenHeight2 = 1025;
const scrollThreshold = 5;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const screenWidth = window.innerWidth;

  if (screenWidth >= screenHeight1) {
    header.style.height = `${Math.max(headerHeight - currentScroll, 50)}px`;
    logoElement.style.width = "130px";
    logoElement.style.height = "30px";
    headerBtnElem.style.padding = "10px 18px";
    if (currentScroll === 0) {
      header.style.height = `${headerHeight}px`;
      logoElement.style.width = "210px";
      logoElement.style.height = "70px";
      headerBtnElem.style.padding = "18px 18px";
    }
  } else if (screenWidth >= screenHeight2) {
    logoElement.style.width = "130px";
    logoElement.style.height = "30px";
    headerBtnElem.style.padding = "10px 18px";
    header.style.height = `${Math.max(headerHeight - currentScroll, 50)}px`;

    if (currentScroll === 0) {
      header.style.height = `${headerHeight}px`;
      logoElement.style.width = "160px";
      logoElement.style.height = "40px";
      headerBtnElem.style.padding = "18px 18px";
    }
  } else {
    header.style.height = "50px";
    logoElement.style.width = "130px";
    logoElement.style.height = "30px";
    if (scrollThreshold) {
    } else {
      header.style.height = "50px";
      logoElement.style.width = "130px";
      logoElement.style.height = "30px";
    }
  }
});

const socialText = document.getElementById("socialText");
const socialLinks = document.querySelectorAll(".header__contacts-link");

const socialNames = {
  facebook: { name: "FACEBOOR - JOIN THE DEBATE", color: "#3b5998" },
  inst: { name: "INSTAGRAM - PHOTOS FROM THE FIELD", color: "#e95950" },
  lin: { name: "LINKEDIN - JOIN OUR NETWORK", color: "#007bb5" },
  twit: { name: "TWITTER - TWEETS FROM THE FRONTLINE", color: "#55acee" },
};

socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const socialType = link.getAttribute("data-social");

    socialText.textContent = `${socialNames[socialType].name}`;
    socialText.style.fontWeight = "700";
    socialText.style.color = socialNames[socialType].color;
  });

  link.addEventListener("mouseleave", () => {
    socialText.textContent = "PŘIDEJTE SE K NÁM NA ...";
    socialText.style.color = "#000";
    socialText.style.fontWeight = "";
  });
});
