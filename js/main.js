$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.slider-container').slick({ 
        slide: '.slider-item', 
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, 
        dots: true, 
        prevArrow: '<span class="slick-prev"></span>', 
        nextArrow: '<span class="slick-next"></span>', 
        appendArrows: '.slider-container .slider-nav', 
        appendDots: '.slider-container .slider-nav' 
    });
});
