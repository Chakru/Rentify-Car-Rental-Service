/**
 * Flexslider page settings
 */

function isSliderObjectEmpty(obj) {
	for ( var name in obj ) {
		return false;
	}
	return true;
}

// tiny helper function to add breakpoints
function getGridSize() {
	var elementsToDisplay = 4;

	if(window.innerWidth < 420)
	{
		elementsToDisplay = 1;
	} else if(window.innerWidth < 768)
	{
		elementsToDisplay = 2;
	} else if(window.innerWidth < 1280)
	{
		elementsToDisplay = 3;
	}

	return elementsToDisplay;
}

// store the slider in a local variable
var theFlexSlider = null;

jQuery(window).load(function() {
	theFlexSlider = jQuery('.nrs-flexslider').flexslider({
		animation: "slide",
		animationSpeed: 400,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		minItems: getGridSize(), // use function to pull in initial value
		maxItems: getGridSize(), // use function to pull in initial value
		start: function(slider){
			jQuery('.item-rental-slider').removeClass('nrs-loading');
			theFlexSlider = slider;
		}
	});
});

// check grid size on resize event
jQuery(window).resize(function() {
	var gridSize = getGridSize();
	if(!isSliderObjectEmpty(theFlexSlider))
	{
		//console.log('resized');
		theFlexSlider.vars.minItems = gridSize;
		theFlexSlider.vars.maxItems = gridSize;
	}
});