"use strict";
{
  const images = [
    "img/pic00.png",
    "img/pic01.png",
    "img/pic02.png",
    "img/pic03.png",
    "img/pic04.png",
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");
    });

    li.appendChild(img);
    document.querySelector(".thumbnails").appendChild(li);
  });

  //   const prevButton = document.getElementById("prev");
  //   const nextButton = document.getElementById("next");

  //   prevButton.addEventListener("click", () => {
  //     const thumbnails = document.querySelectorAll(".thumbnails > li");
  //     thumbnails[currentIndex].classList.remove("current");
  //     if (currentIndex == 0) {
  //       currentIndex = 4;
  //     } else {
  //       currentIndex -= 1;
  //     }
  //     thumbnails[currentIndex].classList.add("current");
  //     mainImage.src = images[currentIndex];
  //   });
  //   nextButton.addEventListener("click", () => {
  //     const thumbnails = document.querySelectorAll(".thumbnails > li");
  //     thumbnails[currentIndex].classList.remove("current");
  //     if (currentIndex >= 4) {
  //       currentIndex = 0;
  //     } else {
  //       currentIndex += 1;
  //     }

  //     thumbnails[currentIndex].classList.add("current");
  //     mainImage.src = images[currentIndex];
  //   });

  const nav = document.querySelector("nav");
  nav.addEventListener("click", (e) => {
    const target = e.target;
    const thumbnails = document.querySelectorAll(".thumbnails > li");
    thumbnails[currentIndex].classList.remove("current");
    if (target.id === "prev") {
      currentIndex =
        currentIndex === 0 ? (currentIndex = 4) : (currentIndex -= 1);
    } else if (target.id === "next") {
      currentIndex =
        currentIndex >= 4 ? (currentIndex = 0) : (currentIndex += 1);
    }

    thumbnails[currentIndex].classList.add("current");
    mainImage.src = images[currentIndex];
  });
}
