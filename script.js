$(document).ready(function () {
  const carousel = $(".carousel");
  const carousel2 = $(".carousel2");
  const leftArrow = $(".left-arrow");
  const rightArrow = $(".right-arrow");
  const images = $(".carousel-image");
  const images2 = $(".carousel2-image");
  const totalImages1 = $(".carousel .carousel-image").length;
  const totalImages2 = $(".carousel2 .carousel2-image").length;
  let currentIndex = 0;
  let prevIndex;
  let currentIndex2 = 0;
  let prevIndex2;

  leftArrow.on("click", function () {
    if (leftArrow.hasClass("disabled")) {
      return;
    }
    if (rightArrow.hasClass("disabled")) {
      return;
    }

    var imageWidth = images.eq(currentIndex).width();
    var imageWidth2 = images2.eq(currentIndex2).width();

    prevIndex = currentIndex;
    prevIndex2 = currentIndex2;
    currentIndex = (currentIndex - 1 + totalImages1) % totalImages1;
    currentIndex2 = (currentIndex2 - 1 + totalImages2) % totalImages2;
    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");
    rightArrow.find("img").attr("src", "Slike/arrow-gray-right.png");
    rightArrow.addClass("transitioning");
    leftArrow.addClass("transitioning");
    leftArrow.prop("disabled", true);
    rightArrow.prop("disabled", true);
    images.eq(currentIndex).hide().fadeIn(1000);
    images2.eq(currentIndex2).hide().fadeIn(1000);

    carousel.css("transform", `translateX(-${imageWidth}px)`);
    carousel2.css("transform", `translateX(-${imageWidth2}px)`);
    carousel.prepend(images.eq(currentIndex));

    carousel2.prepend(images2.eq(currentIndex2));

    setTimeout(function () {
      carousel.css("transform", "");
      carousel.addClass("sliding-transition");

      carousel2.css("transform", "");
      carousel2.addClass("sliding-transition");
    }, 10);

    setTimeout(function () {
      carousel.removeClass("sliding-transition");
      carousel2.removeClass("sliding-transition");
      leftArrow.find("img").attr("src", "Slike/arrow-blue-left.png");
      rightArrow.find("img").attr("src", "Slike/arrow-blue-right.png");
      rightArrow.removeClass("transitioning");
      leftArrow.removeClass("transitioning");
      leftArrow.prop("disabled", false);
      rightArrow.prop("disabled", false);
    }, 490);
  });

  rightArrow.on("click", function () {
    if (leftArrow.hasClass("disabled")) {
      return;
    }
    if (rightArrow.hasClass("disabled")) {
      return;
    }
    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");

    carousel.addClass("sliding-transition");
    carousel2.addClass("sliding-transition");
    var imageWidth = images.eq(currentIndex).width();
    var imageWidth2 = images2.eq(currentIndex2).width();

    prevIndex = currentIndex;
    prevIndex2 = currentIndex2;
    currentIndex = (currentIndex + 1) % totalImages1;
    currentIndex2 = (currentIndex2 + 1) % totalImages2;

    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");
    rightArrow.find("img").attr("src", "Slike/arrow-gray-right.png");
    rightArrow.addClass("transitioning");
    leftArrow.addClass("transitioning");
    leftArrow.prop("disabled", true);
    rightArrow.prop("disabled", true);

    carousel.css("transform", `translateX(-${imageWidth}px)`);
    carousel2.css("transform", `translateX(-${imageWidth2}px)`);

    setTimeout(function () {
      carousel.append(images.eq(prevIndex));
      carousel.removeClass("sliding-transition");
      carousel.css("transform", "");

      carousel2.append(images2.eq(prevIndex2));
      carousel2.removeClass("sliding-transition");
      carousel2.css("transform", "");

      leftArrow.find("img").attr("src", "Slike/arrow-blue-left.png");
      rightArrow.find("img").attr("src", "Slike/arrow-blue-right.png");
      rightArrow.removeClass("transitioning");
      leftArrow.removeClass("transitioning");
      leftArrow.prop("disabled", false);
      rightArrow.prop("disabled", false);
    }, 500);
  });
});
