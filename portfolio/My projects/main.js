var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
      layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value 
    })
}) 

document.getElementById("design").addEventListener("click", function(){
    document.querySelector(".pop-container").style.display="block";
})
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".pop-container").style.display="none";
})