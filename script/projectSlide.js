$(document).ready(function() {
    var slideIndex = 0;
    var slides = $(".slide");
    var dots = $(".dot");
    
    function showSlide(n) {
        if (n >= slides.length) {
        slideIndex = 0;
        } else if (n < 0) {
        slideIndex = slides.length - 1;
        } else {
        slideIndex = n;
        }
        slides.css("transform", "translateX(" + (-slideIndex * 100) + "%)");
        dots.removeClass("active");
        dots.eq(slideIndex).addClass("active");
    }
    
    function plusSlides(n) {
        showSlide(slideIndex + n);
    }
    function currentSlide(n) {
        showSlide(n);
    }
    
    $(".prev").click(function() {
        plusSlides(-1);
    });
    $(".next").click(function() {
        plusSlides(1);
    });
    $(".dot").click(function() {
        var index = $(this).index();
        currentSlide(index);
    });
    showSlide(slideIndex);
});