'use strict';

$(function() {

var slider = $('#slider');
var slideShow = $('.slide-show');
var slideCount = $('.single-slide').length;
var slideWidth = 100/slideCount;
var slideIndex = 0;

//szerokość kontenera slideshow

slideShow.css({'width':slideCount*100 + '%'});
   
//interacja po wszystkich slajdach i nadanie im marginesow oraz szerokosci    
    
slideShow.find('.single-slide').each(function(index){
    $(this).css({"width": slideWidth + '%',
        "margin-left": index*slideWidth + '%'});
});
    
//przycisk poprzedni - wywołanie funkcji slide()    
    
$('.prev-slide').click(function() {
    slide(slideIndex - 1);
    
});
   
//przycisk nastepny - wywolanie funkcji slide()
    
$('.next-slide').click(function() {
    slide(slideIndex + 1);
    
});
    
//funkcja animująca
    
function slide(newSlideIndex) {

    if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
        return;
    }

    var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);
    
    slideCaption.hide();
    
    var marginLeft = (newSlideIndex * (-100)) + '%';
    
    slideShow.animate({"margin-left": marginLeft}, 800, function() {
        slideIndex = newSlideIndex;
        slideCaption.fadeIn("slow");
    }
    
}    
    
    
});