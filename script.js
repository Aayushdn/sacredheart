"use strict";

const navLinks = document.querySelector(".navLinks");
const allSection = document.querySelectorAll("section");
const aboutSection = document.querySelector(".aboutSection");
const ctaBtn = document.querySelector(".ctaBtn");
const facility = document.querySelector(".facilities");

navLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("navLink")) {
    console.log(e.target.getAttribute("id"));
    let cname = e.target.getAttribute("id");
    console.log(cname);

    document.querySelector(`.${cname}`).scrollIntoView({ behavior: "smooth" });
  }
});

const obsCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("show");
};

const observer = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0,
});

allSection.forEach((section) => {
  observer.observe(section);
});

ctaBtn.addEventListener("click", () => {
  facility.scrollIntoView({ behavior: "smooth" });
});
