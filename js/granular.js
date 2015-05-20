// aim: smooth scroll our page when our arrow is clicked

// step 1 - add event listener to .hero-arrow

$('.hero-arrow').on('click', function() {

// step 2 - store the href of the clicked element

	var href = $(this).attr('href');

// step 3 - find element with the id of the href

var $target = $(href)
console.log($target.offset().top);

// step 4 - ind out how many pixels it is from the top of the page

var offsetTop = $target.offset().top;

// step 5 - animate our page to that pixel offset

$('body, html').animate( {scrollTop: offsetTop}, 1000)

// step 6 - disable default browser behaviour

return false

});