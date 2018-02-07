/*Scroll Button*/
$("#buttonArrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".aboutMe").offset().top
    }, 1800)
})


// Images load from top
const sliderImagesTop = document.querySelectorAll('.imageLoadFromTop');

function checkSlide(e) {
    sliderImagesTop.forEach(sliderImagesTop => {

        //Bottom border of window - (image height *1.2)
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImagesTop.height / (1.2);

        //top border of image
        const imageHeight = sliderImagesTop.offsetTop;

        //so if bottom border of window - (~80% of image) is > then top border of image then add class "imageLoadFromTopActive"
        if (sliderInAt > imageHeight) {
            sliderImagesTop.classList.add('imageLoadFromTopActive')
        }
    });

}
window.addEventListener('scroll', checkSlide);
