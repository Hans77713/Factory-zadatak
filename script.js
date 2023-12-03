$(document).ready(() => {
  const carouselTop = $(".carouselTop");
  const carouselBottom = $(".carouselBottom");
  const leftArrow = $(".left-arrow");
  const rightArrow = $(".right-arrow");
  const imagesTop = $(".carouselTop-image");
  const imagesBottom = $(".carouselBottom-image");
  const totalImagesTop = imagesTop.length;
  const totalImagesBottom = imagesBottom.length;
  let currentIndexTop = 0;
  let prevIndexTop;
  let currentIndexBottom = 0;
  let prevIndexBottom;
  leftArrow.on("click", () => {
    if (leftArrow.hasClass("disabled") || rightArrow.hasClass("disabled")) {
      return;
    }
    const imageWidthTop = imagesTop.eq(currentIndexTop).width();
    const imageWidthBottom = imagesBottom.eq(currentIndexBottom).width();
    prevIndexTop = currentIndexTop;
    prevIndexBottom = currentIndexBottom;
    currentIndexTop = (currentIndexTop - 1 + totalImagesTop) % totalImagesTop;
    currentIndexBottom =
      (currentIndexBottom - 1 + totalImagesBottom) % totalImagesBottom;
    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");
    rightArrow.find("img").attr("src", "Slike/arrow-gray-right.png");
    rightArrow.addClass("transitioning");
    leftArrow.addClass("transitioning");
    leftArrow.prop("disabled", true);
    rightArrow.prop("disabled", true);
    imagesTop.eq(currentIndexTop).hide().fadeIn(1000);
    imagesBottom.eq(currentIndexBottom).hide().fadeIn(1000);
    carouselTop.css("transform", `translateX(-${imageWidthTop}px)`);
    carouselBottom.css("transform", `translateX(-${imageWidthBottom}px)`);
    carouselTop.prepend(imagesTop.eq(currentIndexTop));
    carouselBottom.prepend(imagesBottom.eq(currentIndexBottom));
    setTimeout(() => {
      carouselTop.css("transform", "");
      carouselTop.addClass("sliding-transition");
      carouselBottom.css("transform", "");
      carouselBottom.addClass("sliding-transition");
    }, 10);
    setTimeout(() => {
      carouselTop.removeClass("sliding-transition");
      carouselBottom.removeClass("sliding-transition");
      leftArrow.find("img").attr("src", "Slike/arrow-blue-left.png");
      rightArrow.find("img").attr("src", "Slike/arrow-blue-right.png");
      rightArrow.removeClass("transitioning");
      leftArrow.removeClass("transitioning");
      leftArrow.prop("disabled", false);
      rightArrow.prop("disabled", false);
    }, 490);
  });
  rightArrow.on("click", () => {
    if (leftArrow.hasClass("disabled") || rightArrow.hasClass("disabled")) {
      return;
    }
    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");
    carouselTop.addClass("sliding-transition");
    carouselBottom.addClass("sliding-transition");
    const imageWidthTop = imagesTop.eq(currentIndexTop).width();
    const imageWidthBottom = imagesBottom.eq(currentIndexBottom).width();
    prevIndexTop = currentIndexTop;
    prevIndexBottom = currentIndexBottom;
    currentIndexTop = (currentIndexTop + 1) % totalImagesTop;
    currentIndexBottom = (currentIndexBottom + 1) % totalImagesBottom;
    leftArrow.find("img").attr("src", "Slike/arrow-gray-left.png");
    rightArrow.find("img").attr("src", "Slike/arrow-gray-right.png");
    rightArrow.addClass("transitioning");
    leftArrow.addClass("transitioning");
    leftArrow.prop("disabled", true);
    rightArrow.prop("disabled", true);
    carouselTop.css("transform", `translateX(-${imageWidthTop}px)`);
    carouselBottom.css("transform", `translateX(-${imageWidthBottom}px)`);
    setTimeout(() => {
      carouselTop.append(imagesTop.eq(prevIndexTop));
      carouselTop.removeClass("sliding-transition");
      carouselTop.css("transform", "");
      carouselBottom.append(imagesBottom.eq(prevIndexBottom));
      carouselBottom.removeClass("sliding-transition");
      carouselBottom.css("transform", "");
      leftArrow.find("img").attr("src", "Slike/arrow-blue-left.png");
      rightArrow.find("img").attr("src", "Slike/arrow-blue-right.png");
      rightArrow.removeClass("transitioning");
      leftArrow.removeClass("transitioning");
      leftArrow.prop("disabled", false);
      rightArrow.prop("disabled", false);
    }, 500);
  });
});
